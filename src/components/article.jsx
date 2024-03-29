import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaDiscord, FaFacebook, FaFacebookF, FaInstagram, FaLinkedinIn, FaSpotify, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import { blogData } from './data/blogData';
import { Loader } from './loader';
import './css/article.css';
import logo from '../assets/logo.png';

export const Article = props => {
    const { artist } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});

    const shareText = `Music lovers, you won't want to miss my latest blog post featuring exclusive insights into the lives of your favorite artists..\nClick on the link below:\n`;

    useEffect(() => {
        if (typeof blogData[artist] === typeof undefined) {
            navigate('/404', { replace: true })
        } else {
            setData(blogData[artist]);
            document.title = artist.split('-').map(el => el[0].toUpperCase() + el.slice(1)).join(' ') + ' | Musical Memoirs'
            setTimeout(() => setLoading(false), 2000);

        }
    }, []);

    return <div className='article'>
        <div className='main'>
            <div className='sidebar'>
                <div className='sidebar-main'>
                    <Link to='/'><img src={logo} /></Link>
                    <div className='toc'>
                        <h2>Table of Contents:</h2>
                        <ul>
                        </ul>
                    </div>
                </div>
            </div>


            <div className='body'>
                <div className='body-main'>
                    <h1 id="top">{data.title}</h1>
                    <div style={{ display: 'flex', alignItems: 'center', paddingLeft: "2rem", justifyContent: 'space-between' }}>
                        <span><span style={{ fontFamily: '"Redressed", sans-serif', 'fontSize': '1.3rem' }}>{data.author}</span><span className='sep'>{'\u2022'}</span><span>{data.username}</span><span className='sep'>{'\u2022'}</span>{data.time}<span className='sep'>{'\u2022'}</span>{data.date}</span>
                        <span style={{ display: 'inline-flex', alignItems: 'center', marginRight: "2rem", fontSize: '1.3rem' }}><AiOutlineHeart style={{ marginRight: '.5rem' }} />{data.likes + " Like" + (data.likes == 1 ? "" : "s")} </span>
                    </div>
                    <div className='content'>
                        <Markdown content={data.content} avatar={[data.avatarLink, data.avatarCaption]} data={data} />
                    </div>
                    <div className='bottom-links'>
                        <a href={data.spotifyProfile} target="_blank"><button className='spotify'><FaSpotify />Follow on Spotify</button></a>
                        <a href={data.offlWebsite} target="_blank"><button className='website'><img src={data.offlLogo} />Visit Website</button></a>
                    </div>
                </div>
            </div>
            <aside className='share-side'>
                <div className='share-side-main'>
                    <div className='share-container'>
                        <a href={"whatsapp://send??text=" + shareText + window.location.origin + window.location.pathname}><FaWhatsapp /></a>
                        <a href={'https://www.facebook.com/sharer.php?description=' + encodeURIComponent(window.location.origin + window.location.pathname)} target='_blank'><FaFacebookF /></a>
                        <a><FaInstagram /></a>
                        <a href={`
https://www.linkedin.com/shareArticle?mini=true&url=${window.location.origin + window.location.pathname}&title=Musical%20Memoirs&summary=` + shareText} target="_blank"><FaLinkedinIn /></a>
                        <a href={`
http://twitter.com/share?text=${shareText}&url=${window.location.origin + window.location.pathname}`} target='_blank'><FaTwitter /></a>
                        <a><FaDiscord /></a>
                    </div>
                </div>

            </aside>
        </div>
        <Loader display={loading} />
    </div>
}

const Markdown = props => {
    const [content, setContent] = useState("");
    useEffect(() => {
        const cont = `![${props.avatar[1]}](${props.avatar[0]}) ` + props.content;
        setContent(cont)
    }, [props]);

    useEffect(() => {
        let toc = `<a href="#top"><li>Introduction</li></a> `;
        document.querySelectorAll('.markdown a').forEach(el => {
            el.setAttribute('target', '_blank');
        });


        document.querySelectorAll('.markdown h2').forEach(el => {
            el.setAttribute('id', el.innerText);
            toc += `<a href="#${el.innerText}"><li>${el.innerText}</li></a> `;
        });

        document.querySelector('.toc').children[1].innerHTML = toc;

        (() => {
            let i = 0;
            document.querySelectorAll('li').forEach(el => {
                if (el.children[0] && el.children[0].tagName === 'A' && el.children[0].innerHTML === 'Spotify') {
                    el.removeChild(el.children[0]);
                    el.innerHTML = el.innerHTML + props.data.albumLinks[i];
                    el.style.listStyle = 'none';
                    el.parentElement.style.paddingLeft = 0;
                    i++;
                }
            })
        })();

    }, [content]);
    return <ReactMarkdown className='markdown' components={{ img: CustomFigure }} remarkPlugins={[remarkGfm]} children={content} />;
}

const CustomFigure = props => {
    return <span className='avatar'><img src={props.src} /><span>{props.alt}</span></span>
}
