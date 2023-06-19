import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Box from "./components/Box";
import styled from "styled-components";
import { css } from "styled-components";

const Poppins = css`
  @import url("https://fonts.googleapis.com/css2?family=Inter&family=Poppins:wght@300;400;500;600;700;800&display=swap");
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  /* color: #01134d; */
  color: #fff;
  font-family: Poppins;
  background: url("./img/bg.jpeg");
  /* background-color: #fff; */
  &::-webkit-scrollbar {
    display: none;
  }
`;
function App() {
  return (
    <Container>
      <Hero />
      <Who />
      <Works />
      <Contact />
      {/* <Box /> */}
    </Container>
  );
}

export default App;
