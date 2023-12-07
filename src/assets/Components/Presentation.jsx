import Photo from '../Images/me.png';

export const Presentation = () => {
    return (  
        <div className='nav-information'>
            <header>
                <div className='container-myImage'>
                    <img src={Photo} alt="My Photo"/>
                </div>
                <div className='personal-information'>
                    <h1>BRYAN PAREDES</h1>
                    <p>Hola Todo el Mundo!</p>
                </div>
                <div className='link-buttons'>
                    <button>Resume <i className="fa-solid fa-file"/></button>
                    <button>Linke <i className="fa-brands fa-linkedin"/></button>
                </div>
            </header>
        </div>
    )
}
