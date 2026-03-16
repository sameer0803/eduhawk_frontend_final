// import React, { useState } from "react";

// const Vietnam = () => {
//   const [showMoreAbout, setShowMoreAbout] = useState(false);
//   const [showMoreClimate, setShowMoreClimate] = useState(false);

//   return (
//     <div className="min-h-screen bg-gray-50 font-sans">
//       {/* ==================== HEADER CAROUSEL ==================== */}
//       <div className="relative h-screen overflow-hidden">
//         <div className="absolute inset-0">
//           <img
//             src="https://upload.wikimedia.org/wikipedia/commons/2/23/%C3%93pera%2C_Ciudad_Ho_Chi_Minh%2C_Vietnam%2C_2013-08-14%2C_DD_02.JPG"
//             alt="Kremlin Bridge City"
//             className="w-full h-full object-cover brightness-75"
//           />
//           <div className="absolute inset-0 flex items-center justify-center">
//             <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl">
//               STUDY MBBS IN  VIETNAM
//             </h1>
//           </div>
//         </div>

//         {/* You can duplicate more slides like this or use carousel library */}
//       </div>

//       {/* ==================== MAIN CONTENT ==================== */}
//       <div className="container mx-auto px-4 py-12 max-w-7xl">
//         {/* Intro Section */}
//         <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
//           <div>
//             <img
//               src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg"
//               alt="Russia flag"
//               className="w-32 md:w-40 border-4 border-gray-800 rounded shadow-lg"
//             />
//           </div>
//           <div>
//             <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
//               Explore MBBS Opportunities in Kazakhstan 2026–2027
//             </h2>
//           </div>
//         </div>

//         {/* About Russia + Image */}
//         <div className="grid md:grid-cols-2 gap-12 mb-20">
//           <div>
//             <h2 className="text-3xl font-bold text-center md:text-left text-blue-900 mb-6">
//               About Russia
//             </h2>
//             <p className="text-lg leading-relaxed text-gray-700">
//               Russia has become popular among medical students, who are looking
//               for a safe option internationally, as it has a strong academic
//               environment for MBBS abroad. With a duration of approximately{" "}
//               <strong>6 years</strong>, Russia has a well-balanced combination
//               of quality education and practical clinical exposure.
//             </p>

//             <p className="mt-4 text-lg leading-relaxed text-gray-700">
//               Bangladesh is a great choice for prospective medical students; it
//               offers a safe environment, quality of life, and a supportive
//               atmosphere for international students. With a course duration of
//               5.8 years, studying MBBS in Bangladeshis an excellent option for
//               students looking for top-quality education for international
//               students. Students from around the world choose Bangladesh for
//               their medical studies, and graduates from Bangladeshi universities
//               are highly respected in clinical settings around the globe.
//               Bangladesh offers a wide range of services and training that are
//               essential to the professional development of students, assuring a
//               successful and powerful professional journey. While Bangladesh
//               remains a popular destination, other countries, including China,
//               Nepal, and Kyrgyzstan, also provide affordable medical education.
//             </p>

//             {showMoreAbout ? (
//               <p className="mt-4 text-lg leading-relaxed text-gray-700">
//                 While Russia remains a popular destination, other countries like
//                 China, Nepal, Germany, Philippines, Ukraine, Bangladesh, and
//                 Kyrgyzstan also offer affordable medical education.
//                 International students are often exempted from the one-year
//                 preparatory course.
//               </p>
//             ) : null}

//             <button
//               onClick={() => setShowMoreAbout(!showMoreAbout)}
//               className="mt-6 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
//             >
//               {showMoreAbout ? "Show Less" : "Read More"}
//             </button>
//           </div>

//           <div>
//             <img
//               src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Hanoi_dhyk.jpg"
//               alt="Kremlin"
//               className="rounded-xl shadow-2xl w-full h-auto object-cover"
//             />
//           </div>
//         </div>

//         {/* Quick Information + About MBBS */}
//         <div className="grid md:grid-cols-2 gap-12 mb-20">
//           {/* Left – Quick Info Table */}
//           <div>
//             <h3 className="text-2xl font-bold text-center text-blue-900 mb-6">
//               Quick Information – Study MBBS in Russia
//             </h3>

//             <div className="overflow-x-auto">
//               <table className="min-w-full border border-gray-300 text-left">
//                 <tbody>
//                   <tr className="bg-gray-100">
//                     <td className="p-4 font-semibold">Recognition</td>
//                     <td className="p-4">NMC & WHO approved</td>
//                   </tr>
//                   <tr>
//                     <td className="p-4 font-semibold">Eligibility</td>
//                     <td className="p-4">50% in PCB aggregate</td>
//                   </tr>
//                   <tr className="bg-gray-100">
//                     <td className="p-4 font-semibold">Course Duration</td>
//                     <td className="p-4">6 Years</td>
//                   </tr>
//                   <tr>
//                     <td className="p-4 font-semibold">NEET</td>
//                     <td className="p-4">Compulsory</td>
//                   </tr>
//                   <tr className="bg-gray-100">
//                     <td className="p-4 font-semibold">IELTS/TOEFL</td>
//                     <td className="p-4">Not Required</td>
//                   </tr>
//                   <tr>
//                     <td className="p-4 font-semibold">Medium of Teaching</td>
//                     <td className="p-4">English</td>
//                   </tr>

//                     <tr>
//                     <td className="p-4 font-semibold">Universities Recognition</td>
//                     <td className="p-4">NMC & WHO-approved</td>
//                   </tr>

                 





//                 </tbody>
//               </table>
//             </div>
//           </div>

//           {/* Right – About MBBS */}
//           <div>
//             <h3 className="text-3xl font-bold text-blue-900 mb-6 text-center md:text-left">
//               About MBBS in Kazakhstan
//             </h3>
//             <p className="text-lg leading-relaxed text-gray-700">
//               Studying MBBS in Kazakhstan is notably straightforward
//             </p>

//             {showMoreClimate ? (
//               <p className="mt-4 text-lg leading-relaxed text-gray-700">
//                 — no entrance exam (apart from NEET for Indian students). The
//                 Russian government subsidizes education, keeping fees relatively
//                 low...
//               </p>
//             ) : null}

//             <button
//               onClick={() => setShowMoreClimate(!showMoreClimate)}
//               className="mt-6 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
//             >
//               {showMoreClimate ? "Show Less" : "Read More"}
//             </button>
//           </div>
//         </div>

//         {/* ==================== UNIVERSITIES GRID ==================== */}
//         <div className="mb-20">
//           <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
//             Top Medical Universities in Russia
//           </h2>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 name: "Hanoi Medical University",
//                 img: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Hanoi_dhyk.jpg",
//               },
//               {
//                 name: "Ho Chi Minh City University",
//                 img: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Z5372420599304_7ca55d21ee3a707247033180d3108fc6.jpg",
//               },
//               {
//                 name: "Hue University",
//                 img: "https://upload.wikimedia.org/wikipedia/commons/7/72/Hu%E1%BA%BF_University.jpg",
//               },
//               {
//                 name: "Can Tho University",
//                 img: "https://photo-cms-vovworld.zadn.vn/w730/uploaded/vovworld/wpxlqdhnw/2020_03_27/pst7_anh2_fyaa.jpg",
//               },
//               {
//                 name: "Hai Phong University",
//                 img: "https://upload.wikimedia.org/wikipedia/commons/1/19/Dhyhp.JPG",
//               }
            
//             ].map((uni, i) => (
//               <div
//                 key={i}
//                 className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
//               >
//                 <img
//                   src={uni.img}
//                   alt={uni.name}
//                   className="w-full h-64 object-cover"
//                 />
//                 <div className="p-6 text-center">
//                   <h4 className="text-xl font-bold text-blue-900">
//                     {uni.name}
//                   </h4>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* ==================== ADVANTAGES + COST ==================== */}
//         <div className="grid md:grid-cols-2 gap-12 mb-20">
//           <div>
//             <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center md:text-left">
//               Advantages of Studying MBBS in Russia 2025–2026
//             </h2>

//             <div className="space-y-6">
//               <div>
//                 <h5 className="text-xl font-semibold">
//                   1. High-Quality Education
//                 </h5>
//                 <p className="text-gray-700">
//                   Globally recognized universities with strong academic
//                   standards.
//                 </p>
//               </div>
//               <div>
//                 <h5 className="text-xl font-semibold">
//                   2. Affordable Tuition Fees
//                 </h5>
//                 <p className="text-gray-700">
//                   Significantly lower than many Western countries.
//                 </p>
//               </div>
//               <div>
//                 <h5 className="text-xl font-semibold">
//                   3. No Additional Entrance Exams
//                 </h5>
//                 <p className="text-gray-700">
//                   (NEET required for Indian students only)
//                 </p>
//               </div>
//               <div>
//                 <h5 className="text-xl font-semibold">
//                   4. English-Medium Programs
//                 </h5>
//                 <p className="text-gray-700">
//                   No language barrier for most international students.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div>
//             <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
//               Cost of Study MBBS in Russia
//             </h2>
//             <p className="text-lg text-gray-700 leading-relaxed">
//               The cost of the <strong> MBBS course in Russia</strong> is very
//               low for Indian students who want to pursue their{" "}
//               <strong>MBBS</strong> course in Russia. Russia is a very demanding
//               country for Indian students who want to pursue their MBBS course.
//               The government of Russia has funded the fee structure for the MBBS
//               course. Studying MBBS in Russia is an easy task for Indian
//               students compared to other countries. Studying MBBS in Russia is
//               very cheap. The universities in Russia provide a smooth platform
//               for <strong>international students</strong> so that they don't
//               need to pay the high tuition fees. Apart from this, there is no
//               need to pay any donations.
//             </p>
//           </div>
//         </div>

//         {/* You can continue adding more sections like Food & Accommodation, Admission Process, Documents, Eligibility, Comparison table, etc. in similar fashion */}
//       </div>

//       {/* Floating Enroll Button */}
//       <button
//         className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-5 rounded-full shadow-2xl hover:scale-105 transition transform animate-pulse"
//         onClick={() => alert("Open Admission Modal / Redirect to form")}
//       >
//         <span className="font-bold text-lg">ENROLL NOW!</span>
//       </button>

//       {/* ==================== FOOD & ACCOMMODATION SECTION ==================== */}
//       <div className="bg-gradient-to-b from-gray-50 to-white py-16">
//         <div className="container mx-auto px-4 max-w-6xl">
//           <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
//             Food and Accommodation Cost – MBBS in Russia
//           </h2>

//           <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
//             <p>
//               Most Russian medical universities provide comfortable hostel
//               accommodation specially designed for international students. Rooms
//               are usually shared (2–3 students per room) and come fully
//               furnished with:
//             </p>
//             <ul className="list-disc pl-6 mt-4 space-y-2">
//               <li>Beds, mattresses, bedsheets, blankets, pillows</li>
//               <li>Study tables, chairs, wardrobes/cupboards</li>
//               <li>Central heating (very important in Russian winters)</li>
//             </ul>

//             <p className="mt-6">Hostels typically include:</p>
//             <ul className="list-disc pl-6 mt-4 space-y-2">
//               <li>
//                 Common kitchen where students can cook their own food (very
//                 popular among Indian students to prepare Indian meals)
//               </li>
//               <li>Common washing machines / laundry rooms</li>
//               <li>
//                 Indian mess / canteen facilities in many universities (or
//                 nearby)
//               </li>
//               <li>
//                 Indian restaurants and grocery stores often within walking
//                 distance
//               </li>
//             </ul>

//             <p className="mt-6">
//               <strong>Approximate monthly living expenses (2025–2026):</strong>
//             </p>
//             <ul className="list-disc pl-6 mt-4 space-y-2">
//               <li>Hostel / Accommodation: ₹8,000 – ₹18,000</li>
//               <li>Food (self-cooking + mess): ₹8,000 – ₹15,000</li>
//               <li>Transport + Miscellaneous: ₹3,000 – ₹7,000</li>
//               <li>
//                 <strong>Total monthly:</strong> ≈ ₹20,000 – ₹40,000
//               </li>
//             </ul>

//             <p className="mt-6 italic text-gray-600">
//               Many universities also offer Indian food in their mess/canteen,
//               helping students maintain a familiar diet without much extra cost.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* ==================== ADMISSION PROCESS ==================== */}
//       <div className="py-16 bg-white">
//         <div className="container mx-auto px-4 max-w-6xl">
//           <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
//             Admission Process for MBBS in Russia 2025–2026
//           </h2>

//           <div className="max-w-4xl mx-auto">
//             <p className="text-lg text-gray-700 mb-8 leading-relaxed">
//               The admission process for{" "}
//               <strong> MBBS (Bachelor of Medicine, Bachelor of Surgery)</strong>{" "}
//               courses in Russia varies slightly among different universities,
//               but the general process is as follows:
//             </p>

//             <div className="space-y-10">
//               <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
//                 <h4 className="text-xl font-bold text-blue-900 mb-4">
//                   1. Research and Select a University:
//                 </h4>
//                 <p className="text-gray-700">
//                   Research the <strong>Russian universities</strong> that offer
//                   MBBS courses. Some of the best universities for MBBS courses
//                   in Russia are
//                   <strong>
//                     {" "}
//                     Moscow State Medical University, Saint Petersburg State
//                     Medical University, Kazan Federal University, etc.
//                   </strong>
//                 </p>
//                 <p className="mt-2 text-gray-600">
//                   Check: NMC/WHO recognition, English medium availability,
//                   tuition fees, hostel quality.
//                 </p>
//               </div>

//               <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
//                 <h4 className="text-xl font-bold text-blue-900 mb-4">
//                   2. Check Eligibility
//                 </h4>
//                 <ul className="list-disc pl-6 space-y-2 text-gray-700">
//                   <li>Completed 10+2 with Physics, Chemistry, Biology</li>
//                   <li>
//                     Minimum 50% aggregate in PCB (40% for reserved categories)
//                   </li>
//                   <li>NEET qualified (mandatory for Indian students)</li>
//                   <li>Age: 17 years completed by 31st Dec of admission year</li>
//                 </ul>
//               </div>

//               <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
//                 <h4 className="text-xl font-bold text-blue-900 mb-4">
//                   3. Apply Online
//                 </h4>
//                 <p className="text-gray-700">
//                   Fill university application form → Submit scanned documents →
//                   Receive admission/invitation letter (usually within 2–4
//                   weeks).
//                 </p>
//               </div>

//               <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
//                 <h4 className="text-xl font-bold text-blue-900 mb-4">
//                   4. Visa & Travel
//                 </h4>
//                 <p className="text-gray-700">
//                   Use invitation letter to apply for student visa at Russian
//                   Embassy/Consulate → Book tickets → Arrive in Russia → Complete
//                   university registration & medical check-up.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ==================== DOCUMENTS + ELIGIBILITY + SCHOLARSHIPS ==================== */}
//       <div className="py-16 bg-gradient-to-b from-white to-gray-50">
//         <div className="container mx-auto px-4 max-w-7xl">
//           <div className="grid md:grid-cols-2 gap-12">
//             {/* Left - Required Documents */}
//             <div>
//               <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center md:text-left">
//                 Required Documents for MBBS in Russia 2025–2026
//               </h2>

//               <div className="space-y-6">
//                 <div className="bg-white p-6 rounded-xl shadow-sm border">
//                   <h5 className="text-lg font-semibold text-blue-800">
//                     Educational Documents
//                   </h5>
//                   <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-1">
//                     <li>10th & 12th marksheets + certificates</li>
//                     <li>NEET scorecard & admit card</li>
//                     <li>Passport (valid for minimum 18–24 months)</li>
//                   </ul>
//                 </div>

//                 <div className="bg-white p-6 rounded-xl shadow-sm border">
//                   <h5 className="text-lg font-semibold text-blue-800">
//                     Other Important Documents
//                   </h5>
//                   <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-1">
//                     <li>Passport size photos (white background)</li>
//                     <li>HIV & medical fitness certificate</li>
//                     <li>
//                       Invitation letter from university (issued after admission)
//                     </li>
//                     <li>Visa application form & fee receipt</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>

//             {/* Right - Eligibility + Scholarships */}
//             <div>
//               <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
//                 Eligibility Criteria & Scholarships
//               </h2>

//               <div className="bg-white p-6 rounded-xl shadow-sm border mb-8">
//                 <h4 className="text-xl font-semibold text-blue-900 mb-4">
//                   Basic Eligibility
//                 </h4>
//                 <ul className="list-decimal pl-5 space-y-2 text-gray-700">
//                   <li>Age 17+ by 31st Dec of admission year</li>
//                   <li>50%+ in PCB in 12th (40% for SC/ST/OBC)</li>
//                   <li>NEET qualified (mandatory for Indians)</li>
//                 </ul>
//               </div>

//               <div className="bg-white p-6 rounded-xl shadow-sm border">
//                 <h4 className="text-xl font-semibold text-blue-900 mb-4">
//                   Popular Scholarships
//                 </h4>
//                 <ul className="space-y-4">
//                   <li>
//                     <strong>
//                       Russian Government Scholarship (Open Doors / Quota)
//                     </strong>
//                     <br />
//                     <span className="text-gray-600 text-sm">
//                       Covers tuition + sometimes hostel. Very competitive —
//                       apply via education-in-russia.com
//                     </span>
//                   </li>
//                   <li>
//                     <strong>University-specific Merit Scholarships</strong>
//                     <br />
//                     <span className="text-gray-600 text-sm">
//                       Offered by many universities for good NEET/academic scores
//                     </span>
//                   </li>
//                   <li>
//                     <strong>Other options</strong>
//                     <br />
//                     <span className="text-gray-600 text-sm">
//                       Education Future, Inlaks, etc. (limited for MBBS)
//                     </span>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ==================== COMPARISON TABLE ==================== */}
//       <div className="py-16 bg-white">
//         <div className="container mx-auto px-4 max-w-5xl">
//           <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
//             MBBS in Russia vs MBBS in India – Quick Comparison (2025–2026)
//           </h2>

//           <div className="overflow-x-auto">
//             <table className="min-w-full border-collapse border border-gray-300 text-left">
//               <thead>
//                 <tr className="bg-blue-900 text-white">
//                   <th className="p-4 border border-gray-300 text-center font-semibold">
//                     Criteria
//                   </th>
//                   <th className="p-4 border border-gray-300 text-center font-semibold">
//                     MBBS in Russia
//                   </th>
//                   <th className="p-4 border border-gray-300 text-center font-semibold">
//                     MBBS in India
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="text-gray-700">
//                 <tr className="bg-gray-50">
//                   <td className="p-4 border font-medium">
//                     Tuition Fees (per year)
//                   </td>
//                   <td className="p-4 border">₹2 – 5 Lakhs</td>
//                   <td className="p-4 border">
//                     Govt: ₹40k – ₹2 Lakhs
//                     <br />
//                     Private: ₹10 – 25+ Lakhs
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className="p-4 border font-medium">
//                     Donation / Capitation
//                   </td>
//                   <td className="p-4 border text-green-700">No Donation</td>
//                   <td className="p-4 border text-red-700">
//                     Often ₹30–80 Lakhs in private colleges
//                   </td>
//                 </tr>
//                 <tr className="bg-gray-50">
//                   <td className="p-4 border font-medium">Course Duration</td>
//                   <td className="p-4 border">6 years (including internship)</td>
//                   <td className="p-4 border">5.5 years + 1 year internship</td>
//                 </tr>
//                 <tr>
//                   <td className="p-4 border font-medium">Class Strength</td>
//                   <td className="p-4 border">20–40 students</td>
//                   <td className="p-4 border">
//                     100–150+ students (especially private)
//                   </td>
//                 </tr>
//                 <tr className="bg-gray-50">
//                   <td className="p-4 border font-medium">Global Recognition</td>
//                   <td className="p-4 border">
//                     NMC, WHO, WFME approved universities
//                   </td>
//                   <td className="p-4 border">
//                     NMC approved, but private colleges vary
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className="p-4 border font-medium">
//                     Medium of Instruction
//                   </td>
//                   <td className="p-4 border">English</td>
//                   <td className="p-4 border">English</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Vietnam;




// // import React, { useState } from "react";
// // import { FiPlus, FiMinus } from "react-icons/fi";

// // const Vietnam = () => {
// //   const [showMoreAbout, setShowMoreAbout] = useState(false);
// //   const [showMoreClimate, setShowMoreClimate] = useState(false);
// //   const [openIndex, setOpenIndex] = useState(null);

// //   const toggleFAQ = (index) => {
// //     setOpenIndex(openIndex === index ? null : index);
// //   };

// //   const faqData = [
// //     {
// //       question: "Is MBBS in Vietnam valid for Indian students?",
// //       answer:
// //         "Yes, MBBS degrees from recognized universities in Vietnam are valid. Indian students must pass the FMGE/NEXT exam to practice medicine in India.",
// //     },
// //     {
// //       question: "What is the total cost of MBBS in Vietnam?",
// //       answer:
// //         "The total cost of MBBS in Vietnam usually ranges between ₹20 lakh to ₹30 lakh, depending on the university and living expenses.",
// //     },
// //     {
// //       question: "Is NEET required for MBBS in Vietnam?",
// //       answer:
// //         "Yes, NEET qualification is mandatory for Indian students who want to study MBBS abroad.",
// //     },
// //     {
// //       question: "What is the duration of MBBS in Vietnam?",
// //       answer:
// //         "The MBBS course duration in Vietnam is 6 years, including 5 years of academic study and 1 year of internship.",
// //     },
// //     {
// //       question: "Is MBBS in Vietnam taught in English?",
// //       answer:
// //         "Many Vietnamese universities offer MBBS programs in English medium for international students.",
// //     },
// //     {
// //       question: "Is hostel accommodation available for students in Vietnam?",
// //       answer:
// //         "Yes, universities provide hostel facilities with basic amenities such as beds, study tables, cupboards, kitchens, and laundry rooms.",
// //     },
// //     {
// //       question: "Can Indian students find Indian food in Vietnam?",
// //       answer:
// //         "Yes, Indian students can cook Indian food in hostel kitchens, and many cities also have Indian restaurants and mess facilities.",
// //     },
// //   ];

// //   return (
// //     <div className="min-h-screen bg-gray-50 font-sans">
// //       {/* ==================== HEADER CAROUSEL ==================== */}
// //       <div className="relative h-screen overflow-hidden">
// //         <div className="absolute inset-0">
// //           <img
// //             src="https://upload.wikimedia.org/wikipedia/commons/2/23/%C3%93pera%2C_Ciudad_Ho_Chi_Minh%2C_Vietnam%2C_2013-08-14%2C_DD_02.JPG"
// //             alt="Ho Chi Minh City Opera House"
// //             className="w-full h-full object-cover brightness-75"
// //           />
// //           <div className="absolute inset-0 flex items-center justify-center">
// //             <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl">
// //               STUDY MBBS IN VIETNAM
// //             </h1>
// //           </div>
// //         </div>
// //       </div>

// //       {/* ==================== MAIN CONTENT ==================== */}
// //       <div className="container mx-auto px-4 py-12 max-w-7xl">
// //         {/* Intro Section */}
// //         <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
// //           <div>
// //             <img
// //               src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg"
// //               alt="Vietnam flag"
// //               className="w-32 md:w-40 border-4 border-gray-800 rounded shadow-lg"
// //             />
// //           </div>
// //           <div>
// //             <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
// //               Explore MBBS Opportunities in Vietnam 2026–2027
// //             </h2>
// //           </div>
// //         </div>

// //         {/* Why Study MBBS in Vietnam + Image */}
// //         <div className="grid md:grid-cols-2 gap-12 mb-20">
// //           <div>
// //             <h2 className="text-3xl font-bold text-center md:text-left text-blue-900 mb-6">
// //               Why Study MBBS in Vietnam
// //             </h2>
// //             <p className="text-lg leading-relaxed text-gray-700">
// //               The medical curriculum in Vietnam has been authorized and approved by NMC and WHO, guaranteeing that it satisfies international educational requirements. Studying MBBS in Vietnam is a popular choice due to the country's varied culture, welcoming citizens, and reputation as one of the safest countries.
// //             </p>
// //             <p className="mt-4 text-lg leading-relaxed text-gray-700">
// //               Excellent shared and private housing alternatives catered to the needs of international students are offered by universities, along with reasonably priced continental cuisine. One country that stands out for providing excellent medical education at a reasonable price is Vietnam.
// //             </p>
// //             <p className="mt-4 text-lg leading-relaxed text-gray-700">
// //               It is a desirable choice for international students on a tight budget because of the reasonable living costs. Prominent organizations like MCI, FAIMER, WDOMS, and ECFMG have accredited the nation's medical universities. In Vietnam, an MBBS curriculum usually lasts five plus one years, including a clinical internship.
// //             </p>
// //             <p className="mt-4 text-lg leading-relaxed text-gray-700">
// //               Because there is a great need for medical experts in Vietnam, there are many job prospects for MBBS graduates. Vietnam's cities are reasonably priced and have excellent public transportation connections. Both North and South Indian food are served in many Indian eateries. In addition to India, MBBS students from Nepal, Malaysia, Bangladesh, Africa, Mauritius, Moldova, the UK, Nigeria, and Pakistan now want to study in Vietnam.
// //             </p>

// //             {showMoreAbout ? (
// //               <p className="mt-4 text-lg leading-relaxed text-gray-700">
// //                 Vietnam offers modern infrastructure, safe environment, and proximity to India (3–4 hour flight), making it an attractive destination for Indian students.
// //               </p>
// //             ) : null}

// //             <button
// //               onClick={() => setShowMoreAbout(!showMoreAbout)}
// //               className="mt-6 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
// //             >
// //               {showMoreAbout ? "Show Less" : "Read More"}
// //             </button>
// //           </div>

// //           <div>
// //             <img
// //               src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Hanoi_dhyk.jpg"
// //               alt="Hanoi Medical University"
// //               className="rounded-xl shadow-2xl w-full h-auto object-cover"
// //             />
// //           </div>
// //         </div>

// //         {/* Duration */}
// //         <div className="mb-20">
// //           <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center md:text-left">
// //             Duration of Studying MBBS in Vietnam for Indian Students
// //           </h2>
// //           <p className="text-xl font-semibold text-gray-800 text-center">
// //             5 years + 1 year Internship
// //           </p>
// //         </div>

// //         {/* Advantages */}
// //         <div className="mb-20">
// //           <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
// //             Advantages of Studying MBBS in Vietnam
// //           </h2>
// //           <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700 max-w-4xl mx-auto">
// //             <li>World-class medical schools</li>
// //             <li>WHO and NMC-approved medical degree</li>
// //             <li>MBBS course with international recognition</li>
// //             <li>Very reasonable tuition costs</li>
// //             <li>International educational standards</li>
// //             <li>A secure and safe setting</li>
// //             <li>Easy to adapt to a diverse culture</li>
// //             <li>Availability of Indian and Continental food</li>
// //             <li>Very affordable living expenses</li>
// //             <li>Accommodations based on practicality and convenience</li>
// //             <li>Simple admissions procedure; entrance examinations are not necessary</li>
// //             <li>No foreign fees or donations are needed</li>
// //             <li>Clinical-based education starting in the second year</li>
// //             <li>Top hospitals that are affiliated with clinical rotations</li>
// //             <li>Interested candidates are given research chances</li>
// //             <li>Excellent medical education at incredibly low costs</li>
// //             <li>Obtain a medical license without taking the licensing exam</li>
// //           </ul>
// //         </div>

// //         {/* Quick Information + About MBBS */}
// //         <div className="grid md:grid-cols-2 gap-12 mb-20">
// //           <div>
// //             <h3 className="text-2xl font-bold text-center text-blue-900 mb-6">
// //               Quick Information – Study MBBS in Vietnam
// //             </h3>
// //             <div className="overflow-x-auto">
// //               <table className="min-w-full border border-gray-300 text-left">
// //                 <tbody>
// //                   <tr className="bg-gray-100">
// //                     <td className="p-4 font-semibold">Recognition</td>
// //                     <td className="p-4">NMC & WHO approved</td>
// //                   </tr>
// //                   <tr>
// //                     <td className="p-4 font-semibold">Eligibility</td>
// //                     <td className="p-4">60% in PCB (12th)</td>
// //                   </tr>
// //                   <tr className="bg-gray-100">
// //                     <td className="p-4 font-semibold">Course Duration</td>
// //                     <td className="p-4">6 Years (5+1 internship)</td>
// //                   </tr>
// //                   <tr>
// //                     <td className="p-4 font-semibold">NEET</td>
// //                     <td className="p-4">Compulsory for Indians</td>
// //                   </tr>
// //                   <tr className="bg-gray-100">
// //                     <td className="p-4 font-semibold">IELTS/TOEFL</td>
// //                     <td className="p-4">Not Required</td>
// //                   </tr>
// //                   <tr>
// //                     <td className="p-4 font-semibold">Medium of Teaching</td>
// //                     <td className="p-4">English (for international students)</td>
// //                   </tr>
// //                 </tbody>
// //               </table>
// //             </div>
// //           </div>

// //           <div>
// //             <h3 className="text-3xl font-bold text-blue-900 mb-6 text-center md:text-left">
// //               About MBBS in Vietnam
// //             </h3>
// //             <p className="text-lg leading-relaxed text-gray-700">
// //               Studying MBBS in Vietnam offers high-quality education at affordable costs with international recognition. Universities provide modern facilities, clinical exposure from early years, and a safe environment for Indian and other international students.
// //             </p>
// //             {showMoreClimate ? (
// //               <p className="mt-4 text-lg leading-relaxed text-gray-700">
// //                 Vietnam provides a welcoming multicultural environment with affordable living and easy adaptation for Indian students.
// //               </p>
// //             ) : null}
// //             <button
// //               onClick={() => setShowMoreClimate(!showMoreClimate)}
// //               className="mt-6 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
// //             >
// //               {showMoreClimate ? "Show Less" : "Read More"}
// //             </button>
// //           </div>
// //         </div>

// //         {/* Eligibility Criteria */}
// //         <div className="mb-20">
// //           <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center md:text-left">
// //             Eligibility Criteria for Admission to Study MBBS in Vietnam
// //           </h2>
// //           <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700 max-w-4xl mx-auto">
// //             <li>Grade 10 and 12 mark sheets.</li>
// //             <li>To get admission, you must score 60% on the 12th grade exam or its equivalent.</li>
// //             <li>The IELTS score serves as the teaching language (not mandatory in most cases).</li>
// //             <li>The candidate must be at least 17 years old.</li>
// //             <li>Certificate of Police Clearance</li>
// //             <li>Certificate of Physical Fitness for Medical Students</li>
// //             <li>The regulations must be followed by the candidate.</li>
// //             <li>Proof of income</li>
// //           </ul>
// //         </div>

// //         {/* Documents Required */}
// //         <div className="mb-20">
// //           <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center md:text-left">
// //             Document Required For MBBS in Vietnam Colleges
// //           </h2>
// //           <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700 max-w-4xl mx-auto">
// //             <li>Passport (valid for at least 12 months)</li>
// //             <li>Certificate of 10th grade or its equivalent and Marks memo</li>
// //             <li>Certificate of 12th grade or its equivalent and Marks memo</li>
// //             <li>English-language birth certificate (where local language is permitted) The document must be translated.</li>
// //             <li>Passport-sized, color photos</li>
// //             <li>Vietnam Medical Universities' formal invitation letter</li>
// //             <li>The parents' official bank statement</li>
// //             <li>Certificate of Fitness</li>
// //             <li>Tuition payment receipts for the first semester or year of travel insurance</li>
// //           </ul>
// //         </div>

// //         {/* Application Process */}
// //         <div className="py-16 bg-white mb-20">
// //           <div className="container mx-auto px-4 max-w-6xl">
// //             <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
// //               Application Process to study MBBS in Vietnam
// //             </h2>
// //             <div className="max-w-4xl mx-auto">
// //               <p className="text-lg text-gray-700 mb-8 leading-relaxed">
// //                 Applying to the universities of Vietnam is a straightforward and easy process. Vietnamese medical candidates should carefully follow the instructions or seek the help of our counselors to ensure a smooth admissions process.
// //               </p>
// //               <ul className="list-decimal pl-6 space-y-4 text-gray-700">
// //                 <li>Submit in scanned copies of your 10th and 12th grade or comparable exams in PDF format.</li>
// //                 <li>Passport copy to be submitted to the university</li>
// //                 <li>To get to know the student, a face-to-face interview will be arranged.</li>
// //                 <li>After the interview, the offer letter will be sent out within a week.</li>
// //                 <li>Pay the tuition and application fees.</li>
// //                 <li>Apply for a visa and include all necessary documentation.</li>
// //                 <li>Obtain a visa and begin your MBBS studies in Vietnam.</li>
// //               </ul>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Food & Accommodation */}
// //         <div className="bg-gradient-to-b from-gray-50 to-white py-16 mb-20">
// //           <div className="container mx-auto px-4 max-w-6xl">
// //             <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
// //               Food And Accommodation Costs for MBBS In Vietnam
// //             </h2>
// //             <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
// //               <p>
// //                 Medical universities in Vietnam provide comfortable and affordable accommodation for international students.
// //               </p>

// //               <h4 className="text-2xl font-bold mt-8 mb-4">Hostel Facilities</h4>
// //               <ul className="list-disc pl-6 space-y-2">
// //                 <li>Most universities provide on-campus hostel facilities for MBBS students.</li>
// //                 <li>Rooms are generally shared by 2–3 students.</li>
// //                 <li>Students can also choose private or off-campus accommodation based on their budget.</li>
// //                 <li>University hostels are safe and regularly monitored for student security.</li>
// //                 <li>Accommodation is affordable and easily available near universities.</li>
// //               </ul>

// //               <h4 className="text-2xl font-bold mt-8 mb-4">Room Facilities</h4>
// //               <p>Hostel rooms usually include:</p>
// //               <ul className="list-disc pl-6 space-y-2">
// //                 <li>Comfortable beds</li>
// //                 <li>Bedsheets and blankets</li>
// //                 <li>Pillows</li>
// //                 <li>Study tables and chairs</li>
// //                 <li>Wardrobes or cupboards</li>
// //               </ul>

// //               <h4 className="text-2xl font-bold mt-8 mb-4">Food Facilities</h4>
// //               <ul className="list-disc pl-6 space-y-2">
// //                 <li>Universities provide canteen and mess facilities for students.</li>
// //                 <li>Students can find continental and Asian cuisine easily.</li>
// //                 <li>Indian students can also find Indian food options in many cities.</li>
// //                 <li>Food in Vietnam is very affordable for students.</li>
// //                 <li>The cost of three meals per day is around ₹180 to ₹275</li>
// //               </ul>

// //               <h4 className="text-2xl font-bold mt-8 mb-4">Transportation Facilities</h4>
// //               <ul className="list-disc pl-6 space-y-2">
// //                 <li>Hostels are usually located near university campuses.</li>
// //                 <li>Public transportation is affordable and easily available.</li>
// //                 <li>Travel between accommodation and university is safe and convenient.</li>
// //               </ul>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Medical License & Recognition */}
// //         <div className="mb-20">
// //           <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center md:text-left">
// //             Medical License & Recognition of Vietnam MBBS Universities
// //           </h2>
// //           <p className="text-lg leading-relaxed text-gray-700">
// //             Students who complete MBBS in Vietnam can apply for a medical license in the country.
// //           </p>
// //           <ul className="list-disc pl-6 mt-4 space-y-2 text-lg text-gray-700">
// //             <li>International students may apply for a medical license after completing MBBS.</li>
// //             <li>Students can practice medicine in Vietnam if they choose to settle there.</li>
// //             <li>Graduates can also continue postgraduate medical education in Vietnam.</li>
// //           </ul>

// //           <p className="mt-8 text-lg leading-relaxed text-gray-700">
// //             Medical universities in Vietnam are recognized by:
// //           </p>
// //           <ul className="list-disc pl-6 mt-4 space-y-2 text-lg text-gray-700">
// //             <li>National Medical Commission (NMC)</li>
// //             <li>World Health Organization (WHO)</li>
// //             <li>UNESCO</li>
// //             <li>Educational Commission for Foreign Medical Graduates (ECFMG)</li>
// //             <li>Foundation for Advancement of International Medical Education and Research (FAIMER)</li>
// //           </ul>
// //         </div>

// //         {/* Is It Worth Studying */}
// //         <div className="mb-20">
// //           <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center md:text-left">
// //             Is It Worth Studying MBBS in Vietnam for Indian Students?
// //           </h2>
// //           <h4 className="text-2xl font-semibold mb-4">Key Advantages</h4>
// //           <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700 max-w-4xl mx-auto">
// //             <li>Vietnam is a safe and student-friendly country in Asia.</li>
// //             <li>The country is close to India, with flight travel of around 3–4 hours.</li>
// //             <li>Affordable living expenses and transportation.</li>
// //             <li>Students can obtain a medical license in Vietnam after graduation.</li>
// //             <li>Graduates can practice medicine or pursue postgraduate studies in Vietnam.</li>
// //             <li>Students can apply for postgraduate studies in countries like: USA, UK, Canada, Australia, New Zealand</li>
// //             <li>Indian students can return to India and appear for FMGE/NEXT exams.</li>
// //           </ul>
// //         </div>

// //         {/* Top Universities */}
// //         <div className="py-16 bg-white mb-20">
// //           <div className="container mx-auto px-4 max-w-6xl">
// //             <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">
// //               Top Medical Universities in Vietnam
// //             </h2>
// //             <div className="overflow-x-auto">
// //               <table className="min-w-full border border-gray-300">
// //                 <thead>
// //                   <tr className="bg-blue-900 text-white">
// //                     <th className="p-4">University Name</th>
// //                     <th className="p-4">Country Rank</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   <tr><td className="p-4">Hanoi Medical University</td><td className="p-4">1</td></tr>
// //                   <tr className="bg-gray-100"><td className="p-4">University of Medicine and Pharmacy Ho Chi Minh City</td><td className="p-4">2</td></tr>
// //                   <tr><td className="p-4">Hue University of Medicine and Pharmacy</td><td className="p-4">3</td></tr>
// //                   <tr className="bg-gray-100"><td className="p-4">Pham Ngoc Thach University of Medicine</td><td className="p-4">5</td></tr>
// //                   <tr><td className="p-4">Hai Phong University of Medicine and Pharmacy</td><td className="p-4">7</td></tr>
// //                 </tbody>
// //               </table>
// //             </div>
// //             <p className="mt-6 text-lg text-gray-700 text-center">
// //               These universities are known for quality medical education, modern laboratories, and hospital training for international students.
// //             </p>
// //           </div>
// //         </div>

       
// //         {/* Comparison Table */}
// //         <div className="py-16 bg-white mb-20">
// //           <div className="container mx-auto px-4 max-w-5xl">
// //             <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
// //               MBBS in India vs MBBS in Vietnam
// //             </h2>
// //             <div className="overflow-x-auto">
// //               <table className="min-w-full border-collapse border border-gray-300 text-left">
// //                 <thead>
// //                   <tr className="bg-blue-900 text-white">
// //                     <th className="p-4 border">Criteria</th>
// //                     <th className="p-4 border">MBBS in India</th>
// //                     <th className="p-4 border">MBBS in Vietnam</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody className="text-gray-700">
// //                   <tr className="bg-gray-50">
// //                     <td className="p-4 border font-medium">Admission</td>
// //                     <td className="p-4 border">NEET and high cut-off required</td>
// //                     <td className="p-4 border">Admission based on NEET qualification</td>
// //                   </tr>
// //                   <tr>
// //                     <td className="p-4 border font-medium">Seats Availability</td>
// //                     <td className="p-4 border">Limited government seats</td>
// //                     <td className="p-4 border">More seats available for international students</td>
// //                   </tr>
// //                   <tr className="bg-gray-50">
// //                     <td className="p-4 border font-medium">Fees</td>
// //                     <td className="p-4 border">Private: ₹50–90 lakh</td>
// //                     <td className="p-4 border">Total MBBS cost around ₹20–30 lakh</td>
// //                   </tr>
// //                   <tr>
// //                     <td className="p-4 border font-medium">Course Duration</td>
// //                     <td className="p-4 border">Around 5.5 years</td>
// //                     <td className="p-4 border">Around 6 years</td>
// //                   </tr>
// //                   <tr className="bg-gray-50">
// //                     <td className="p-4 border font-medium">Admission Competition</td>
// //                     <td className="p-4 border">Very high</td>
// //                     <td className="p-4 border">Easier</td>
// //                   </tr>
// //                 </tbody>
// //               </table>
// //             </div>
// //           </div>
// //         </div>

// //         {/* FAQs Section – same design as previous pages */}
// //         <div className="py-16 bg-gray-50">
// //           <div className="container mx-auto px-4 max-w-4xl">
// //             <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
// //               Most Searched FAQs About MBBS in Vietnam
// //             </h2>

// //             <div className="space-y-5">
// //               {faqData.map((item, index) => (
// //                 <div
// //                   key={index}
// //                   className={`bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md ${
// //                     openIndex === index ? "shadow-lg border-blue-300" : ""
// //                   }`}
// //                 >
// //                   <button
// //                     onClick={() => toggleFAQ(index)}
// //                     className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-blue-200"
// //                   >
// //                     <h4 className="text-xl md:text-2xl font-semibold text-blue-900 leading-tight">
// //                       {item.question}
// //                     </h4>

// //                     <span className="text-3xl text-blue-600 flex-shrink-0 transition-transform duration-300">
// //                       {openIndex === index ? <FiMinus /> : <FiPlus />}
// //                     </span>
// //                   </button>

// //                   <div
// //                     className={`px-6 transition-all duration-500 ease-in-out ${
// //                       openIndex === index
// //                         ? "max-h-[600px] pb-8 pt-2 opacity-100"
// //                         : "max-h-0 pb-0 opacity-0"
// //                     }`}
// //                     style={{ overflow: "hidden" }}
// //                   >
// //                     <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
// //                       {item.answer}
// //                     </p>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>

// //             <div className="text-center mt-12">
// //               <p className="text-gray-600 text-lg">
// //                 Have more questions? Feel free to contact our experts for free counseling!
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Floating Enroll Button */}
// //       <button
// //         className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-5 rounded-full shadow-2xl hover:scale-105 transition transform animate-pulse"
// //         onClick={() => alert("Open Admission Modal / Redirect to form")}
// //       >
// //         <span className="font-bold text-lg">ENROLL NOW!</span>
// //       </button>
// //     </div>
// //   );
// // };

// // export default Vietnam;

import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const Vietnam = () => {
  const [showMoreAbout, setShowMoreAbout] = useState(false);
  const [showMoreClimate, setShowMoreClimate] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Is MBBS in Vietnam valid for Indian students?",
      answer:
        "Yes — if you choose an NMC-compliant university (listed in WDOMS & recognized by NMC guidelines). Graduates must pass FMGE/NEXT to practice in India.",
    },
    {
      question: "What is the total cost of MBBS in Vietnam?",
      answer:
        "Total budget (tuition + hostel + food + misc.) usually ranges from ₹25–35 lakhs for 6 years, depending on university and lifestyle.",
    },
    {
      question: "Is NEET required for MBBS in Vietnam?",
      answer:
        "Yes — NEET qualification is mandatory for Indian students planning to return and practice in India (NMC rule).",
    },
    {
      question: "What is the duration of MBBS in Vietnam?",
      answer:
        "6 years total: 5 years of academic study + 1 year mandatory internship.",
    },
    {
      question: "Is MBBS in Vietnam taught in English?",
      answer:
        "Yes — many universities offer full English-medium programs for international students (always confirm with the specific university).",
    },
    {
      question: "Is hostel accommodation available?",
      answer:
        "Yes — universities provide safe, affordable hostels (shared rooms, furnished, with kitchens). Many have Indian mess options nearby.",
    },
    {
      question: "Can Indian students find Indian food in Vietnam?",
      answer:
        "Yes — self-cooking in hostels is common, plus Indian restaurants/mess facilities in major cities like Hanoi & Ho Chi Minh City.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* ==================== HEADER CAROUSEL ==================== */}
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/23/%C3%93pera%2C_Ciudad_Ho_Chi_Minh%2C_Vietnam%2C_2013-08-14%2C_DD_02.JPG"
            alt="Ho Chi Minh City Opera House"
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl">
              STUDY MBBS IN VIETNAM
            </h1>
          </div>
        </div>
      </div>

      {/* ==================== MAIN CONTENT ==================== */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Intro Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg"
              alt="Vietnam flag"
              className="w-32 md:w-40 border-4 border-gray-800 rounded shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
              Explore MBBS Opportunities in Vietnam 2026–2027
            </h2>
          </div>
        </div>

        {/* Why Study + Image */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-center md:text-left text-blue-900 mb-6">
              Why Study MBBS in Vietnam
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Vietnam offers affordable, high-quality medical education with modern infrastructure, early clinical exposure, and a safe, welcoming environment. Many universities follow NMC guidelines, making the degree eligible for FMGE/NEXT in India.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              English-medium programs, low living costs (similar to India), diverse culture, and good food options (including Indian) make it attractive for Indian students.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              Universities are recognized by WHO, NMC-compliant, WDOMS, ECFMG, and FAIMER — ideal for global career options.
            </p>
            {showMoreAbout ? (
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                Proximity to India (short flights), affordable cities, and growing popularity among students from India, Nepal, Bangladesh, Africa, etc.
              </p>
            ) : null}
            <button
              onClick={() => setShowMoreAbout(!showMoreAbout)}
              className="mt-6 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
            >
              {showMoreAbout ? "Show Less" : "Read More"}
            </button>
          </div>
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Hanoi_dhyk.jpg"
              alt="Hanoi Medical University"
              className="rounded-xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Duration */}
        <div className="mb-20 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Duration of MBBS in Vietnam
          </h2>
          <p className="text-xl font-semibold text-gray-800">
            6 Years (5 Years Academic + 1 Year Internship)
          </p>
        </div>

        {/* Advantages */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Advantages of Studying MBBS in Vietnam
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700 max-w-4xl mx-auto">
            <li>Affordable tuition & living costs (total ~₹25–35 lakhs)</li>
            <li>NMC-compliant & WHO-recognized degrees</li>
            <li>English-medium programs for international students</li>
            <li>Early clinical exposure & modern hospitals</li>
            <li>Safe, student-friendly country with low crime</li>
            <li>Easy adaptation & multicultural environment</li>
            <li>Indian food options & affordable hostels</li>
            <li>No donation/capitation fees</li>
            <li>Research & global career opportunities</li>
          </ul>
        </div>

        {/* Quick Info Table + About */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-2xl font-bold text-center text-blue-900 mb-6">
              Quick Information – MBBS in Vietnam
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 text-left">
                <tbody>
                  <tr className="bg-gray-100">
                    <td className="p-4 font-semibold">Recognition</td>
                    <td className="p-4">NMC-compliant, WHO, WDOMS, ECFMG</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Eligibility</td>
                    <td className="p-4">50–60% in PCB + NEET qualified</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="p-4 font-semibold">Duration</td>
                    <td className="p-4">6 Years</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">NEET</td>
                    <td className="p-4">Mandatory for Indians</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="p-4 font-semibold">IELTS/TOEFL</td>
                    <td className="p-4">Usually not required</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Medium</td>
                    <td className="p-4">English (for intl. programs)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-900 mb-6 text-center md:text-left">
              About MBBS in Vietnam
            </h3>
            <p className="text-lg leading-relaxed text-gray-700">
              Vietnam provides quality, practical-focused medical training at a fraction of Western costs. Safe environment, good public transport, and cultural similarity make it easy for Indian students.
            </p>
            {showMoreClimate ? (
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                Affordable daily life, modern facilities, and strong clinical rotations prepare graduates well.
              </p>
            ) : null}
            <button
              onClick={() => setShowMoreClimate(!showMoreClimate)}
              className="mt-6 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
            >
              {showMoreClimate ? "Show Less" : "Read More"}
            </button>
          </div>
        </div>

        {/* Eligibility */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center md:text-left">
            Eligibility Criteria
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700 max-w-4xl mx-auto">
            <li>10+2 with Physics, Chemistry, Biology</li>
            <li>Minimum 50% aggregate in PCB (40% for reserved categories; some universities require 60%)</li>
            <li>NEET qualified (mandatory for Indian students)</li>
            <li>Age: Minimum 17 years by Dec 31 of admission year</li>
            <li>Valid passport & other standard documents</li>
          </ul>
        </div>

        {/* Documents */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center md:text-left">
            Required Documents
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700 max-w-4xl mx-auto">
            <li>Valid passport (minimum 18 months validity)</li>
            <li>10th & 12th marksheets/certificates</li>
            <li>NEET scorecard</li>
            <li>Passport-size photos</li>
            <li>Medical fitness certificate</li>
            <li>Police clearance (if required)</li>
            <li>Bank statement/proof of funds</li>
            <li>University invitation/offer letter (after application)</li>
          </ul>
        </div>

        {/* Application Process */}
        <div className="py-16 bg-white mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
            Application Process
          </h2>
          <div className="max-w-4xl mx-auto">
            <ul className="list-decimal pl-6 space-y-4 text-gray-700 text-lg">
              <li>Research & select NMC-compliant university</li>
              <li>Submit scanned documents (marksheets, passport, NEET)</li>
              <li>University reviews & may conduct interview</li>
              <li>Receive offer/invitation letter</li>
              <li>Pay initial fees & apply for student visa</li>
              <li>Travel to Vietnam & complete registration</li>
            </ul>
          </div>
        </div>

        {/* Top Universities Grid */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
            Top Medical Universities in Vietnam
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Hanoi Medical University", img: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Hanoi_dhyk.jpg" },
              { name: "University of Medicine and Pharmacy, Ho Chi Minh City", img: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Z5372420599304_7ca55d21ee3a707247033180d3108fc6.jpg" },
              { name: "Hue University of Medicine and Pharmacy", img: "https://upload.wikimedia.org/wikipedia/commons/7/72/Hu%E1%BA%BF_University.jpg" },
              { name: "Can Tho University of Medicine and Pharmacy", img: "https://photo-cms-vovworld.zadn.vn/w730/uploaded/vovworld/wpxlqdhnw/2020_03_27/pst7_anh2_fyaa.jpg" },
              { name: "Hai Phong University of Medicine and Pharmacy", img: "https://upload.wikimedia.org/wikipedia/commons/1/19/Dhyhp.JPG" },
            ].map((uni, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <img src={uni.img} alt={uni.name} className="w-full h-64 object-cover" />
                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold text-blue-900">{uni.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Food & Accommodation */}
        <div className="bg-gradient-to-b from-gray-50 to-white py-16 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
            Food & Accommodation Costs
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed container mx-auto px-4 max-w-6xl">
            <p>Hostels are affordable, safe, and student-oriented (shared 2–3 per room, furnished, Wi-Fi, kitchen).</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Monthly hostel: ₹8,000–₹20,000</li>
              <li>Food (self-cook + mess): ₹8,000–₹15,000</li>
              <li>Misc (transport etc.): ₹4,000–₹8,000</li>
              <li><strong>Total monthly:</strong> ~₹20,000–₹45,000</li>
            </ul>
            <p className="mt-6">Indian food widely available; many hostels have Indian mess options.</p>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="py-16 bg-white mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
            MBBS in Vietnam vs India (Private Colleges)
          </h2>
          <div className="overflow-x-auto container mx-auto px-4 max-w-5xl">
            <table className="min-w-full border-collapse border border-gray-300 text-left">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="p-4 border">Criteria</th>
                  <th className="p-4 border">Vietnam</th>
                  <th className="p-4 border">India (Private)</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="bg-gray-50">
                  <td className="p-4 border font-medium">Total Cost</td>
                  <td className="p-4 border">₹25–35 lakhs</td>
                  <td className="p-4 border">₹50–90+ lakhs</td>
                </tr>
                <tr>
                  <td className="p-4 border font-medium">Donation</td>
                  <td className="p-4 border text-green-700">None</td>
                  <td className="p-4 border text-red-700">Often high</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 border font-medium">Duration</td>
                  <td className="p-4 border">6 years</td>
                  <td className="p-4 border">5.5 + 1 year</td>
                </tr>
                <tr>
                  <td className="p-4 border font-medium">Admission</td>
                  <td className="p-4 border">NEET + simple process</td>
                  <td className="p-4 border">High cut-offs/donation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQs */}
        <div className="py-16 bg-gray-50">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
            Most Searched FAQs
          </h2>
          <div className="space-y-5 container mx-auto px-4 max-w-4xl">
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-sm border overflow-hidden transition-all ${
                  openIndex === index ? "shadow-lg border-blue-300" : ""
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <h4 className="text-xl md:text-2xl font-semibold text-blue-900">
                    {item.question}
                  </h4>
                  <span className="text-3xl text-blue-600">
                    {openIndex === index ? <FiMinus /> : <FiPlus />}
                  </span>
                </button>
                <div
                  className={`px-6 transition-all duration-500 ease-in-out ${
                    openIndex === index ? "max-h-[600px] pb-8 pt-2 opacity-100" : "max-h-0 pb-0 opacity-0"
                  }`}
                  style={{ overflow: "hidden" }}
                >
                  <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enroll Button */}
      <button
        className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-5 rounded-full shadow-2xl hover:scale-105 transition transform animate-pulse"
        onClick={() => alert("Contact for counseling / Open form")}
      >
        <span className="font-bold text-lg">ENROLL NOW!</span>
      </button>
    </div>
  );
};

export default Vietnam;