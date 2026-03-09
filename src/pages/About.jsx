// import { useState, useEffect } from "react";
// import AboutImage from "../Images/About us page.gif"
// import imageAbout2 from "../Images/ABOUT SERVICE.jpg"

// const COUNTRIES = [
//   { name: "Russia", flag: "🇷🇺", seats: "600+ seats", fee: "₹20-30L total" },
//   { name: "Georgia", flag: "🇬🇪", seats: "200+ seats", fee: "₹25-35L total" },
//   { name: "Uzbekistan", flag: "🇺🇿", seats: "400+ seats", fee: "₹18-28L total" },
//   { name: "Kazakhstan", flag: "🇰🇿", seats: "300+ seats", fee: "₹22-32L total" },
//   { name: "Kyrgyzstan", flag: "🇰🇬", seats: "250+ seats", fee: "₹15-25L total" },
//   { name: "Nepal", flag: "🇳🇵", seats: "150+ seats", fee: "₹35-50L total" },
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

// const HERO_SLIDES = [
//   {
//     image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=2070",
//     title: "Your Dream Medical Career Starts Here",
//     subtitle: "Expert MBBS Abroad Counselling • NMC Approved Universities • Transparent Process",
//     cta: "Book Free Counselling",
//   },
//   {
//     image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80&w=2070",
//     title: "Study MBBS in Russia & Georgia",
//     subtitle: "Top Universities • Affordable Fees • Complete End-to-End Support",
//     cta: "Get Started Today",
//   },
//   {
//     image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=2070",
//     title: "Admission Made Simple & Secure",
//     subtitle: "No Hidden Charges • Personalized Guidance • 2000+ Happy Students",
//     cta: "Free Consultation Now",
//   },
// ];

// const FAQ_ITEMS = [
//   {
//     question: "Is MBBS abroad from these countries valid in India?",
//     answer:
//       "Yes, all universities we recommend are NMC (National Medical Commission) approved. After completing MBBS, students can appear for the FMGE/NEXT exam to practice in India.",
//   },
//   {
//     question: "What is the total cost of MBBS abroad?",
//     answer:
//       "The total cost (including tuition, hostel, food & miscellaneous) usually ranges between ₹15 Lakh to ₹50 Lakh depending on the country and university. We provide complete transparent fee breakdowns.",
//   },
 
//   {
//     question: "How long does the admission process take?",
//     answer:
//       "The entire process usually takes 2–6 months depending on the country, university, and how early you start. We recommend starting as early as possible after NEET results.",
//   },
// ];

// export default function HeroSection() {
//   const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
//   const [currentTestimonial, setCurrentTestimonial] = useState(0);
//   const [openFaqIndex, setOpenFaqIndex] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     country: "",
//     message: "",
//   });

//   useEffect(() => {
//     const heroInterval = setInterval(() => {
//       setCurrentHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length);
//     }, 6000);

//     const testimonialInterval = setInterval(() => {
//       setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
//     }, 7500);

//     return () => {
//       clearInterval(heroInterval);
//       clearInterval(testimonialInterval);
//     };
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Thank you! Our counsellor will contact you within 24 hours.");
//     setFormData({ name: "", email: "", phone: "", country: "", message: "" });
//   };

//   const toggleFaq = (index) => {
//     setOpenFaqIndex(openFaqIndex === index ? null : index);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 font-sans">
//       {/* =============================================
//           HERO CAROUSEL - Top of the page
//       ============================================= */}
//       <section className="relative w-full h-screen min-h-[720px] overflow-hidden">
//         {HERO_SLIDES.map((slide, idx) => (
//           <div
//             key={idx}
//             className={`absolute inset-0 transition-opacity duration-1200 ease-in-out ${
//               idx === currentHeroSlide ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             <img
//               src={slide.image}
//               alt={slide.title}
//               className="w-full h-full object-cover scale-105 transition-transform duration-[15000ms] brightness-90"
//               style={{ transform: idx === currentHeroSlide ? "scale(1.08)" : "scale(1.05)" }}
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent/20" />

//             <div className="absolute inset-0 flex items-center justify-center px-6 sm:px-12 lg:px-20">
//               <div className="text-center max-w-6xl">
//                 <p className="inline-block mb-6 px-6 py-3 bg-[#d4a853]/30 backdrop-blur-md rounded-full text-white font-semibold tracking-wider text-base uppercase animate-fade-in">
//                   EDU HAWK – Where Innovation Meets Excellence
//                 </p>

//                 <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 animate-slide-up">
//                   {slide.title}
//                 </h1>

//                 <p className="text-lg sm:text-xl md:text-2xl text-white/95 font-light mb-10 md:mb-14 max-w-4xl mx-auto animate-slide-up animation-delay-200">
//                   {slide.subtitle}
//                 </p>

//                 <div className="flex flex-col sm:flex-row justify-center gap-6 animate-slide-up animation-delay-400">
//                   <button className="group relative overflow-hidden bg-gradient-to-r from-[#d4a853] to-[#f0c070] text-[#0a2342] font-bold uppercase tracking-wider px-12 py-5 rounded-xl shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-300 text-lg">
//                     <span className="relative z-10">{slide.cta} →</span>
//                     <span className="absolute inset-0 bg-white/25 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
//                   </button>

//                   <button className="border-2 border-white/60 text-white font-semibold px-12 py-5 rounded-xl hover:bg-white/15 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 text-lg">
//                     Learn More
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}

//         <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-6 z-20">
//           {HERO_SLIDES.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setCurrentHeroSlide(i)}
//               className={`w-5 h-5 rounded-full transition-all duration-500 shadow-xl ${
//                 i === currentHeroSlide
//                   ? "bg-[#f0c070] scale-150 ring-4 ring-[#d4a853]/60"
//                   : "bg-white/60 hover:bg-white/90"
//               }`}
//             />
//           ))}
//         </div>
//       </section>

//       {/* STATS BAR */}
//       <div className="max-w-7xl mx-auto px-6 -mt-28 relative z-10">
//         <div className="bg-white/95 backdrop-blur-xl border border-[#d4a853]/25 rounded-3xl shadow-2xl p-10 grid grid-cols-2 lg:grid-cols-4 gap-10">
//           {[
//             { n: "2000+", l: "Students Placed" },
//             { n: "6+", l: "Countries" },
//             { n: "50+", l: "Universities" },
//             { n: "100%", l: "NMC Approved" },
//           ].map((s, i) => (
//             <div
//               key={i}
//               className="text-center opacity-0 animate-fade-in-up"
//               style={{ animationDelay: `${i * 200}ms` }}
//             >
//               <div className="text-5xl md:text-6xl font-black text-[#d4a853]">{s.n}</div>
//               <div className="text-[#0a2342] font-semibold mt-3 uppercase tracking-wide text-base">
//                 {s.l}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ABOUT US */}
//       <section className="py-24 px-6 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-[#0a2342] mb-6 animate-fade-in">
//               Welcome to EDU HAWK
//             </h2>
//             <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed animate-fade-in animation-delay-200">
//               Where innovation meets excellence in college admissions.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-16 items-center">
//             <div className="space-y-8">
//               <p className="text-gray-700 text-lg leading-relaxed">
//                 We understand the complex world of college admissions and the challenges students and families face. Our mission is to demystify this process by providing personalized guidance and support to help every student find the best-fit college and successfully navigate the admissions journey.
//               </p>

//               <p className="text-gray-700 text-lg leading-relaxed">
//                 We're here to guide you through every decision — big or small — on the path to college success. Whether you're just starting to think about college or are in the midst of application season, EDU HAWK is here to light the way.
//               </p>

//               <p className="text-gray-700 text-lg leading-relaxed font-medium">
//                 Together, we turn the challenge of college admissions into an opportunity for growth, learning, and success.
//               </p>

//               <button className="mt-6 bg-gradient-to-r from-[#d4a853] to-[#f0c070] text-[#0a2342] font-bold uppercase tracking-wider px-10 py-5 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
//                 Join Us Today →
//               </button>
//             </div>

//             <div className="grid grid-cols-1">
//               {/* <div className="bg-gradient-to-br from-[#faf8f4] to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
//                 <h3 className="text-2xl font-bold text-[#0a2342] mb-4">Strategic Planning</h3>
//                 <p className="text-gray-700">
//                   Customized roadmaps tailored to your academic profile, goals, and timeline.
//                 </p>
//               </div>

//               <div className="bg-gradient-to-br from-[#faf8f4] to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
//                 <h3 className="text-2xl font-bold text-[#0a2342] mb-4">Holistic Approach</h3>
//                 <p className="text-gray-700">
//                   Comprehensive support covering applications, essays, interviews, visas & more.
//                 </p>
//               </div>

//               <div className="bg-gradient-to-br from-[#faf8f4] to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
//                 <h3 className="text-2xl font-bold text-[#0a2342] mb-4">Medical Education Focus</h3>
//                 <p className="text-gray-700">
//                   Specialized guidance for MBBS abroad in NMC-approved universities.
//                 </p>
//               </div>

//               <div className="bg-gradient-to-br from-[#faf8f4] to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
//                 <h3 className="text-2xl font-bold text-[#0a2342] mb-4">Transparent Process</h3>
//                 <p className="text-gray-700">
//                   No hidden fees • Clear communication • Student-first approach.
//                 </p>
//               </div> */}

//               <img src={AboutImage} alt="" />
//             </div>
//           </div>

//           <div className="text-center mt-16">
//             <p className="text-2xl font-semibold text-[#d4a853] italic">
//               "Where Dreams Take Flight – College Counselling Done Right"
//             </p>
//           </div>
//         </div>
//       </section>

   
     


    

//       {/* =============================================
//           FAQ SECTION - Added at the end
//       ============================================= */}
//       <section className="py-24 px-6 bg-[#faf8f4]">
//         <div className="max-w-5xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-[#0a2342] mb-6">Frequently Asked Questions</h2>
//             <p className="text-gray-700 text-lg max-w-3xl mx-auto">
//               Find quick answers to the most common questions about MBBS abroad with EDU HAWK
//             </p>
//           </div>
//           <div className="flex self-center">
//           <div className="space-y-5">
//             {FAQ_ITEMS.map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200"
//               >
//                 <button
//                   className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
//                   onClick={() => toggleFaq(index)}
//                 >
//                   <span className="text-xl font-semibold text-[#0a2342]">{item.question}</span>
//                   <span className="text-3xl font-light text-[#d4a853]">
//                     {openFaqIndex === index ? "−" : "+"}
//                   </span>
//                 </button>

//                 <div
//                   className={`px-8 pb-6 transition-all duration-400 ease-in-out overflow-hidden ${
//                     openFaqIndex === index ? "max-h-96 opacity-100 pt-2" : "max-h-0 opacity-0"
//                   }`}
//                 >
//                   <p className="text-gray-700 leading-relaxed text-base">{item.answer}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

// <div className="w-5xl">
//             <img src={imageAbout2} alt="" />
//            <h5 class="text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-indigo-800">
//     "Where Dreams Take Flight: College Counseling Done Right"
//   </h5>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FOOTER */}
//       {/* <footer className="bg-[#060f1a] text-white py-20 px-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid md:grid-cols-3 gap-12 mb-16">
//             <div>
//               <div className="flex items-center gap-5 mb-8">
//                 <div className="w-16 h-16 bg-gradient-to-br from-[#d4a853] to-[#f0c070] rounded-full flex items-center justify-center text-3xl text-[#0a2342]">
//                   🦅
//                 </div>
//                 <div>
//                   <div className="text-2xl font-bold">EDU HAWK</div>
//                   <div className="text-[#d4a853] text-sm uppercase tracking-widest mt-1">
//                     Overseas Medical Education
//                   </div>
//                 </div>
//               </div>
//               <p className="text-gray-400 leading-relaxed">
//                 Trusted MBBS abroad consultants helping Indian students achieve their medical dreams with transparency and care.
//               </p>
//             </div>

//             <div>
//               <div className="text-[#d4a853] uppercase tracking-widest text-sm font-bold mb-8">Countries</div>
//               <div className="space-y-4 text-gray-300">
//                 {COUNTRIES.map((c) => (
//                   <div key={c.name} className="hover:text-[#d4a853] transition cursor-pointer">
//                     {c.flag} {c.name}
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div>
//               <div className="text-[#d4a853] uppercase tracking-widest text-sm font-bold mb-8">Quick Links</div>
//               <div className="space-y-4 text-gray-300">
//                 {["About Us", "Services", "Countries", "Testimonials", "Contact", "Free Counselling"].map((link) => (
//                   <div key={link} className="hover:text-[#d4a853] transition cursor-pointer">
//                     {link}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="border-t border-white/10 pt-10 text-center text-gray-500 text-sm">
//             © {new Date().getFullYear()} EDU HAWK. All rights reserved.
//           </div>
//         </div>
//       </footer> */}
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import AboutImage from "../Images/About us page.gif";
import imageAbout2 from "../Images/ABOUT SERVICE.jpg";

const COUNTRIES = [
  { name: "Russia", flag: "🇷🇺", seats: "600+ seats", fee: "₹20-30L total" },
  { name: "Georgia", flag: "🇬🇪", seats: "200+ seats", fee: "₹25-35L total" },
  { name: "Uzbekistan", flag: "🇺🇿", seats: "400+ seats", fee: "₹18-28L total" },
  { name: "Kazakhstan", flag: "🇰🇿", seats: "300+ seats", fee: "₹22-32L total" },
  { name: "Kyrgyzstan", flag: "🇰🇬", seats: "250+ seats", fee: "₹15-25L total" },
  { name: "Nepal", flag: "🇳🇵", seats: "150+ seats", fee: "₹35-50L total" },
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

const HERO_SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=2070",
    title: "Your Dream Medical Career Starts Here",
    subtitle: "Expert MBBS Abroad Counselling • NMC Approved Universities • Transparent Process",
    cta: "Book Free Counselling",
  },
  {
    image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80&w=2070",
    title: "Study MBBS in Russia & Georgia",
    subtitle: "Top Universities • Affordable Fees • Complete End-to-End Support",
    cta: "Get Started Today",
  },
  {
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=2070",
    title: "Admission Made Simple & Secure",
    subtitle: "No Hidden Charges • Personalized Guidance • 2000+ Happy Students",
    cta: "Free Consultation Now",
  },
];

const FAQ_ITEMS = [
  {
    question: "Is MBBS abroad from these countries valid in India?",
    answer:
      "Yes, all universities we recommend are NMC (National Medical Commission) approved. After completing MBBS, students can appear for the FMGE/NEXT exam to practice in India.",
  },
  {
    question: "What is the total cost of MBBS abroad?",
    answer:
      "The total cost (including tuition, hostel, food & miscellaneous) usually ranges between ₹15 Lakh to ₹50 Lakh depending on the country and university. We provide complete transparent fee breakdowns.",
  },
  {
    question: "How long does the admission process take?",
    answer:
      "The entire process usually takes 2–6 months depending on the country, university, and how early you start. We recommend starting as early as possible after NEET results.",
  },
];

export default function HeroSection() {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });

  useEffect(() => {
    const heroInterval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);

    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 7500);

    return () => {
      clearInterval(heroInterval);
      clearInterval(testimonialInterval);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Our counsellor will contact you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", country: "", message: "" });
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* HERO CAROUSEL */}
      <section className="relative w-full h-screen min-h-[720px] overflow-hidden">
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentHeroSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover scale-105 transition-transform duration-[15000ms] brightness-[0.85]"
              style={{
                transform: idx === currentHeroSlide ? "scale(1.08)" : "scale(1.05)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

            <div className="absolute inset-0 flex items-center justify-center px-6 sm:px-12 lg:px-20">
              <div className="text-center max-w-6xl">
                <p className="inline-block mb-6 px-6 py-3 bg-[#d4a853]/30 backdrop-blur-md rounded-full text-white font-semibold tracking-wider text-base uppercase">
                  EDU HAWK – Where Innovation Meets Excellence
                </p>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
                  {slide.title}
                </h1>

                <p className="text-lg sm:text-xl md:text-2xl text-white/95 font-light mb-10 max-w-4xl mx-auto">
                  {slide.subtitle}
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-5">
                  <button className="bg-gradient-to-r from-[#d4a853] to-[#f0c070] text-[#0a2342] font-bold uppercase tracking-wider px-10 py-5 rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-lg">
                    {slide.cta} →
                  </button>

                  <button className="border-2 border-white/70 text-white font-semibold px-10 py-5 rounded-xl hover:bg-white/10 transition-all duration-300 text-lg">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Dots */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-4 z-20">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentHeroSlide(i)}
              className={`w-4 h-4 rounded-full transition-all duration-500 shadow-md ${
                i === currentHeroSlide
                  ? "bg-[#f0c070] scale-125 ring-4 ring-[#d4a853]/50"
                  : "bg-white/60 hover:bg-white/90"
              }`}
            />
          ))}
        </div>
      </section>

      {/* STATS BAR */}
      <div className="max-w-7xl mx-auto px-6 -mt-24 md:-mt-28 relative z-10">
        <div className="bg-white/95 backdrop-blur-xl border border-[#d4a853]/20 rounded-3xl shadow-2xl p-8 md:p-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { n: "2000+", l: "Students Placed" },
            { n: "6+", l: "Countries" },
            { n: "50+", l: "Universities" },
            { n: "100%", l: "NMC Approved" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-5xl md:text-6xl font-black text-[#d4a853]">{s.n}</div>
              <div className="text-[#0a2342] font-semibold mt-2 uppercase tracking-wide text-sm md:text-base">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT US */}
      <section className="py-20 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a2342] mb-4">
              Welcome to EDU HAWK
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Where innovation meets excellence in overseas medical education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                We understand the complex world of college admissions and the challenges students and families face. Our mission is to demystify this process by providing personalized guidance...
              </p>
              <p>
                We're here to guide you through every decision — big or small — on the path to college success...
              </p>
              <p className="font-medium">
                Together, we turn the challenge of college admissions into an opportunity for growth, learning, and success.
              </p>

              <button className="mt-4 bg-gradient-to-r from-[#d4a853] to-[#f0c070] text-[#0a2342] font-bold uppercase tracking-wider px-10 py-5 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                Join Us Today →
              </button>
            </div>

            <div>
              <img
                src={AboutImage}
                alt="EduHawk students and campus life"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-2xl md:text-3xl font-semibold text-[#d4a853] italic">
              "Where Dreams Take Flight – College Counselling Done Right"
            </p>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 md:py-24 px-6 bg-[#faf8f4]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a2342] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Quick answers to the most common questions about MBBS abroad with EDU HAWK
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 md:gap-12 items-start">
            {/* FAQ List */}
            <div className="w-full lg:w-3/5 space-y-5">
              {FAQ_ITEMS.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden"
                >
                  <button
                    className="w-full px-6 py-5 md:px-8 md:py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="text-lg md:text-xl font-semibold text-[#0a2342] pr-4">
                      {item.question}
                    </span>
                    <span className="text-3xl font-light text-[#d4a853] flex-shrink-0">
                      {openFaqIndex === index ? "−" : "+"}
                    </span>
                  </button>

                  <div
                    className={`px-6 md:px-8 transition-all duration-300 ease-in-out overflow-hidden ${
                      openFaqIndex === index ? "max-h-96 py-5 opacity-100" : "max-h-0 py-0 opacity-0"
                    }`}
                  >
                    <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Image + Tagline */}
            <div className="w-full lg:w-2/5 flex flex-col items-center lg:items-start gap-6">
              <img
                src={imageAbout2}
                alt="MBBS abroad service illustration"
                className="rounded-2xl shadow-xl w-full max-w-md object-cover"
              />
              <h3 className="text-2xl md:text-2xl lg:text-2xl font-serif font-bold tracking-tight text-indigo-800 text-center lg:text-left">
                Where Dreams Take Flight:<br className="hidden lg:block" /> College Counseling Done Right
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* You can uncomment / add footer later */}
    </div>
  );
}