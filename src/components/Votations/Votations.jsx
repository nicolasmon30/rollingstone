import { useState } from "react"
import { Form } from "./Form"
import { Modal } from "./Modal"
import { Nominees } from "./Nominees"
import { ThankYou } from "./ThankYou"

export const Votations = () => {

    const [isShow, setIsShow] = useState(false)
    const [isVotation, setIsVotation] = useState(null)
    const [isSendData, setisSendData] = useState(false)
    const handleClickConfirmation = () => {
        setIsShow(true)
    }
    const handleCancelSendData = () => {
        setIsShow(false)
    }

    const handleConfirmVotation = () => {
        setIsShow(false)
        setIsVotation(true)
    }

    const handleSendData = () => {
        setisSendData(true)
    }


    return (
        <>
            <section id="votaciones" className="votations">
                <div className="votations__bg">
                    <img src="../../src/assets/images/votations/bg.jpg" alt="" />
                </div>
                <div className="container">
                    <div className="title">
                        <h2>votaciones</h2>
                    </div>
                    <div className="votations__nominees">
                        <Nominees handleClickConfirmation={handleClickConfirmation} isVotation={isVotation} />
                        <Form isVotation={isVotation} handleSendData={handleSendData} isSendData={isSendData} />
                        <ThankYou isSendData={isSendData} />
                    </div>
                </div>
                <Modal isShow={isShow} handleCancelSendData={handleCancelSendData} handleConfirmVotation={handleConfirmVotation} />
            </section>
        </>
    )
}
