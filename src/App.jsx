import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";

import Header from "./Header/Header";
import Serviceopt from "./Header/Serviceopt";
import Top from "./Homepage/Top";
import Aadhar from "./Servicepages/Aadhar";
import HomeComponent from "./Homepage/HomeComponent";
import Upi from "./Servicepages/Upi";



function App() {
  const location = useLocation();
  const [activeSearchBar, setActiveSearchBar] = useState(null);

  const showHomeComponents = location.pathname === "/";

  return (
    <>
      <Header
        activeSearchBar={activeSearchBar}
        setActiveSearchBar={setActiveSearchBar}
      />
      <Serviceopt />
      {showHomeComponents && (
        <Top
          activeSearchBar={activeSearchBar}
          setActiveSearchBar={setActiveSearchBar}
        />
        
      )}
      
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/aadhar" element={<Aadhar />} />
          <Route path="/pan" element={<div>PAN Page</div>} />
          <Route path="/account" element={<div>Account Page</div>} />
          <Route path="/upi" element={<Upi />} />
          <Route path="/aayush" element={<div>Aayush Page</div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/services" element={<div>Services Page</div>} />
          <Route path="/support" element={<div>Support Page</div>} />
          <Route path="/faq" element={<div>FAQ Page</div>} />
          <Route path="/blog" element={<div>Blog Page</div>} />
          <Route path="/careers" element={<div>Careers Page</div>} />
          <Route path="/terms" element={<div>Terms of Service Page</div>} />
          <Route path="/privacy" element={<div>Privacy Policy Page</div>} /> 

          {/* inner options routes can be added here          */}
          {/* aadhaar option */}
          <Route path="/new-aadhaar" element={<div>New Aadhaar Page</div>} />
          <Route path="/update-aadhaar" element={<div>Update Aadhaar Page</div>} />
          <Route path="/status-aadhaar" element={<div>Status Aadhaar Page</div>} />
          {/* pan option */}
          <Route path="/new-pan" element={<div>New PAN Page</div>} />
          <Route path="/correction-pan" element={<div>Correction PAN Page</div>} />
          <Route path="/status-pan" element={<div>Status PAN Page</div>} />
          {/* account option */}
          <Route path="/open-account" element={<div>Open Account Page</div>} />
          <Route path="/close-account" element={<div>Close Account Page</div>} />
          <Route path="/status-account" element={<div>Status Account Page</div>} />
          {/* upi option */}
          <Route path="/create-upi-id" element={<div>Create UPI ID Page</div>} />
          <Route path="/link-bank-account" element={<div>Link Bank Account Page</div>} />
          <Route path="/upi-status" element={<div>UPI Status Page</div>} />
          {/* aayush option */}
          <Route path="/apply-aayushman-card" element={<div>Apply Aayushman Card Page</div>} />
          <Route path="/renew-aayushman-card" element={<div>Renew Aayushman Card Page</div>} />
          <Route path="/aayushman-status" element={<div>Aayushman Status Page</div>} />
          {/* contact option */}  
          <Route path="/contact-us" element={<div>Contact Us Page</div>} />
          <Route path="/contact-support" element={<div>Contact Support Page</div>} />
          <Route path="/contact-feedback" element={<div>Contact Feedback Page</div>} />
          {/* about option */}
          <Route path="/about-us" element={<div>About Us Page</div>} />
          <Route path="/about-team" element={<div>Our Team Page</div>} />
          <Route path="/about-careers" element={<div>Careers Page</div>} />
          {/* home option */}
          <Route path="/news" element={<div>Latest News Page</div>} />
          <Route path="/announcements" element={<div>Announcements Page</div>} />
          {/* services option */}
          <Route path="/all-services" element={<div>All Services Page</div>} />
          <Route path="/popular-services" element={<div>Popular Services Page</div>} />
          <Route path="/new-services" element={<div>New Services Page</div>} />
          {/* support option */}  
          <Route path="/services" element={<div>Services Page</div>} />
          <Route path="/support" element={<div>Support Page</div>} />
          <Route path="/faq" element={<div>FAQ Page</div>} />
          {/* faq option */}
          <Route path="/faq-general" element={<div>General FAQ Page</div>} />
          <Route path="/faq-service" element={<div>Service FAQ Page</div>} />
          <Route path="/faq-technical" element={<div>Technical FAQ Page</div>} />
          {/* blog option */}
          <Route path="/latest-blog" element={<div>Latest Blog Posts Page</div>} />
          <Route path="/popular-blog" element={<div>Popular Blog Posts Page</div>} />
          <Route path="/category-blog" element={<div>Blog Categories Page</div>} />
          {/*careers */}
          <Route path="/careers-openings" element={<div>Careers Openings Page</div>} />
          <Route path="/careers-internships" element={<div>Careers Internships Page</div>} />
          <Route path="/careers-culture" element={<div>Careers Culture Page</div>} />
          {/* terms option */}
          <Route path="/terms-service" element={<div>Terms of Service Page</div>} />
          <Route path="/terms-agreement" element={<div>Terms Agreement Page</div>} />
          <Route path="/terms-cookie" element={<div>Terms Cookie Page</div>} />
          {/* privacy option */}
          <Route path="/privacy-policy" element={<div>Privacy Policy Page</div>} />
          <Route path="/privacy-data" element={<div>Privacy Data Page</div>} />
          <Route path="/privacy-security" element={<div>Privacy Security Page</div>} />
          {/* inner options routes are anded here         */}

          
        </Routes>
    </>
  );
}

export default App;
