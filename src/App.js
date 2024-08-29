import './App.css';
import {Blog, Features, Footer, Header, Possibility, WhatGPT3} from "./containers";
import {CTA, Navbar, Brand} from "./components";

function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
