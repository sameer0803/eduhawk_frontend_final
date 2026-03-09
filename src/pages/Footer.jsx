// import { useState } from "react";

// // ──────────────────────────────────────────────
// // Data
// const COUNTRIES = [
//   { name: "Russia", flag: "🇷🇺", seats: "600+ seats", fee: "₹20-30L total" },
//   { name: "Georgia", flag: "🇬🇪", seats: "200+ seats", fee: "₹25-35L total" },
//   { name: "Uzbekistan", flag: "🇺🇿", seats: "400+ seats", fee: "₹18-28L total" },
//   { name: "Kazakhstan", flag: "🇰🇿", seats: "300+ seats", fee: "₹22-32L total" },
//   { name: "Kyrgyzstan", flag: "🇰🇬", seats: "250+ seats", fee: "₹15-25L total" },
//   { name: "Nepal", flag: "🇳🇵", seats: "150+ seats", fee: "₹35-50L total" },
// ];

// const SERVICES = [
//   { icon: "🎓", title: "MBBS Counselling", desc: "Personalized guidance based on your academic profile, budget, and career goals" },
//   { icon: "📋", title: "Application Support", desc: "Complete assistance with documentation, application forms, and submission" },
//   { icon: "✉️", title: "Invitation Letter", desc: "Official invitation letters from NMC-approved universities" },
//   { icon: "🛫", title: "Pre-Departure Briefing", desc: "Complete orientation before you travel — visa, culture, academics" },
//   { icon: "🏥", title: "Post-Arrival Support", desc: "We stay with you even after you land — settling in, hostel, orientation" },
//   { icon: "📝", title: "FMGE/NExT Guidance", desc: "Career pathway advice to ensure eligibility for practice in India" },
// ];

// const TESTIMONIALS = [
//   {
//     name: "Priya Sharma",
//     loc: "Delhi → Russia",
//     text: "Edu-Hawk guided me every step of the way. No hidden charges, clear advice. Got into a top NMC-approved university in Russia!",
//     stars: 5,
//   },
//   {
//     name: "Rahul Verma",
//     loc: "Mumbai → Georgia",
//     text: "The counsellors were transparent and genuinely cared about my future. Best decision to trust Edu-Hawk for my MBBS abroad journey.",
//     stars: 5,
//   },
//   {
//     name: "Ananya Patel",
//     loc: "Ahmedabad → Kazakhstan",
//     text: "From application to post-arrival, they supported me fully. I feel confident about my FMGE preparation with their guidance.",
//     stars: 5,
//   },
// ];

// // ──────────────────────────────────────────────
// // Footer Component (inside same file)
// export default function Footer() {
//   return (
//     <footer className="bg-gradient-to-b from-[#0a1b2e] to-[#060f1a] text-gray-300">
//       <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-16 pb-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">
//           {/* Brand */}
//           <div>
//             <div className="flex items-center gap-4 mb-6">
//               <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-amber-300 flex items-center justify-center text-3xl shadow-lg">
//                 🦅
//               </div>
//               <div>
//                 <h3 className="text-white font-bold text-xl">Edu-Hawk Worldwide</h3>
//                 <p className="text-amber-500 text-xs uppercase tracking-widest font-medium mt-1">
//                   Overseas Medical Education
//                 </p>
//               </div>
//             </div>
//             <p className="text-gray-400 text-sm leading-relaxed mb-6">
//               Trusted MBBS abroad consultants for Indian students. Transparent counselling, NMC-approved universities, no hidden charges.
//             </p>
//             <div className="flex gap-5">
//               <a href="#" className="hover:text-amber-400 transition">📘</a>
//               <a href="#" className="hover:text-amber-400 transition">🐦</a>
//               <a href="#" className="hover:text-amber-400 transition">📸</a>
//               <a href="#" className="hover:text-amber-400 transition">🔗</a>
//             </div>
//           </div>

//           {/* Countries */}
//           <div>
//             <h4 className="text-amber-400 font-semibold uppercase tracking-wider text-sm mb-5">Countries</h4>
//             <div className="space-y-2 text-sm">
//               {COUNTRIES.map((c) => (
//                 <div key={c.name} className="hover:text-amber-300 cursor-pointer transition">
//                   {c.flag} {c.name}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-amber-400 font-semibold uppercase tracking-wider text-sm mb-5">Quick Links</h4>
//             <div className="space-y-2 text-sm">
//               {["Home", "About Us", "Services", "Countries", "Testimonials", "Contact", "Blog", "FAQs"].map((link) => (
//                 <div key={link} className="hover:text-amber-300 cursor-pointer transition">
//                   {link}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Contact */}
//           <div>
//             <h4 className="text-amber-400 font-semibold uppercase tracking-wider text-sm mb-5">Contact</h4>
//             <div className="space-y-4 text-sm">
//               <div>
//                 <div className="text-gray-400">Phone</div>
//                 <div className="text-white">+91 98765 43210</div>
//               </div>
//               <div>
//                 <div className="text-gray-400">Email</div>
//                 <div className="text-white">info@eduhawk.com</div>
//               </div>
//               <div>
//                 <div className="text-gray-400">Office</div>
//                 <div className="text-white">New Delhi, India</div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-gray-500">
//           © {new Date().getFullYear()} Edu-Hawk Worldwide. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// }

// // ──────────────────────────────────────────────
// // Main Component (only this is exported)
// export default function EduHawk() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     country: "",
//     message: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Thank you! Our counsellor will contact you within 24 hours.");
//     setFormData({ name: "", email: "", phone: "", country: "", message: "" });
//   };

//   return (
//     <div className="font-['Playfair_Display',Georgia,serif] bg-white text-gray-900 min-h-screen">
//       {/* Google Fonts */}
//       <link
//         href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Lato:wght@300;400;700&display=swap"
//         rel="stylesheet"
//       />

//       {/* ────────────── HERO ────────────── */}
//       <section className="bg-gradient-to-br from-[#0a2342] via-[#1a4a7a] to-[#0d3460] py-28 md:py-40 px-6 text-center relative overflow-hidden">
//         <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-amber-500/5" />
//         <div className="max-w-5xl mx-auto relative">
//           <p className="text-amber-400 uppercase tracking-widest text-sm mb-6">
//             🏥 NMC-Approved Universities Abroad
//           </p>
//           <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-8">
//             Your MBBS Abroad Journey<br />
//             <span className="text-amber-500">Starts with Right Guidance</span>
//           </h1>
//           <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-10">
//             Trusted consultants • Transparent process • No hidden charges • End-to-end support
//           </p>
//           <div className="flex flex-wrap justify-center gap-5">
//             <button className="bg-gradient-to-r from-amber-500 to-amber-300 text-[#0a2342] font-bold uppercase tracking-wider px-10 py-4 rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
//               Book Free Counselling →
//             </button>
//             <button className="border-2 border-amber-400/60 text-white px-10 py-4 rounded-xl font-medium uppercase tracking-wider hover:bg-amber-500/10 transition-all">
//               Explore Countries
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* ────────────── You can add other sections here (About, Services, Countries, Testimonials, Contact) ────────────── */}
//       {/* For now keeping it short – paste your previous sections if needed */}

//       {/* FOOTER */}
//       <Footer />

//       {/* Gallery after footer */}
//       <div className="bg-gradient-to-b from-[#faf8f4] to-white py-20 px-6 text-center">
//         <h3 className="text-4xl md:text-5xl font-bold text-[#0a2342] mb-8">
//           Life at NMC-Approved Medical Universities Abroad
//         </h3>
//         <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
//           <img
//             src="https://images.unsplash.com/photo-1562774053-701939374585?w=800"
//             alt="Medical university campus"
//             className="rounded-2xl shadow-2xl object-cover h-80 w-full"
//           />
//           <img
//             src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800"
//             alt="Students in medical lecture"
//             className="rounded-2xl shadow-2xl object-cover h-80 w-full"
//           />
//           <img
//             src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800"
//             alt="International student hostel"
//             className="rounded-2xl shadow-2xl object-cover h-80 w-full"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

export default function Footer() {

  const COUNTRIES = [
  { name: "Russia", flag: "🇷🇺", seats: "600+ seats", fee: "₹20-30L total" },
  { name: "Georgia", flag: "🇬🇪", seats: "200+ seats", fee: "₹25-35L total" },
  { name: "Uzbekistan", flag: "🇺🇿", seats: "400+ seats", fee: "₹18-28L total" },
  { name: "Kazakhstan", flag: "🇰🇿", seats: "300+ seats", fee: "₹22-32L total" },
  { name: "Kyrgyzstan", flag: "🇰🇬", seats: "250+ seats", fee: "₹15-25L total" },
  { name: "Nepal", flag: "🇳🇵", seats: "150+ seats", fee: "₹35-50L total" },
];
  return (
    <footer className="bg-gradient-to-b from-[#0a1b2e] to-[#060f1a] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-500 to-amber-300 flex items-center justify-center text-4xl shadow-lg">
                🦅
              </div>
              <div>
                <h3 className="text-white font-bold text-2xl">Edu-Hawk Worldwide</h3>
                <p className="text-amber-400 text-xs uppercase tracking-widest mt-1">
                  Overseas Medical Education
                </p>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed mb-8 max-w-md">
              Your trusted partner for MBBS abroad — transparent, ethical, and student-first counselling since day one.
            </p>

            {/* Social Icons */}
            <div className="flex gap-5 text-2xl">
              <a href="#" className="hover:text-amber-400 transition-colors">📘</a>
              <a href="#" className="hover:text-amber-400 transition-colors">🐦</a>
              <a href="#" className="hover:text-amber-400 transition-colors">📸</a>
              <a href="#" className="hover:text-amber-400 transition-colors">🔗</a>
            </div>
          </div>

          {/* Countries */}
          <div>
            <h4 className="text-amber-400 font-semibold uppercase tracking-wider text-sm mb-6">Popular Destinations</h4>
            <div className="space-y-3 text-base">
              {COUNTRIES.map((c) => (
                <div key={c.name} className="hover:text-amber-300 transition cursor-pointer flex items-center gap-2">
                  <span className="text-xl">{c.flag}</span>
                  <span>{c.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-amber-400 font-semibold uppercase tracking-wider text-sm mb-6">Quick Links</h4>
            <div className="space-y-3 text-base">
              {["Home", "About", "Services", "Countries", "Testimonials", "Contact", "FAQs", "Blog"].map((link) => (
                <div key={link} className="hover:text-amber-300 transition cursor-pointer">
                  {link}
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter + Contact */}
          <div>
            <h4 className="text-amber-400 font-semibold uppercase tracking-wider text-sm mb-6">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-4">Get latest MBBS abroad updates & deadlines</p>
            
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-amber-500"
              />
              <button className="bg-amber-500 hover:bg-amber-400 text-gray-900 font-semibold py-3 rounded-lg transition">
                Subscribe
              </button>
            </form>

            <div className="mt-8">
              <div className="text-gray-400 text-sm mb-2">Contact</div>
              <div className="text-white">+91 98765 43210</div>
              <div className="text-white mt-1">info@eduhawk.com</div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Edu-Hawk Worldwide • All rights reserved • Trusted by 2000+ Indian students
        </div>
      </div>
    </footer>
  );
}