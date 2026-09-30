import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section className="a1-section" id="contact">
      <h2 className="a1-section-title">
        <Mail size={24} color="#38bdf8" /> Contact Information & Get In Touch
      </h2>
      <div className="a1-contact-grid">
        <div>
          {submitted ? (
            <div style={{
              background: 'rgba(52, 211, 153, 0.1)',
              border: '1px solid rgba(52, 211, 153, 0.3)',
              borderRadius: '12px',
              padding: '2rem',
              textAlign: 'center',
              color: '#34d399'
            }}>
              <CheckCircle2 size={48} style={{ margin: '0 auto 1rem' }} />
              <h3>Thank You!</h3>
              <p style={{ color: '#cbd5e1', fontSize: '0.95rem', marginTop: '0.5rem' }}>
                Your message has been sent successfully. I will get back to you shortly!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="a1-form-group">
                <label className="a1-label">Full Name</label>
                <input
                  type="text"
                  className="a1-input"
                  placeholder="Enter your name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="a1-form-group">
                <label className="a1-label">Email Address</label>
                <input
                  type="email"
                  className="a1-input"
                  placeholder="name@example.com"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="a1-form-group">
                <label className="a1-label">Your Message</label>
                <textarea
                  className="a1-textarea"
                  rows="4"
                  placeholder="Type your message here..."
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>
              <button type="submit" className="a1-btn-submit" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                <Send size={16} /> Send Message
              </button>
            </form>
          )}
        </div>
        <div className="a1-contact-info-list">
          <div className="a1-contact-item">
            <Mail size={24} color="#38bdf8" />
            <div>
              <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Email Me</div>
              <div style={{ color: '#f1f5f9', fontWeight: '600' }}>alex.morgan@example.com</div>
            </div>
          </div>
          <div className="a1-contact-item">
            <Phone size={24} color="#818cf8" />
            <div>
              <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Call / WhatsApp</div>
              <div style={{ color: '#f1f5f9', fontWeight: '600' }}>+1 (555) 234-5678</div>
            </div>
          </div>
          <div className="a1-contact-item">
            <MapPin size={24} color="#34d399" />
            <div>
              <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Location</div>
              <div style={{ color: '#f1f5f9', fontWeight: '600' }}>San Francisco Bay Area, CA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
