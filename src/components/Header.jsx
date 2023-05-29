import { motion } from "framer-motion"
import { useState } from "react"
import { Menu } from "./Menu"


export const Header = () => {
    const [isShow, setisShow] = useState(false)

    const handleOpenMenu = () => {
        setisShow(true)
    }
    const handleCloseModal = () => {
        setisShow(false)
    }
    const headerVariants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 }
    };
    return (
        <>
            <motion.header
                className="header"
                initial={isShow ? "hidden" : "visible"}
                animate={isShow ? "hidden" : "visible"}
                variants={headerVariants}
                transition={{ duration: 0.3 }}
            >
                <div className="container">
                    <div className="header__hamburguer" onClick={handleOpenMenu}>
                        <img src="../src/assets/images/header/hamburguer.svg" alt="" />
                    </div>
                    <div className="header__logo">
                        <img src="../src/assets/images/header/logo.svg" alt="" />
                    </div>
                    <div className="header__title">
                        <h1>
                            Rolling Stone en Español
                        </h1>
                    </div>
                </div>
            </motion.header>
            <Menu showMenu={isShow} handleCloseModal={handleCloseModal} />
        </>
    )
}
