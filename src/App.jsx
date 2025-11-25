import React from "react";
import "./styles.css";
import shravya from "./assets/shravya.jpg"
import logo from "./assets/logo.jpeg";



function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Thank you for reaching out to TeSh Events! Our team will connect with you shortly."
    );
  };

  return (
    <div className="app">
      {/* Top Navigation */}
      <header className="navbar">
        <div className="nav-container">
          <div className="logo">
  <span>TESH</span>
  <span>EVENTS</span>
</div>



          <nav className="nav-links">
  <a href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#services">Services</a>
  <a href="#packages">Packages</a>
  <a href="#team">Team</a>
  <a href="#contact">Contact</a>

  {/* SOCIAL ICONS */}
  <div className="social-icons">
    {/* Instagram */}
    <a 
      href="https://www.instagram.com/tesh.events"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img 
        src="https://cdn-icons-png.flaticon.com/512/174/174855.png" 
        alt="Instagram" 
      />
    </a>

    {/* WhatsApp +91 99857 44913 */}
    <a 
      href="https://wa.me/919985744913" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <img 
        src="https://cdn-icons-png.flaticon.com/512/733/733585.png" 
        alt="WhatsApp" 
      />
    </a>

    {/* WhatsApp +91 91103 08773 */}
    <a 
      href="https://wa.me/919110308773" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <img 
        src="https://cdn-icons-png.flaticon.com/512/733/733585.png" 
        alt="WhatsApp" 
      />
    </a>
  </div>
</nav>

          <a href="#contact" className="nav-cta">
            Plan Your Event
          </a>
        </div>
      </header>




      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-inner">
          <div className="hero-content">
            {/* TeSh Events Logo in HERO */}
            <div className="hero-logo-wrapper">
  <img src={logo} className="hero-logo" alt="TeSh Events Logo" />
</div>
            <h1>
              Personalised &amp; Customised
              <span className="highlight"> Celebrations</span> for Every Story
            </h1>
            <p className="hero-subtitle">
              TeSh Events is a Premium Personalised and Customised Event
              Management Brand Founded and Led by{" "}
              <strong>Miss Shravya Vani</strong>, International Events
              Management – University of Greenwich, London. We design Elegant,
              Emotion-filled Experiences in{" "}
              <strong>Andhra Pradesh &amp; Telangana</strong> that truly reflect YOU.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn primary">
                Start Your Event Plan
              </a>
              <a href="#services" className="btn ghost">
                View Services
              </a>
            </div>
            <div className="hero-tags">
              <span>Birthdays</span>
              <span>Weddings</span>
              <span>Corporate Events</span>
              <span>College &amp; Campus Events</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card">
              <p className="hero-label">Premium Planning-Beautiful Execution-Timeless Memories</p>
              <h2>TESH EVENTS-EXPERIENCES & CELEBRATIONS</h2>
              <p className="hero-role">
                If you can imagine it,<br />
                We can create it.
              </p>
              <p className="hero-note">
                “We don’t follow templates. We create PERSONALISED and
                CUSTOMISED Experiences just for YOU.”
              </p>
              <div className="hero-locations">
                <span>📍 Andhra Pradesh</span>
                <span>📍 Telangana</span>
              </div>
            </div>
          </div>
        </div>
      </section>






      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="section-inner">
          <div className="section-header">
            <h2>About TeSh Events</h2>
            <p>
              Crafted with International Standards, rooted in Local Warmth, and
              Tailored just for YOU.
            </p>
          </div>
          <div className="about-grid">
            <div className="about-text">
              <p>
                TeSh Events is a Personalised and Customised Event Management
                Brand dedicated to turning your Milestones into meaningful
                Memories. Every celebration is carefully curated to match your
                Personality, Emotions, Culture, and Vision.
              </p>
              <p>
                With a strong foundation in{" "}
                <strong>International Events Management</strong> and exposure
                from the <strong>University of Greenwich, London</strong>, Miss
                Shravya Vani brings a global perspective to event design while
                understanding the Expectations, Sensitivities, and Traditions of
                Indian families and Corporates.
              </p>
              <p>
                From intimate Birthdays to large Wedding celebrations, and from
                elegant Corporate evenings to energetic College fests — TeSh
                Events ensures that every element is thoughtfully PERSONALISED
                and CUSTOMISED for you.
              </p>
            </div>
            <div className="about-highlights">
              <div className="stat-card">
                <h3>Personalised Planning</h3>
                <p>
                  One-to-one consultations to understand your Story, Preferences
                  and Comfort, before we design anything.
                </p>
              </div>
              <div className="stat-card">
                <h3>Customised Concepts</h3>
                <p>
                  Themes, Colours, Music, Decor and Flow completely tailored to
                  your Event, not a copy-paste Template.
                </p>
              </div>
              <div className="stat-card">
                <h3>End-to-End Execution</h3>
                <p>
                  From ideation to on-ground management so you can relax and
                  enjoy your own celebration.
                </p>
              </div>
              <div className="stat-card">
                <h3>TeSh Ecosystem Support</h3>
                <p>
                  Backed by the TeSh network for Campus events, Corporate
                  Connects and International Collaborations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section services-section">
        <div className="section-inner">
          <div className="section-header center">
            <h2>Services We Offer</h2>
            <p>
              From Birthdays and Marriages to Corporate and Institutional
              events, we handle it all — with a Personalised and Customised
              touch.
            </p>
          </div>

          <div className="services-grid">
            {/* Personal Events */}
            <div className="service-card">
              <h3>Personal Events &amp; Birthdays</h3>
              <p>
                Heart-warming, Fun and Aesthetically Pleasing Celebrations
                designed around the Person, not just the Party.
              </p>
              <ul>
                <li>Kids &amp; Adult Birthdays</li>
                <li>Surprise Parties &amp; Themes</li>
                <li>Anniversaries &amp; House Warmings</li>
                <li>Baby Shower &amp; Naming Ceremony</li>
                <li>Half Saree &amp; Dhoti Functions</li>
              </ul>
            </div>

            {/* Weddings */}
            <div className="service-card">
              <h3>Weddings &amp; Pre-Weddings</h3>
              <p>
                Elegant, customised Wedding experiences that balance Tradition
                and Trend, Emotion and Aesthetics.
              </p>
              <ul>
                <li>Engagement &amp; Sangeet</li>
                <li>Mehendi &amp; Haldi Concepts</li>
                <li>Wedding &amp; Reception</li>
                <li>Stage &amp; Mandap Design</li>
                <li>Entry Concepts &amp; Photo Corners</li>
              </ul>
            </div>

            {/* Corporate */}
            <div className="service-card">
              <h3>Corporate Events</h3>
              <p>
                Professional, Sharp and Impression-creating Events that reflect
                your Brand, Culture and Goals.
              </p>
              <ul>
                <li>Product Launches</li>
                <li>Annual Day &amp; Awards</li>
                <li>Conferences &amp; Seminars</li>
                <li>Corporate Parties &amp; Offsites</li>
                <li>Inaugurations &amp; Press Meets</li>
              </ul>
            </div>

            {/* Institutional */}
            <div className="service-card">
              <h3>Institutional &amp; Campus Events</h3>
              <p>
                High-energy, Youth-centric and well-coordinated events for
                Schools, Colleges and Universities.
              </p>
              <ul>
                <li>College Fests &amp; Cultural Nights</li>
                <li>Fresher&apos;s &amp; Farewell</li>
                <li>Convocations &amp; Alumni Meets</li>
                <li>Workshops &amp; Education Fairs</li>
                <li>Women &amp; Youth Empowerment Events</li>
              </ul>
            </div>

            {/* International / NRI */}
            <div className="service-card">
              <h3>NRI &amp; Destination Events</h3>
              <p>
                Specially planned celebrations for families travelling from
                Abroad or planning Destination-Style Events in India.
              </p>
              <ul>
                <li>NRI Weddings &amp; Receptions</li>
                <li>Hybrid &amp; Virtual Participation</li>
                <li>Themed Experiences</li>
                <li>Family Reunions</li>
                <li>Customised Itineraries</li>
              </ul>
            </div>

            {/* Add-on Services */}
            <div className="service-card">
              <h3>Add-On Services</h3>
              <p>We also coordinate trusted partners and vendors for:</p>
              <ul>
                <li>Photography &amp; Videography</li>
                <li>Anchors &amp; Performers</li>
                <li>Catering &amp; Cakes</li>
                <li>Sound &amp; Lights</li>
                <li>Return Gifts &amp; Hampers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="section packages-section">
        <div className="section-inner">
          <div className="section-header center">
            <h2>Packages &amp; Styling Options</h2>
            <p>
              Every package is a starting point — we Personalise and Customise it
              after understanding your requirements.
            </p>
          </div>

          <div className="packages-grid">
            <div className="package-card">
              <h3>Essential</h3>
              <p className="package-tagline">
                Simple, Elegant and Budget-conscious.
              </p>
              <ul>
                <li>Basic decor &amp; theme styling</li>
                <li>Standard stage / backdrop</li>
                <li>Basic lighting support</li>
                <li>On-the-day coordination</li>
                <li>Perfect for small gatherings</li>
              </ul>
              <p className="package-note">
                Ideal for intimate Birthdays, small Engagements and Home
                functions.
              </p>
            </div>

            <div className="package-card featured">
              <h3>Signature</h3>
              <p className="package-tagline">
                Our most Loved Personalised &amp; Customised package.
              </p>
              <ul>
                <li>Concept-based Decor &amp; styling</li>
                <li>Customised Backdrop &amp; photo corners</li>
                <li>Detailed Event Flow Planning</li>
                <li>Vendor Coordination &amp; Supervision</li>
                <li>Dedicated Event Coordinator on Ground</li>
              </ul>
              <p className="package-note">
                Best suited for Weddings, Receptions, Corporate Evenings and
                Large Campus Events.
              </p>
            </div>

            <div className="package-card">
              <h3>Luxury</h3>
              <p className="package-tagline">
                High-impact, Detail-rich and Experience driven.
              </p>
              <ul>
                <li>Bespoke theme &amp; set design</li>
                <li>High-end styling &amp; florals</li>
                <li>Immersive entry &amp; lighting experiences</li>
                <li>Curated artist / performer options</li>
                <li>End-to-end event management</li>
              </ul>
              <p className="package-note">
                For those who want their Celebration to feel like a Curated Show
                — not just an event.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section process-section">
        <div className="section-inner">
          <div className="section-header center">
            <h2>How We Work</h2>
            <p>
              A simple and clear process, fully centred around YOUR COMFORT and
              EXPECTATIONS.
            </p>
          </div>

          <div className="process-grid">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3>Discover</h3>
              <p>
                We listen. We understand your STORY, PEOPLE, CONSTRAINTS and
                DREAMS for the event.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <h3>Design</h3>
              <p>
                We share Personalised and Customised Concepts, Mood Boards and
                Options that reflect YOU.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <h3>Deliver</h3>
              <p>
                Our team manages everything end-to-end while you experience your
                Own Celebration peacefully.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section team-section">
        <div className="section-inner">
          <div className="section-header center">
            <h2>Leadership</h2>
            <p>The face, heart and mind behind TeSh Events.</p>
          </div>

          <div className="team-grid">
            <div className="team-card">
              {/* Add real image via CSS background or an <img> tag when ready */}
              <img src={shravya} alt="Miss Shravya Vani" className="avatar-photo" />
              <h3>Miss Shravya Vani</h3>
              <p className="team-role">
                Founder &amp; Managing Director – TeSh Events
              </p>
              <p className="team-bio">
                An International Events Management professional from the{" "}
                <strong>University of Greenwich, London</strong>, Shravya brings
                a Global Outlook, Creative Eye and Grounded Empathy to every
                Event. Her style is Calm, Organised and deeply Client-focused,
                ensuring that each celebration feels Personalised, Customised and
                Beautifully put together.
              </p>
              <p className="team-location">
                Based in Kurnool &amp; Hyderabad | Serving families, campuses
                and corporates across Andhra Pradesh &amp; Telangana.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials (Placeholder Content) */}
      <section className="section testimonial-section">
        <div className="section-inner">
          <div className="section-header center">
            <h2>What Our Clients Say</h2>
            <p>
              Real emotions. Real feedback. Real memories — shared after their
              TeSh Events experience.
            </p>
          </div>

          <div className="testimonial-grid">
            <div className="testimonial-card">
              <p className="testimonial-text">
                “The entire birthday event felt like it was designed only for
                our child. Every detail was personalised and customised — right
                from the colours to the games. We just walked in and enjoyed.”
              </p>
              <p className="testimonial-name">– Parent, Kids Birthday Event</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                “Professional, calm and very well-coordinated. Our corporate
                evening had a premium feel without unnecessary drama. The team
                handled everything silently in the background.”
              </p>
              <p className="testimonial-name">– HR Head, Corporate Client</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="section-inner contact-inner">
          <div className="contact-text">
            <div className="section-header">
              <h2>Plan Your Next Event with TeSh Events</h2>
              <p>
                Share a few details and we will connect with you to create a
                Personalised and Customised event plan.
              </p>
            </div>
            <div className="contact-details">
              <p>
                <strong>Service Locations:</strong> Kurnool &amp; Hyderabad
                (Andhra Pradesh &amp; Telangana)
              </p>
              <p>
                <strong>Ideal For:</strong> Birthdays, Marriages, Corporate
                Events, College &amp; Campus Events, NRI Functions and more.
              </p>
              <p className="contact-note">
                You can also reach us directly via WhatsApp / Call ( 9985744913, 9110308773
                  ) and our Instagram page tesh.events 
              </p>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Your Name</label>
                  <input type="text" required placeholder="Full Name" />
                </div>
                <div className="form-group">
                  <label>Phone / WhatsApp</label>
                  <input type="tel" required placeholder="+91-" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="you@example.com" />
                </div>
                <div className="form-group">
                  <label>Event Type</label>
                  <select defaultValue="">
                    <option value="" disabled>
                      Select Event Type
                    </option>
                    <option>Birthday</option>
                    <option>Marriage / Reception</option>
                    <option>Corporate Event</option>
                    <option>College / Campus Event</option>
                    <option>NRI / Destination Event</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>City / Venue</label>
                  <input
                    type="text"
                    placeholder="Kurnool / Hyderabad / Other (AP / TS)"
                  />
                </div>
                <div className="form-group">
                  <label>Approx. Date</label>
                  <input type="date" />
                </div>
              </div>
              <div className="form-group">
                <label>Estimated Budget Range</label>
                <input
                  type="text"
                  placeholder="e.g., ₹1–3 Lakhs / ₹3–7 Lakhs / To be discussed"
                />
              </div>
              <div className="form-group">
                <label>Tell us about your event</label>
                <textarea
                  rows="4"
                  placeholder="Share your ideas, Theme preferences, Guest count, and any Special requirements…"
                ></textarea>
              </div>
              <button type="submit" className="btn primary full">
                Get your Personalised and Customized Quote
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <p>
            © {new Date().getFullYear()} TeSh Events. All rights reserved. A
            Personalised &amp; Customised Event Wing of the TeSh Ecosystem.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
