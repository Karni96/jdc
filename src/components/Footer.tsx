import React from "react";

const Footer = () => {
  return (
    <>
      <div id="footer" className="w-full text-white bg-black">
        {/* Logo Section */}
        <div className="h-20 flex items-center justify-center md:justify-start p-4">
          <a href="">
            <img className="w-[150px] md:w-[200px]" src="jdclogo.png" alt="logoimg" />
          </a>
        </div>

        {/* Address and Map Section */}
        <div className="w-full flex flex-col md:flex-row items-center md:items-start gap-6 p-4">
          <div className="md:w-[30%]">
            <h1 className="text-xl font-bold">Address</h1>
            <p>The address of the company</p>
            <p>Floor number</p>
            <p>Cabin number</p>
            <p>Building name</p>
            <p>Landmark</p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28440.2515202564!2d75.77272319999999!3d26.9975552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db268ed97e5b7%3A0xa93669df9794889c!2sNorth%20Avenue%2C%20Vishwakarma%20Industrial%20Area%2C%20Jaipur%2C%20Rajasthan%20302013!5e0!3m2!1sen!2sin!4v1735803780184!5m2!1sen!2sin"
            className="w-full md:w-[60%] h-[200px]"
            loading="lazy"
          ></iframe>
        </div>

        {/* Services, Technologies, Industries, Resources */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-4 text-sm md:text-base">
          {/* Services */}
          <div>
            <h1 className="text-xl font-bold">Services</h1>
            <p>Bespoke Software Development</p>
            <p>Web app development</p>
            <p>Mobile app development</p>
            <p>Product strategy</p>
            <p>Product design</p>
            <p>Artificial Intelligence</p>
            <p>Machine Learning</p>
          </div>

          {/* Technologies */}
          <div>
            <h1 className="text-xl font-bold">Technologies</h1>
            <p>Flutter development services</p>
            <p>Golang</p>
            <p>iOS</p>
            <p>Android</p>
            <p>Frontend</p>
            <p>Backend</p>
          </div>

          {/* Industries */}
          <div>
            <h1 className="text-xl font-bold">Industries</h1>
            <p>eCommerce</p>
            <p>Fintech</p>
            <p>Banking</p>
            <p>Healthcare</p>
            <p>Entertainment</p>
          </div>

          {/* Resources */}
          <div>
            <h1 className="text-xl font-bold">Resources</h1>
            <p>Blog</p>
            <p>Downloadables</p>
            <p>AI Glossary</p>
            <p>Flutter 101</p>
            <p>Moderation reports</p>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center p-4 text-sm md:text-base">
          <h6 className="text-center md:text-left w-full md:w-auto">
            © 2024 JdcAnalytics. All rights reserved.
          </h6>
          <div className="flex flex-wrap gap-4 justify-center md:justify-end w-full md:w-auto">
            <p>Privacy Policy</p>
            <p>Whistleblowing Procedure</p>
            <div className="flex gap-2">
              <p>Follow us:</p>
              <a href="https://x.com/i/flow/login">X</a>
              <a href="https://www.linkedin.com/login">Li</a>
              <a href="https://www.facebook.com/login.php/">Facebook</a>
              <a href="https://www.instagram.com/accounts/login/">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
