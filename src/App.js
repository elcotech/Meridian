import React, { useState } from 'react';
import './App.css';

function App() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const content = {
    name: 'Mequanent Seifu Gebremichael',
    title: 'Senior IT Educator & Technical Consultant',
    location: 'Addis Ababa, Ethiopia',
    phone: '+251941554818',
    email: 'ethiomk@elcotech.org',
    linkedin: 'linkedin.com/in/mequanent-seifu',
    
    welcome: 'Transforming Tech Education Through Innovation',
    description: '17+ years of expertise in ICT instruction, advanced computer systems, and curriculum development. Bridging theory with industry practice.',
    
    about: 'Professional Profile',
    aboutText: `🎓 MSc in Information Technology Technical Teacher Education | 17+ Years Experience

🏢 Current: Part-time Lecturer at Worldlink Cross-Border International College
🏛️ Government Service: ICT Instructor & ICT club Director at Nefassilk Poly-Technic College

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
      'Wholistic Certificate of Competence in IT',
      'CISCO Scaling Networks Certification',
      'Advanced Pedagogical Methods Certification'
    ],

    technicalSkills: 'Technical Expertise',
    skillsList: [
      ['Programming & Development', 'Java, C++, C#, PHP, Visual Basic, SQL, React, QBASIC'],
      ['Database Management', 'Oracle, MySQL, Supabase, SQL Server'],
      ['Networking & Infrastructure', 'Cisco Scaling Networks, Network Maintenance, CSMARP(CR)'],
      ['Software & Systems', 'Adobe Photoshop, Macromedia Suite, Microsoft Office Suite'],
      ['IT Support & Maintenance', 'Advanced Computer Maintenance, Hardware Troubleshooting']
    ]
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      service: formData.get('service'),
      message: formData.get('message'),
      _subject: `New Inquiry from ${formData.get('name')}`,
      _captcha: "false"
    };

    try {
      // Use FormSubmit.co with professional email
      const response = await fetch('https://formsubmit.co/ajax/ethiomk@elcotech.org', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();
      
      if (result.success) {
        setSubmitMessage('✅ Thank you! Your message has been sent successfully. I will respond within 24-48 hours.');
        e.target.reset();
      } else {
        setSubmitMessage('⚠️ There was an error sending your message. Please try again or email directly at ethiomk@elcotech.org');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitMessage('❌ Network error. Please try again or contact directly via phone.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(''), 5000);
    }
  };

  return (
    <div className="App">
      <header>
        <nav>
          <h2 className="logo">Mequanent Seifu</h2>
          <ul>
            <li><a href="#about">Profile</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#skills">Expertise</a></li>
            <li><a href="#contact">Contact</a></li>
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
              <a href="#services" className="cta-button primary">Explore Services</a>
              <a href="#contact" className="cta-button secondary">Contact Me</a>
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
              <div className="card service-card" key={i}>
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
          
          {submitMessage && (
            <div className={`alert-message ${submitMessage.includes('✅') ? 'success' : 'error'}`}>
              {submitMessage}
            </div>
          )}
          
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
                <p>• Monday , Friday and Weekend Evenings</p>
                <p>• Online & On-site (Addis Ababa)</p>
              </div>
            </div>
            
            <div className="contact-form-container">
              <form className="contact-form" onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Full Name"
                  required 
                />
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Email Address"
                  required 
                />
                <select name="service" required>
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
                ></textarea>
                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Professional Inquiry'}
                </button>
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
