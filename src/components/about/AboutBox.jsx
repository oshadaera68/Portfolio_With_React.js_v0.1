import React from 'react'

const AboutBox = () => {
    return (
        <div className="about__boxes grid">
            <div className="about__box">
                <i className="about__icon icon-fire"></i>
                <div>
                    <div className="about__title">23+</div>
                    <span className="about__subtitle">Project completed</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-cup"></i>
                <div>
                    <div className="about__title">56+</div>
                    <span className="about__subtitle">Cup of coffee</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-people"></i>
                <div>
                    <div className="about__title">15+</div>
                    <span className="about__subtitle">Satisfied clients</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-badge"></i>
                <div>
                    <div className="about__title">21+</div>
                    <span className="about__subtitle">Nominees winner</span>
                </div>
            </div>

        </div>
    )
}

export default AboutBox
