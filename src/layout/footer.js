import React from 'react'

export default function Footer() {
    return (
        <>
            <footer>
                {/* <!-- FOOTER --> */}
                <div className="cavani_tm_footer">
                    <div className="copyright">
                        <p>Copyright &copy; 2022</p>
                    </div>
                    <div className="social">
                        <ul>
                            {/*<li><a href="#"><img className="svg" src="img/svg/social/facebook.svg" alt="" /></a></li>*/}
                            {/*<li><a href="#"><img className="svg" src="img/svg/social/twitter.svg" alt="" /></a></li>*/}
                            <li><a target='_blank' rel='noreferrer' href="https://www.instagram.com/mrs_coco02/"><img className="svg" src="img/svg/social/instagram.svg" alt="" /></a></li>
                            <li><a target='_blank' rel='noreferrer' href="https://vk.com/id167836632"><img className="svg" src="img/svg/social/vk.svg" alt="" /></a></li>
                            <li><a target='_blank' rel='noreferrer' href="https://t.me/MrsCoco02"><img className="svg" src="img/svg/social/telegram.svg" alt="" /></a></li>
                        </ul>
                    </div>
                </div>
                {/* <!-- /FOOTER --> */}
            </footer>
        </>
    )
}
