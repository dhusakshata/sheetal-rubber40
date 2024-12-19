

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaPhoneAlt, FaEnvelope , FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logos from "../../Images/logo1.png";
import "./header.css";
import twitter from "../../Images/twitter image.webp";
import linkedin from "../../Images/linked in image.webp";

// import HamburgerMenu from "../Hamburge/hambarge.js";




const data = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Products", link: "/product" },
  { id: 3, name: "Facilities", link: "/facilities" },
  { id: 4, name: "Careers", link: "/career" },
  { id: 5, name: "About Us", link: "/about" },
  { id: 6, name: "Contact Us", link: "/contact" },
  { id: 7, name: "Manufacturing", link: "/manufacturing" },
  { id: 8, name: "Inhouse", link: "/inhouse" },
  { id: 9, name: "Assembly", link: "/assembly" },
  { id: 10, name: "EPDM", link: "/epdm" },
  { id: 11, name: "Fuel Tube", link: "/fueltube" },
  { id: 12, name: "Marine Wet Hose", link: "/marinewethose" },
  { id: 13, name: "Moulded", link: "/moulded" },
  { id: 14, name: "Organic", link: "/organic" },
  { id: 15, name: "Silicon Polyester", link: "/siliconpolyester" },
  { id: 16, name: "Turbocharger", link: "/turbochargerhose" },

  //Manufacturing facilities
  { id: 17, name: "hot cold feed", link: "/hot-cold-feed" },
  { id: 18, name: "Dual head extruders", link: "/Dual-head-extruders" },
  { id: 19, name: "Auto clave vulcanizer", link: "/Auto-clave-vulcanizer" },
  { id: 20, name: "Dispersion kneader", link: "/Dispersion-kneader" },
  { id: 21, name: "3 role calendaring machine", link: "/3-role-calendaring-machine" },
  { id: 22, name: "Compression transfer molding", link: "/Compression-transfer-molding" },
  { id: 23, name: "Rubber mixing mill", link: "/Rubber-mixing-mill" },
  { id: 24, name: "Knitting machine", link: "/Knitting-machine" },
  { id: 25, name: "Braiding Machines", link: "/Braiding-Machines" },
  { id: 26, name: "Conventional machines", link: "/Conventional-machines" },

  //Inhouse facilities
  { id: 27, name: "Moving Die Rheometer", link: "/Moving-Die-Rheometer" },
  { id: 28, name: "Burst pressure test machines", link: "/Burst-pressure-test-machines" },
  { id: 29, name: "Ozone test chamber", link: "/Ozone-test-chamber" },
  { id: 30, name: "UTM tensil", link: "/UTM-tensil" },
  { id: 31, name: "Heating oven", link: "/Heating-oven" },
  { id: 32, name: "Muffle furnance", link: "/Muffle-furnance" },







];

function Header() {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const [activeDropdown, setActiveDropdown] = useState(null);
  
//dropdown for manufacturing
const [manufacturingDropdown, setManufacturingDropdown] = useState(false);
//dropdown for Inhouse
const [inhouseDropdown, setInhouseDropdown] = useState(false);

const handleHover = (menu) => setActiveDropdown(menu);
const handleLeave = () => setActiveDropdown(null); // Hide dropdown

  const handleManufacturingHover = () => setManufacturingDropdown(true); // Show sub-dropdown
  const handleManufacturingLeave = () => setManufacturingDropdown(false);

  const handleInhouseHover = () => setInhouseDropdown(true); // Show sub-dropdown
  const handleInhouseLeave = () => setInhouseDropdown(false); // Hide sub-dropdown




  const handleSearch = () => {
    const query = searchInput.toLowerCase();
    const match = data.find((item) => item.name.toLowerCase().includes(query));
    if (match) {
      navigate(match.link);
    } else {
      alert("No results found.");
    }
  };

  const handleInputChange = (e) => setSearchInput(e.target.value);

  const handleLinkClick = () => setActiveDropdown(null);

 
// for humbarg
const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Track mobile menu state

const handleToggleMenu = () => {
  setMobileMenuOpen(!mobileMenuOpen);
};

  return (
  
      <header className="header">
       <div className="main-header">
       <div className="logo">
          <img src={Logos} alt="Sheetal Rubber Industries" />
        </div>



        <div className="top-right">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search here..."
              value={searchInput}
              onChange={handleInputChange}
            />
            <button onClick={handleSearch}>
              <FaSearch />
            </button>
          </div>
          <div className="contact-info">
            <div className="contact-item">
              <FaPhoneAlt />
              <span className="landline">+91 – (20) 2713 0244 ,+91 – (20) 27130794</span>
             
            </div>
            <div className="contact-item">
              <FaEnvelope />
              <a href="mailto:sheetalrubber@gmail.com" className="email-button">
                sheetalrubber@gmail.com
              </a>
           
           
            </div>
            <div className="contact-item">
            <a href="https://twitter.com/yourTwitterHandle" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="twitter" className="social-icons" />
          </a>
          <a href="https://linkedin.com/company/yourLinkedInHandle" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" className="social-icons" />
          </a>
            </div>
          </div>
        </div>

        {/* <button className="hamburger-menu" onClick={handleToggleMenu}>
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button> */}
       </div>


        
        <div className="Navbar">
           {/* <!-- Hamburger Button Placeholder --> */}
        {/* <div id="hamburger-container"><HamburgerMenu/></div> */}
        <nav className= "nav" >
          <Link to="/" onClick={handleLinkClick}>
            HOME
          </Link>
          <Link to="/about" onClick={handleLinkClick}>
            ABOUT US
          </Link>
          <div
            className="dropdown"
            onMouseEnter={() => handleHover("products")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <span className="dropdown-trigger">
              <Link to="/product">PRODUCTS</Link>
            </span>
            {activeDropdown === "products" && (
              <div className="dropdown-menu">
                <Link to="/siliconpolyester" onClick={handleLinkClick}>
                  SILICONE - POLYESTER HOSES
                </Link>
                <Link to="/turbochargerhose" onClick={handleLinkClick}>
                  TURBOCHARGER AND CAC HOSES
                </Link>
                <Link to="/marinewethose" onClick={handleLinkClick}>
                  MARINE WET EXHAUST HOSES
                </Link>
                <Link to="/epdm" onClick={handleLinkClick}>
                  EPDM RUBBER HOSES
                </Link>
                <Link to="/organic" onClick={handleLinkClick}>ORGANIC RUBBER HOSES</Link>
 <Link to="/Assembly" onClick={handleLinkClick}>ASSEMBLY HOSES</Link>
  <Link to="/wired" onClick={handleLinkClick}>WIRE REINFORCED HOSES</Link>
  <Link to="/fueltube" onClick={handleLinkClick}>FUEL HOSES</Link>
 <Link to="/moulded" onClick={handleLinkClick}>MOULDED HOSES</Link>
              </div>
            )}
          </div>
{/* Dropdown Menu for Facilities */}
  <div
 className="dropdown"
  onMouseEnter={() => handleHover("facilities")} // Show on hover
 onMouseLeave={() => setActiveDropdown(null)} // Hide on mouse leave
  >
  <span className="dropdown-trigger">
  <Link >FACILITIES</Link>
  </span>
  {activeDropdown === "facilities" && (

 <div className="dropdown-menu">

  <div
                    className="sub-dropdown"
                    onMouseEnter={handleManufacturingHover}
                    onMouseLeave={handleManufacturingLeave}
                  >
                    <span className="dropdown-trigger">
                      <Link>MANUFACTURING FACILITIES</Link>
                    </span>
                    {manufacturingDropdown && (
                     
                     <div className="sub-dropdown-menu">
      <Link to="/hot-cold-feed" onClick={() => setManufacturingDropdown(false)}>
        Hot Feed, Cold Feed & Co-Extrusion Extruders
      </Link>
      <Link to="/Dual-head-extruders" onClick={() => setManufacturingDropdown(false)}>
        Dual Head Extruders for Multi-Layer Extrusion
      </Link>
      <Link to="/Auto-clave-vulcanizer" onClick={() => setManufacturingDropdown(false)}>
        Auto Clave Vulcanizar (Quick Lock Type)
      </Link>
      <Link to="/Dispersion-kneader" onClick={() => setManufacturingDropdown(false)}>
        Dispersion Kneader to Internal Mixer & Stock Blenders
      </Link>
      <Link to="/3-role-calendaring-machine" onClick={() => setManufacturingDropdown(false)}>
        3 Role Calendaring Machine
      </Link>
      <Link to="/Compression-transfer-molding" onClick={() => setManufacturingDropdown(false)}>
        Compression Transfer Molding
      </Link>
      {/* <Link to="/facility7" onClick={() => setManufacturingDropdown(false)}>
        Hydraulic Presses
      </Link> */}
      <Link to="/Rubber-mixing-mill" onClick={() => setManufacturingDropdown(false)}>
        Rubber Mixing Mills
      </Link>
      <Link to="/Knitting-machine" onClick={() => setManufacturingDropdown(false)}>
        Knitting Machines
      </Link>
      <Link to="/Braiding-Machines" onClick={() => setManufacturingDropdown(false)}>
        Braiding Machines
      </Link>
      <Link to="/Conventional-machines" onClick={() => setManufacturingDropdown(false)}>
        Other Conventional Machines
      </Link>
    </div>
                    )}
  </div>

  {/* <Link to="/inhouse" onClick={handleLinkClick}>INHOUSE TESTING FACILITIES</Link>
   */}
    {/* Inhouse Testing Facilities */}
    <div
                  className="sub-dropdown"
                  onMouseEnter={handleInhouseHover}
                  onMouseLeave={handleInhouseLeave}
                >
                  <span className="dropdown-trigger">
                    <Link >INHOUSE TESTING FACILITIES</Link>
                  </span>
                  {inhouseDropdown && (
                    <div className="sub-dropdown-menu">
                      <Link to="/Moving-Die-Rheometer" onClick={handleLinkClick}>
                      Moving Die Rheometer
                      </Link>
                      <Link to="/Burst-pressure-test-machines" onClick={handleLinkClick}>
                      Burst Pressure Test Machine (Horizontal) with Hydraulic testing facility
                      </Link>
                      <Link to="/Ozone-test-chamber" onClick={handleLinkClick}>
                      Ozone Test Chamber
                      </Link>
                      <Link to="/UTM-tensil" onClick={handleLinkClick}>
                      UTM-1
                      </Link>
                      <Link to="/Heating-oven" onClick={handleLinkClick}>
                      Heating Ovens
                      </Link>
                      <Link to="/Muffle-furnance" onClick={handleLinkClick}>
                      Muffle Furnace
                      </Link>
                    </div>
                  )}
                </div>
  
  </div>

  )}

  </div>
  <Link to="/news" onClick={handleLinkClick}>NEWS & BLOGS</Link>
 <Link to="/career" onClick={handleLinkClick}>CAREERS</Link>
  <Link to="/contact" onClick={handleLinkClick}>CONTACT US</Link>



        </nav>
      </div>

      </header>

    
  );
}

export default Header;
