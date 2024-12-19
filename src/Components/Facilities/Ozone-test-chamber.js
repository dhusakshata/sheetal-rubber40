import React, { useEffect, useRef } from "react";
import OzenTest from "../../Images/ozone_test_chamber-removebg-preview.png";
import './inhousefacility.css';
import AOS from "aos";
import "aos/dist/aos.css";

const Inhouse3 = () => {
  
    // Initialize AOS
    useEffect(() => {
      AOS.init({
        duration: 1000,  // Animation duration
        offset: 100,     // Trigger point from the top
        once: false,     // Animates every time you scroll
        mirror: true,    // Reverse animation when scrolling up
      });
      AOS.refresh(); // Refresh animations to sync with dynamic content
    }, []);

  return (
    <div className="inhouse-facility-container">
         <div className="inhouse-header"> <h1>Ozone Test Chamber</h1></div>
     <div className="inhouse-container">
     <div className="inhouse-image"data-aos="fade-right" >
          <img src={OzenTest} alt="inhouse 1"style={{width:"400px",height:"350px"}} />
        </div>
      <div className="inhouse-paragrph" data-aos="fade-left">
      <p>
      An <b>Ozone Test Chamber</b>, is a specialized facility designed to evaluate the ozone resistance of rubber and silicon products. The chamber simulates high-ozone environments to test the durability of hoses, seals, gaskets, and other components exposed to ozone in real-world applications. By subjecting these products to controlled ozone exposure, the chamber helps identify cracks, brittleness, or other forms of degradation. This service is essential for ensuring that rubber and silicon hoses meet industry standards for longevity and performance, particularly in automotive, industrial, and outdoor applications.
      </p>
      </div>
     </div>
     <div className="inhouse-content">
      <h2>Overview of Ozone Test Chamber</h2>
<p><b>Purpose: </b>
The <b>Ozone Test Chamber</b> is used to determine the ozone resistance and durability of rubber and silicon materials when exposed to ozone-rich environments. This testing is crucial for evaluating the long-term performance of hoses, seals, and gaskets, ensuring that these materials can withstand ozone-induced degradation in real-world applications, such as automotive, industrial, and outdoor environments.
</p>
<p><b>Operation:</b>
The Ozone Test Chamber operates by exposing rubber and silicon components to controlled concentrations of ozone under specific temperature and humidity conditions. Over time, the chamber replicates accelerated aging effects, allowing for precise observation of any surface cracking, discoloration, or material breakdown.</p>

<h4>Features and Specifications:</h4>
        <ul>
          <li><b>Ozone Concentration Control: </b>The chamber can generate and maintain adjustable ozone concentrations, enabling a wide range of testing conditions to simulate various environmental scenarios.
          </li>
          <li><b>Temperature and Humidity Control: </b>The chamber includes precise temperature and humidity regulation, ensuring consistent and replicable testing conditions.</li>
          <li><b>Sample Holders: </b> Equipped with rotating sample holders that ensure uniform exposure of components to the ozone, maximizing the accuracy of test results.</li>
          <li><b>Data Acquisition: </b> Integrated software collects data throughout the testing process, generating reports that detail any material changes, including cracking or weakening.</li>
          
        </ul>
         <h4>Advantages of Ozone Test Chamber:</h4>
        <ul>
        <li><b>Comprehensive Testing:  </b>  Evaluates ozone resistance and surface integrity of rubber and silicon materials, providing a thorough profile of their durability under ozone exposure.</li>
          <li><b>Quality Assurance:   </b> Regular testing ensures that rubber and silicon products meet industry standards for longevity, particularly in environments with high ozone levels.</li>
          <li><b>Material Development:</b>Supports the development of new materials by assessing how new rubber or silicon formulations respond to ozone exposure, aiding in product innovation.</li>
         
          
        </ul>

        <h4>Applications:</h4>
        <ul>
          <li><b>Rubber and Silicon Hose Testing:    </b> Used to evaluate the ozone resistance of hoses in industries like automotive, aerospace, and industrial sectors where ozone exposure is prevalent.
          </li>
          <li><b>Product Development:</b> Helps manufacturers improve the durability of rubber and silicon products by providing key data on material performance under ozone-rich conditions.</li>
          <li><b>Compliance Testing:  </b>  Ensures that products meet stringent industry and regulatory standards for ozone resistance, particularly in automotive and industrial applications.</li>
          
        </ul>
        
        <h4>Conclusion:
        </h4>
        <p>The <b>Ozone Test Chamber </b> is a critical tool for rubber and silicon hose manufacturers, allowing them to accurately assess the ozone resistance and long-term durability of their products. By integrating ozone testing into their quality control processes, companies can ensure that their products meet industry standards and perform reliably in demanding environments where ozone exposure is a concern.</p>
      </div>
    </div>
  );
};

export default Inhouse3;
