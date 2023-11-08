import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import '../scss/css/homepage.css';

import {RxAvatar} from 'react-icons/rx';
import {AiOutlineArrowRight} from 'react-icons/ai'
import {AiFillStar} from 'react-icons/ai'

import heroImg from '../assets/hero-image.webp';
import step1 from '../assets/step1.webp';
import step2 from '../assets/step2.webp';
import step3 from '../assets/step3.webp';
import quizImg from '../assets/quiz-img.jpg';
import health1 from '../assets/health1.jpg';
import health2 from '../assets/health2.jpg';
import health3 from '../assets/health3.jpg';

const Homepage = () => {
  return (
    <>
    <div className='top'>
        <div className='nav'>
            <p className='name'>Fit Fanatics&trade;</p>
            <RxAvatar  className='avatar'/>
        </div>
        <div className='hero'>
            <section left>
                <img src={heroImg} className='heroImg'></img>
            </section>
            <section className='right'>
                <p className='p1'>Fastest growing fitness community in 2023</p>
                <p className='p2'><span className='bold'>Join Fit Fanatics</span><br/> and realize your fitness potential</p>
                <p className='p3'>Follow guided weekly workout routines, discover your daily caloric needs and take your health into your own hands</p>
                <button className='hero-btn'>Start today <AiOutlineArrowRight className='button-arrow'/></button>
            </section>
        </div>
    </div>
    <div className='middle'>
        <section className='rating'>
            <AiFillStar className='star'/>
            <AiFillStar className='star'/>
            <AiFillStar className='star'/>
            <AiFillStar className='star'/>
            <AiFillStar className='star'/>
        </section>
        <section className='rating2'>
            <p className='ratingText'>
                over 200,000 5-Star reviews in 2023!
            </p>
            <Carousel className='carousel'
            showArrows='false'
            showStatus='false'
            interval={1000}>
                <div>
                    <p className="rating-item">"I have never felt more in-control of my health!"<br/> -Amanda Quilcox<br/>Nashville, Tennessee</p>
                </div>
                <div>
                    <p className="rating-item">"Extremely simple to use app! It's helped me lose over 30lbs!"<br/> -Brian Juice<br/>Los Angeles, California</p>
                </div>
                <div>
                    <p className="rating-item">"The recommended workout programs are extremely effective"<br/> -Florence Catanaugh<br/>Chicago, Illinois</p>
                </div>
                <div>
                    <p className="rating-item">"The bread and butter of my fitness journey. I can't go a day without this app!"<br/> -Justin Time<br/>Seattle, Washington</p>
                </div>
                <div>
                    <p className="rating-item">"Such an amazing community! Everyone on here is so uplifting and supportive."<br/> -Alexis Allan<br/>Dallas, Texas</p>
                </div>
            </Carousel>
        </section>
    </div>
    <div className='steps'>
        <h3 className='steps-header'>It's as simple as 1, 2, 3!</h3>
        <section className='step1'>
            <img src={step1} alt='Step 1' className='step1img'></img>
            <div className='steps-container'>   
                <p className='step-header'>1</p>
                <p className='step-text-header'>Register today and begin your journey</p>
                <p className='step-text'>Based on your entered information, this step will give you immediate insight into your required daily calories and recommended exercise plan. </p>
            </div>
        </section>
        <section className='step2'>
            <img src={step2} alt='Step 2' className='step2img'></img>
            <div className='steps-container'>   
                <p className='step-header'>2</p>
                <p className='step-text-header'>Enter your individualized information</p>
                <p className='step-text'>Based on your entered information, this step will give you immediate insight into your required daily calories and recommended exercise plan. </p>
            </div>
        </section>
        <section className='step3'>
            <img src={step3} alt='Step 3' className='step3img'></img>
            <div className='steps-container'>   
                <p className='step-header'>3</p>
                <p className='step-text-header'>Follow the steps in your personalized program</p>
                <p className='step-text'>Follow your provided plan as closely as possible, and you will begin noticing results sooner than you think!</p>
            </div>
        </section>
    </div>
    <div className='quiz'>
        <div className='quiz-content'>
            <div className='quiz-left'>
        <h4 className='quiz-header'>Have 2-3 minutes to spare?</h4>
                <p className='quiz-text'>Get your <span className='bold'>personalized plan</span> instantly</p>
                <button className='quiz-btn'>Take the quiz <AiOutlineArrowRight className='button-arrow'/></button>
            </div>
            <div className='quiz-right'>
                <img src={quizImg} className='quizImg' alt='Quiz'></img>
            </div>
        </div>
    </div>
    <div className='bottom'>
        <section className='bottom-left'>
            <img src={health1} className='healthImg1' alt='Health'></img>
            <img src={health2} className='healthImg2' alt='Health'></img>
            <img src={health3} className='healthImg3' alt='Health'></img>
        </section>
        <section className='bottom-right'>
            <p className='bottom-header'>Our Philosophy</p>
            <p className='bottom-text1'>“Studies show people who keep a food diary are more likely to hit their goals."</p>
            <p className='bottom-text2'>"Healthy eating is a continuous journey of self-discovery. And the more you track, the more empowered you will become to make healthy choices that support your goals.”</p>
            <p className='bottom-quote'>- Stephanie Nelson, Registered Dietitian</p>
        </section>
    </div>
    <div className='footer'>
        <section className='footer1'>
            <h2 className='footer-header'>Fit Fanatic</h2>
            <button className='footer-btn'>Start Today <AiOutlineArrowRight className='button-arrow'/></button>
        </section>
        <section className='footer2'>
            <h3 className='list-header'>Products</h3>
            <li className='list-item'>Food</li>
            <li className='list-item'>Exercise</li>
            <li className='list-item'>Apps</li>
            <li className='list-item'>Premium</li>
        </section>
        <section className='footer3'>
            <h3 className='list-header'>Resources</h3>
            <li className='list-item'>Blog</li>
            <li className='list-item'>Community</li>
            <li className='list-item'>Contact Us</li>
            <li className='list-item'>Support Center</li>
        </section>
        <section className='footer4'>
            <h3 className='list-header'>Company</h3>
            <li className='list-item'>About Us</li>
            <li className='list-item'>Careers</li>
            <li className='list-item'>Press</li>
        </section>
    </div>
    </>
  )
}

export default Homepage
