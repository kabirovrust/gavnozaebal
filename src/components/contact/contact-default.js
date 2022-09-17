import React, { useState, useEffect } from 'react'
import MagicCursor from '../../layout/magic-cursor';
import { customCursor } from '../../plugin/plugin';

export default function ContactDefault({ ActiveIndex }) {
    const [trigger, setTrigger] = useState(false);
    useEffect(() => {
        // dataImage();
        customCursor();
    });

    const [form, setForm] = useState({ email: "", name: "", msg: "" });
    const [active, setActive] = useState(null);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const onChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const { email, name, msg } = form;
    const onSubmit = (e) => {
        e.preventDefault();
        if (email && name && msg) {
            setSuccess(true);
            setTimeout(() => {
                setForm({ email: "", name: "", msg: "" });
                setSuccess(false);
            }, 2000);
        } else {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 2000);
        }
    };
    return (
        <>
            {/* <!-- CONTACT --> */}
            <div className={ActiveIndex === 4 ? "cavani_tm_section active animated fadeInUp" : "cavani_tm_section hidden animated"} id="contact_">
                <div className="section_inner">
                    <div className="cavani_tm_contact">
                        <div className="cavani_tm_title">
                            <span>Напишите мне</span>
                        </div>
                        <div className="short_info">
                            <ul>
                                <li>
                                    <a target='_blank' rel='noreferrer' href='https://t.me/MrsCoco02' className="list_inner button_telegram">
                                        <i className="icon-telegram"></i>
                                        <span>Telegram</span>
                                    </a>
                                </li>
                                <li>
                                    <a target='_blank' rel='noreferrer' href='https://www.instagram.com/mrs_coco02/' className="list_inner button_instagram">
                                        <i className="icon-instagram-3"></i>
                                        <span>Instagram</span>
                                    </a>
                                </li>
                                <li>
                                    <div className="list_inner button_whatsapp">
                                        <i className="icon-whatsapp"></i>
                                        <span>+7 986 705-30-57</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="form">
                            <div className="left">
                                <div className="fields">
                                    {/* Contact Form */}
                                    <form className="contact_form" onSubmit={(e) => onSubmit(e)}>
                                        <div
                                            className="returnmessage"
                                            data-success="Your message has been received, we will contact you soon."
                                            style={{ display: success ? "block" : "none" }}
                                        >
                                            <span className="contact_success">
                                                Your message has been received, we will contact you soon.
                                            </span>
                                        </div>
                                        <div
                                            className="empty_notice"
                                            style={{ display: error ? "block" : "none" }}
                                        >
                                            <span>Please Fill Required Fields!</span>
                                        </div>
                                        {/* */}

                                        <div className="fields">
                                            <ul>
                                                <li
                                                    className={`input_wrapper ${active === "name" || name ? "active" : ""
                                                        }`}
                                                >
                                                    <input
                                                        onFocus={() => setActive("name")}
                                                        onBlur={() => setActive(null)}
                                                        onChange={(e) => onChange(e)}
                                                        value={name}
                                                        name="name"
                                                        id="name"
                                                        type="text"
                                                        placeholder="Name"
                                                    />
                                                </li>
                                                <li
                                                    className={`input_wrapper ${active === "email" || email ? "active" : ""
                                                        }`}
                                                >
                                                    <input
                                                        onFocus={() => setActive("email")}
                                                        onBlur={() => setActive(null)}
                                                        onChange={(e) => onChange(e)}
                                                        value={email}
                                                        name="email"
                                                        id="email"
                                                        type="email"
                                                        placeholder="Email"
                                                    />
                                                </li>
                                                <li
                                                    className={`last ${active === "message" || msg ? "active" : ""
                                                        }`}
                                                >
                                                    <textarea
                                                        onFocus={() => setActive("message")}
                                                        onBlur={() => setActive(null)}
                                                        name="msg"
                                                        onChange={(e) => onChange(e)}
                                                        value={msg}
                                                        id="message"
                                                        placeholder="Message"
                                                    />
                                                </li>
                                            </ul>
                                            <div className="cavani_tm_button">
                                                <input
                                                    className='a'
                                                    type="submit"
                                                    id="send_message"
                                                    value="Send Message"
                                                />
                                            </div>
                                        </div>
                                    </form>
                                    {/* /Contact Form */}
                                </div>
                            </div>
                            <div className="right">
                                <div className="map_wrap">
                                    <div className="map" id="ieatmaps">
                                        <iframe
                                            height={375}
                                            style={{ width: "100%" }}
                                            id="gmap_canvas"
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2304.402963519326!2d55.930757416084894!3d54.720126480289856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43d93af7e050e2d1%3A0x70a4fe81892c29fb!2z0JHQsNGI0LrQuNGA0YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YI!5e0!3m2!1sru!2sge!4v1663197852837!5m2!1sru!2sge"

                                        />
                                        <a href="https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon" />
                                        <br />
                                    </div>
                                </div>
                                {/* Get your API here https://www.embedgooglemap.net */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- CONTACT --> */}
        </>
    )
}

// <iframe
//     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2304.402963519326!2d55.930757416084894!3d54.720126480289856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43d93af7e050e2d1%3A0x70a4fe81892c29fb!2z0JHQsNGI0LrQuNGA0YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YI!5e0!3m2!1sru!2sge!4v1663197852837!5m2!1sru!2sge"
//     width="600" height="450" style="border:0;" allowFullScreen="" loading="lazy"
//     referrerPolicy="no-referrer-when-downgrade"></iframe>