import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';


export const Pub2022 = () => {
    return (
        <Splide aria-label="Publications 2022" options={{
            type: 'loop',
            speed: 800,
            arrows: false,
            pagination: false,
            mediaQuery: 'min',
            breakpoints:{
                767: {
                    perPage: 3,
                    perMove: 1,
                    gap: '76px',
                    autoplay: true,
                    interval: 2500
                },
                1199: {
                    autoplay: false,
                    arrows: true
                }
            }
        }}>
            <SplideSlide>
                <article className="tabs__panel__box">
                    <div className="tabs__panel__box__thumbnail">
                        <picture>
                            <img src="/public/assets/images/publications/2022/publication1.jpg" alt="Publiaction 1" title='Publication 1' />
                        </picture>
                    </div>
                    <div className="tabs__panel__box__body">
                        <h3>rsee 001</h3>
                    </div>
                </article>
            </SplideSlide>
            <SplideSlide>
                <article className="tabs__panel__box">
                    <div className="tabs__panel__box__thumbnail">
                        <picture>
                            <img src="/public/assets/images/publications/2022/publication2.jpg" alt="Publiaction 2" title='Publication 2' />
                        </picture>
                    </div>
                    <div className="tabs__panel__box__body">
                        <h3>rsee 002</h3>
                    </div>
                </article>
            </SplideSlide>
            <SplideSlide>
                <article className="tabs__panel__box">
                    <div className="tabs__panel__box__thumbnail">
                        <picture>
                            <img src="/public/assets/images/publications/2022/publication3.jpg" alt="Publiaction 3" title='Publication 3' />
                        </picture>
                    </div>
                    <div className="tabs__panel__box__body">
                        <h3>rsee 003</h3>
                    </div>
                </article>
            </SplideSlide>
            <SplideSlide>
                <article className="tabs__panel__box">
                    <div className="tabs__panel__box__thumbnail">
                        <picture>
                            <img src="/public/assets/images/publications/2022/publication4.jpg" alt="Publiaction 4" title='Publication 4' />
                        </picture>
                    </div>
                    <div className="tabs__panel__box__body">
                        <h3>rsee 004</h3>
                    </div>
                </article>
            </SplideSlide>
            <SplideSlide>
                <article className="tabs__panel__box">
                    <div className="tabs__panel__box__thumbnail">
                        <picture>
                            <img src="/public/assets/images/publications/2022/publication5.jpg" alt="Publiaction 5" title='Publication 5' />
                        </picture>
                    </div>
                    <div className="tabs__panel__box__body">
                        <h3>rsee 005</h3>
                    </div>
                </article>
            </SplideSlide>
            <SplideSlide>
                <article className="tabs__panel__box">
                    <div className="tabs__panel__box__thumbnail">
                        <picture>
                            <img src="/public/assets/images/publications/2022/publication6.jpg" alt="Publiaction 6" title='Publication 6' />
                        </picture>
                    </div>
                    <div className="tabs__panel__box__body">
                        <h3>rsee 006</h3>
                    </div>
                </article>
            </SplideSlide>
        </Splide>
    )
}
