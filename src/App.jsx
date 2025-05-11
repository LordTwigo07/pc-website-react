import { useState } from 'react'
import './App.scss'
import stelcorePC from './assets/images/stelcore-pc.svg'
import designImage from './assets/images/design.svg'
import innovationImage from './assets/images/innovation.svg'
import webLogo from './assets/images/logo.svg'
import stelcorePC1 from './assets/images/pc.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Navbar() {
  return (
    <nav className="Navbar">
      <div className="logo">
        <h1>STELCORE</h1>
        <img src={webLogo} alt="Stelcore Logo" />
      </div>
      <div className="nav">
        <ul>
          <li><a href="home">Home</a></li>
          <li><a href="about">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Products</a></li>
        </ul>
      </div>
    </nav>
  )
}

function Home() {
  return (
    <section id="home" className="home">
      <div className="hero">
        <h1>Welcome to STELCORE</h1>
        <p>Discover the next generation of computers</p>
        <button className="cta-button">Explore Our Products</button>
      </div>
      
      <div className="features">
        <div className="feature-card">
          
          <img className='feature-img' src={innovationImage} alt="" />
          <h3>Innovation</h3>
          <p>Cutting-edge technology at your fingertips</p>
        </div>
        <div className="feature-card">
          <img className='feature-img' src={designImage} alt="" />
          <h3>Design</h3>
          <p>Sleek and modern aesthetics</p>
        </div>
        <div className="feature-card">
          <img className='feature-img' src={stelcorePC} alt="STELCORE Performance"  />
          <h3>Performance</h3>
          <p>Unmatched speed and reliability</p>
        </div>
      </div>
    </section>
  )
}
//usage du props
function Products() {
  const products = [
    {
      name: "STELCORE Pro Gaming",
      image: stelcorePC,
      specs: [
        "Intel Core i9-13900K",
        "NVIDIA RTX 4090 24GB",
        "64GB DDR5 RAM",
        "2TB NVMe SSD"
      ],
      price: 3499
    },
    {
      name: "STELCORE Workstation",
      image: stelcorePC,
      specs: [
        "AMD Ryzen 9 7950X",
        "NVIDIA RTX 4080 16GB",
        "32GB DDR5 RAM",
        "1TB NVMe SSD"
      ],
      price: 2799
    },
    {
      name: "STELCORE Creator",
      image: stelcorePC1,
      specs: [
        "Intel Core i7-13700K",
        "NVIDIA RTX 4070 12GB",
        "32GB DDR5 RAM",
        "1TB NVMe SSD"
      ],
      price: 1999
    }
  ];

  return (
    <section className="products">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
}

// Create a reusable ProductCard component
function ProductCard({ name, image, specs, price }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <div className="specs">
        {specs.map((spec, index) => (
          <p key={index}>• {spec}</p>
        ))}
      </div>
      <div className="price">${price}</div>
      <button className="buy-button">Configure & Buy</button>
    </div>
  )
}




function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-logo">
            <img src={webLogo} alt="Logo" />
            <p>Empowering users with cutting-edge custom PCs. Every build represents our commitment to performance, innovation, and exceptional computing experiences.</p>
          </div>
          <div className="social-media">
            <h4>Social Media</h4>
            <div className="social-icons">
              <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
          </div>
        </div>
        
        <div className="footer-center">
          <h4>About</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Help Center</a></li>
          </ul>
        </div>

        <div className="footer-right">
          <h4>Legal</h4>
          <ul>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Conditions</a></li>
            <li><a href="#">Policies</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Regulations</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Healthy and free</p>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms and conditions</a>
        </div>
        <p>© 2024 Stelcore. All rights reserved.</p>
      </div>
    </footer>
  )
}
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Products />
      <About />
      <Contact />   
      <Footer />
    </div>
  )
}

export default App


function About() {
  return (
    <section id="about" className="about">
      <div className="about-header">
        <h2>About STELCORE</h2>
        <div className="company-description">
          <p className="mission-statement">Pioneering the Future of Computing</p>
          <div className="description-content">
            <p>Founded in 2024, STELCORE has revolutionized the custom PC industry with our commitment to innovation, quality, and performance. We specialize in crafting high-performance computers that push the boundaries of what's possible in gaming, content creation, and professional workstations.</p>
            <p>Our team of expert engineers and designers work tirelessly to create systems that combine cutting-edge technology with exceptional build quality. Every STELCORE PC is meticulously assembled in our state-of-the-art facility, ensuring unparalleled performance and reliability.</p>
          </div>
        </div>
        <div className="tab-navigation">
          <button className="tab-button active">Characteristics</button>
          <button className="tab-button">Technical Specs</button>
          <button className="tab-button">Ports & Features</button>
          <button className="tab-button">Compatibility</button>
          <button className="tab-button">Services</button>
        </div>
      </div>

      <div className="about-content">
        <div className="product-showcase">
          <img src={stelcorePC} alt="STELCORE PC" className="showcase-image" />
          <div className="feature-highlight">
            <h3>Advanced Cooling System</h3>
            <p>STELCORE ColdFront technology: Revolutionary thermal design with dual fans and independent cooling chambers. Maintains optimal temperature under heavy loads, reducing system noise by 25% and increasing performance by up to 15%.</p>
          </div>
        </div>
      </div>
    </section>
  )
}


function Contact() {
  return (
    <section className="contact">
      <div className="contact-container">
        <h2>Get in Touch</h2>
        <p className="contact-subtitle">Have questions? We'd love to hear from you.</p>
        
        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email Address" required />
          </div>
          <div className="form-group">
            <select>
              <option value="">Select Subject</option>
              <option value="support">Technical Support</option>
              <option value="sales">Sales Inquiry</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <textarea placeholder="Your Message" rows="6" required></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </section>
  )
}
