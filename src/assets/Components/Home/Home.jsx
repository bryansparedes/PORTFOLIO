import { useThemeContext } from '../../Context/ThemeContext'
import Data from './Data'
import ScrollDown from './ScrollDown'
import Social from './Social'
import './home.css'

const Home = () => {

    const {contextTheme} = useThemeContext();

    return (  
        <section className="home section" id={`${contextTheme}`}>
            <div className="home__container container grid">
                <div className="home__content grid">
                    <Social/>
                    <div className="home__img"></div>
                    <Data/>
                </div>
                <ScrollDown/>
            </div>
        </section>
    )
}

export default Home