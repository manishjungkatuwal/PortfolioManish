import Navbar from "./components/navbar/navbar"
import Intro from "./components/intro/intro"
import Aboutme from './components/aboutme/aboutme'
import Footer from './components/footer/footer'
import MyExperiences from './components/myexperiences/myexperiences'
import {Route, Routes} from "react-router-dom"

function App() {

  return (
    <>
      <Navbar/>
      <Intro/>
      <Aboutme/>
      <MyExperiences/>
      <Footer/>
    </>
  )
}

export default App
