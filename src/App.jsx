import { useState, useEffect} from 'react'
import Navbar from './components/Navbar'
import AOS from 'aos'
import 'aos/dist/aos.css'
import First from './components/First'
import Second from './/components/Second'
import Third from './components/Third'
import Footer from './components/Footer'
import Sixth from './components/Sixth'
import Fifth from './components/Fifth'
import Fourth from './components/Fourth'
import Screening from './components/Screening'

function App() {
  useEffect(() =>{
    AOS.init()
  }, [])
  return (
    <div className='overflow-x-hidden'>
     <Navbar/>
     <First/>
     <Second/>
     <Third/>
     <Screening/>
     <Fourth/>
     <Fifth/>
     <Sixth/>
     <Footer/>
    </div>
  )
}

export default App
