import { motion } from 'framer-motion';

export const Form = ({ isVotation, handleSendData, isSendData }) => {

    const onSendData = (event) => {
        event.preventDefault();
        handleSendData()
    }

    return (
        <>
            {

                isVotation &&  !isSendData && (
                    <motion.form
                    onSubmit={onSendData}
                        className="votations__form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="votations__form__box">
                            <h3>Un último paso para enviar tu voto</h3>
                            <div className="votations__form__row">
                                <input type="text" name="namecomplete" id="namecomplete" placeholder="Nombre completo" />
                            </div>
                            <div className="votations__form__row">
                                <input type="email" name="email" id="email" placeholder="Correo electrónico" />
                            </div>
                            <div className="votations__form__check">
                                <input type="checkbox" name="terms" />
                                <div className="votations__form__check__field"></div>
                                <label htmlFor="acepted Term">Acepto términos y condiciones</label>
                            </div>
                        </div>
                        <div className="votations__form__action">
                            <button className="btn">enviar</button>
                        </div>
                    </motion.form>
                )
            }
        </>

    )
}
