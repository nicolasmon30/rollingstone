import { motion } from 'framer-motion'

export const ThankYou = ({ isSendData }) => {
  return (
    <>
      {

        isSendData && (
          <motion.div
            className="votations__thankyou"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3>¡Gracias por participar con tu voto!</h3>
            <p>
              pronto anunciaremos los resultados
            </p>
          </motion.div>

        )

      }
    </>
  )
}
