import styled from "styled-components"
import Hero from "./components/Hero"
import Who from "./components/Who"
import Works from "./components/Works"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const Container = styled.div`
height: 100vh;
 scroll-snap-type: y proximity;
  scroll-behavior: smooth;

overflow-y: auto;
scrollbar-width: none;
color: #000000;
background-color: #ffffff;

&::-webkit-scrollbar{
  display: none;
}

`

function App() {

  return (
    <Container>
      <Navbar />
      <Hero />
      <Who />
      <Works />
      <Contact />
      <Footer />
    </Container>
  )
}

export default App



