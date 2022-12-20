import React from "react";
import {
  Header,
  Footer,
  Intro,
  About,
  Projects,
  Contact,
} from "../../components";
const Home = () => {
  return (
    <>
      <Header></Header>
      <Intro />
      <About />
      <Projects />
      <Contact />
      <Footer></Footer>
    </>
  );
};

export default Home;
