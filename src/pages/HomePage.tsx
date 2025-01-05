

import ContactUs from "../components/ContactUs"
import Countdown from "../components/Countdown"
import Hero from "../components/Hero"
import HowBootcamp from "../components/HowBootcamp"
import Seeourwork from "../components/Seeourwork"
import TechnologiesandFramworks from "../components/TechnologiesandFramworks"
import Whocan from "../components/Whocan"
import Whoweare from "../components/Whoweare"
import Why from "../components/Why"


function HomePage() {
  return (
    
    <div className="   w-full	 ">
    
      <Hero/>
      <Countdown />
      {/* <Sliderr /> */}
      {/* <Slider /> */}
      <Whoweare />
      <Seeourwork />
      <HowBootcamp />
      <Why />
      <TechnologiesandFramworks />
      <Whocan />
      {/* <Experience /> */}
      <ContactUs/>
    </div>
         

    
  )
}

export default HomePage