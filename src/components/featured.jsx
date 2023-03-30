import React, { useEffect } from "react";
import Flickity from "react-flickity-component";
import { RxCaretUp } from 'react-icons/rx';
import 'aos/dist/aos.css';
import './css/featured.css';
import './css/flickity.css';
import { useNavigate, Link } from "react-router-dom";
import { blogData, featured } from "./data/blogData";


const Carousel = props => {
    const navigate = useNavigate();

    const clickItem = el => {
        navigate('/article' + el);
    }

    return <div className='carousel'>
        <Flickity options={{ wrapAround: true, initialIndex: 1, prevNextButtons: false, autoPlay: true }} disableImagesLoaded={false} static={false} reloadOnUpdate={true}>
            {featured.map((el, i) => {
                const data = blogData[el];
                return <div className='carousel-item' key={i}>
                    <div className='carousel-content'>
                        <img src={data.avatarLink} />
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: 'space-between' }}>
                            <h3>{data.title}</h3>
                            <p>{data.content.split('\n')[0]}</p>
                            <Link to={'/article/' + el}>Read More</Link>
                        </div>
                    </div>

                </div>
            })}
        </Flickity>
    </div>
}

export const Featured = props => {

    return <section className="featured" data-aos='fade-up' data-aos-offset=''>
        <div className="carousel-wrapper">
            <h2 style={{ top: 0 }}>Featured</h2>
            <Carousel />
            <h2 style={{ bottom: "2.5rem" }}>Featured</h2>
        </div>
        <div className='caret-container'>
            <a href="#new-arrival">
                <RxCaretUp className='caret' />
            </a>
        </div>
    </section>
}