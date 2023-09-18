import styled from "styled-components";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Degree from "./components/Degree.jsx";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About";

const Container = styled.div`
  height: 100vh;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: #e1e1e6;
  background-image: conic-gradient(
    from 90deg at 50% 100%,
    #647db6 90deg,
    #eedfa7 1.9turn
  );

  &::-webkit-scrollbar {
    display: none;
  }
  /* minha paleta de cores
.color1 { #6231cd };
.color2 { #ad93e5 };
.color3 { #281454 };
.color4 { #4c4461 };
.color5 { #3a1d7b }; */
`;

function App() {
  return (
    <Container>
      <Hero id="/hero" />
      <About id="about" />
      {/* <Degree id="formacao" /> */}
      <Works id="works" />
      <Contact id="contact" />
      <Footer />
    </Container>
  );
}

export default App;
