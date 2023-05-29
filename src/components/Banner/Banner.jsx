import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';

export const Banner = () => {
    const scrollToSection = (event) => {
        event.preventDefault();
        const sectionId = event.target.getAttribute('href');
        const section = document.querySelector(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <section className="banner">
            <Splide aria-label="Singers" options={{
                autoplay: true,
                type: 'loop',
                speed: 800,
                interval: 2500,
                arrows: false,
                pagination: false
            }}>
                <SplideSlide>
                    <img src="/assets/images/banner/foofigthers.jpg" alt="Foo Figthers" title='Foo Figthers' />
                </SplideSlide>
                <SplideSlide>
                    <img src="/assets/images/banner/rosalia.jpg" alt="La Rosalia" title='La Rosalia' />
                </SplideSlide>
                <SplideSlide>
                    <img src="/assets/images/banner/fitopaez.jpg" alt="Fito Paez" title='Fito Paez' />
                </SplideSlide>
            </Splide>
            <div className="banner__menu">
                <ul className="banner__menu__list">
                    <li><a href="#publicaciones" onClick={scrollToSection}>Publicaciones</a></li>
                    <li><a href="#noticias" onClick={scrollToSection}>Noticias</a></li>
                    <li><a href="#historias" onClick={scrollToSection}>Historias</a></li>
                    <li><a href="#votaciones" onClick={scrollToSection}>Votaciones</a></li>
                </ul>
            </div>
        </section>
    )
}
