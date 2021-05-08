import React from "react"
import { Link } from "react-router-dom"
// import Figma from "./figma/Figma"
import cv from "../../assets/cv.pdf"
import Footer from "../footer/Footer"
import "./styles.css"

const About = () => {
    return (
        <div className="about">
            <div className="options">
                <div className="navigate">
                    <Link to="/dashboard">
                        <p>Return Home</p>
                    </Link>
                </div>
                <div className="navigate div2">
                    <Link to={cv}  rel="noopener noreferrer" target="_blank">
                        <p>Download CV</p>
                    </Link>
                </div>
            </div>
            <div className="about-text">
                <div>
                    <p>My name is Chiedu Mokwunye and I Live in Lagos. I am a Tech enthusiast and I love love Igbo.</p>
                </div>
                <div>
                    <p>I have close to two (2) years experience with ReactJs and NodeJs and six (6) months experience with React Native (Android and iOS). </p>
                </div>
                <div className="projects">
                    <p className="title">Work Collections </p>
                    <div>
                        <p>TBook: Tax news, Salary payment and Bill payment mobile application.
                                In simple terms we have created a wallet system where salaries are paid to, at the same time bringing you fullaccess to all tax and finance related news/happenings in Nigeria. While stop there and allow you remove your funds from our wallet and just forget us🤷‍♀️, we included bills payment (CableTV, Internet, Airtime, Electricity and LCC).</p>
                        <a href="https://apps.apple.com/us/app/tbook/id1535069197" className="links" target="_blank" rel="noreferrer">
                            <p>TBook - iOS</p>
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=ng.com.taxtech.tbook" className="links" target="_blank" rel="noreferrer">
                            <p>TBook - Android</p>
                        </a>
                    </div>

                    <div className="sub-heads">
                        <p>NDP Assessment: Data Protection in Nigeria has grown since its enaction in 2019.
                                We understand that, and have built an assessment portal for our newly trained Data Protection Officers to take their tests and become certified.</p>
                        <a href="https://ndpracademy.taxit.com.ng/login" className="links" rel="noreferrer" target="_blank">
                            <p>NDP Assessment</p>
                        </a>
                    </div>

                    <div>
                        <a href="https://play.google.com/store/apps/details?id=com.andromo.dev494239.app739124&showAllReviews=true" className="links" rel="noreferrer" target="_blank">
                            <p>Baking Recipes</p>
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.andromo.dev494239.app578430" className="links" rel="noreferrer" target="_blank">
                            <p>Baking Tutorials</p>
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.ovulationtracker" className="links" rel="noreferrer" target="_blank">
                            <p>Ovulation Calculator</p>
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.rock_paper_scissors.fav" className="links" rel="noreferrer" target="_blank">
                            <p>Rock Paper Scissors</p>
                        </a>
                    </div>

                    <div className="sub-heads">
                        <p>Figma Designs Loading</p>
                        {/* <Figma /> */}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About