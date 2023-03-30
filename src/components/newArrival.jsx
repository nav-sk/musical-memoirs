import React from 'react';
import './css/newarrival.css';
import { useEffect } from 'react';
import { blogData, newArrival } from './data/blogData';
import { useNavigate } from 'react-router-dom';

const NewItem = (props) => {
    const navigate = useNavigate();
    return <div className='new-item'>
        <div className='new-item-container'>
            <img src='https://picsum.photos/200/200' />
            <div style={{ display: 'flex', flexDirection: 'column', padding: "1rem", position: 'relative', width: '100%' }}>
                <h3>This is Title</h3>
                <div style={{ flexShrink: 0, flexGrow: 1, paddingTop: '.5rem' }}>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit veniam similique ad delectus repudiandae eligendi, quibusdam distinctio quidem. Molestiae nobis velit optio? Nulla saepe perspiciatis accusamus nam unde minus quibusdam?</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }} className="item-footer">
                    <p>20 min read</p>
                    <p>12/03/2023</p>
                </div>
                <p className='read' onClick={e => navigate('/article/' + e.currentTarget.getAttribute('data-id'))}>Read Now</p>
            </div>
        </div>
    </div>
}

const NewArrival_ = props => {
    useEffect(() => {
        document.querySelectorAll('.new-side:first-child > .new-item').forEach(el => { el.setAttribute('data-aos', 'fade-right'); el.setAttribute('data-aos-offset', '0'); });
        document.querySelectorAll('.new-side:last-child > .new-item').forEach(el => { el.setAttribute('data-aos', 'fade-left'); el.setAttribute('data-aos-offset', '0'); });
        document.querySelectorAll('.new-side > .new-item').forEach((el, i) => {
            let container = el.children[0];
            container.children[0].src = blogData[newArrival[i]].avatarLink;
            container.children[1].children[0].innerText = blogData[newArrival[i]].title.split('-')[0];
            container.children[1].children[1].children[0].innerHTML = blogData[newArrival[i]].content.split('\n')[0];
            container.children[1].children[2].children[1].innerHTML = blogData[newArrival[i]].date;
            container.children[1].children[3].setAttribute('data-id', newArrival[i]);
        });

    }, []);

    return <div id="new-arrival" className='new-arrival-main'>
        <div style={{ marginTop: "100px" }} />
        <h2>New Arrival</h2>
        <div className='new-container'>
            <div className='new-line' />
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <div className='new-side'>
                    <NewItem />
                    <div className='spacer' />
                    <NewItem />
                    <div className='spacer' />
                    <NewItem />
                    <div className='spacer' />
                </div>
                <div className='new-side'>
                    <NewItem />
                    <div className='spacer' />
                    <NewItem />
                    <div className='spacer' />
                    <NewItem />
                </div>
            </div>
        </div>
    </div>
}

export const NewArrival = (props) => {
    return <section className='new-arrival'>
        <NewArrival_ />
    </section>
}