import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaSpotify } from 'react-icons/fa';
import './css/article.css';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { blogData } from './data/blogData';
import {Loader} from './loader';


// // const cont = `Alan Walker is a Norwegian DJ and music producer who shot to fame with his hit song "Faded" in 2015. Since then, he has become a global EDM superstar, known for his unique sound, captivating performances, and signature mask and hoodie.

// ## Notable Concerts

// Alan Walker has performed at many notable concerts and festivals around the world, including:

// - **Tomorrowland:** One of the biggest music festivals in the world, held annually in Belgium. Walker has performed at Tomorrowland multiple times, including in 2017 and 2019.
// - **Coachella:** One of the most famous music festivals in the world, held annually in California. Walker made his Coachella debut in 2018.
// - **Nobel Peace Prize Concert:** An annual concert held in Oslo, Norway to celebrate the winner of the Nobel Peace Prize. Walker performed at the concert in 2018.

// ## Unique Sound

// Alan Walker's music is known for its unique sound, which features heavy use of vocal chops and melodic hooks. He often incorporates elements of orchestral music and cinematic soundscapes into his tracks, giving them an epic and emotional feel.

// ## Spotify Albums

// Alan Walker has released two studio albums on Spotify:

// - "Different World" (2018): This album features the hit songs "Faded" and "Alone," as well as collaborations with artists such as Sofia Carson and K-391.
//   - Listen on [Spotify](https://open.spotify.com/album/4gtxw8WwfpBJj4q3hnl9GJ?si=Ce9zD_EfTHKKxujjKupmCg)
// - "Walker Racing League Season 1" (2021): This album features 16 tracks, each named after a different racing track. The album was inspired by Walker's love of racing and features collaborations with artists such as CORSAK and Iselin Solheim.
//   - Listen on [Spotify](https://open.spotify.com/album/6DyG8s0eTDtR27j7VJehWx?si=Zc2jTzzTQJqNWfd8WlFbrg)

// ## Collaborations

// Alan Walker has collaborated with many other artists in the music industry. Some of his notable collaborations include:

// - Zara Larsson: In 2017, Walker collaborated with Swedish singer Zara Larsson on the song "Ruin My Life." The song was a commercial success and reached the top 10 in several countries.
// - Sabrina Carpenter: In 2018, Walker teamed up with American singer Sabrina Carpenter on the track "On My Way." The song has over 500 million views on YouTube and reached the top 10 in several countries.
// - Ava Max: In 2020, Walker collaborated with American singer Ava Max on the song "Alone, Pt. II." The song has over 300 million views on YouTube and has charted in several countries.

// ## Charitable Work

// In addition to his music career, Alan Walker is also involved in charitable work. In 2016, he partnered with the Norwegian charity organization SOS Children's Villages to create a campaign to help refugees in Syria. The campaign raised over $200,000 for the cause.

// Walker has also been an ambassador for the FIA Foundation's #3500LIVES campaign, which aims to raise awareness about road safety. He has also supported other charitable organizations such as Save the Children and The Ocean Cleanup.

// ## Future Plans

// Alan Walker shows no signs of slowing down. In a recent interview, he stated that he plans to release more music in the near future, including collaborations with other artists. He also hinted at the possibility of a new album in the works.

// Fans can look forward to more music from him in the future, and it will be exciting to see what he has in store for us.

// // `;

export const Article = props => {
    const { artist } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});

    useEffect(() => {
        if (typeof blogData[artist] === typeof undefined) {
            navigate('/404', { replace: true })
        } else {
            setData(blogData[artist]);
            setTimeout(()=>setLoading(false), 2000);

        }
    }, []);

    return <div className='article'>
        <div className='main'>
            <div className='sidebar'>
                <div className='sidebar-main'>
                    <Link to='/'><h1>Musical Memoirs</h1></Link>
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
                        <span style={{ display: 'inline-flex', alignItems: 'center', marginRight: "2rem", fontSize: '1.3rem' }}><AiOutlineHeart style={{ marginRight: '.5rem' }} />{data.likes+ " Like"+(data.likes==1?"":"s")} </span>
                    </div>
                    <div className='content'>
                        <Markdown content={data.content} avatar={[data.avatarLink, data.avatarCaption]} data={data}/>
                        {/* <img className='back-2' src='https://lastfm.freetls.fastly.net/i/u/770x0/e6a4d07a9499cc1c868a6f9c696c9454.jpg#e6a4d07a9499cc1c868a6f9c696c9454'/> */}
                    </div>
                    <div className='bottom-links'>
                        <a href={data.spotifyProfile} target="_blank"><button className='spotify'><FaSpotify />Follow on Spotify</button></a>
                        <a href={data.offlWebsite} target="_blank"><button className='website'><img src={data.offlLogo} />Visit Website</button></a>
                    </div>
                </div>
            </div>
            <div className='share-side'>
                <div className='share-side-main'></div>

            </div>
        </div>
        <Loader display={loading}/>
    </div>
}

const Markdown = props => {
    const [content, setContent] = useState("");
    const elements = [
        `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/3nzuGtN3nXARvvecier4K0?utm_source=generator&theme=0" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
        `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/4pOEwzaAsyQwh40tCEEcVV?utm_source=generator&theme=0" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`
    ];

    useEffect(() => {
        const cont = `![${props.avatar[1]}](${props.avatar[0]}) ` + props.content;
        setContent(cont)
        console.log(props)
    }, [props]);

    useEffect(() => {
        let toc = `<a href="#top"><li>Introduction</li></a> `;
        document.querySelectorAll('.markdown a').forEach(el => {
            el.setAttribute('target', '_blank');
        });
        

        document.querySelectorAll('.markdown h2').forEach(el => {
            el.setAttribute('id', el.innerText);
            console.log(el);
            toc += `<a href="#${el.innerText}"><li>${el.innerText}</li></a> `;
        });

        document.querySelector('.toc').children[1].innerHTML = toc;

        (() => {
            let i = 0;
            document.querySelectorAll('li').forEach(el => {
                if (el.children[0] && el.children[0].tagName === 'A' && el.children[0].innerHTML === 'Spotify') {
                    el.innerHTML = props.data.albumLinks[i];
                    el.style.listStyle = 'none';
                    el.parentElement.style.paddingLeft = 0;
                    i++;
                }
            })
        })();

    }, [content]);
    return <ReactMarkdown className='markdown' components={{ hr: CustomHr, img: CustomFigure }} remarkPlugins={[remarkGfm]} children={content} />;
}

const CustomFigure = props => {
    return <span className='avatar'><img src={props.src} /><span>{props.alt}</span></span>
}

const CustomHr = () => {
    return <p style={{ borderTop: '1px solid red', margin: '1.5rem 0' }} />
}

const CustomCode = ({ inline, node, children }) => {

    // const match = /language-(\w+)/.exec(node.properties.className || '')
    // return !inline && match ? (
    //     <ReactSyntaxHighlighter
    //         children={String(children).replace(/\n$/, '')}
    //         // style={'dark'}
    //         language={match[1]}
    //         PreTag="div"

    //     />
    // ) : (
    //     <code className={node.properties.className} {...node}>
    //         {children}
    //     </code>
    // )


    return <div className='code'>
        <code>{children}</code>
    </div>
}