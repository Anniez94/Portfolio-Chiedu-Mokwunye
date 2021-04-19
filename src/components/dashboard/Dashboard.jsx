import React, { useState } from "react"
import { useSpring, animated as a } from 'react-spring'
import { Link } from "react-router-dom"
import dashboardImg from "../../assets/portfolio-dashboard.svg"
import dashboardImg2 from "../../assets/portfolio-dashboard2.svg"
import medium from "../../assets/medium.svg"
import twitter from "../../assets/twitter.svg"
import linkedin from "../../assets/linkedin.svg"
// import cool from "../../assets/cool.png"
import menu from "../../assets/menu.svg"
import closemenu from "../../assets/close.png"
import gmail from "../../assets/gmail.svg"
import './styles.css'
import Footer from "../footer/Footer"

const Dashboard = () => {
    const [flipped, set] = useState(false);
    const [lang, setLang] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 }
    })

    console.log(window.screen.height)
    return (
        <div id={!showMenu ? "dashboard" : "dashboard2"}>
            <div className={showMenu ? "remove-all" : ""}>
                
                <div onClick={() => { set(state => !state); setLang(!lang) }} >
                    <a.img src={dashboardImg} alt="dashboard-image" className="c back " style={{ opacity: opacity.interpolate(o => 1 - o), transform }} />
                    <a.img src={dashboardImg2} alt="dashboard-image" className="c front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} />
                </div>
               
                <div className="icon-container">
                    <div className="icons">
                        <a href="https://igbo-dev.medium.com/" target="_blank" rel="noreferrer">
                            <img src={medium} alt="medium icon" />
                        </a>
                    </div>
                    <div className="icons">
                        <a href="https://twitter.com/Igbo_dev_" target="_blank" rel="noreferrer">
                            <img src={twitter} alt="twiiter icon" />
                        </a>
                    </div>
                    <div className="icons">
                        <a href="https://www.linkedin.com/in/chiedu-mokwunye-984786150/" target="_blank" rel="noreferrer">
                            <img src={linkedin} alt="linkedin icon" />
                        </a>
                    </div>
                    <div className="icons">
                        <a href="mailto:osasmok94@gmail.com" >
                            <img src={gmail} alt="gmail icon" />
                        </a>
                    </div>
                </div>
                <div className="more-info">
                    {!lang ?
                        <p>Hi Employer, click the image.</p> :
                        <p>I am just an email away.</p>
                    }
                </div>

                <div className="menu-hold" onClick={() => setShowMenu(true)}>
                        <img src={menu} alt="menu icon" className="menu" />
                </div>
            </div>
            {showMenu ?
                <a.div id="full-menu">
                    <div className="nav">
                        <div className="navs">
                            <Link to="/about-me">
                                <p className="navs-p">About</p>
                            </Link>
                        </div>
                        <div className="navs">
                            <p className="navs-p">Works</p>
                        </div>

                    </div>
                    <div className="menu-open">
                        <div onClick={() => setShowMenu(false)}>
                            <img src={closemenu} alt="close icon" className="close-menu" />
                        </div>
                    </div>
                </a.div>
                : null}
                <div className="foot">
                <Footer />
                </div>
               
        </div>
    )
}


export default Dashboard;