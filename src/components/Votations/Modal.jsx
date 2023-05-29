import { motion, AnimatePresence } from "framer-motion"

export const Modal = ({ isShow, handleCancelSendData, handleConfirmVotation }) => {


    const onCancel = (event) => {
        event.preventDefault();
        handleCancelSendData()
    }
    const onConfirmVotation = (event) => {
        event.preventDefault()
        handleConfirmVotation()
    }
    const modalVariants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 }
    };

    return (
        <>
            <AnimatePresence>
                {
                    isShow && (
                        <motion.div
                            className="modal"
                            initial={isShow ? "visible" : "hidden"}
                            animate={isShow ? "visible" : "hidden"}
                            variants={modalVariants}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="modal__content">
                                <h3>¿Deseas enviar tu elección? o quieres continuar votando</h3>
                                <div className="modal__actions">
                                    <a href="" className="btn btn--small" onClick={onCancel}>
                                        volver
                                    </a>
                                    <a href="" className="btn btn--small" onClick={onConfirmVotation}>
                                        enviar
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    )

                }

            </AnimatePresence>
        </>
    )
}
