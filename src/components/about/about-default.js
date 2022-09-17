import React from 'react'
import Image from 'next/image'
import ProgressBar from '../progressBar';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const circleProgressData = [
    {language: 'Английский', progress: 15 },
    {language: 'Русский', progress: 95 },
    {language: 'Татарский', progress: 95 },
    
];

const progressBarData = [
    { bgcolor: "#7d7789", completed: 60, title: 'MS Office' },
    { bgcolor: "#7d7789", completed: 55, title: 'Photoshop' },
    { bgcolor: "#7d7789", completed: 60, title: 'Figma' },
];

const services = [
    {
        desc: "Айгуль, здравствуйте!  Отличная работа- очень вкусно описано. У нас сложилось впечатление, что не Вы описывали наши блюда," +
            " а мы готовим по вашему описанию, огромное спасибо.Есть кое-какие неточности по приготовлению, но я думаю, что мы сможем исправить сами. " +
            "Надеюсь на дальнейшее наше сотрудничество. Еще раз огромное спасибо",
        img: "img/testimonials/1.jpg",
        info1: "Bellisimo",
        info2: "Отзыв пекарни"

    },
    {
        desc: "Спасибо Айгуль за основательность,креативный подход к заданию, легкость написания и сроки! Обязательно буду обращаться за промо-текстами!",
        img: "img/testimonials/2.jpg",
        info1: "Мария Волкова",
        info2: "Маркетолог"

    },
    {
        desc: "Айгуль, добрый вечер!\n" +
            "Спасибо. Все устраивает.\n" +
            "Было приятно с Вами сотрудничать.",
        img: "img/testimonials/3.jpg",
        info1: "Digital.pro",
        info2: "Digital agency"

    },
]

export default function AboutDefault({ActiveIndex}) {
    return (
        <>
            {/* <!-- ABOUT --> */}
            <div className={ActiveIndex === 1 ? "cavani_tm_section active animated fadeInUp" : "cavani_tm_section active hidden animated"} id="about_">
                <div className="section_inner">
                    <div className="cavani_tm_about">
                        <div className="biography">
                            <div className="cavani_tm_title">
                                <span>Обо мне </span>
                            </div>
                            <div className="wrapper">
                                <div className="left">
                                    <p>Привет, меня зовут <strong>Айгуль Финатовна.</strong> Считаю себя творческим и разносторонним человеком. Я пишу понятные и креативные тексты, которые заинтересуют читателя, поскольку самой неприятно читать информацию, когда она  нагромождена.</p>
                                    <p>Умею работать в команде. Не боюсь решать задачи различного уровня сложности.
                                        Помимо digital маркетинга, увлекаюсь «созданием» и  экспериментом различных блюд татарской кухни.
                                        Люблю читать художественную и современную литературу. Мне нравится процесс погружения в литературные сюжеты. <br/> Книга – является катализатором для раскрытия и развития творческой фантазии. </p>
                                </div>
                                <div className="right">
                                    <ul>

                                        <li><span className="first">Адрес:</span><span className="second">Россия, Уфа</span></li>
                                        <li><span className="first">Study:</span><span className="second">Башкирский государственный <br/> университет</span></li>
                                        <li><span className="first">Степень:</span><span className="second">Бакалавр</span></li>
                                        <li><span className="first">Mail:</span><span className="second"><a href="rakhmatullina.aygul@bk.ru">rakhmatullina.aygul@bk.ru</a></span></li>
                                        <li><span className="first">Телефон:</span><span className="second">+7(986)-705-30-57</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="services">
                            <div className="wrapper">
                                <div className="service_list">
                                    <div className="cavani_tm_title">
                                        <span>Навыки</span>
                                    </div>
                                    <div className="list">
                                        <ul>
                                            <li>Пишу новостные материалы для сайта и социальных сетей</li>
                                            <li>Выдаю качественный креатив в сжатые сроки</li>
                                            <li>Создаю и разрабатываю идеи для постов</li>
                                            <li>Владею программами MS Office</li>
                                            <li>Уверенный пользователь ПК</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="service_list">
                                    <div className="cavani_tm_title">
                                        <span>Интересы</span>
                                    </div>
                                    <div className="list">
                                        <ul>
                                            <li>Живопись &amp; Рисование</li>

                                            <li>Музыка &amp; Фильмы</li>
                                            <li>Путешествия &amp; Пикники</li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="skills">
                            <div className="wrapper">
                                <div className="programming">
                                    <div className="cavani_tm_title">
                                        <span>Programs</span>
                                    </div>
                                    <div className="cavani_progress">
                                        {progressBarData.map((item, idx) => (
                                            <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} title={item.title} />
                                        ))}
                                    </div>
                                </div>
                                <div className="language">
                                    <div className="cavani_tm_title">
                                        <span>Language</span>
                                    </div>
                                    <div className="circular_progress_bar">
                                        <div className='circle_holder'>
                                            {circleProgressData.map((item, idx) => (
                                                <div key={idx}>
                                                    <div className="list_inner">
                                                        <CircularProgressbar                                                           
                                                            value={item.progress}
                                                            text={`${item.progress}%`}
                                                            strokeWidth={3}
                                                            stroke='#7d7789'
                                                            Language={item.language}
                                                            className={"list_inner"}
                                                        />
                                                        <div className="title"><span>{item.language}</span></div>
                                                    </div>
                                                </div>
                                            ))}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="resume">
                            <div className="wrapper">
                                <div className="education">
                                    <div className="cavani_tm_title">
                                        <span>Образование</span>
                                    </div>
                                    <div className="list">
                                        <div className="univ">
                                            <ul>
                                                <li>
                                                    <div className="list_inner">
                                                        <div className="time">
                                                            <span>2014 - 2018</span>
                                                        </div>
                                                        <div className="place">
                                                            <h3>БГУ</h3>
                                                            <span>Бакалавр</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="list_inner">
                                                        <div className="time">
                                                            <span>2016 - 2017</span>
                                                        </div>
                                                        <div className="place">
                                                            <h3>БГУ</h3>
                                                            <span>ДПО</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="list_inner">
                                                        <div className="time">
                                                            <span>2008 - 2010</span>
                                                        </div>
                                                        <div className="place">
                                                            <h3>Средняя школа</h3>
                                                            <span>МБОУ СОШ</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="experience">
                                    <div className="cavani_tm_title">
                                        <span>Опыт</span>
                                    </div>
                                    <div className="list">
                                        <div className="univ">
                                            <ul>
                                                <li>
                                                    <div className="list_inner">
                                                        <div className="time">
                                                            <span>2021 - running</span>
                                                        </div>
                                                        <div className="place">
                                                            <h3>Digital.pro</h3>
                                                            <span>Копирайтер</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="list_inner">
                                                        <div className="time">
                                                            <span>2020 - 2021</span>
                                                        </div>
                                                        <div className="place">
                                                            <h3>Фриланс</h3>
                                                            <span>Копирайтер</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="list_inner">
                                                        <div className="time">
                                                            <span>2018 - 2020</span>
                                                        </div>
                                                        <div className="place">
                                                            <h3>Школа №3</h3>
                                                            <span>Введение документаций различного уровня</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*<div className="partners">*/}
                        {/*    <div className="cavani_tm_title">*/}
                        {/*        <span>Partners</span>*/}
                        {/*    </div>*/}
                        {/*    <div className="list">*/}
                        {/*        <ul>*/}
                        {/*            <li>*/}
                        {/*                <div className="list_inner">*/}
                        {/*                    <img src="img/partners/1.png" alt="" />*/}
                        {/*                    <a className="cavani_tm_full_link" href="#"></a>*/}
                        {/*                </div>*/}
                        {/*            </li>*/}
                        {/*            <li>*/}
                        {/*                <div className="list_inner">*/}
                        {/*                    <img src="img/partners/2.png" alt="" />*/}
                        {/*                    <a className="cavani_tm_full_link" href="#"></a>*/}
                        {/*                </div>*/}
                        {/*            </li>*/}
                        {/*            <li>*/}
                        {/*                <div className="list_inner">*/}
                        {/*                    <img src="img/partners/3.png" alt="" />*/}
                        {/*                    <a className="cavani_tm_full_link" href="#"></a>*/}
                        {/*                </div>*/}
                        {/*            </li>*/}
                        {/*            <li>*/}
                        {/*                <div className="list_inner">*/}
                        {/*                    <img src="img/partners/4.png" alt="" />*/}
                        {/*                    <a className="cavani_tm_full_link" href="#"></a>*/}
                        {/*                </div>*/}
                        {/*            </li>*/}
                        {/*            <li>*/}
                        {/*                <div className="list_inner">*/}
                        {/*                    <img src="img/partners/5.png" alt="" />*/}
                        {/*                    <a className="cavani_tm_full_link" href="#"></a>*/}
                        {/*                </div>*/}
                        {/*            </li>*/}
                        {/*            <li>*/}
                        {/*                <div className="list_inner">*/}
                        {/*                    <img src="img/partners/1.png" alt="" />*/}
                        {/*                    <a className="cavani_tm_full_link" href="#"></a>*/}
                        {/*                </div>*/}
                        {/*            </li>*/}
                        {/*            <li>*/}
                        {/*                <div className="list_inner">*/}
                        {/*                    <img src="img/partners/2.png" alt="" />*/}
                        {/*                    <a className="cavani_tm_full_link" href="#"></a>*/}
                        {/*                </div>*/}
                        {/*            </li>*/}
                        {/*            <li>*/}
                        {/*                <div className="list_inner">*/}
                        {/*                    <img src="img/partners/3.png" alt="" />*/}
                        {/*                    <a className="cavani_tm_full_link" href="#"></a>*/}
                        {/*                </div>*/}
                        {/*            </li>*/}
                        {/*        </ul>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div className="testimonials">
                            <div className="cavani_tm_title">
                                <span>Отзывы</span>
                            </div>
                            <div className="list">
                                <ul className="">
                                    <li>
                                        <Swiper
                                            slidesPerView={1}
                                            spaceBetween={30}
                                            loop={true}
                                            // navigation={{
                                            //     prevEl: ".custom_prev",
                                            //     nextEl: ".custom_next",
                                            // }}
                                            className="custom-class"
                                            breakpoints={{
                                                768: {
                                                    slidesPerView: 2,
                                                }
                                            }}
                                        >
                                            {services.map((item, i) => (
                                                <SwiperSlide key={i}>
                                                    <div className="list_inner">
                                                        <div className="text">
                                                            <i className="icon-quote-left" />
                                                            <p>{item.desc}</p>
                                                        </div>
                                                        <div className="details">
                                                            <div className="image">
                                                                <div className="main" data-img-url={item.img} />
                                                            </div>
                                                            <div className="info">
                                                                <h3>{item.info1}</h3>
                                                                <span>{item.info2}</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ABOUT --> */}
        </>
    )
}
