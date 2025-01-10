import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";


import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Contactus from "./pages/Contactus";
import Services from "./pages/Services";
import Technologies from "./pages/Technologies";


function App() {
  return (
    <Router basename="/jdc" >
      <div className="w-full overflow-hidden relative   ">


          {/* <Hooks /> */}


          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<Services/>}/>
            <Route path="/contact-us" element={<Contactus/>}></Route>
            <Route path="/technologies" element={<Technologies/>}></Route>
          </Routes>
          <Footer />

      </div> 
    </Router>
  );
}

export default App;
