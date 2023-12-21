import './App.css'
import About from './assets/Components/About/About'
import Contact from './assets/Components/Contact/Contact'
import Fotter from './assets/Components/Footer/Fotter'
import Header from './assets/Components/Header/Header'
import Home from './assets/Components/Home/Home'
import Quialification from './assets/Components/Qualification/Quialification'
import ScrollUp from './assets/Components/ScrollUp/ScrollUp'
import Services from './assets/Components/Services/Services'
import Skills from './assets/Components/Skills/Skills'
import Testimonials from './assets/Components/Testimonials/Testimonials'
import Work from './assets/Components/Work/Work'


function App() {

  return (                         
    <>
    <Header/>
    <main className='main'>
      <Home/>
      <About/>
      <Skills/>
      <Services/>
      <Quialification/>
      <Work/>
      <Testimonials/>
      <Contact/>
    </main>
    <Fotter/>
    <ScrollUp/>
    </>
  )
}

export default App
