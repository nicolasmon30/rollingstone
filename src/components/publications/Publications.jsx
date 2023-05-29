import { useState } from 'react';
import { Pub2022 } from './2022/2022';
import { Pub2023 } from './2023/2023';

export const Publications = () => {
    const [activeTab, setActiveTab] = useState("tab1");

    const handleTab1 = () => {
        setActiveTab("tab1");
    };
    const handleTab2 = () => {
        setActiveTab("tab2");
    };

    return (
        <section id="publicaciones" className="publications">
            <div className="container">
                <div className="title title--outline title--outline__black">
                    <h2>publicaciones</h2>
                </div>
                {
                    activeTab === "tab1"
                        ?
                            <div className="tabs__panel">
                                <Pub2022 />
                            </div>
                        : 
                            <div className="tabs__panel">
                                <Pub2023 />
                            </div>
                }

            </div>
            <div className="tabs">
                <div className={ activeTab === "tab1" ?  "tabs__tab tabs__tab--active" : "tabs__tab"} onClick={handleTab1}>
                    <p>2022</p>
                </div>
                <div className={ activeTab === "tab2" ?  "tabs__tab tabs__tab--active" : "tabs__tab"} onClick={handleTab2}>
                    <p>2023</p>
                </div>
            </div>
        </section>
    )
}
