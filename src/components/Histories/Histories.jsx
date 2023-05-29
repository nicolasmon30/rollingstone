import { motion, AnimatePresence } from "framer-motion";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useEffect, useState } from "react";
import '@splidejs/react-splide/css/core';

export const Histories = () => {

    const [toggleTitle, setToggleTitle] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const handleClick = () => {
        if (!isAnimating) {
            setToggleTitle(!toggleTitle);
            setIsAnimating(true);
        }
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsAnimating(false);
        }, 300);

        return () => clearTimeout(timeout);
    }, [toggleTitle]);


    return (
        <section id="historias" className="histories">
            <div className="container histories--mob">
                <div className="title title--outline title--outline__white title--arrow">
                    <h2 onClick={handleClick} >Histories</h2>
                    <AnimatePresence>
                        {
                            toggleTitle && (
                                <motion.ul className="title__dropdown"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    style={{ overflow: "hidden" }}
                                >
                                    <li><a href="">rosalia</a></li>
                                    <li><a href="">nodal</a></li>
                                    <li><a href="">residente</a></li>
                                    <li><a href="">ile</a></li>

                                </motion.ul>
                            )
                        }
                    </AnimatePresence>
                </div>
                <div className="histories__row">
                    <article className="history">
                        <a href="">
                            <picture className="history__thumbnail">
                                <img src="../../src/assets/images/histories/rosalia.jpg" alt="La Rosalia" title='La Rosalia' />
                            </picture>
                            <div className="history__body">
                                <h3>
                                    El camino de Rosalia a su propia emancipación
                                </h3>
                            </div>
                        </a>
                    </article>
                    <article className="history">
                        <a href="">
                            <picture className="history__thumbnail">
                                <img src="../../src/assets/images/histories/nodal.jpg" alt="Nodal" title='Nodal' />
                            </picture>
                            <div className="history__body">
                                <h3>
                                    Nodal:Amor, tatuajes y dos corazones rotos
                                </h3>
                            </div>
                        </a>
                    </article>
                    <article className="history">
                        <a href="">
                            <picture className="history__thumbnail">
                                <img src="../../src/assets/images/histories/residente.jpg" alt="Residente" title='Residente' />
                            </picture>
                            <div className="history__body">
                                <h3>
                                    El arte por encima del negocio
                                </h3>
                            </div>
                        </a>
                    </article>
                    <article className="history">
                        <a href="">
                            <picture className="history__thumbnail">
                                <img src="../../src/assets/images/histories/ile.jpg" alt="Ile" title='Ile' />
                            </picture>
                            <div className="history__body">
                                <h3>
                                    iLe:Pura crudeza, nada de ligereza
                                </h3>
                            </div>
                        </a>
                    </article>
                </div>
            </div>
            <div className="container container--left histories--desk">
                <div className="histories__left">
                    <div className="title title--outline title--outline__white">
                        <h2>Historias</h2>
                    </div>
                    <ul className="title__dropdown">
                        <li><a href="https://es.rollingstone.com/moto-mami-el-camino-de-rosalia-a-su-propia-emancipacion/">rosalia</a></li>
                        <li><a href="https://www.youtube.com/watch?v=Re0xlGfVGL8">nodal</a></li>
                        <li><a href="https://es.rollingstone.com/residente-el-arte-por-encima-del-negocio-la-entrevista-rolling-stone/">residente</a></li>
                        <li><a href="https://es.rollingstone.com/ile-pura-crudeza-nada-de-ligereza/">ile</a></li>
                    </ul>
                </div>
                <div className="histories__right">
                    <Splide
                        options={{
                            type: 'loop',
                            arrows: false,
                            pagination: false,
                            trimSpace: false,
                            // perPage: 2,
                            gap: '60px',
                            // perMove: 1,
                            mediaQuery: 'min',
                            breakpoints : {
                                1280: {
                                    autoHeight: true,
                                    fixedWidth: '720px'
                                },
                                1560: {
                                    fixedWidth: '900px'
                                }
                            }
                        }}
                    >
                        <SplideSlide>
                            <article className="history">
                                <a href="https://es.rollingstone.com/moto-mami-el-camino-de-rosalia-a-su-propia-emancipacion/">
                                    <picture className="history__thumbnail">
                                        <img src="../../src/assets/images/histories/rosalia.jpg" alt="La Rosalia" title='La Rosalia' />
                                    </picture>
                                    <div className="history__body">
                                        <h3>
                                            El camino de Rosalia a su propia emancipación
                                        </h3>
                                    </div>
                                </a>
                            </article>
                        </SplideSlide>
                        <SplideSlide>
                            <article className="history">
                                <a href="https://www.youtube.com/watch?v=Re0xlGfVGL8" target="_blank">
                                    <picture className="history__thumbnail">
                                        <img src="../../src/assets/images/histories/nodal.jpg" alt="Nodal" title='Nodal' />
                                        <div className="history__play">
                                            <img src="../../src/assets/images/icons/play.svg" alt="" />
                                        </div>
                                    </picture>
                                    <div className="history__body">
                                        <h3>
                                            Nodal:Amor, tatuajes y dos corazones rotos
                                        </h3>
                                    </div>
                                </a>
                            </article>
                        </SplideSlide>
                        <SplideSlide>
                            <article className="history">
                                <a href="https://es.rollingstone.com/residente-el-arte-por-encima-del-negocio-la-entrevista-rolling-stone/" target="_blank">
                                    <picture className="history__thumbnail">
                                        <img src="../../src/assets/images/histories/residente.jpg" alt="Residente" title='Residente' />
                                    </picture>
                                    <div className="history__body">
                                        <h3>
                                            El arte por encima del negocio
                                        </h3>
                                    </div>
                                </a>
                            </article>
                        </SplideSlide>
                        <SplideSlide>
                            <article className="history">
                                <a href="https://es.rollingstone.com/ile-pura-crudeza-nada-de-ligereza/" target="_blank">
                                    <picture className="history__thumbnail">
                                        <img src="../../src/assets/images/histories/ile.jpg" alt="Ile" title='Ile' />
                                    </picture>
                                    <div className="history__body">
                                        <h3>
                                            iLe:Pura crudeza, nada de ligereza
                                        </h3>
                                    </div>
                                </a>
                            </article>
                        </SplideSlide>
                    </Splide>
                </div>
            </div>
        </section>
    )
}
