import styled from "styled-components"
import Hero from "./components/Hero"
import Who from "./components/Who"
import Works from "./components/Works"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"


const Container = styled.div`
height: 100vh;
scroll-snap-type:  y mandatory;
scroll-behavior:  smooth;
overflow-y: auto;
scrollbar-width: none;
color: #fefcff;
background-color: #fefcff;

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

    </Container>
  )
}

export default App



