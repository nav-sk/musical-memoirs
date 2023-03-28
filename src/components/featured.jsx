import React, { useEffect } from "react";
import Flickity from "react-flickity-component";
import { RxCaretUp } from 'react-icons/rx';
import ScrollReveal from "scrollreveal";
import './css/featured.css';
import './css/flickity.css';


const Carousel = props => {

    return <div className='carousel'>
        <Flickity options={{ wrapAround: true, initialIndex: 1, prevNextButtons: false, autoPlay: true }} disableImagesLoaded={false} static={false} reloadOnUpdate={true}>
            <div className='carousel-item'>
                <div className='carousel-content'>
                    <img src="https://picsum.photos/600/300" />
                    <div>
                        <h3>This is Title</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit quas provident illo facilis aliquam. Eum cupiditate mollitia dignissimos natus ratione cumque, deleniti, ipsam nulla molestiae consectetur sint tempore. Aut, tempore?</p>
                        <a href="#">Read More</a>
                    </div>
                </div>

            </div>
            <div className='carousel-item'>
                <div className='carousel-content'>
                    <img src="https://picsum.photos/600/300" />
                    <div>
                        <h3>This is Title</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit quas provident illo facilis aliquam. Eum cupiditate mollitia dignissimos natus ratione cumque, deleniti, ipsam nulla molestiae consectetur sint tempore. Aut, tempore?</p>
                        <a href="#">Read More</a>
                    </div>
                </div>

            </div>
            <div className='carousel-item'>
                <div className='carousel-content'>
                    <img src="https://picsum.photos/600/300" />
                    <div>
                        <h3>This is Title</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit quas provident illo facilis aliquam. Eum cupiditate mollitia dignissimos natus ratione cumque, deleniti, ipsam nulla molestiae consectetur sint tempore. Aut, tempore?</p>
                        <a href="#">Read More</a>
                    </div>
                </div>

            </div>
        </Flickity>
    </div>
}

export const Featured = props => {
    useEffect(() => {
        ScrollReveal().reveal('.featured', {delay: 250, origin: "bottom", distance: "100px"})
    }, []);
    return <section className="featured">
        <div className="carousel-wrapper">
        <h2 style={{top: 0}}>Featured</h2>
        <Carousel />
        <h2 style={{bottom: "2.5rem"}}>Featured</h2>
        </div>
        <div className='caret-container'>
            <a href="#new-arrival">
                <RxCaretUp className='caret' />
            </a>
        </div>
    </section>
}