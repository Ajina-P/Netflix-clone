<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
// import Nav from './components/Nav'
import Footer from './components/Footer1/Footer';

function App() {
  return (
    <>
    {/* <Nav/> */}
<Footer/>
    </>
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner/Banner";
import './App.css'
import NavbarSection from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavbarSection />
        <Routes>
          <Route path="/" element={Home} />
        </Routes>
      </BrowserRouter>
    </div>
>>>>>>> 4450f07460a9a1690e36c488b50e8d774e4c52c0
  );
}

const Home = () => {
  return (
    <>
      <Banner />
    </>
  );
};
export default App;
