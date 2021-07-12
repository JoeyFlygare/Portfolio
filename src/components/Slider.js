import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {isMobile} from 'react-device-detect';


function ImageSlider() {
    let slides = 3;
    if (isMobile) {
        slides = 1;
    }
    let settings = {
        dots: true,
        arrows: true,
        infinite: true,
        centerMode: false,
        speed: 500,
        slidesToShow: slides,
        slidesToScroll: 1,
        cssEase: "linear"
    }
    return (
        <Slider {...settings}>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="images/DarkDespairSS.jpg" alt={"Screenshot - Dark Despair Game"} />
                    </div>
                    <ul className="social-icons">
                        <li><a href="https://github.com/JoeyFlygare/Habit-Rabbit" target={"_blank"} rel={"noopener noreferrer"}>
                            <i className="fa fa-github-square"/></a></li>
                        <li><a href="https://powerful-inlet-28196.herokuapp.com/" target={"_blank"} rel={"noopener noreferrer"}>
                            <i className="fa fa-external-link-square"/></a></li>
                    </ul>
                    <div className="details">
                        <h2>Habbit Rabbit: <span className="description">Habit Tracking Web App</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="images/jumperSS.jpg" alt={"Screenshot - Jump Game"} />
                    </div>
                    <ul className="social-icons">
                        <li><a href="https://github.com/JoeyFlygare/The-NIght-Planner" target={"_blank"} rel={"noopener noreferrer"}>
                            <i className="fa fa-github-square"/></a></li>
                        <li><a href="https://suzylebel.github.io/BreakoutRoom_17/" target={"_blank"} rel={"noopener noreferrer"}>
                            <i className="fa fa-external-link-square"/></a></li>
                    </ul>
                    <div className="details">
                        <h2>The Night Planner: <span className="description">Online Planning Application</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="images/androidSS.jpg" alt={"Screenshot - ComChat Android App"}/>
                    </div>
                    <ul className="social-icons">
                        <li><a href="https://github.com/JoeyFlygare/PandaPatter" target={"_blank"} rel={"noopener noreferrer"}>
                            <i className="fa fa-github-square"/></a></li>
                        <li><a href="https://pandapatter.herokuapp.com/" target={"_blank"} rel={"noopener noreferrer"}>
                            <i className="fa fa-youtube"/></a></li>
                    </ul>
                    <div className="details">
                        <h2>Panda Patter:<span className="description"> Translator Web Application</span></h2>
                    </div>
                </div>
            </div>
            {/*<div className="card-wrapper">*/}
            {/*    <div className="card">*/}
            {/*        <div className="card-image">*/}
            {/*            <img src="images/16.jpg" />*/}
            {/*        </div>*/}
            {/*        <ul className="social-icons">*/}
            {/*            <li><a href="#"><i className="fa fa-facebook"></i></a></li>*/}
            {/*            <li><a href="#"><i className="fa fa-instagram"></i></a></li>*/}
            {/*            <li><a href="#"><i className="fa fa-twitter"></i></a></li>*/}
            {/*            <li><a href="#"><i className="fa fa-dribbble"></i></a></li>*/}
            {/*        </ul>*/}
            {/*        <div className="details">*/}
            {/*            <h2>John Doe <span className="description">UI Developer</span></h2>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </Slider>
    )
}

export default ImageSlider;