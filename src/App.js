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
