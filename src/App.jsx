import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code2, Database, Cpu, Mail, Phone, MapPin, Send, ChevronRight } from 'lucide-react';
import './index.css';

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <>
      <header className={scrolled ? 'scrolled' : ''}>
        <div className="container nav-container">
          <div className="logo text-gradient">HARI<span className="text-gradient-alt">.DEV</span></div>
          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="hero">
          <div className="container hero-content">
            <motion.div 
              className="hero-text"
              initial="hidden"
              animate="show"
              variants={staggerContainer}
            >
              <motion.h1 variants={fadeInUp}>
                Hi, I'm <span className="text-gradient">Hari</span><br />
                <span className="text-gradient-alt">Software Developer</span>
              </motion.h1>
              <motion.p variants={fadeInUp}>
                I craft high-performance applications and intelligent backend systems. Passionate about problem-solving and writing clean, scalable code.
              </motion.p>
              <motion.div variants={fadeInUp} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', '@media(minWidth: 992px)': { justifyContent: 'flex-start' } }}>
                <a href="#contact" className="btn btn-primary">
                  Get In Touch <ChevronRight size={20} />
                </a>
                <a href="#skills" className="btn btn-outline">
                  View My Skills
                </a>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="hero-image-container float-anim"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="hero-blob"></div>
              <div className="glass-panel hero-card" style={{ position: 'relative', zIndex: 10 }}>
                <Terminal size={60} className="text-gradient" style={{ margin: '0 auto 1.5rem', display: 'block' }} />
                <h3>Code is Art</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Transforming ideas into elegant, executable realities through the power of programming.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="section-title">My <span className="text-gradient">Arsenal</span></motion.h2>
              <motion.p variants={fadeInUp} className="section-subtitle">
                Mastering the languages that power modern computing, from high-level abstractions to low-level system design.
              </motion.p>

              <div className="skills-grid">
                {[
                  { name: 'C', icon: <Cpu size={40} />, desc: 'System-level programming & memory management.' },
                  { name: 'C++', icon: <Code2 size={40} />, desc: 'Object-oriented performance architecture.' },
                  { name: 'Java', icon: <Database size={40} />, desc: 'Enterprise-grade scalable applications.' },
                  { name: 'Python', icon: <Terminal size={40} />, desc: 'Data structures, scripting & automation.' }
                ].map((skill, index) => (
                  <motion.div key={skill.name} variants={fadeInUp} className="glass-panel skill-card">
                    <div className="skill-icon">{skill.icon}</div>
                    <h4>{skill.name}</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>{skill.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="section-title">Let's <span className="text-gradient">Connect</span></motion.h2>
              <motion.p variants={fadeInUp} className="section-subtitle">
                Open for opportunities and collaborations. Reach out to discuss your next project.
              </motion.p>

              <div className="contact-container">
                <motion.div variants={fadeInUp} className="contact-info">
                  <div className="glass-panel contact-item">
                    <div className="contact-item-icon">
                      <Phone size={24} />
                    </div>
                    <div className="contact-item-content">
                      <h4>Phone</h4>
                      <p>+91 9876543210</p>
                    </div>
                  </div>
                  
                  <div className="glass-panel contact-item">
                    <div className="contact-item-icon">
                      <Mail size={24} />
                    </div>
                    <div className="contact-item-content">
                      <h4>Email</h4>
                      <p>hporafdb@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="glass-panel contact-item">
                    <div className="contact-item-icon">
                      <MapPin size={24} />
                    </div>
                    <div className="contact-item-content">
                      <h4>Location</h4>
                      <p>Sivakasi, Tamil Nadu</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="glass-panel contact-form">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Your Name" />
                    </div>
                    <div className="form-group">
                      <input type="email" className="form-control" placeholder="Your Email" />
                    </div>
                    <div className="form-group">
                      <textarea className="form-control" placeholder="Your Message"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                      Send Message <Send size={18} />
                    </button>
                  </form>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Hari. All Rights Reserved. Crafted with React.</p>
        </div>
      </footer>
    </>
  );
};

export default App;
