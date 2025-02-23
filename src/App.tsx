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
    <Router >
      <div className="w-full overflow-hidden relative   ">


          {/* <Hooks /> */}


          <Header />
          <Routes>
            <Route path="/jdc/" element={<HomePage />} />
            <Route path="/jdc/services" element={<Services/>}/>
            <Route path="/jdc/contact-us" element={<Contactus/>}></Route>
            <Route path="/jdc/technologies" element={<Technologies/>}></Route>
          </Routes>
          <Footer />

      </div> 
    </Router>
  );
}

export default App;
