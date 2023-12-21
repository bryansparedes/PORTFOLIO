import { useState } from 'react'
import './services.css'

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index)
    }
    return (
        <section className="services section" id="services">
            <h2 className="section__title">
                Services
            </h2>
            <span className="section__subtitle">
                What I Offer
            </span>
            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"/>
                        <h3 className="services__title">Product Designer</h3>
                    </div>
                    <span className="services__button" onClick={() => toggleTab(1)}>
                        View More
                        <i className="uil uil-arrow-right services__button-icon"/>
                    </span>
                    <div className={toggleState === 1 ? 'services__modal active-modal' : 'services__modal'}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"/>
                            <h3 className="services__modal-title">Visual Designer</h3>
                            <p className="services__modal-description">
                                Service with more than 3 years of experience.
                                Providing quiality work to clients and companies.
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"/>
                                    <p className="services__modal-info">
                                        I develop the user Interface.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"/>
                                    <p className="services__modal-info">
                                        Web Page Development
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"/>
                                    <p className="services__modal-info">
                                        I position your company brand.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"/>
                        <h3 className="services__title">Product Designer</h3>
                    </div>
                    <span className="services__button" onClick={() => toggleTab(1)}>
                        View More
                        <i className="uil uil-arrow-right services__button-icon"/>
                    </span>
                    <div className={toggleState === 1 ? 'services__modal active-modal' : 'services__modal'}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"/>
                            <h3 className="services__modal-title">Visual Designer</h3>
                            <p className="services__modal-description">
                                Service with more than 3 years of experience.
                                Providing quiality work to clients and companies.
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"/>
                                    <p className="services__modal-info">
                                        I develop the user Interface.
                                    </p>
                                </li>
                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"/>
                                    <p className="services__modal-info">
                                        Web Page Development
                                    </p>
                                </li>
                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"/>
                                    <p className="services__modal-info">
                                        I position your company brand.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"/>
                        <h3 className="services__title">Product Designer</h3>
                    </div>
                    <span className="services__button" onClick={() => toggleTab(1)}>
                        View More
                        <i className="uil uil-arrow-right services__button-icon"/>
                    </span>
                    <div className={toggleState === 1 ? 'services__modal active-modal' : 'services__modal'}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"/>
                            <h3 className="services__modal-title">Visual Designer</h3>
                            <p className="services__modal-description">
                                Service with more than 3 years of experience.
                                Providing quiality work to clients and companies.
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"/>
                                    <p className="services__modal-info">
                                        I develop the user Interface.
                                    </p>
                                </li>
                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"/>
                                    <p className="services__modal-info">
                                        Web Page Development
                                    </p>
                                </li>
                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"/>
                                    <p className="services__modal-info">
                                        I position your company brand.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services