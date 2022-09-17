import React, { useState } from 'react'
import { dataImage } from '../../plugin/plugin'
import Modal from 'react-modal';
import {SVG_Custom1, SVG_Custom2, SVG_Custom3, SVG_Custom4, SVG_Custom5, SVG_Custom6 } from '../../plugin/svg';
export default function Service({ ActiveIndex }) {

    const [isOpen9, setIsOpen9] = useState(false);
    const [modalContent, setModalContent] = useState({});

    function toggleModalFour() {
        setIsOpen9(!isOpen9);
    }
    const service = [
        {
            img: "img/news/1.jpg",
            svg: <SVG_Custom1 />,
            text: "Введение страницы Instagram",
            date: "August 9, 2022",
            title: "Instagram",
            text1: "Что входит:",
            text2: "- Разработка контент-плана (при необходимости).",
            text3: "- Текст.",
            text4: "- Публикация фотографий.",
            text5: "- Размещение поста.",
            text6: "- Количество необходимых публикаций сторис (обговаривается отдельно).",
            text7: "- Подбор хештегов.",
            text8: "- 10 постов в течении месяца",
            text9: <br/>,
            text10: "Данная услуга НЕ является продвижением или рекламой. А именно ВЕДЕНИЕ ВАШЕЙ СТРАНИЦЫ в инстаграм. Оно никак не связано с количеством подписчиков или заказов, а связано с публикацией ваших фото с постом. Продвижением соц. сетей занимается таргетолог.\n" +
                "Предоставление необходимого материала происходит заранее заказчиком! Действия по работе и сотрудничестве обговариваются заранее.",
        },
        {
            img: "img/news/2.jpg",
            svg: <SVG_Custom2 />,
            text: "Написание постов для группы в телеграмм",
            date: "August 9, 2022",
            title: "Telegram",
            text1: "Что входит:",
            text2: "- Контент-план и тема текста при необходимости.",
            text3: "- 3 поста в неделю.",
            text4: "- Допускается 1 вправка от заказчика за каждый текст.",
            text5: "- Сотрудничество в течении месяца.",
            text6: <br/>,
            text7: "Все изменения в тексте должны быть конкретизированными. Действия обговариваются заранее. Каждое НОВОЕ изменение носит дополнительных характер оплаты услуг.",
            text8: " Цените и уважайте чужой труд и время!",

        },
        {
            img: "img/news/3.jpg",
            svg: <SVG_Custom3 />,
            text: "Заполнение сайта контентом ",
            date: "August 9, 2021",
            title: "Контент на сайт",
            text1: "Что входит:",
            text2: "- Предоставление ЗАРАНЕЕ ВСЕХ необходимых материалов заказчиком.",
            text3: "- Написание статьи с грамотно подобранной темой, исходя из поставленной задачи. Либо заказчик предоставляет свою готовую тему.",
            text4: "- Построение плана статьи:",
            text5: "1. заголовок",
            text6: "2. введение",
            text7: "3. основная часть",
            text8: "4. заключение",
            text9: "5. призыв к действию (призвать читателей к какому-то действию, например, поделиться в соц. сетях, оставить комментарий).",
            text10: "- Правки от заказчика (до 2- х вправок).",
            text11: "- 1 статья в день (сроки  и количество статей обговариваются).",
            text12: <br/>,
            text13: "Вправки должны быть по существу, без изменения изначальной задачи. Дальнейшие вправки и  изменение изначальной задачи являются НОВЫМ заказом за НОВУЮ оплату услуг.",
        },
        {
            img: "img/news/4.jpg",
            svg: <SVG_Custom4 />,
            text: "Создание постов для группы вк",
            date: "August 9, 2022",
            title: "VK - вконтакте",
            text1: "Что входит:",
            text2: "- Разработка контент плана.",
            text3: "- Создание текста для постов.",
            text4: "- Регулярная публикация (каждый день по 1 тексту) интересных постов от имени группы.",
            text5: "Данная услуга НЕ является ВЕДЕНИЕМ группы, а именно, разработка контент-плана,  написание и публикация текста.",
        },

    ]
    return (
        <>
            {/* <!-- NEWS --> */}
            <div className={ActiveIndex === 7 ? "cavani_tm_section active animated fadeInUp" : "cavani_tm_section hidden animated"} id="news_">
                <div className="section_inner">
                    <div className="cavani_tm_service">
                        <div className="cavani_tm_title">
                            <span>Мои Услуги</span>
                        </div>
                        <div className="service_list">
                            <ul>
                                {service.map((item, i) => (
                                    <li key={i}>
                                        <div className="list_inner" onClick={toggleModalFour}>
                                            {item.svg}
                                            <h3 className="title" onClick={toggleModalFour}>{item.title}</h3>
                                            <p className="text">{item.text}</p>
                                            <a className="cavani_tm_full_link" href="#" onClick={() => setModalContent(item)} />
                                            <img className="popup_service_image" src={item.img} alt="" />
                                            <div className="service_hidden_details">
                                                <div className="service_popup_informations">
                                                    <div className="descriptions">
                                                        <p>{item.text1}</p>
                                                        <p>{item.text2}</p>
                                                        <p>{item.text3}</p>
                                                        <p>{item.text4}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            {/* <!-- NEWS --> */}

            {modalContent && (
                <Modal
                    isOpen={isOpen9}
                    onRequestClose={toggleModalFour}
                    contentLabel="My dialog"
                    className="mymodal"
                    overlayClassName="myoverlay"
                    closeTimeoutMS={300}
                    openTimeoutMS={300}
                >
                    <div className="cavani_tm_modalbox opened">
                        <div className="box_inner">
                            <div className="close" onClick={toggleModalFour} >
                                <a href="#"><i className="icon-cancel"></i></a>
                            </div>
                            <div className="description_wrap">
                                <div className="service_popup_informations">
                                    <div className="image">
                                        <img src="img/thumbs/4-2.jpg" alt="" />
                                        <div className="main" data-img-url="img/news/1.jpg" style={{ backgroundImage: `url(${modalContent.img})` }} />
                                    </div>
                                    <div className="details">
                                        <span>{modalContent.tag}</span>
                                        <h3>{modalContent.title}</h3>
                                    </div>
                                    <div className="descriptions">
                                        <div>{modalContent.text1}</div>
                                        <div>{modalContent.text2}</div>
                                        <div>{modalContent.text3}</div>
                                        <div>{modalContent.text4}</div>
                                        <div>{modalContent.text5}</div>
                                        <div>{modalContent.text6}</div>
                                        <div>{modalContent.text7}</div>
                                        <div>{modalContent.text8}</div>
                                        <div>{modalContent.text9}</div>
                                        <div>{modalContent.text10}</div>
                                        <div>{modalContent.text11}</div>
                                        <div>{modalContent.text12}</div>
                                        <div>{modalContent.text13}</div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            )}
        </>
    )
}