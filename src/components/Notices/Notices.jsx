import React from 'react'

export const Notices = () => {
    return (
        <section id="noticias" className="notices">
            <div className="container">
                <div className="title title--outline title--outline__black">
                    <h2>Noticias</h2>
                </div>
                <div className="notices__row">
                    <article className="post">
                        <a href="https://es.rollingstone.com/jeff-beck-el-virtuoso-de-la-guitarra-muere-a-los-78-anos/" target='_blank'>
                            <div className="post__thumbnail">
                                <picture>
                                    <img src="/assets/images/notices/notice1.jpg" alt="Jeff Beck, el virtuoso de la guitarra, muere a los 78 años" title="Jeff Beck, el virtuoso de la guitarra, muere a los 78 años"/>
                                </picture>
                            </div>
                            <div className="post__body">
                                <div className="post__category">
                                    <h4>música</h4>
                                </div>
                                <div className="post__title">
                                    <h3>Jeff Beck, el virtuoso de la guitarra, muere a los 78 años</h3>
                                </div>
                                <div className="post__excerpt">
                                    <p>
                                        El músico del Salón de la Fama murió después de un breve ataque de meningitis bacteriana
                                    </p>
                                </div>
                                <div className="post__author">
                                    <p>por rolling Stone</p>
                                </div>
                            </div>
                        </a>
                    </article>
                    <article className="post">
                        <a href="https://es.rollingstone.com/barbie-anuncia-su-soundtrack-lleno-de-estrellas-y-presenta-su-trailer-oficial/" target='_blank'>
                            <div className="post__thumbnail">
                                <picture>
                                    <img src="/assets/images/notices/notice2.jpg" alt="Barbie anuncia su soundtrack lleno de estrellas " title="Barbie anuncia su soundtrack lleno de estrellas " />
                                </picture>
                            </div>
                            <div className="post__body">
                                <div className="post__category">
                                    <h4>cine</h4>
                                </div>
                                <div className="post__title">
                                    <h3>Barbie anuncia su soundtrack lleno de estrellas </h3>
                                </div>
                                <div className="post__excerpt">
                                    <p>
                                        Karol G, Dua Lipa, Nicki Minaj, Tame Impala y Ryan Gosling son algunos de los nombres que figuran en la banda sonora del próximo filme de Greta Gerwig
                                    </p>
                                </div>
                                <div className="post__author">
                                    <p>por rolling Stone</p>
                                </div>
                            </div>
                        </a>
                    </article>
                    <article className="post">
                        <a href="https://es.rollingstone.com/florida-endurece-sus-politicas-antiinmigrantes/" target='_blank'>
                            <div className="post__thumbnail">
                                <picture>
                                    <img src="/assets/images/notices/notice3.jpg" alt="Florida Endurece sus políticas antiinmigrantes" title="Florida Endurece sus políticas antiinmigrantes" />
                                </picture>
                            </div>
                            <div className="post__body">
                                <div className="post__category">
                                    <h4>música</h4>
                                </div>
                                <div className="post__title">
                                    <h3>Florida endurece sus políticas antiinmigrantes</h3>
                                </div>
                                <div className="post__excerpt">
                                    <p>
                                        El gobernador Ron DeSantis aprobó una ley que dificulta la contratación, transporte y cuidado médico de inmigrantes indocumentados en Florida
                                    </p>
                                </div>
                                <div className="post__author">
                                    <p>por rolling Stone</p>
                                </div>
                            </div>
                        </a>
                    </article>
                </div>
            </div>
        </section>
    )
}
