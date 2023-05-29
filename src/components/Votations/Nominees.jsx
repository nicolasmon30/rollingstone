import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Nominees = ({ handleClickConfirmation, isVotation }) => {
    const nominees = [
        {
            data: [
                {
                    id: 0,
                    name: "Rosalía",
                },
                {
                    id: 1,
                    name: "Ilé",
                },
                {
                    id: 2,
                    name: "Kany Garcia",
                },
                {
                    id: 3,
                    name: "Anitta",
                },
                {
                    id: 4,
                    name: "Cazzu",
                },
            ],
            category: "Mejor artista femenina",
        },
        {
            data: [
                {
                    id: 0,
                    name: "Residente",
                },
                {
                    id: 1,
                    name: "Juanes",
                },
                {
                    id: 2,
                    name: "Camilo",
                },
                {
                    id: 3,
                    name: "Wos",
                },
                {
                    id: 4,
                    name: "Post Malone",
                },
            ],
            category: "Mejor artista masculino",
        },
        {
            data: [
                {
                    id: 0,
                    name: "Innerbloom - Rufus Du Sol",
                },
                {
                    id: 1,
                    name: "Skrillex - Quest for Fire",
                },
                {
                    id: 2,
                    name: "Falling In Reverse - Popular Monster",
                },
                {
                    id: 3,
                    name: "Herencia de Timbiqui - Sabrás",
                },
                {
                    id: 4,
                    name: "Diplo - Set Me Free",
                },
            ],
            category: "Mejor Video",
        },
        {
            data: [
                {
                    id: 0,
                    name: "Superlitio",
                },
                {
                    id: 1,
                    name: "Diamante Electrico",
                },
                {
                    id: 2,
                    name: "Molotov",
                },
                {
                    id: 3,
                    name: "Cuarteto de Noz",
                },
                {
                    id: 4,
                    name: "Maná",
                },
            ],
            category: "Mejor grupo",
        },
    ];

    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (index) => {
        setOpenSection((prevOpenSection) => (prevOpenSection === index ? null : index));
    };

    const onSubmitModal = (event) => {
        event.preventDefault()
        handleClickConfirmation()
    }

    return (
        <>
            {
                !isVotation && (
                    <motion.form
                        onSubmit={onSubmitModal}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {nominees.map((nominee, index) => (
                            <div className="accordion" key={index}>
                                <div
                                    className={`accordion__title ${openSection === index ? "open" : ""}`}
                                    onClick={() => toggleSection(index)}
                                >
                                    <h3>{nominee.category}</h3>
                                </div>
                                <AnimatePresence>
                                    {openSection === index && (
                                        <motion.div
                                            className="accordion__body"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                            style={{ overflow: "hidden" }}
                                        >
                                            {nominee.data.map((option) => (
                                                <div className="accordion__option" key={option.id}>
                                                    <input type="checkbox" name={option.name} id={option.name} />
                                                    <p>{option.name}</p>
                                                </div>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                        <div className="votations__nominees__action">
                            <button className="btn">Enviar</button>
                        </div>
                    </motion.form>
                )

            }
            <form action="" >
            </form>
        </>
    )
}
