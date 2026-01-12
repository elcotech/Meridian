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
    name: 'Mequment Seifu Gebirmichael',
    title: 'Senior IT Educator & Technical Consultant',
    location: 'Addis Ababa, Ethiopia',
    phone: '+251-941554818',
    email: 'ethiomk@elcotech.org',
    linkedin: 'linkedin.com/in/mequanent-seifu',
    
    welcome: 'Transforming Tech Education Through Innovation',
    description: '17+ years of expertise in ICT instruction, advanced computer systems, and curriculum development. Bridging theory with industry practice.',
    
    about: 'Professional Profile',
    aboutText: `🎓 MSc in Information Technology Technical Teacher Education | 17+ Years Experience

🏢 Current: Senior Lecturer at Worldlink Cross-Border International College
🏛️ Government Service: ICT Instructor & IT Systems Specialist at Nifass Silk Poly-Technic College

💡 Specializing in advanced IT education, curriculum development, and technical consultation with deep industry experience across multiple sectors.

🌍 Languages: Amharic (Native), English (Fluent), Chinese (Basic), Sign Language (Conversational)`,

    services: 'Expert IT Services',
    servicesList: [
      ['Advanced Computer Training', 'Comprehensive training in programming, databases, networking, and software development for all skill levels.'],
      ['Web Design & Development', 'Full-stack web development using modern frameworks (React, PHP) with responsive design principles.'],
      ['Advanced Computer Maintenance & Networking', 'Enterprise-level hardware troubleshooting, Cisco network scaling, and IT infrastructure management.'],
      ['Bot Development & Automation', 'Custom bot development for process automation, data processing, and intelligent systems.'],
      ['Curriculum Development', 'Designing cutting-edge IT education programs aligned with industry standards and technological trends.'],
      ['Technical Consultation', 'Expert guidance on IT infrastructure, system optimization, and digital transformation strategies.']
    ],

    education: 'Education & Certifications',
    educationList: [
      ['MSc in Information Technology Technical Teacher Education', 'Ethio-China University | 2024'],
      ['BSc in Technical Teacher Education (IT)', 'Ethio-China University | 2015-2018'],
      ['Diploma in Special Needs and Language', 'Kotebe College | 2007-2010'],
      ['Diploma, IT Technician', 'Nifass Silk Poly-Technic College | 2006-2009'],
      ['Coursework in Business Administration', 'Adam Science and Technology University | 2011-2014']
    ],

    certifications: [
      'Level 4 Certificate of Competence (COC) in IT',
      'CISCO Scaling Networks Certification',
      'Advanced Pedagogical Methods Certification'
    ],

    technicalSkills: 'Technical Expertise',
    skillsList: [
      ['Programming & Development', 'Java, C++, Python, PHP, Visual Basic, SQL, React, QBASIC'],
      ['Database Management', 'Oracle, MySQL, Supabase, SQL Server'],
      ['Networking & Infrastructure', 'Cisco Scaling Networks, Network Maintenance, CSMARP(CR)'],
      ['Software & Systems', 'Adobe Photoshop, Macromedia Suite, Microsoft Office Suite'],
      ['IT Support & Maintenance', 'Advanced Computer Maintenance, Hardware Troubleshooting']
    ]
  };

  /* =========================
     CONTACT FORM HANDLER
  ========================= */
  const sendEmail = async (e) => {
    e.preventDefault();
    forceFullscreen();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Primary professional email
    const PROFESSIONAL_EMAIL = 'ethiomk@elcotech.org';
    const TEST_EMAIL = 'mequmail@gmail.com';

    try {
      console.log('Sending inquiry to:', PROFESSIONAL_EMAIL);
      const response = await fetch(`https://formsubmit.co/ajax/${PROFESSIONAL_EMAIL}`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
          _subject: `New Professional Inquiry: ${name}`,
          _captcha: "false",
          _template: "table",
          _autoresponse: "Thank you for contacting Mequment Seifu. I will review your inquiry and respond within 24-48 hours."
        })
      });
      
      const result = await response.json(); 
      console.log('FormSubmit Response:', result);
      
      if (result.success === "true") {
        alert('✅ Inquiry sent successfully! You will receive a confirmation email shortly.');
        e.target.reset();
      } else {
        // Fallback to test email
        const fallbackResponse = await fetch(`https://formsubmit.co/ajax/${TEST_EMAIL}`, {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: name,
            email: email,
            message: message,
            _subject: `[BACKUP] Inquiry: ${name}`,
            _captcha: "false"
          })
        });
        
        const fallbackResult = await fallbackResponse.json();
        if (fallbackResult.success === "true") {
          alert('⚠️ Primary email not responding. Message sent to backup. Please check your email for confirmation.');
          e.target.reset();
        } else {
          alert('❌ Unable to send message. Please try again later or contact directly via email.');
        }
      }
    } catch (error) {
      console.error('Network/Fetch Error:', error);
      alert('❌ Network error. Please ensure you have internet connection.');
    }
  };

  return (
    <div className="App">
      <header>
        <nav>
          <h2 className="logo">Mequment Seifu</h2>
          <ul>
            <li><a href="#about" onClick={forceFullscreen}>Profile</a></li>
            <li><a href="#services" onClick={forceFullscreen}>Services</a></li>
            <li><a href="#education" onClick={forceFullscreen}>Education</a></li>
            <li><a href="#skills" onClick={forceFullscreen}>Expertise</a></li>
            <li><a href="#contact" onClick={forceFullscreen}>Contact</a></li>
          </ul>
        </nav>
      </header>
      
      <main>
        {/* HERO SECTION */}
        <section className="hero">
          <div className="hero-content">
            <div className="hero-title">
              <h1>{content.name}</h1>
              <div className="title-gradient">{content.title}</div>
            </div>
            <p className="hero-subtitle">{content.welcome}</p>
            <p className="hero-description">{content.description}</p>
            
            <div className="contact-info-header">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>{content.location}</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <a href={`tel:${content.phone}`} className="contact-link">{content.phone}</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <a href={`mailto:${content.email}`} className="contact-link">{content.email}</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🔗</span>
                <a href={`https://${content.linkedin}`} target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn Profile</a>
              </div>
            </div>
            
            <div className="hero-buttons">
              <a href="#services" className="cta-button primary" onClick={forceFullscreen}>Explore Services</a>
              <a href="#contact" className="cta-button secondary" onClick={forceFullscreen}>Contact Me</a>
            </div>
          </div>
        </section>

        {/* PROFESSIONAL PROFILE */}
        <section className="section" id="about">
          <h2><span className="section-icon">👨‍💼</span> {content.about}</h2>
          <div className="profile-card">
            <div className="profile-content">
              <p style={{ whiteSpace: 'pre-line' }}>{content.aboutText}</p>
              <div className="experience-badge">
                <span className="experience-number">17+</span>
                <span className="experience-text">Years Experience</span>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="section-dark" id="services">
          <h2><span className="section-icon">🚀</span> {content.services}</h2>
          <div className="grid">
            {content.servicesList.map(([title, text], i) => (
              <div className="card service-card" key={i} onClick={forceFullscreen}>
                <div className="card-icon">{['💻', '🌐', '🔧', '🤖', '📚', '💡'][i]}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION & CERTIFICATIONS */}
        <section className="section" id="education">
          <div className="two-column">
            <div className="column">
              <h2><span className="section-icon">🎓</span> Education</h2>
              <div className="timeline">
                {content.educationList.map(([degree, details], i) => (
                  <div className="timeline-item" key={i}>
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h4>{degree}</h4>
                      <p>{details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="column">
              <h2><span className="section-icon">📜</span> Certifications</h2>
              <div className="certifications-list">
                {content.certifications.map((cert, i) => (
                  <div className="certification-item" key={i}>
                    <span className="cert-icon">✅</span>
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TECHNICAL SKILLS */}
        <section className="section-dark" id="skills">
          <h2><span className="section-icon">⚡</span> {content.technicalSkills}</h2>
          <div className="skills-grid">
            {content.skillsList.map(([category, skills], i) => (
              <div className="skill-category" key={i}>
                <h3>{category}</h3>
                <div className="skills-tags">
                  {skills.split(', ').map((skill, j) => (
                    <span className="skill-tag" key={j}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="section" id="contact">
          <h2><span className="section-icon">📞</span> Professional Contact</h2>
          
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Get in Touch</h3>
              <div className="contact-details">
                <div className="contact-detail-item">
                  <span className="detail-icon">📍</span>
                  <div>
                    <strong>Location</strong>
                    <p>{content.location}</p>
                  </div>
                </div>
                <div className="contact-detail-item">
                  <span className="detail-icon">📞</span>
                  <div>
                    <strong>Phone</strong>
                    <p><a href={`tel:${content.phone}`} className="contact-link">{content.phone}</a></p>
                  </div>
                </div>
                <div className="contact-detail-item">
                  <span className="detail-icon">✉️</span>
                  <div>
                    <strong>Email</strong>
                    <p><a href={`mailto:${content.email}`} className="contact-link">{content.email}</a></p>
                  </div>
                </div>
                <div className="contact-detail-item">
                  <span className="detail-icon">🔗</span>
                  <div>
                    <strong>LinkedIn</strong>
                    <p><a href={`https://${content.linkedin}`} target="_blank" rel="noopener noreferrer" className="contact-link">{content.linkedin}</a></p>
                  </div>
                </div>
              </div>
              
              <div className="availability">
                <h4>📅 Availability</h4>
                <p>• Consulting & Training Sessions</p>
                <p>• Weekday Evenings & Weekends</p>
                <p>• Online & On-site (Addis Ababa)</p>
              </div>
            </div>
            
            <div className="contact-form-container">
              <form className="contact-form" onSubmit={sendEmail}>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Full Name"
                  required 
                  onFocus={forceFullscreen}
                />
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Email Address"
                  required 
                  onFocus={forceFullscreen}
                />
                <select name="service" required onFocus={forceFullscreen}>
                  <option value="">Select Service Interest</option>
                  <option value="training">Advanced Computer Training</option>
                  <option value="web">Web Design & Development</option>
                  <option value="maintenance">Computer Maintenance & Networking</option>
                  <option value="bots">Bot Development</option>
                  <option value="consultation">Technical Consultation</option>
                  <option value="other">Other Inquiry</option>
                </select>
                <textarea
                  name="message"
                  placeholder="Describe your project or training needs..."
                  required
                  rows="6"
                  onFocus={forceFullscreen}
                ></textarea>
                <button type="submit" onClick={forceFullscreen}>Send Professional Inquiry</button>
              </form>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} Mequment Seifu Gebirmichael. All Rights Reserved.</p>
          <p className="footer-tagline">Transforming Technology Education in Ethiopia</p>
          <div className="footer-links">
            <a href={`mailto:${content.email}`}>Email</a>
            <a href={`tel:${content.phone}`}>Phone</a>
            <a href={`https://${content.linkedin}`} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default App;