import { motion, AnimatePresence } from "framer-motion";
export const Menu = ({ showMenu, handleCloseModal }) => {
    const onHiddenModal = () => {
        handleCloseModal()
    }
    return (
        <>
        <AnimatePresence>

            {
                showMenu && (
                    <motion.div
                        className="menu"
                        initial={{ opacity: 0, y: "-100vh" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100vh" }}
                        transition={{ type: "spring", damping: 20, stiffness: 100 }}
                    >
                        <div className="menu__box">
                            <div className="menu__top">
                                <p onClick={onHiddenModal} >x</p>
                            </div>
                            <ul className="menu__list">
                                <li><a href="">Publicaciones</a></li>
                                <li><a href="">Noticias</a></li>
                                <li><a href="">Historias</a></li>
                                <li><a href="">Votaciones</a></li>
                            </ul>

                        </div>
                        <div className="menu__bottom">
                            <img src="../src/assets/images/header/logo.svg" alt="" />
                        </div>
                    </motion.div>

                )
            }

        </AnimatePresence>
        </>
    )
}
