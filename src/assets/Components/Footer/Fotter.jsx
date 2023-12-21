import './footer.css'

const Fotter = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">BRYAN PAREDES</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className='footer__link'>About</a>
                    </li>
                    <li>
                        <a href="#portfolio" className='footer__link'>Projects</a>
                    </li>
                    <li>
                        <a href="#testimonials" className='footer__link'>Testimonials</a>
                    </li>
                </ul>
                <div className="footer__social">
                    <a 
                        href="https://www.facebook.com/bryan.paredes.395/" 
                        className="footer__social-link" 
                        target="_blank" 
                        rel='noreferrer'
                    >
                        <i className="bx bxl-facebook"/>
                    </a>
                    <a 
                        href="https://www.instagram.com/bryanparedes_g/" 
                        className="footer__social-link" 
                        target="_blank" 
                        rel='noreferrer'
                    >
                        <i className="bx bxl-instagram"/>
                    </a>
                    <a 
                        href="https://twitter.com/BsPedes" 
                        className="footer__social-link" 
                        target="_blank" 
                        rel='noreferrer'
                    >
                        <i className="bx bxl-twitter"/>
                    </a>
                </div>
                <span className='footer__copy'>
                    &#169; Bryan Paredes. All rigths reserved
                </span>
            </div>
        </footer>
        
    )
}

export default Fotter