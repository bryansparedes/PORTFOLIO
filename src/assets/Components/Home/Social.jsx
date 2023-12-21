import ReactSwitch from "react-switch"
import { useThemeContext } from "../../Context/ThemeContext";
import { useState } from "react";

const Social = () => {

    const [checked, setChecked] = useState(false);    
    const {setContextTheme} = useThemeContext();

    const handleSwitch = (nextChecked) => {
        setContextTheme((state) => (state === 'Light'? 'Dark':'Light'))
        setChecked(nextChecked)
    }

    return (
        <div className="home__social">
            <ReactSwitch
                onChange={handleSwitch}
                checked={checked}
                onColor="#282C34"
                offColor="#fff"
                offHandleColor="#282C34"
                onHandleColor="#282C34"
                handleDiameter={0}
                height={20}
                width={20}
                className="home__social-icon"
                id="material-switch"
                uncheckedHandleIcon={
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="icon icon-tabler icon-tabler-moon-filled" 
                    width="26" height="26" 
                    viewBox="0 0 24 24" 
                    strokeWidth="2" stroke="currentColor"
                    fill="none" strokeLinecap="round" 
                    strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 
                        -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 
                        -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z" strokeWidth="0" 
                        fill="black" /></svg>
                }
                checkedHandleIcon={
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="icon icon-tabler icon-tabler-sun-filled" 
                    width="24" height="24" viewBox="0 0 24 24"
                    strokeWidth="2" stroke="currentColor" fill="none" 
                    strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M12 19a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 
                        -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" strokeWidth="0" 
                        fill="white" />
                        <path d="M18.313 16.91l.094 .083l.7 .7a1 1 0 0 1 -1.32 
                        1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.218 -1.567l.102 .07z"
                        strokeWidth="0" fill="white" />
                        <path d="M7.007 16.993a1 1 0 0 1 .083 1.32l-.083 .094l-.7
                        .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z"
                        strokeWidth="0" fill="white" />
                        <path d="M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117
                        -1.993l.117 -.007h1z" strokeWidth="0" fill="white" />
                        <path d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117
                        -1.993l.117 -.007h1z" strokeWidth="0" fill="white" />
                        <path d="M6.213 4.81l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094
                        -.083l-.7 -.7a1 1 0 0 1 1.217 -1.567l.102 .07z" strokeWidth="0"
                        fill="white" /><path d="M19.107 4.893a1 1 0 0 1 .083 1.32l-.083
                        .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z"
                        strokeWidth="0" fill="white" />
                        <path d="M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 
                        .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" strokeWidth="0" fill="white" />
                        <path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 
                        -.217a5 5 0 0 1 4.995 -4.783z" strokeWidth="0" fill="white" /></svg>
                }
                />
            <a href="" className="home__social-icon" target="_blank">
                <i className="uil uil-instagram"/>
            </a>
            <a href="" className="home__social-icon" target="_blank">
                <i className="uil uil-github"/>
            </a>
            <a href="" className="home__social-icon" target="_blank">
                <i className="uil uil-linkedin"/>
            </a>
        </div>
    )
}

export default Social