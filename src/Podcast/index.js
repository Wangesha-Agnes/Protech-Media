import React from "react";
import './index.css'
const Podcast = () =>{
    return(
    <div className ="Podcast">
        <div className="podcastTitle">
        <h1>Protechs Podcast</h1>
        <p>Welcome to ProTechs podcast where we talk about careers,
        <br></br>
        money, friendships and everything in between.
        Hosts: <li>Gladwell Wanjiku</li>
               <li>Jane Kibaara</li>
               <li>Fridah Wothaya</li>
               <li>Karen Philip</li>
               <li>Agnes Wangesha</li>
        </p>
        </div>
        <div className="episodes">
            <div className="mics">
            <figcaption className="podcasts">Life Lately</figcaption>
            <img src="/Images/headphones.jpeg" className="mic" alt=""/>
            <figcaption className="podcasts">Adulting</figcaption>
            <img src="/Images/headphones.jpeg" className="mic" alt=""/>
            </div>
            <div className="mics2">
            <figcaption className="podcasts">Career</figcaption>
            <img src="/Images/headphones.jpeg" className="mic" alt=""/>
            <figcaption className="podcasts">Getting ready for the workspace</figcaption>
            <img src="/Images/headphones.jpeg" className="mic" alt=""/>
            </div>
        </div>
        </div>
    )
}
export default Podcast;