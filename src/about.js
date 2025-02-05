import React from 'react';
import './css/about.css';
import { ReactComponent as Folder } from './assets/folder.svg';
import { ReactComponent as Controller } from './assets/controller.svg';
import { ReactComponent as UI } from './assets/ui.svg';
import { ReactComponent as Lego } from './assets/lego.svg';
import { ReactComponent as Skiing } from './assets/skiing.svg';
import { ReactComponent as Horror } from './assets/horror.svg';
import { ReactComponent as Hiking } from './assets/hiking.svg';
import AboutImage from './assets/about.jpg';

function AboutPage() {
    return (
        <div id="about" className="about">
            <h2 className="about-header" >About Me</h2>
            <div className="about-content">
                <img src={AboutImage} alt='Dan Blais' className="about-image" />
                <div className="about-text-container">
                    <div className="location-container">
                      <h3 className="location">
                        <div className="location-dot"></div>Ottawa, ON
                      </h3>
                      <h3 className="location">
                        <div className="location-dot"></div>Remote - Nationwide
                      </h3>
                    </div>
                    <p className="about-text">
                        My name is Dan Blais, I am a young but experienced programmer living in Ottawa, ON. I have a passion
                        for web and UI development and come from a background of creating games in Java and Python. In terms of web
                        development, I have experience in both back-end and front-end development and am focused on creating efficient,
                        and secure websites with a focus on visually pleasing and user-friendly interfaces. You deserve a modern, 
                        and visually stunning website, let me help you create yours!
                    </p>
                    <div className="hobbies">
                        <div className="hobbies-top">
                          <div className="osx-dot-container">
                            <div className="osx-dot"></div>
                            <div className="osx-dot"></div>
                            <div className="osx-dot"></div>
                          </div>
                          <div className="hobbies-header-container">
                            <Folder className="folder-icon" />
                            <h3 className="hobbies-header">My Hobbies</h3>
                          </div>
                        </div>
                        <div className="hobbies-seperator"></div>
                        <div className="hobbies-text-container">
                            <button className="hobbies-button">
                                <Controller className="hobbies-icon" />
                                <p className="hobbies-text">Game Development</p>
                            </button>
                            <button className="hobbies-button">
                                <UI className="hobbies-icon" />
                                <p className="hobbies-text">UI Design</p>
                            </button>
                            <button className="hobbies-button">
                                <Lego className="hobbies-icon" />
                                <p className="hobbies-text">Lego</p>
                            </button>
                            <button className="hobbies-button">
                                <Skiing className="hobbies-icon" />
                                <p className="hobbies-text">Skiing</p>
                            </button>
                            <button className="hobbies-button">
                                <Hiking className="hobbies-icon" />
                                <p className="hobbies-text">Hiking</p>
                            </button>
                            <button className="hobbies-button">
                                <Horror className="hobbies-icon" />
                                <p className="hobbies-text">Horror Movies</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;