
// import React from 'react';

// const HeroSection = () => {
//   const slides = [
//     {
//       title: "Edu-Hawk Worldwide",
//       subtitle: "Your Trusted Partner for MBBS Abroad",
//       description:
//         "Edu-Hawk Worldwide is a trusted provider of MBBS counselling abroad services, helping Indian students achieve their dream of studying medicine in reputed international universities.",
//       highlight: "We guide students in securing admission to NMC-approved medical universities abroad through a transparent and student-focused counselling process.",
//     },
   
//   ];

//   return (
//     <div className="w-full bg-gradient-to-br from-gray-950 via-indigo-950 to-gray-950 text-white py-16 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 text-center">
//         <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
//           Build Your <span className="text-green-400">Medical</span> Future
//         </h1>
//         <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
//           Trusted counselling for MBBS abroad — making your dream of becoming a doctor truly global.
//         </p>

//         {/* Carousel - auto-scrolling right to left */}
//         <div className="relative">
//           <div className="overflow-hidden">
//             <div className="flex animate-marquee whitespace-nowrap gap-8 py-4">
//               {slides.concat(slides).map((slide, index) => (  // duplicate for seamless loop
//                 <div
//                   key={index}
//                   className="min-w-[320px] sm:min-w-[420px] md:min-w-[500px] bg-gray-900/60 backdrop-blur-md border border-gray-700/50 rounded-2xl p-8 shadow-2xl hover:scale-105 transition-transform duration-500"
//                 >
//                   <h2 className="text-3xl font-bold mb-3 text-green-400">{slide.title}</h2>
//                   <h3 className="text-xl font-semibold mb-4 text-gray-200">{slide.subtitle}</h3>
//                   <p className="text-gray-300 mb-6 leading-relaxed">{slide.description}</p>
//                   <p className="text-lg font-medium text-green-300 italic">"{slide.highlight}"</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Call to action buttons like in the example */}
//         <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
//           <a
//             href="#"
//             className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-xl text-lg transition-colors shadow-lg"
//           >
//             Get Free Counselling →
//           </a>
//           <a
//             href="#"
//             className="inline-block border border-gray-500 hover:bg-gray-800 text-white font-bold py-4 px-10 rounded-xl text-lg transition-colors"
//           >
//             Know More About Process
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

import { useState, useEffect } from "react";

const NAV_LINKS = ["Home", "About", "Services", "Countries", "Contact"];

const COUNTRIES = [
  { name: "Russia", flag: "🇷🇺", seats: "600+ seats", fee: "₹20-30L total" },
  { name: "Georgia", flag: "🇬🇪", seats: "200+ seats", fee: "₹25-35L total" },
  { name: "Uzbekistan", flag: "🇺🇿", seats: "400+ seats", fee: "₹18-28L total" },
  { name: "Kazakhstan", flag: "🇰🇿", seats: "300+ seats", fee: "₹22-32L total" },
  { name: "Kyrgyzstan", flag: "🇰🇬", seats: "250+ seats", fee: "₹15-25L total" },
  { name: "Nepal", flag: "🇳🇵", seats: "150+ seats", fee: "₹35-50L total" },
];

const SERVICES = [
  {
    icon: "🎓",
    title: "MBBS Counselling",
    desc: "Personalized guidance based on your academic profile, budget, and career goals",
  },
  {
    icon: "📋",
    title: "Application Support",
    desc: "Complete assistance with documentation, application forms, and submission",
  },
  {
    icon: "✉️",
    title: "Invitation Letter",
    desc: "Official invitation letters from NMC-approved universities",
  },
  {
    icon: "🛫",
    title: "Pre-Departure Briefing",
    desc: "Complete orientation before you travel — visa, culture, academics",
  },
  {
    icon: "🏥",
    title: "Post-Arrival Support",
    desc: "We stay with you even after you land — settling in, hostel, orientation",
  },
  {
    icon: "📝",
    title: "FMGE/NExT Guidance",
    desc: "Career pathway advice to ensure eligibility for practice in India",
  },
];

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    loc: "Delhi → Russia",
    text: "Edu-Hawk guided me every step of the way. No hidden charges, clear advice. Got into a top NMC-approved university in Russia!",
    stars: 5,
  },
  {
    name: "Rahul Verma",
    loc: "Mumbai → Georgia",
    text: "The counsellors were transparent and genuinely cared about my future. Best decision to trust Edu-Hawk for my MBBS abroad journey.",
    stars: 5,
  },
  {
    name: "Ananya Patel",
    loc: "Ahmedabad → Kazakhstan",
    text: "From application to post-arrival, they supported me fully. I feel confident about my FMGE preparation with their guidance.",
    stars: 5,
  },
];

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Home");
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", country: "", message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Our counsellor will contact you within 24 hours.");
  };

  return (
    <div style={{ fontFamily: "'Playfair Display', Georgia, serif" }} className="min-h-screen bg-white text-gray-900">
      {/* Import Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Lato:wght@300;400;700&display=swap');
        
        * { box-sizing: border-box; }
        
        body { margin: 0; }

        .lato { font-family: 'Lato', sans-serif; }

        .hero-gradient {
          background: linear-gradient(135deg, #0a2342 0%, #1a4a7a 50%, #0d3460 100%);
        }

        .gold-accent { color: #d4a853; }
        .gold-bg { background-color: #d4a853; }
        .gold-border { border-color: #d4a853; }

        .card-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(10, 35, 66, 0.15);
        }

        .nav-link {
          position: relative;
          font-family: 'Lato', sans-serif;
          font-weight: 400;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          font-size: 0.8rem;
          cursor: pointer;
          padding-bottom: 4px;
          transition: color 0.2s;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: #d4a853;
          transition: width 0.3s ease;
        }
        .nav-link:hover::after, .nav-link.active::after { width: 100%; }
        .nav-link.active { color: #d4a853; }

        .country-card {
          background: linear-gradient(145deg, #f8f4ee, #fff);
          border: 1px solid #e8d5b0;
          border-radius: 12px;
          padding: 28px 24px;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .country-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #d4a853, #f0c070);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }
        .country-card:hover::before { transform: scaleX(1); }
        .country-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(212, 168, 83, 0.2);
        }

        .stat-item {
          position: relative;
          padding: 24px;
        }
        .stat-item::after {
          content: '';
          position: absolute;
          right: 0;
          top: 20%;
          height: 60%;
          width: 1px;
          background: rgba(255,255,255,0.2);
        }
        .stat-item:last-child::after { display: none; }

        .section-line {
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #d4a853, #f0c070);
          margin: 0 auto 12px;
        }

        .form-input {
          width: 100%;
          padding: 12px 16px;
          border: 1.5px solid #ddd;
          border-radius: 8px;
          font-family: 'Lato', sans-serif;
          font-size: 0.95rem;
          outline: none;
          transition: border-color 0.2s;
          background: #fafafa;
        }
        .form-input:focus {
          border-color: #d4a853;
          background: #fff;
        }

        .cta-btn {
          background: linear-gradient(135deg, #d4a853, #f0c070);
          color: #0a2342;
          font-family: 'Lato', sans-serif;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 14px 36px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(212, 168, 83, 0.4);
        }
        .cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(212, 168, 83, 0.5);
        }

        .testimonial-card {
          background: white;
          border-radius: 12px;
          padding: 32px 28px;
          box-shadow: 0 8px 30px rgba(10, 35, 66, 0.08);
          border-left: 4px solid #d4a853;
          transition: transform 0.3s ease;
        }
        .testimonial-card:hover {
          transform: translateY(-4px);
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in { animation: fadeInUp 0.8s ease forwards; }
        .fade-in-1 { animation-delay: 0.1s; opacity: 0; }
        .fade-in-2 { animation-delay: 0.3s; opacity: 0; }
        .fade-in-3 { animation-delay: 0.5s; opacity: 0; }

        @media (max-width: 768px) {
          .hero-title { font-size: 2.2rem !important; }
          .grid-3 { grid-template-columns: 1fr 1fr !important; }
          .grid-6 { grid-template-columns: 1fr 1fr !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .grid-3 { grid-template-columns: 1fr !important; }
          .grid-6 { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

    

      {/* HERO */}
      <section className="hero-gradient" style={{ padding: "100px 24px 80px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        {/* decorative circles */}
        <div style={{ position: "absolute", top: -80, right: -80, width: 300, height: 300, borderRadius: "50%", background: "rgba(212,168,83,0.06)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -60, left: -60, width: 250, height: 250, borderRadius: "50%", background: "rgba(212,168,83,0.04)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative" }}>
          <div className="lato fade-in fade-in-1" style={{ color: "#d4a853", letterSpacing: "0.2em", textTransform: "uppercase", fontSize: "0.8rem", marginBottom: 20 }}>
            🏥 NMC-Approved Universities Abroad
          </div>
          <h1 className="hero-title fade-in fade-in-1" style={{ color: "white", fontSize: "3.4rem", fontWeight: 800, lineHeight: 1.2, margin: "0 0 24px" }}>
            Your MBBS Abroad Journey<br />
            <span style={{ color: "#d4a853" }}>Starts with Right Guidance</span>
          </h1>
          <p className="lato fade-in fade-in-2" style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: 40, fontWeight: 300 }}>
            Trusted MBBS abroad consultants for Indian students. Transparent counselling, no hidden charges, and end-to-end support from application to post-arrival.
          </p>
          <div className="fade-in fade-in-3" style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="cta-btn">Book Free Counselling →</button>
            <button style={{ background: "transparent", border: "2px solid rgba(212,168,83,0.5)", color: "white", padding: "14px 32px", borderRadius: 6, cursor: "pointer", fontFamily: "'Lato', sans-serif", fontWeight: 400, fontSize: "0.9rem", transition: "all 0.3s" }}>
              Explore Countries
            </button>
          </div>
        </div>

        {/* Stats bar */}
        <div style={{ maxWidth: 900, margin: "60px auto 0", background: "rgba(255,255,255,0.07)", borderRadius: 12, border: "1px solid rgba(212,168,83,0.2)", display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr" }} className="stats-grid">
          {[
            { n: "2000+", l: "Students Placed" },
            { n: "6", l: "Countries" },
            { n: "50+", l: "Universities" },
            { n: "100%", l: "NMC Approved" },
          ].map((s, i) => (
            <div key={i} className="stat-item" style={{ textAlign: "center" }}>
              <div style={{ color: "#d4a853", fontSize: "2rem", fontWeight: 700 }}>{s.n}</div>
              <div className="lato" style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.8rem", letterSpacing: "0.05em", textTransform: "uppercase", marginTop: 4 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ padding: "90px 24px", background: "#faf8f4" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <div className="section-line" style={{ margin: "0 0 12px" }} />
            <div className="lato" style={{ color: "#d4a853", letterSpacing: "0.2em", textTransform: "uppercase", fontSize: "0.75rem", marginBottom: 16 }}>Who We Are</div>
            <h2 style={{ fontSize: "2.4rem", fontWeight: 700, color: "#0a2342", marginBottom: 24, lineHeight: 1.25 }}>
              Ethical MBBS Counselling.<br />Real Career Guidance.
            </h2>
            <p className="lato" style={{ color: "#555", lineHeight: 1.8, marginBottom: 20, fontSize: "0.97rem" }}>
              <strong style={{ color: "#0a2342" }}>Edu-Hawk Worldwide</strong> is a professional team of experienced education advisors specializing in MBBS counselling abroad services. We are dedicated to guiding Indian students toward admission in NMC-approved medical universities through transparent and ethical counselling.
            </p>
            <p className="lato" style={{ color: "#555", lineHeight: 1.8, marginBottom: 20, fontSize: "0.97rem" }}>
              As trusted overseas medical education consultants, we provide personalized guidance based on academic profile, budget, and long-term career goals. Our focus is to ensure students choose the right country, the right university, and build a successful medical career with proper eligibility for practice in India.
            </p>
            <p className="lato" style={{ color: "#555", lineHeight: 1.8, fontSize: "0.97rem" }}>
              We believe MBBS abroad should be a <em>planned and safe decision</em>, supported by correct guidance and honest counselling — with no hidden charges and genuine, clear information for students and parents.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {[
              { icon: "🎯", title: "Personalized Counselling", desc: "Guidance matched to your profile & budget" },
              { icon: "✅", title: "NMC Approved Only", desc: "We only recommend recognized universities" },
              { icon: "💰", title: "No Hidden Charges", desc: "100% transparent fee structure always" },
              { icon: "🤝", title: "End-to-End Support", desc: "From application to post-arrival assistance" },
            ].map((item, i) => (
              <div key={i} className="card-hover" style={{ background: "white", borderRadius: 12, padding: "24px 20px", border: "1px solid #e8d5b0", textAlign: "center" }}>
                <div style={{ fontSize: "2rem", marginBottom: 12 }}>{item.icon}</div>
                <div style={{ fontWeight: 600, color: "#0a2342", marginBottom: 8, fontSize: "0.95rem" }}>{item.title}</div>
                <div className="lato" style={{ color: "#777", fontSize: "0.82rem", lineHeight: 1.5 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "90px 24px", background: "white" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="section-line" />
            <div className="lato" style={{ color: "#d4a853", letterSpacing: "0.2em", textTransform: "uppercase", fontSize: "0.75rem", marginBottom: 16 }}>What We Offer</div>
            <h2 style={{ fontSize: "2.4rem", fontWeight: 700, color: "#0a2342", marginBottom: 16 }}>Our Services</h2>
            <p className="lato" style={{ color: "#777", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>Comprehensive MBBS abroad admission assistance with complete support at every step of your journey</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }} className="grid-3">
            {SERVICES.map((s, i) => (
              <div key={i} className="card-hover" style={{ background: "linear-gradient(145deg, #f8f4ee, #fff)", borderRadius: 12, padding: "32px 24px", border: "1px solid #e8d5b0" }}>
                <div style={{ fontSize: "2.4rem", marginBottom: 16 }}>{s.icon}</div>
                <h3 style={{ color: "#0a2342", fontWeight: 700, marginBottom: 12, fontSize: "1.1rem" }}>{s.title}</h3>
                <p className="lato" style={{ color: "#666", fontSize: "0.88rem", lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COUNTRIES */}
      <section style={{ padding: "90px 24px", background: "#0a2342" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="section-line" />
            <div className="lato" style={{ color: "#d4a853", letterSpacing: "0.2em", textTransform: "uppercase", fontSize: "0.75rem", marginBottom: 16 }}>Popular Destinations</div>
            <h2 style={{ fontSize: "2.4rem", fontWeight: 700, color: "white", marginBottom: 16 }}>MBBS Abroad Countries</h2>
            <p className="lato" style={{ color: "rgba(255,255,255,0.6)", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>We provide expert guidance for top medical education destinations with NMC-approved universities</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }} className="grid-3">
            {COUNTRIES.map((c, i) => (
              <div key={i} className="country-card">
                <div style={{ fontSize: "2.8rem", marginBottom: 12 }}>{c.flag}</div>
                <h3 style={{ color: "#0a2342", fontWeight: 700, fontSize: "1.3rem", marginBottom: 8 }}>{c.name}</h3>
                <div className="lato" style={{ color: "#666", fontSize: "0.83rem", marginBottom: 6 }}>🪑 {c.seats}</div>
                <div className="lato" style={{ color: "#d4a853", fontWeight: 700, fontSize: "0.9rem" }}>{c.fee}</div>
                <div className="lato" style={{ marginTop: 16, color: "#d4a853", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.05em" }}>View Details →</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "90px 24px", background: "#faf8f4" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="section-line" />
            <div className="lato" style={{ color: "#d4a853", letterSpacing: "0.2em", textTransform: "uppercase", fontSize: "0.75rem", marginBottom: 16 }}>Student Stories</div>
            <h2 style={{ fontSize: "2.4rem", fontWeight: 700, color: "#0a2342" }}>Trusted by Students Everywhere</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }} className="grid-3">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div style={{ color: "#d4a853", fontSize: "1.2rem", marginBottom: 16 }}>{"★".repeat(t.stars)}</div>
                <p className="lato" style={{ color: "#444", lineHeight: 1.8, marginBottom: 24, fontSize: "0.92rem", fontStyle: "italic" }}>"{t.text}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 44, height: 44, background: "linear-gradient(135deg, #0a2342, #1a4a7a)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700, fontSize: "1.1rem" }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: "#0a2342", fontSize: "0.95rem" }}>{t.name}</div>
                    <div className="lato" style={{ color: "#d4a853", fontSize: "0.78rem", fontWeight: 700 }}>{t.loc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section style={{ padding: "90px 24px", background: "white" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="section-line" />
            <div className="lato" style={{ color: "#d4a853", letterSpacing: "0.2em", textTransform: "uppercase", fontSize: "0.75rem", marginBottom: 16 }}>Get In Touch</div>
            <h2 style={{ fontSize: "2.4rem", fontWeight: 700, color: "#0a2342", marginBottom: 16 }}>Talk to Our Team</h2>
            <p className="lato" style={{ color: "#777", maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>Have questions about building your MBBS career abroad? Our counselling team is ready to help you plan the perfect path.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "start" }}>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div>
                  <label className="lato" style={{ display: "block", marginBottom: 8, color: "#444", fontSize: "0.83rem", fontWeight: 700, letterSpacing: "0.05em" }}>FULL NAME</label>
                  <input className="form-input" placeholder="John Doe" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} required />
                </div>
                <div>
                  <label className="lato" style={{ display: "block", marginBottom: 8, color: "#444", fontSize: "0.83rem", fontWeight: 700, letterSpacing: "0.05em" }}>EMAIL</label>
                  <input className="form-input" type="email" placeholder="you@email.com" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} required />
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div>
                  <label className="lato" style={{ display: "block", marginBottom: 8, color: "#444", fontSize: "0.83rem", fontWeight: 700, letterSpacing: "0.05em" }}>PHONE NUMBER</label>
                  <input className="form-input" placeholder="+91 00000 00000" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
                </div>
                <div>
                  <label className="lato" style={{ display: "block", marginBottom: 8, color: "#444", fontSize: "0.83rem", fontWeight: 700, letterSpacing: "0.05em" }}>PREFERRED COUNTRY</label>
                  <select className="form-input" value={formData.country} onChange={e => setFormData({ ...formData, country: e.target.value })}>
                    <option value="">Select country</option>
                    {COUNTRIES.map(c => <option key={c.name} value={c.name}>{c.flag} {c.name}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="lato" style={{ display: "block", marginBottom: 8, color: "#444", fontSize: "0.83rem", fontWeight: 700, letterSpacing: "0.05em" }}>MESSAGE</label>
                <textarea className="form-input" rows={5} placeholder="Tell us about your academic profile, budget, and any queries..." value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} style={{ resize: "vertical" }} />
              </div>
              <button type="submit" className="cta-btn" style={{ alignSelf: "flex-start" }}>Send Message →</button>
            </form>

            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {[
                { icon: "📞", title: "Phone", detail: "+91 98765 43210", sub: "Mon–Sat, 9 AM – 7 PM" },
                { icon: "📧", title: "Email", detail: "info@eduhawk.com", sub: "We reply within 24 hours" },
                { icon: "📍", title: "Office", detail: "Pioneer Square, New Delhi", sub: "India, 110001" },
                { icon: "🕒", title: "Office Hours", detail: "Mon–Fri: 9 AM – 6 PM", sub: "Sat: 10 AM – 4 PM" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 20, alignItems: "flex-start", padding: "20px 24px", background: "#faf8f4", borderRadius: 10, border: "1px solid #e8d5b0" }}>
                  <div style={{ width: 48, height: 48, background: "linear-gradient(135deg, #d4a853, #f0c070)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem", flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <div className="lato" style={{ color: "#d4a853", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>{item.title}</div>
                    <div style={{ color: "#0a2342", fontWeight: 600, marginBottom: 2 }}>{item.detail}</div>
                    <div className="lato" style={{ color: "#888", fontSize: "0.82rem" }}>{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#060f1a", padding: "50px 24px 30px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 42, height: 42, background: "linear-gradient(135deg, #d4a853, #f0c070)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>🦅</div>
                <div>
                  <div style={{ color: "white", fontWeight: 700, fontSize: "1.1rem" }}>Edu-Hawk Worldwide</div>
                  <div style={{ color: "#d4a853", fontSize: "0.65rem", fontFamily: "'Lato', sans-serif", letterSpacing: "0.15em", textTransform: "uppercase" }}>Overseas Medical Education</div>
                </div>
              </div>
              <p className="lato" style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.7, fontSize: "0.88rem" }}>
                Trusted MBBS abroad consultants for Indian students. Transparent counselling, NMC-approved universities, no hidden charges.
              </p>
            </div>
            <div>
              <div className="lato" style={{ color: "#d4a853", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.78rem", marginBottom: 20 }}>Countries</div>
              {COUNTRIES.map(c => (
                <div key={c.name} className="lato" style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", marginBottom: 10, cursor: "pointer" }}>{c.flag} {c.name}</div>
              ))}
            </div>
            <div>
              <div className="lato" style={{ color: "#d4a853", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.78rem", marginBottom: 20 }}>Quick Links</div>
              {["About Us", "Services", "Countries", "Testimonials", "Contact", "Free Counselling"].map(l => (
                <div key={l} className="lato" style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", marginBottom: 10, cursor: "pointer" }}>{l}</div>
              ))}
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 28, textAlign: "center" }}>
            <p className="lato" style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.82rem", margin: 0 }}>
              © 2025 Edu-Hawk Worldwide. All rights reserved. | Trusted MBBS Abroad Consultants for Indian Students
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}