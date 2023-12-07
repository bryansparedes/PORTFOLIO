import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './assets/Pages/Home'
import { Contact } from './assets/Pages/Contact'
import { useState } from 'react'
import ReactSwitch from 'react-switch';
import { useThemeContext } from './assets/Context/ThemeContext'
import Moon from './assets/Images/moon-svgrepo-com.svg';
import Sun from './assets/Images/sun-2-svgrepo-com.svg';

function App() {
  
  const {contextTheme, setContextTheme} = useThemeContext();
  
  const [checked, setChecked] = useState(false);

  const handleSwitch = (nextChecked) => {
    setContextTheme((state) => (state === 'Light'? 'Dark':'Light'))
    setChecked(nextChecked)
  }

  return (                         
    <div className='general-container' id={contextTheme}>
      <header>
      <ReactSwitch
        className='toggle'
        onChange={handleSwitch}
        checked={checked}
        handleDiameter={28}
        offColor="#f2f4f6"
        onColor="#f2f4f6"
        offHandleColor="#f2f4f6"
        onHandleColor="#282c34"
        height={0}
        width={0}
        borderRadius={6}
        activeBoxShadow='none'
        uncheckedHandleIcon={
          <img src={Moon}/>
        }
        checkedHandleIcon={
          <img src={Sun}/>
        }
      />
      {/* <Layaut/> */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </header>
    </div>
  )
}

export default App
