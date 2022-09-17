import React, { useState, useEffect, useRef } from 'react'
import Modal from 'react-modal';


export default function PortfolioDefault({ ActiveIndex, Animation }) {



    // image modal popup
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);
    const [isOpen6, setIsOpen6] = useState(false);
    const [isOpen7, setIsOpen7] = useState(false);
    const [isOpen8, setIsOpen8] = useState(false);

    function toggleModalFour() {
        setIsOpen4(!isOpen4);
    }
    function toggleModalFive() {
        setIsOpen5(!isOpen5);
    }

    function toggleModalSix() {
        setIsOpen6(!isOpen6)
    }
    function toggleModalSeven() {
        setIsOpen7(!isOpen7)
    }
    function toggleModalEight() {
        setIsOpen8(!isOpen8)
    }


    return (
        <>
            {/* <!-- PORTFOLIO --> */}

            <div className={ActiveIndex === 2 ? `cavani_tm_section active animated ${Animation ? Animation: "fadeInUp"}` : "cavani_tm_section hidden animated"} id="portfolio_">
                <div className="section_inner">
                    <div className="cavani_tm_portfolio">
                        <div className="cavani_tm_title">
                            <span>Мои Тексты</span>
                        </div>
                        <div className="portfolio_filter"></div>
                        <div className="portfolio_list">
                            <div className="filter-container">
                                <div className="filter-item detail">
                                    <div className="list_inner">
                                        <div className="image">
                                            <img src="img/thumbs/1-1.jpg" alt="" />
                                            <div className="main" data-img-url="img/portfolio/6.jpg" onClick={toggleModalFour}></div>
                                            <span className="icon"><i className="icon-doc-text-inv"></i></span>
                                            <div className="details">
                                                <h3>Мифы про smm</h3>
                                                <span>Просто кликни</span>
                                            </div>
                                            {/* <a className="cavani_tm_full_link portfolio_popup" href="#"></a> */}
                                        </div>
                                    </div>
                                </div>

                                <div className="filter-item detail">
                                    <div className="list_inner">
                                        <div className="image">
                                            <img src="img/thumbs/1-1.jpg" alt="" />
                                            <div className="main" data-img-url="img/portfolio/3.jpg" onClick={toggleModalFive}></div>
                                            <span className="icon"><i className="icon-doc-text-inv"></i></span>
                                            <div className="details">
                                                <h3>Какой же выбрать</h3>
                                                <span>Детали(клик)</span>
                                            </div>
                                            {/* <a className="cavani_tm_full_link portfolio_popup" href="#"></a> */}
                                        </div>
                                    </div>
                                </div>

                                <div className="filter-item detail">
                                    <div className="list_inner">
                                        <div className="image">
                                            <img src="img/thumbs/1-1.jpg" alt="" />
                                            <div className="main" data-img-url="img/portfolio/open_store.jpg" onClick={toggleModalSix}></div>
                                            <span className="icon"><i className="icon-doc-text-inv"></i></span>
                                            <div className="details">
                                                <h3>Открытие кондитерской</h3>
                                                <span>Открой там вкусно</span>
                                            </div>
                                            {/* <a className="cavani_tm_full_link portfolio_popup" href="#"></a> */}
                                        </div>
                                    </div>
                                </div>

                                <div className="filter-item detail">
                                    <div className="list_inner">
                                        <div className="image">
                                            <img src="img/thumbs/1-1.jpg" alt="" />
                                            <div className="main" data-img-url="img/portfolio/Waffle.jpg" onClick={toggleModalSeven}></div>
                                            <span className="icon"><i className="icon-doc-text-inv"></i></span>
                                            <div className="details">
                                                <h3>Скандинавское блюдо</h3>
                                                <span>Waffle heart</span>
                                            </div>
                                            {/* <a className="cavani_tm_full_link portfolio_popup" href="#"></a> */}
                                        </div>
                                    </div>
                                </div>

                                <div className="filter-item detail">
                                    <div className="list_inner">
                                        <div className="image">
                                            <img src="img/thumbs/1-1.jpg" alt="" />
                                            <div className="main" data-img-url="img/portfolio/seo_mini.jpg" onClick={toggleModalEight}></div>
                                            <span className="icon"><i className="icon-doc-text-inv"></i></span>
                                            <div className="details">
                                                <h3>Search Engine Optimization</h3>
                                                <span>Это важно</span>
                                            </div>
                                            {/* <a className="cavani_tm_full_link portfolio_popup" href="#"></a> */}
                                        </div>
                                    </div>
                                </div>
                                {/* Photo Gallery End */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- /PORTFOLIO --> */}
            <Modal
                isOpen={isOpen4}
                onRequestClose={toggleModalFour}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={300}
                openTimeoutMS={300}
            >
                <div className="cavani_tm_modalbox opened">
                    <div className="box_inner">
                        <div className="close" onClick={toggleModalFour}>
                            <a href="#">
                                <i className="icon-cancel" />
                            </a>
                        </div>
                        <div className="description_wrap">
                            <div className="popup_details">
                                <div className="top_image">
                                    <img src="img/thumbs/4-2.jpg" alt="" />
                                    <div className="main" data-img-url="img/portfolio/6.jpg" style={{ backgroundImage: "url(./img/portfolio/6.jpg" }} />
                                </div>
                                <div className="portfolio_main_title">
                                    <h3>Мифы про SMM</h3>

                                </div>
                                <div className="main_details">
                                    <div className="textbox">
                                     <p>
                                         Морфеус из фильма Матрица предлагает Нео на выбор две таблетки:
                                     </p>
                                        <p>Примешь синюю таблетку — и сказке конец. Ты проснешься в своей постели и поверишь, что это был сон.  </p>
                                        <p>Примешь красную таблетку — войдешь в страну чудес. Я покажу тебе, глубока ли кроличья нора».</p>

                                        <p>Синяя таблетка - это жизнь в иллюзиях, которую привыкли считать реальностью.
                                            Красная таблетка - это освобождение от иллюзий, так сказать, правда жизни без прикрас. </p>
                                        <p>Итак.</p>
                                        <p>
                                            <b>Миф 1.</b>Работа в социальных сетях – для стажеров и учеников. <hr/>
                                            Маркетинг в социальных сетях – одна из необходимых задач для развития бизнеса любого масштаба.
                                        </p>
                                        <p><b>Миф 2.</b> Социальные сети – это такая же работа по 8 часов 5 дней в неделю. </p> <hr/>
                                        <p>Маркетинг социальных сетях – это 24 часа в сутки, 7 дней в неделю, ежедневно.</p>
                                        <p><b>Миф 3.</b> От SMM маркетолога не добьешься эффективных и измеримых результатов. <br/> <hr/>
                                            Измерить результат и эффективность работы в SMM сегодня уже также не представляется невозможным. </p>
                                        <p><b>Миф 4.</b> Вся работа SMM – это просто просить друзей и знакомых ставить лайк на посты. <br/> <hr/>
                                            Опытные SMM-щики прекрасно знают, что им не удастся обмануть программу, высчитывающую коэффициент активности.  </p>
                                        <p><b>Миф 5.</b> Мне не нужен SMM. <br/> <hr/>
                                            Если вы полагаете, что будет достаточно много писать, о вас и так все сразу узнают, без вливаний дополнительных на то бюджетов – вы глубоко заблуждаетесь.</p>
                                        <p><b>Миф 6.</b> Спрос на SMM специалистов уже сформирован. <br/> <hr/>
                                            Спрос на специалистов SMM начал существенно увеличиваться с января 2016 года, а количество вакансий увеличилось почти в два раза.</p>
                                        <p><b>Миф 7. </b>SMM-щик должен стоить дешево. <br/> <hr/>
                                            Конечно, можно платить специалисту и меньше, но в таком случае, ожидать прогнозированного результата не стоит, он может получиться и нулевым.
                                        </p>
                                        <p><b>Миф 8. </b>SMM-щику не обязательно самому иметь много подписчиков. <br/> <hr/>
                                            Возможно, да. Но только не «ботов». </p>
                                        <p><b>Миф 9. </b>Проще купить подписчиков и сразу получить результат. <br/> <hr/>
                                            Покупка ботов – это прием «черного» SMM.</p>
                                        <p><b>Миф 10. </b>SMM-щик умеет делать всё.</p> <hr/>
                                        <p>Очень часто от сммщика могут потребовать всё, что угодно. Но как правило, люди, которые заявляют, что всё это могут, в чем-то точно провисают.  </p>
                                        <p>Дочитали до конца? Сохрани пост, чтобы не потерять!</p>
                                    </div>
                                    <div className="detailbox">
                                        <ul>
                                            <li>
                                                <span className="first">Клиент</span>
                                                <span>Digital.pro</span>
                                            </li>
                                            <li>
                                                <span className="first">Категория</span>
                                                <span><a href="#">Социальные медиа</a></span>
                                            </li>
                                            <li>
                                                <span className="first">Date</span>
                                                <span>Июль 07, 2022</span>
                                            </li>
                                            <li>
                                                <span className="first">Соц-сети</span>
                                                <ul className="share">
                                                    <li><a href="https://vk.com/id167836632"><img className="svg" src="./img/svg/social/vk.svg" alt="" /></a></li>

                                                    <li><a href="https://www.instagram.com/mrs_coco02/"><img className="svg" src="./img/svg/social/instagram.svg" alt="" /></a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            {/*_____________________________________*/}
            <Modal
                isOpen={isOpen5}
                onRequestClose={toggleModalFive}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={300}
                openTimeoutMS={300}
            >
                <div className="cavani_tm_modalbox opened">
                    <div className="box_inner">
                        <div className="close" onClick={toggleModalFive}>
                            <a href="#">
                                <i className="icon-cancel" />
                            </a>
                        </div>
                        <div className="description_wrap">
                            <div className="popup_details">
                                <div className="top_image">
                                    <img src="img/thumbs/4-2.jpg" alt="" />
                                    <div className="main" data-img-url="img/portfolio/6.jpg" style={{ backgroundImage: "url(./img/portfolio/3.jpg" }} />
                                </div>
                                <div className="portfolio_main_title">
                                    <h3>Что кроме зонтика?</h3>

                                </div>
                                <div className="main_details">
                                    <div className="textbox">
                                        <p>
                                            «Осенняя пора! Очей очарованье… Какой дождевик купить из нейлона или ПВХ?»
                                        </p>
                                        <p>Осень – это пора дождей. Как часто выходя из дома вы забываете взять с собой зонтик? И съежившись под холодными каплями дождя бежите домой. Давайте, дорогие мои читатели будем откровенны,
                                            никто не хочет брать с собой в сумку тяжелый зонт. Другое дело дождевик – легкий, компактный и удобный. Главное, выбрать подходящий именно под вас и ваш стиль. </p>
                                        <p>Хороший или плохой.Не бывает хорошего или плохого, бывает подходящий под ваши требования.  А чтобы вам легче было выбрать, рассмотрим несколько видов дождевика:
                                            </p>
                                        <p>• Водонепроницаемая, она бывает разной. Подходит для защиты от назойливых капель дождя. <br/>
                                            • Ветрозащита — защищает от небольшого и сильного ветра. <br/>
                                            • Теплозащита — определяется толщиной ткани и ее слоями. Всегда можете надеть под плащ лишний свитер, но не можете сделать тяжелый дождевик легче.<br/>
                                            • Вес — чем большую защиты от холода обеспечивает плащ, тем тяжелее он будет.<br/>
                                            • Комфорт — одежда для защиты от дождя должна быть удобной и обеспечивать мобильность.<br/>
                                            • Долговечность — зависит от выбранного материала и его толщины. </p>
                                        <p>Итак, вернемся к главному вопросу: Дождевик из нейлона или ПВХ – что лучше купить ?</p>
                                        <p>
                                            Нейлон🔸 — отличный материал для дождевиков. Он удобный в носке, не деформируется, водоотталкивающий. Такие изделия легкие, их удобно носить с собой в  сумке.
                                            Материал из нейлона не является 100% водонепроницаемым, если не покрыт водоотталкивающим покрытием.
                                        </p>
                                        <p>ПВХ🔹 — более плотное, обладает лучшими водоотталкивающими качествами. Это - синтетический пластиковый полимер с 100% водонепроницаемостью, из-за чего является самым популярным сырьем для производства дождевиков.
                                            Материал из ПВХ: гибкий, водонепроницаемый, прочный, легкий в очистке от грязи.</p>
                                        <p>Чтобы выбрать подходящий дождевик, смотрите на плотность ткани и ее водонепроницаемые свойства. <br/> ПВХ🔹 — водонепроницаемые и лучше сопротивляются намоканию, чем нейлон🔸 с водоотталкивающей пропиткой.
                                            А потому выбирая между водонепроницаемостью и водоотталкивающими свойствами, всегда выбирайте первый вариант.
                                            Пропитка имеет свойство пропускать влагу и со временем теряет первоначальные свойства. Водонепроницаемый материал пропустит воду, если только разорвать или проколоть. </p>
                                        <p>Еще один важный критерий выбора — длина. Длинные модели лучше укрывают от дождя, но слишком длинные и могут сковывают движения, поэтому следует выбирать что-то среднее.
                                            Если планируете находиться в дождевике длительное время, задумайтесь о выборе дышащего материала.</p>



                                    </div>
                                    <div className="detailbox">
                                        <ul>
                                            <li>
                                                <span className="first">Клиент</span>
                                                <span>Пост на сайт</span>
                                            </li>
                                            <li>
                                                <span className="first">Категория</span>
                                                <span><a href="#">Социальные медиа</a></span>
                                            </li>
                                            <li>
                                                <span className="first">Date</span>
                                                <span>Август 07, 2022</span>
                                            </li>
                                            <li>
                                                <span className="first">Соц-сети</span>
                                                <ul className="share">
                                                    <li><a href="https://vk.com/id167836632"><img className="svg" src="./img/svg/social/vk.svg" alt="" /></a></li>

                                                    <li><a href="https://www.instagram.com/mrs_coco02/"><img className="svg" src="./img/svg/social/instagram.svg" alt="" /></a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
            {/*_____________________________________*/}
            <Modal
                isOpen={isOpen6}
                onRequestClose={toggleModalSix}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={300}
                openTimeoutMS={300}
            >
                <div className="cavani_tm_modalbox opened">
                    <div className="box_inner">
                        <div className="close" onClick={toggleModalSix}>
                            <a href="#">
                                <i className="icon-cancel" />
                            </a>
                        </div>
                        <div className="description_wrap">
                            <div className="popup_details">
                                <div className="top_image">
                                    <img src="img/thumbs/4-2.jpg" alt="" />
                                    <div className="main" data-img-url="img/portfolio/bellisimo.jpg" style={{ backgroundImage: "url(./img/portfolio/bellisimo.jpg" }} />
                                </div>
                                <div className="portfolio_main_title">
                                    <h3>Натуральная кондитерская</h3>

                                </div>
                                <div className="main_details">
                                    <div className="textbox">
                                        <p>
                                            Всем, Дила мшвидобиса (Добрый день!) ☀️
                                        </p>
                                        <p>Дорогие наши друзья, у нас для вас есть важная новость!
                                            Путь к нашей мечте был долгим, но мы упорно шли к ней, и сейчас, готовы с гордостью, и приятным волнением, сообщить вам об открытии замечательной кондитерской <b>Bellisimo.</b>💛 <br/>
                                                Как всё это начиналось? Прежде всего с общей цели, дружбы и любви к кондитерскому делу. Первые пару месяцев - это было просто увлечение, хобби, но с каждым днём появлялась уверенность в собственных силах, желание развиваться и быть лучшим в своем деле! </p>
                                        <p>Мы сделали очень важный и непростой шаг👣. Это - создание профессиональной кухни, которая оснащена необходимой техникой, помещение, куда вы сможете приходить за нашими вкусными, свежими и натуральными десертами.</p>
                                        <p>Работа кондитеров <strong>Bellissimo</strong> заключается в создании идеальных десертов - тех, в которые вложена частичка души и тепла, тех, которые вызывают неподдельные эмоции радости и счастья.✨</p>
                                        <p>Наши двери всегда открыты для вас с 9:30 утра до 22:00 вечера, без выходных.</p>

                                       <p> Адрес: г. Батуми, улица Fridon Khalvashi 71 A, кондитерская  <b>Bellissimo.</b></p>
                                               <p> С нетерпением ждём встречи с Вами!💛</p>
                                    </div>
                                    <div className="detailbox">
                                        <ul>
                                            <li>
                                                <span className="first">Клиент</span>
                                                <span>Bellisimo</span>
                                            </li>
                                            <li>
                                                <span className="first">Категория</span>
                                                <span><a href="#">Социальные медиа</a></span>
                                            </li>
                                            <li>
                                                <span className="first">Дата</span>
                                                <span>Июль 13, 2022</span>
                                            </li>
                                            <li>
                                                <span className="first">Соц-сети</span>
                                                <ul className="share">
                                                    <li><a href="https://vk.com/id167836632"><img className="svg" src="./img/svg/social/vk.svg" alt="" /></a></li>

                                                    <li><a href="https://www.instagram.com/mrs_coco02/"><img className="svg" src="./img/svg/social/instagram.svg" alt="" /></a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="additional_images">
                                    <ul>
                                        <li>
                                            <div className='list_inner'>

                                            </div>
                                        </li>
                                        <li>
                                            <div className="list_inner">
                                                <div className="my_image">
                                                    <img src="./img/thumbs/4-2.jpg" alt="" />
                                                    <div className="main" style={{ backgroundImage: "url(./img/portfolio/proof/1.jpg" }}></div>

                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="list_inner">
                                                <div className="my_image">
                                                    <img src="./img/thumbs/4-2.jpg" alt="" />
                                                    <div className="main" style={{ backgroundImage: "url(./img/portfolio/proof/2.jpg" }}></div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="list_inner">
                                                <div className="my_image">
                                                    <img src="./img/thumbs/4-2.jpg" alt="" />
                                                    <div className="main" style={{ backgroundImage: "url(./img/portfolio/proof/3.jpg" }}></div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            <Modal
                isOpen={isOpen7}
                onRequestClose={toggleModalSeven}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={300}
                openTimeoutMS={300}
            >
                <div className="cavani_tm_modalbox opened">
                    <div className="box_inner">
                        <div className="close" onClick={toggleModalSeven}>
                            <a href="#">
                                <i className="icon-cancel" />
                            </a>
                        </div>
                        <div className="description_wrap">
                            <div className="popup_details">
                                <div className="top_image">
                                    <img src="img/thumbs/4-2.jpg" alt="" />
                                    <div className="main" data-img-url="img/portfolio/waffle.jpg" style={{ backgroundImage: "url(./img/portfolio/waffle.jpg" }} />
                                </div>
                                <div className="portfolio_main_title">
                                    <h3>Вафли с душой</h3>

                                </div>
                                <div className="main_details">
                                    <div className="textbox">
                                        <p>

                                        </p>
                                        <p>Мы очень соскучились и поэтому решили возобновить нашу деятельность в Инстаграм!
                                            Уютное кафе WAFFLE HEART🍪 рада приветствовать вас в  просторах социальных сетей!
                                            Мы работаем уже больше года, и хотим радовать вас каждый день, яркими и живыми фотографиями наших вкуснейших СКАНДИНАВСКИХ ВАФЕЛЬ🍪 – они пользуются невероятной популярностью,
                                            ведь многим хочется ощутить вкус нежных и золотистых вафель. </p>
                                        <p>Но мы, также НАПОМИНАЕМ, что помимо них у нас также есть <p></p> <p> <strong>- АППЕТИТНЫЕ CHICKEN LITTLE(цыпленок цыпа)</strong></p>
                                            <p> <strong>- HAPPY SALMON (счастливый лосось)</strong>
                                            <p></p>
                                            </p> <p> <strong>- STRUDEL(штрудель).</strong></p> <p></p> И, конечно же, освежающие холодные и горящие напитки.
                                            И всё это, вы можете скушать с великолепным видом на любимое МОРЕ.
                                            Удобно, когда кафе с любимыми угощениями находится в 5 минутах от моря, правда?</p>
                                        <p>Кафе  WAFFLE HEART🍪 – лучшие скандинафские вафли ждут Вас! <br/>  г. Батуми, ул. Горгиладзе, 92, «Батуми Молл» 4 этаж.</p>
                                    </div>
                                    <div className="detailbox">
                                        <ul>
                                            <li>
                                                <span className="first">Клиент</span>
                                                <span>Waffle heart</span>
                                            </li>
                                            <li>
                                                <span className="first">Категория</span>
                                                <span><a href="#">Социальные медиа</a></span>
                                            </li>
                                            <li>
                                                <span className="first">Дата</span>
                                                <span>Август 13, 2022</span>
                                            </li>
                                            <li>
                                                <span className="first">Соц-сети </span>
                                                <ul className="share">

                                                    <li><a href="https://www.instagram.com/waffle_heart_/"><img className="svg" src="./img/svg/social/instagram.svg" alt="" /></a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
            <Modal
                isOpen={isOpen8}
                onRequestClose={toggleModalEight}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={300}
                openTimeoutMS={300}
            >
                <div className="cavani_tm_modalbox opened">
                    <div className="box_inner">
                        <div className="close" onClick={toggleModalEight}>
                            <a href="#">
                                <i className="icon-cancel" />
                            </a>
                        </div>
                        <div className="description_wrap">
                            <div className="popup_details">
                                <div className="top_image">
                                    <img src="img/thumbs/4-2.jpg" alt="" />
                                    <div className="main" data-img-url="img/portfolio/waffle.jpg" style={{ backgroundImage: "url(./img/portfolio/seo.jpg" }} />
                                </div>
                                <div className="portfolio_main_title">
                                    <h3>SEO</h3>

                                </div>
                                <div className="main_details">
                                    <div className="textbox">
                                        <p>
                                            SEO (Search engine optimization, поисковая оптимизация) — это развитие и продвижение сайта
                                            с учетом требований поисковиков, выходом на первые позиции по результатам выдачи поисковых систем.
                                        </p>
                                        <p>ДЛЯ ЧЕГО НУЖЕН SEO ? 📂</p>
                                        <p>• SEO повышает рост поискового трафика, который необходим интернет-магазинам,корпоративным порталам.
                                            Агентства заинтересованы в поисковом трафике из-за того, что НЕ НУЖНО ПЛАТИТЬ за каждый клик при переходе на сайт.
                                            Конечно, нельзя назвать рост поискового трафик бесплатным,
                                            ведь в начале нужно хорошо вкладывать в контент и техническую оптимизацию.
                                        </p>
                                        <p>• ИНВЕСТИЦИИ В SEO принесут долгожданный результат и окупятся в долгосрочной перспективе. 💫 <br/>
                                            • Главной задачей поисковой системы является – КАЧЕСТВЕННЫЙ ОТВЕТ на запрос пользователя. <br/>
                                            • SEO улучшает пользовательский опыт.
                                        </p>
                                        <p>ЧТО ВХОДИТ В SEO: 🗃</p>
                                        <b>1. Подготовка</b> <br/>
                                        • аудит действующего ресурса;<br/>
                                        • оптимизация сайта для мобильных устройств;<br/>
                                        • анализ конкурентных сайтов. <br/>
                                        <hr/>
                                        <b>2. Планирование</b> <br/>
                                        • определение целей и стратегии,<br/>
                                        • инструменты продвижения. <br/>
                                        <hr/>
                                        <p></p>
                                        <b>3. Внутренняя оптимизация</b> <br/>
                                        • наполнение сайта контентом. <br/>

                                       Внимание! 📍Создание сайта откладывается на года , потому что, необходимо создание КОНТЕНТА.<br/>
                                        • прописывание уникальных метатегов title, description <br/>
                                        • перелинковка.<br/>
                                        <hr/>
                                       <b> 4. Поведенческий фактор</b> <br/>
                                        • глубина просмотра; <br/>
                                        • время на сайте; <br/>
                                        • показатель отказов; <br/>
                                        • повторные визиты, прямые заходы (показатель пользователей, что они знают сайт и доверяют ему). <br/>
                                        <p></p>
                                        <b>Вывод! 📝</b> <br/>
                                        Теперь, когда вы знаете, ДЛЯ ЧЕГО НУЖЕН SEO и ЧТО ВХОДИТ в него, можно сделать вывод,
                                        что САМОСТОЯТЕЛЬНО осваивать маркетинг по статьям, видео, тяжело и не эффективно.
                                        Если вы владелец сайта и хотите не только, чтобы его можно было найти в поисковых системах,
                                        но и попасть в топ поисковой выдачи, 🔝обратите внимание SEO, или наймите того, кто сможет,
                                        например, нас Digital PRO. 💜

                                    </div>
                                    <div className="detailbox">
                                        <ul>
                                            <li>
                                                <span className="first">Клиент</span>
                                                <span>Digital.pro</span>
                                            </li>
                                            <li>
                                                <span className="first">Категория</span>
                                                <span><a href="#">Социальные медиа</a></span>
                                            </li>
                                            <li>
                                                <span className="first">Дата</span>
                                                <span>Июль 23, 2022</span>
                                            </li>

                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </Modal>


        </>
    )

}
