import React, { useEffect } from 'react';
import './App.css';

/* =========================
   FULLSCREEN HELPER
========================= */
const forceFullscreen = () => {
  const el = document.documentElement;
  if (document.fullscreenElement || document.webkitFullscreenElement) return;
  try {
    if (el.requestFullscreen) el.requestFullscreen();
    else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
  } catch (e) {
    // fail silently
  }
};

function App() {
  /* =========================
     FIRST USER INTERACTION
  ========================= */
  useEffect(() => {
    const handler = () => forceFullscreen();
    document.addEventListener('touchstart', handler, { once: true });
    document.addEventListener('click', handler, { once: true });
    return () => {
      document.removeEventListener('touchstart', handler);
      document.removeEventListener('click', handler);
    };
  }, []);

  const content = {
    brand: 'Bini Seifu Real Estate',
    about: 'About Us',
    services: 'Our Services',
    properties: 'Featured Properties',
    testimonials: 'Client Testimonials',
    contact: 'Contact Us',
    welcome: 'Find Your Dream Home With Confidence',
    description: 'We connect you with premium residential and commercial properties, backed by expert guidance.',
    aboutText: '🏡 Bini Seifu Real Estate helps clients buy, sell, and invest confidently.\n\n📍 Residential homes, luxury apartments, land, and commercial properties.\n\n🤝 Honest guidance and smooth transactions.',
    servicesList: [
      ['Property Buying & Selling', 'Homes, apartments, land, and commercial properties.'],
      ['Luxury Properties', 'Villas and modern residences.'],
      ['Land & Investments', 'High-return property opportunities.'],
      ['Property Management', 'Tenant sourcing and rent collection.'],
      ['Legal Support', 'Contracts and title verification.'],
      ['Consultation', 'Valuation and smart advice.'],
    ],
    propertiesList: [
      ['Modern Luxury Apartment', '3 Bedrooms • City Center'],
      ['Family Home', '4 Bedrooms • Garden'],
      ['Commercial Space', 'High Visibility • Easy Access'],
    ],
    testimonialsList: [
      'Professional, fast, and trustworthy.',
      'Excellent advice and support.',
      'They handled everything perfectly.',
    ],
  };

  /* =========================
     SEND EMAIL USING FORMSUBMIT.CO
     PRIMARY: biniseifu@gmail.com
     TEST COPY: mequmail@gmail.com
  ========================= */
  const sendEmail = async (e) => {
    e.preventDefault();
    forceFullscreen();
    const formData = new FormData(e.target);
    const message = formData.get('message');
    // Configuration Point: Swap emails here
    const PRIMARY_EMAIL = 'biniseifu@gmail.com'; // Your client's email
    const TEST_EMAIL = 'mequmail@gmail.com';    // Your email for testing copies

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${PRIMARY_EMAIL}`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: "Website Visitor",
          message: message,
          _subject: "New Inquiry from Bini Seifu Real Estate Website",
          _cc: TEST_EMAIL, // Sends a copy to you for testing
          _captcha: "false",
          _template: "table"
        })
      });
      const result = await response.json(); 
      if (result.success === "true" || response.ok) {
        alert('✅ Message sent successfully! We will contact you soon.');
        e.target.reset();
      } else {
        alert('⚠️ Failed to send. Please try again or call 0911434369 directly.');
      }
    } catch (error) {
      console.error('Form submit error:', error);
      alert('⚠️ Could not send. Please call 0911434369 directly.');
    }
  };

  return (
    <div className="App">
      <header>
        <nav>
          <h2 className="logo">{content.brand}</h2>
          <ul>
            <li><a href="#about" onClick={forceFullscreen}>{content.about}</a></li>
            <li><a href="#services" onClick={forceFullscreen}>{content.services}</a></li>
            <li><a href="#properties" onClick={forceFullscreen}>{content.properties}</a></li>
            <li><a href="#testimonials" onClick={forceFullscreen}>{content.testimonials}</a></li>
            <li><a href="#contact" onClick={forceFullscreen}>{content.contact}</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>{content.welcome}</h1>
            <p>{content.description}</p>
            <a href="#contact" className="cta-button" onClick={forceFullscreen}>Contact Us</a>
          </div>
        </section>
        <section className="section" id="about">
          <h2>{content.about}</h2>
          <p style={{ whiteSpace: 'pre-line' }}>{content.aboutText}</p>
        </section>
        <section className="section-dark" id="services">
          <h2>{content.services}</h2>
          <div className="grid">
            {content.servicesList.map(([title, text], i) => (
              <div className="card" key={i} onClick={forceFullscreen}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="section" id="properties">
          <h2>{content.properties}</h2>
          <div className="grid">
            {content.propertiesList.map(([title, text], i) => (
              <div className="card property" key={i} onClick={forceFullscreen}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="section-dark" id="testimonials">
          <h2>{content.testimonials}</h2>
          <div className="grid">
            {content.testimonialsList.map((t, i) => (
              <div className="card testimonial" key={i} onClick={forceFullscreen}>{t}</div>
            ))}
          </div>
        </section>
        <section className="section" id="contact">
          <h2>Contact & Business Information</h2>
          <p>
            📞 <strong>Phone:</strong> 0911434369 <br />
            📧 <strong>Email:</strong> biniseifu@gmail.com <br />
            🕘 <strong>Hours:</strong> Mon – Sat, 8:30 AM – 6:30 PM
          </p>
          <form className="contact-form" onSubmit={sendEmail}>
            <textarea
              name="message"
              placeholder="Full name : Phone number and Remark 🚀 ሙሉ ስም ፡ ስልክ እና ማብራርያ"
              required
              rows="6"
              onFocus={forceFullscreen}
            ></textarea>
            <button type="submit" onClick={forceFullscreen}>Send Inquiry</button>
          </form>
        </section>
      </main>
      <footer className="footer">
        <p>© 2025 Bini Seifu Real Estate. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
export default App;
