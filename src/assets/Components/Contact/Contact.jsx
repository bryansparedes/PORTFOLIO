import './contact.css';

const Contact = () => {
    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">
                Get In Touch 
            </h2>
            <span className="section__subtitle">
                Contact Me
            </span>
            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Talk to Me</h3>
                    <div className="contact__info">
                    <div className="contact__card">
                        <i className="bx bx-mail-send contact__card-icon"></i>
                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">paredes.bryan2@icloud.com</span>
                        <a href="mailto:paredes.bryan2@icloud.com" className='contact__button'>
                            Write Me
                            <i className="bx bx-right-arrow-alt contact__button-icon"/>
                        </a>
                    </div>
                    <div className="contact__card">
                        <i className="bx bxl-whatsapp contact__card-icon"></i>
                        <h3 className="contact__card-title">Whatsapp</h3>
                        <span className="contact__card-data">(+502) 3899-7113</span>
                        <a href="https://wa.me/50238997113?text=Hello, more Information!" 
                        className='contact__button'>
                            Write Me
                            <i className="bx bx-right-arrow-alt contact__button-icon"/>
                        </a>
                    </div>
                    <div className="contact__card">
                        <i className="bx bxl-messenger contact__card-icon"></i>
                        <h3 className="contact__card-title">Messenger</h3>
                        <span className="contact__card-data">user.fb34</span>
                        <a href="https://www.messenger.com/t/100000541744964/" 
                        className='contact__button'>
                            Write Me
                            <i className="bx bx-right-arrow-alt contact__button-icon"/>
                        </a>
                    </div>
                </div>
                </div>
                <div className="contact__content">
                    <h3 className="contact__title">Write me Your Project</h3>
                    <form className="contact__form">
                        <div className="contact__form-div">
                            <label form='name' className="contact__form-tag">Name</label>
                            <input 
                            type="text" 
                            name="name"
                            className="contact__form-input"
                            placeholder='Insert your Name'
                            />
                        </div>
                        <div className="contact__form-div">
                            <label form='name' className="contact__form-tag">Email</label>
                            <input 
                            type="email" 
                            name="name"
                            className="contact__form-input"
                            placeholder='Insert your Email'
                            />
                        </div>
                        <div className="contact__form-div contact__form-area">
                            <label form='name' className="contact__form-tag">Project</label>
                            <textarea 
                            name="project" 
                            cols="30" 
                            rows="10"
                            className='contact__form-input'
                            placeholder='Write your project'
                            ></textarea>
                        </div>
                            <button className="button button--flex">
                                Send Message
                                <i className="uil uil-envelope-upload"/>
                            </button>
                    </form>
                </div>
            </div>
        </section>
        
    )
}

export default Contact