// // import React, { useState } from "react";

// // import Russianflag2 from "../../Images/country flag png/Egypt.svg";

// // const Egypt = () => {
// //   const [showMoreAbout, setShowMoreAbout] = useState(false);
// //   const [showMoreClimate, setShowMoreClimate] = useState(false);

// //   return (
// //     <div className="min-h-screen bg-gray-50 font-sans">
// //       {/* ==================== HEADER CAROUSEL ==================== */}
// //       <div className="relative h-screen overflow-hidden">
// //         <div className="absolute inset-0">
// //           <img
// //             src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Alexandria_University.JPG/1280px-Alexandria_University.JPG"
// //             alt="Kremlin Bridge City"
// //             className="w-full h-full object-cover brightness-75"
// //           />
// //           <div className="absolute inset-0 flex items-center justify-center">
// //             <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl">
// //               STUDY MBBS IN EGYPT
// //             </h1>
// //           </div>
// //         </div>

// //         {/* You can duplicate more slides like this or use carousel library */}
// //       </div>

// //       {/* ==================== MAIN CONTENT ==================== */}
// //       <div className="container mx-auto px-4 py-12 max-w-7xl">
// //         {/* Intro Section */}
// //         <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
// //           <div>
// //             <img
// //               src={Russianflag2}
// //               alt="Russia flag"
// //               className="w-32 md:w-40 border-4 border-gray-800 rounded shadow-lg"
// //             />
// //           </div>
// //           <div>
// //             <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
// //               Explore MBBS Opportunities in Russia 2025–2026
// //             </h2>
// //           </div>
// //         </div>

// //         {/* About Russia + Image */}
// //         <div className="grid md:grid-cols-2 gap-12 mb-20">
// //           <div>
// //             <h2 className="text-3xl font-bold text-center md:text-left text-blue-900 mb-6">
// //               About Russia
// //             </h2>
// //             <p className="text-lg leading-relaxed text-gray-700">
// //               Russia has become popular among medical students, who are looking
// //               for a safe option internationally, as it has a strong academic
// //               environment for MBBS abroad. With a duration of approximately{" "}
// //               <strong>6 years</strong>, Russia has a well-balanced combination
// //               of quality education and practical clinical exposure.
// //             </p>

// //             <p className="mt-4 text-lg leading-relaxed text-gray-700">
// //               One of the biggest reasons to choose Russia is affordability.
// //               Compared to other countries.<strong> Russian universities</strong>{" "}
// //               provide high-quality education at cost-effective prices. Russian
// //               universities are recognised globally and ranked among the top
// //               institutions internationally. Well known for a strong academic
// //               background, experienced faculty, and modern infrastructure. In
// //               russia students receive theoretical and hands on clincal training,
// //               helping them develop the skills needed to become medical experts.
// //               The learning environment, combined with diverse cultural
// //               experiences, also helps students grow personally and
// //               professionally.
// //             </p>

// //             {showMoreAbout ? (
// //               <p className="mt-4 text-lg leading-relaxed text-gray-700">
// //                 While Russia remains a popular destination, other countries like
// //                 China, Nepal, Germany, Philippines, Ukraine, Bangladesh, and
// //                 Kyrgyzstan also offer affordable medical education.
// //                 International students are often exempted from the one-year
// //                 preparatory course.
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
// //               src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Egyptian_Museum_in_Cairo_in_May_2015.JPG"
// //               alt="Kremlin"
// //               className="rounded-xl shadow-2xl w-full h-auto object-cover"
// //             />
// //           </div>
// //         </div>

// //         {/* Quick Information + About MBBS */}
// //         <div className="grid md:grid-cols-2 gap-12 mb-20">
// //           {/* Left – Quick Info Table */}
// //           <div>
// //             <h3 className="text-2xl font-bold text-center text-blue-900 mb-6">
// //               Quick Information – Study MBBS in Russia
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
// //                     <td className="p-4">50% in PCB aggregate</td>
// //                   </tr>
// //                   <tr className="bg-gray-100">
// //                     <td className="p-4 font-semibold">Course Duration</td>
// //                     <td className="p-4">6 Years</td>
// //                   </tr>
// //                   <tr>
// //                     <td className="p-4 font-semibold">NEET</td>
// //                     <td className="p-4">Compulsory</td>
// //                   </tr>
// //                   <tr className="bg-gray-100">
// //                     <td className="p-4 font-semibold">IELTS/TOEFL</td>
// //                     <td className="p-4">Not Required</td>
// //                   </tr>
// //                   <tr>
// //                     <td className="p-4 font-semibold">Medium of Teaching</td>
// //                     <td className="p-4">English</td>
// //                   </tr>
// //                 </tbody>
// //               </table>
// //             </div>
// //           </div>

// //           {/* Right – About MBBS */}
// //           <div>
// //             <h3 className="text-3xl font-bold text-blue-900 mb-6 text-center md:text-left">
// //               About MBBS in Russia
// //             </h3>
// //             <p className="text-lg leading-relaxed text-gray-700">
// //               Studying MBBS in Russia is notably straightforward
// //             </p>

// //             {showMoreClimate ? (
// //               <p className="mt-4 text-lg leading-relaxed text-gray-700">
// //                 — no entrance
// //               exam (apart from NEET for Indian students). The Russian government
// //               subsidizes education, keeping fees relatively low...
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

// //         {/* ==================== UNIVERSITIES GRID ==================== */}
// //         <div className="mb-20">
// //           <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
// //             Top Medical Universities in Russia
// //           </h2>

// //           <div className="grid md:grid-cols-3 gap-8">
// //             {[
//               // {
//               //   name: "Ain Shams University",
//               //   img: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Eng_asu_main_bldng.JPG",
//               // },
//               // {
//               //   name: "Alexandria University",
//               //   img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Alexandria_University.JPG/1280px-Alexandria_University.JPG",
//               // },
//               // {
//               //   name: "Cairo University",
//               //   img: "https://upload.wikimedia.org/wikipedia/commons/5/57/CairoUniv.jpg",
//               // },
//               // {
//               //   name: "Helwan University",
//               //   img: "https://upload.wikimedia.org/wikipedia/commons/b/b4/%D0%9F%D0%B3%D0%BD%D0%B8%D1%83._%D0%9A%D0%BE%D1%80%D0%BF%D1%83%D1%81_%E2%84%965.jpg",
//               // },
//               // {
//               //   name: "Kafrelsheikh University",
//               //   img: "https://upload.wikimedia.org/wikipedia/commons/8/88/Faculty_of_Arts-Kafr_El-Sheikh_University_01.JPG",
//               // },
//               // {
//               //   name: "Mansoura University",
//               //   img: "https://s3.ap-south-1.amazonaws.com/gotouniv/cover_photo/2002/cover_photo_1500X500.jpg",
//               // },
// //             ].map((uni, i) => (
// //               <div
// //                 key={i}
// //                 className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
// //               >
// //                 <img
// //                   src={uni.img}
// //                   alt={uni.name}
// //                   className="w-full h-64 object-cover"
// //                 />
// //                 <div className="p-6 text-center">
// //                   <h4 className="text-xl font-bold text-blue-900">
// //                     {uni.name}
// //                   </h4>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* ==================== ADVANTAGES + COST ==================== */}
// //         <div className="grid md:grid-cols-2 gap-12 mb-20">
// //           <div>
// //             <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center md:text-left">
// //               Advantages of Studying MBBS in Russia 2025–2026
// //             </h2>

// //             <div className="space-y-6">
// //               <div>
// //                 <h5 className="text-xl font-semibold">
// //                   1. High-Quality Education
// //                 </h5>
// //                 <p className="text-gray-700">
// //                   Globally recognized universities with strong academic
// //                   standards.
// //                 </p>
// //               </div>
// //               <div>
// //                 <h5 className="text-xl font-semibold">
// //                   2. Affordable Tuition Fees
// //                 </h5>
// //                 <p className="text-gray-700">
// //                   Significantly lower than many Western countries.
// //                 </p>
// //               </div>
// //               <div>
// //                 <h5 className="text-xl font-semibold">
// //                   3. No Additional Entrance Exams
// //                 </h5>
// //                 <p className="text-gray-700">
// //                   (NEET required for Indian students only)
// //                 </p>
// //               </div>
// //               <div>
// //                 <h5 className="text-xl font-semibold">
// //                   4. English-Medium Programs
// //                 </h5>
// //                 <p className="text-gray-700">
// //                   No language barrier for most international students.
// //                 </p>
// //               </div>
// //             </div>
// //           </div>

// //           <div>
// //             <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
// //               Cost of Study MBBS in Russia
// //             </h2>
// //             <p className="text-lg text-gray-700 leading-relaxed">
// //               The cost of the <strong> MBBS course in Russia</strong> is very
// //               low for Indian students who want to pursue their{" "}
// //               <strong>MBBS</strong> course in Russia. Russia is a very demanding
// //               country for Indian students who want to pursue their MBBS course.
// //               The government of Russia has funded the fee structure for the MBBS
// //               course. Studying MBBS in Russia is an easy task for Indian
// //               students compared to other countries. Studying MBBS in Russia is
// //               very cheap. The universities in Russia provide a smooth platform
// //               for <strong>international students</strong> so that they don't
// //               need to pay the high tuition fees. Apart from this, there is no
// //               need to pay any donations.
// //             </p>
// //           </div>
// //         </div>

// //         {/* You can continue adding more sections like Food & Accommodation, Admission Process, Documents, Eligibility, Comparison table, etc. in similar fashion */}
// //       </div>

// //       {/* Floating Enroll Button */}
// //       <button
// //         className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-5 rounded-full shadow-2xl hover:scale-105 transition transform animate-pulse"
// //         onClick={() => alert("Open Admission Modal / Redirect to form")}
// //       >
// //         <span className="font-bold text-lg">ENROLL NOW!</span>
// //       </button>

// //       {/* ==================== FOOD & ACCOMMODATION SECTION ==================== */}
// //       <div className="bg-gradient-to-b from-gray-50 to-white py-16">
// //         <div className="container mx-auto px-4 max-w-6xl">
// //           <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
// //             Food and Accommodation Cost – MBBS in Russia
// //           </h2>

// //           <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
// //             <p>
// //               Most Russian medical universities provide comfortable hostel
// //               accommodation specially designed for international students. Rooms
// //               are usually shared (2–3 students per room) and come fully
// //               furnished with:
// //             </p>
// //             <ul className="list-disc pl-6 mt-4 space-y-2">
// //               <li>Beds, mattresses, bedsheets, blankets, pillows</li>
// //               <li>Study tables, chairs, wardrobes/cupboards</li>
// //               <li>Central heating (very important in Russian winters)</li>
// //             </ul>

// //             <p className="mt-6">Hostels typically include:</p>
// //             <ul className="list-disc pl-6 mt-4 space-y-2">
// //               <li>
// //                 Common kitchen where students can cook their own food (very
// //                 popular among Indian students to prepare Indian meals)
// //               </li>
// //               <li>Common washing machines / laundry rooms</li>
// //               <li>
// //                 Indian mess / canteen facilities in many universities (or
// //                 nearby)
// //               </li>
// //               <li>
// //                 Indian restaurants and grocery stores often within walking
// //                 distance
// //               </li>
// //             </ul>

// //             <p className="mt-6">
// //               <strong>Approximate monthly living expenses (2025–2026):</strong>
// //             </p>
// //             <ul className="list-disc pl-6 mt-4 space-y-2">
// //               <li>Hostel / Accommodation: ₹8,000 – ₹18,000</li>
// //               <li>Food (self-cooking + mess): ₹8,000 – ₹15,000</li>
// //               <li>Transport + Miscellaneous: ₹3,000 – ₹7,000</li>
// //               <li>
// //                 <strong>Total monthly:</strong> ≈ ₹20,000 – ₹40,000
// //               </li>
// //             </ul>

// //             <p className="mt-6 italic text-gray-600">
// //               Many universities also offer Indian food in their mess/canteen,
// //               helping students maintain a familiar diet without much extra cost.
// //             </p>
// //           </div>
// //         </div>
// //       </div>

// //       {/* ==================== ADMISSION PROCESS ==================== */}
// //       <div className="py-16 bg-white">
// //         <div className="container mx-auto px-4 max-w-6xl">
// //           <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
// //             Admission Process for MBBS in Russia 2025–2026
// //           </h2>

// //           <div className="max-w-4xl mx-auto">
// //             <p className="text-lg text-gray-700 mb-8 leading-relaxed">
// //               The admission process for{" "}
// //               <strong> MBBS (Bachelor of Medicine, Bachelor of Surgery)</strong>{" "}
// //               courses in Russia varies slightly among different universities,
// //               but the general process is as follows:
// //             </p>

// //             <div className="space-y-10">
// //               <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
// //                 <h4 className="text-xl font-bold text-blue-900 mb-4">
// //                   1. Research and Select a University:
// //                 </h4>
// //                 <p className="text-gray-700">
// //                   Research the <strong>Russian universities</strong> that offer
// //                   MBBS courses. Some of the best universities for MBBS courses
// //                   in Russia are
// //                   <strong>
// //                     {" "}
// //                     Moscow State Medical University, Saint Petersburg State
// //                     Medical University, Kazan Federal University, etc.
// //                   </strong>
// //                 </p>
// //                 <p className="mt-2 text-gray-600">
// //                   Check: NMC/WHO recognition, English medium availability,
// //                   tuition fees, hostel quality.
// //                 </p>
// //               </div>

// //               <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
// //                 <h4 className="text-xl font-bold text-blue-900 mb-4">
// //                   2. Check Eligibility
// //                 </h4>
// //                 <ul className="list-disc pl-6 space-y-2 text-gray-700">
// //                   <li>Completed 10+2 with Physics, Chemistry, Biology</li>
// //                   <li>
// //                     Minimum 50% aggregate in PCB (40% for reserved categories)
// //                   </li>
// //                   <li>NEET qualified (mandatory for Indian students)</li>
// //                   <li>Age: 17 years completed by 31st Dec of admission year</li>
// //                 </ul>
// //               </div>

// //               <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
// //                 <h4 className="text-xl font-bold text-blue-900 mb-4">
// //                   3. Apply Online
// //                 </h4>
// //                 <p className="text-gray-700">
// //                   Fill university application form → Submit scanned documents →
// //                   Receive admission/invitation letter (usually within 2–4
// //                   weeks).
// //                 </p>
// //               </div>

// //               <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
// //                 <h4 className="text-xl font-bold text-blue-900 mb-4">
// //                   4. Visa & Travel
// //                 </h4>
// //                 <p className="text-gray-700">
// //                   Use invitation letter to apply for student visa at Russian
// //                   Embassy/Consulate → Book tickets → Arrive in Russia → Complete
// //                   university registration & medical check-up.
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* ==================== DOCUMENTS + ELIGIBILITY + SCHOLARSHIPS ==================== */}
// //       <div className="py-16 bg-gradient-to-b from-white to-gray-50">
// //         <div className="container mx-auto px-4 max-w-7xl">
// //           <div className="grid md:grid-cols-2 gap-12">
// //             {/* Left - Required Documents */}
// //             <div>
// //               <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center md:text-left">
// //                 Required Documents for MBBS in Russia 2025–2026
// //               </h2>

// //               <div className="space-y-6">
// //                 <div className="bg-white p-6 rounded-xl shadow-sm border">
// //                   <h5 className="text-lg font-semibold text-blue-800">
// //                     Educational Documents
// //                   </h5>
// //                   <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-1">
// //                     <li>10th & 12th marksheets + certificates</li>
// //                     <li>NEET scorecard & admit card</li>
// //                     <li>Passport (valid for minimum 18–24 months)</li>
// //                   </ul>
// //                 </div>

// //                 <div className="bg-white p-6 rounded-xl shadow-sm border">
// //                   <h5 className="text-lg font-semibold text-blue-800">
// //                     Other Important Documents
// //                   </h5>
// //                   <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-1">
// //                     <li>Passport size photos (white background)</li>
// //                     <li>HIV & medical fitness certificate</li>
// //                     <li>
// //                       Invitation letter from university (issued after admission)
// //                     </li>
// //                     <li>Visa application form & fee receipt</li>
// //                   </ul>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Right - Eligibility + Scholarships */}
// //             <div>
// //               <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
// //                 Eligibility Criteria & Scholarships
// //               </h2>

// //               <div className="bg-white p-6 rounded-xl shadow-sm border mb-8">
// //                 <h4 className="text-xl font-semibold text-blue-900 mb-4">
// //                   Basic Eligibility
// //                 </h4>
// //                 <ul className="list-decimal pl-5 space-y-2 text-gray-700">
// //                   <li>Age 17+ by 31st Dec of admission year</li>
// //                   <li>50%+ in PCB in 12th (40% for SC/ST/OBC)</li>
// //                   <li>NEET qualified (mandatory for Indians)</li>
// //                 </ul>
// //               </div>

// //               <div className="bg-white p-6 rounded-xl shadow-sm border">
// //                 <h4 className="text-xl font-semibold text-blue-900 mb-4">
// //                   Popular Scholarships
// //                 </h4>
// //                 <ul className="space-y-4">
// //                   <li>
// //                     <strong>
// //                       Russian Government Scholarship (Open Doors / Quota)
// //                     </strong>
// //                     <br />
// //                     <span className="text-gray-600 text-sm">
// //                       Covers tuition + sometimes hostel. Very competitive —
// //                       apply via education-in-russia.com
// //                     </span>
// //                   </li>
// //                   <li>
// //                     <strong>University-specific Merit Scholarships</strong>
// //                     <br />
// //                     <span className="text-gray-600 text-sm">
// //                       Offered by many universities for good NEET/academic scores
// //                     </span>
// //                   </li>
// //                   <li>
// //                     <strong>Other options</strong>
// //                     <br />
// //                     <span className="text-gray-600 text-sm">
// //                       Education Future, Inlaks, etc. (limited for MBBS)
// //                     </span>
// //                   </li>
// //                 </ul>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* ==================== COMPARISON TABLE ==================== */}
// //       <div className="py-16 bg-white">
// //         <div className="container mx-auto px-4 max-w-5xl">
// //           <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
// //             MBBS in Russia vs MBBS in India – Quick Comparison (2025–2026)
// //           </h2>

// //           <div className="overflow-x-auto">
// //             <table className="min-w-full border-collapse border border-gray-300 text-left">
// //               <thead>
// //                 <tr className="bg-blue-900 text-white">
// //                   <th className="p-4 border border-gray-300 text-center font-semibold">
// //                     Criteria
// //                   </th>
// //                   <th className="p-4 border border-gray-300 text-center font-semibold">
// //                     MBBS in Russia
// //                   </th>
// //                   <th className="p-4 border border-gray-300 text-center font-semibold">
// //                     MBBS in India
// //                   </th>
// //                 </tr>
// //               </thead>
// //               <tbody className="text-gray-700">
// //                 <tr className="bg-gray-50">
// //                   <td className="p-4 border font-medium">
// //                     Tuition Fees (per year)
// //                   </td>
// //                   <td className="p-4 border">₹2 – 5 Lakhs</td>
// //                   <td className="p-4 border">
// //                     Govt: ₹40k – ₹2 Lakhs
// //                     <br />
// //                     Private: ₹10 – 25+ Lakhs
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td className="p-4 border font-medium">
// //                     Donation / Capitation
// //                   </td>
// //                   <td className="p-4 border text-green-700">No Donation</td>
// //                   <td className="p-4 border text-red-700">
// //                     Often ₹30–80 Lakhs in private colleges
// //                   </td>
// //                 </tr>
// //                 <tr className="bg-gray-50">
// //                   <td className="p-4 border font-medium">Course Duration</td>
// //                   <td className="p-4 border">6 years (including internship)</td>
// //                   <td className="p-4 border">5.5 years + 1 year internship</td>
// //                 </tr>
// //                 <tr>
// //                   <td className="p-4 border font-medium">Class Strength</td>
// //                   <td className="p-4 border">20–40 students</td>
// //                   <td className="p-4 border">
// //                     100–150+ students (especially private)
// //                   </td>
// //                 </tr>
// //                 <tr className="bg-gray-50">
// //                   <td className="p-4 border font-medium">Global Recognition</td>
// //                   <td className="p-4 border">
// //                     NMC, WHO, WFME approved universities
// //                   </td>
// //                   <td className="p-4 border">
// //                     NMC approved, but private colleges vary
// //                   </td>
// //                 </tr>
// //                 <tr>
// //                   <td className="p-4 border font-medium">
// //                     Medium of Instruction
// //                   </td>
// //                   <td className="p-4 border">English</td>
// //                   <td className="p-4 border">English</td>
// //                 </tr>
// //               </tbody>
// //             </table>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Egypt;

// // import React, { useState } from "react";

// // import EgyptFlag from "../../Images/country flag png/Egypt.svg"; // Assume correct path to Egypt flag SVG

// // const Egypt = () => {
// //   const [showMoreAbout, setShowMoreAbout] = useState(false);
// //   const [showMoreClimate, setShowMoreClimate] = useState(false);

// //   return (
// //     <div className="min-h-screen bg-gray-50 font-sans">
// //       {/* ==================== HEADER CAROUSEL ==================== */}
// //       <div className="relative h-screen overflow-hidden">
// //         <div className="absolute inset-0">
// //           <img
// //             src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Alexandria_University.JPG/1280px-Alexandria_University.JPG"
// //             alt="Alexandria University"
// //             className="w-full h-full object-cover brightness-75"
// //           />
// //           <div className="absolute inset-0 flex items-center justify-center">
// //             <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl">
// //               STUDY MBBS IN EGYPT
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
// //               src={EgyptFlag}
// //               alt="Egypt flag"
// //               className="w-32 md:w-40 border-4 border-gray-800 rounded shadow-lg"
// //             />
// //           </div>
// //           <div>
// //             <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
// //               Explore MBBS Opportunities in Egypt 2025–2026
// //             </h2>
// //           </div>
// //         </div>

// //         {/* About Egypt + Image */}
// //         <div className="grid md:grid-cols-2 gap-12 mb-20">
// //           <div>
// //             <h2 className="text-3xl font-bold text-center md:text-left text-blue-900 mb-6">
// //               About Egypt
// //             </h2>
// //             <p className="text-lg leading-relaxed text-gray-700">
// //               Egypt's rich history and prehistoric treasures make it a unique location for medical study. Famous landmarks like the Pyramids, Sphinx, and Karnak Temple line the Nile. In Cairo, visit the Mohammad Ali Mosque and Egyptian Museum. Egyptian medical universities attract MBBS students globally, offering a safe environment for both male and female students. Admission is straightforward with no additional entrance exams beyond NEET for Indians. The curriculum is MCQ-based with English-medium instruction and strong practical training in hospitals.
// //             </p>

// //             <p className="mt-4 text-lg leading-relaxed text-gray-700">
// //               MBBS in Egypt prepares students for respected global medical careers. Affordable alternatives include China, Nepal, Germany, Philippines, Ukraine, Bangladesh, and Kyrgyzstan, but Egypt remains popular for its 6-year duration (exempting preparatory courses for internationals) and cosmopolitan society.
// //             </p>

// //             {showMoreAbout ? (
// //               <p className="mt-4 text-lg leading-relaxed text-gray-700">
// //                 International students from Malaysia, Nepal, Nigeria, and more choose Egypt for its skilled faculty, visiting professors, and equal opportunities.
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
// //               src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Egyptian_Museum_in_Cairo_in_May_2015.JPG"
// //               alt="Egyptian Museum"
// //               className="rounded-xl shadow-2xl w-full h-auto object-cover"
// //             />
// //           </div>
// //         </div>

// //         {/* Quick Information + About MBBS */}
// //         <div className="grid md:grid-cols-2 gap-12 mb-20">
// //           {/* Left – Quick Info Table */}
// //           <div>
// //             <h3 className="text-2xl font-bold text-center text-blue-900 mb-6">
// //               Quick Information – Study MBBS in Egypt
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
// //                     <td className="p-4">50% in PCB aggregate (40% reserved)</td>
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
// //                     <td className="p-4">English</td>
// //                   </tr>
// //                 </tbody>
// //               </table>
// //             </div>
// //           </div>

// //           {/* Right – About MBBS */}
// //           <div>
// //             <h3 className="text-3xl font-bold text-blue-900 mb-6 text-center md:text-left">
// //               About MBBS in Egypt
// //             </h3>
// //             <p className="text-lg leading-relaxed text-gray-700">
// //               Studying MBBS in Egypt is straightforward with a safe learning environment. No donation/capitation fees. Many universities follow a modern/US-influenced curriculum with advanced facilities. Skilled faculty ensure excellent teacher-student ratios. Graduates are well-prepared for exams like FMGE/NEXT, USMLE, PLAB.
// //             </p>

// //             {showMoreClimate ? (
// //               <p className="mt-4 text-lg leading-relaxed text-gray-700">
// //                 Egypt's climate is warm (desert/temperate), with mild winters and hot summers—comfortable with indoor heating/AC. Students enjoy multicultural vibes, extracurriculars, and volunteer opportunities.
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

// //         {/* ==================== UNIVERSITIES GRID ==================== */}
// //         <div className="mb-20">
// //           <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
// //             Top Medical Universities in Egypt
// //           </h2>

// //           <div className="grid md:grid-cols-3 gap-8">
// //             {[
// //                            {
// //                 name: "Ain Shams University",
// //                 img: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Eng_asu_main_bldng.JPG",
// //               },
// //               {
// //                 name: "Alexandria University",
// //                 img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Alexandria_University.JPG/1280px-Alexandria_University.JPG",
// //               },
// //               {
// //                 name: "Cairo University",
// //                 img: "https://upload.wikimedia.org/wikipedia/commons/5/57/CairoUniv.jpg",
// //               },
// //               {
// //                 name: "Helwan University",
// //                 img: "https://upload.wikimedia.org/wikipedia/commons/b/b4/%D0%9F%D0%B3%D0%BD%D0%B8%D1%83._%D0%9A%D0%BE%D1%80%D0%BF%D1%83%D1%81_%E2%84%965.jpg",
// //               },
// //               {
// //                 name: "Kafrelsheikh University",
// //                 img: "https://upload.wikimedia.org/wikipedia/commons/8/88/Faculty_of_Arts-Kafr_El-Sheikh_University_01.JPG",
// //               },
// //               {
// //                 name: "Mansoura University",
// //                 img: "https://s3.ap-south-1.amazonaws.com/gotouniv/cover_photo/2002/cover_photo_1500X500.jpg",
// //               },
// //             ].map((uni, i) => (
// //               <div
// //                 key={i}
// //                 className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
// //               >
// //                 <img
// //                   src={uni.img}
// //                   alt={uni.name}
// //                   className="w-full h-64 object-cover"
// //                 />
// //                 <div className="p-6 text-center">
// //                   <h4 className="text-xl font-bold text-blue-900">
// //                     {uni.name}
// //                   </h4>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* ==================== ADVANTAGES + COST ==================== */}
// //         <div className="grid md:grid-cols-2 gap-12 mb-20">
// //           <div>
// //             <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center md:text-left">
// //               Advantages of Studying MBBS in Egypt 2025–2026
// //             </h2>

// //             <div className="space-y-6">
// //               <div>
// //                 <h5 className="text-xl font-semibold">
// //                   1. Affordable High-Quality Education
// //                 </h5>
// //                 <p className="text-gray-700">
// //                   Globally recognized at low cost compared to West/private India.
// //                 </p>
// //               </div>
// //               <div>
// //                 <h5 className="text-xl font-semibold">
// //                   2. No Donation / Simple Admission
// //                 </h5>
// //                 <p className="text-gray-700">
// //                   Straightforward process; NEET compulsory for Indians.
// //                 </p>
// //               </div>
// //               <div>
// //                 <h5 className="text-xl font-semibold">
// //                   3. English Medium + Modern Curriculum
// //                 </h5>
// //                 <p className="text-gray-700">
// //                   US-influenced with advanced labs/research.
// //                 </p>
// //               </div>
// //               <div>
// //                 <h5 className="text-xl font-semibold">
// //                   4. Strong Clinical Exposure + Global Prep
// //                 </h5>
// //                 <p className="text-gray-700">
// //                   Prepares for FMGE/USMLE/PLAB; part-time work possible.
// //                 </p>
// //               </div>
// //             </div>
// //           </div>

// //           <div>
// //             <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
// //               Cost of Study MBBS in Egypt
// //             </h2>
// //             <p className="text-lg text-gray-700 leading-relaxed">
// //               MBBS in Egypt is highly affordable for Indian students. Government subsidies keep fees low—no donations. Total cost (tuition + living) often ₹25–45 lakhs for the full course. Annual tuition ~$5,000–$8,000 (~₹4–7 lakhs). Living expenses are reasonable, with hostels and Indian food options available.
// //             </p>
// //           </div>
// //         </div>

// //         {/* ==================== FOOD & ACCOMMODATION SECTION ==================== */}
// //         <div className="bg-gradient-to-b from-gray-50 to-white py-16">
// //           <div className="container mx-auto px-4 max-w-6xl">
// //             <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
// //               Food and Accommodation Cost – MBBS in Egypt
// //             </h2>

// //             <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
// //               <p>
// //                 Egyptian universities provide safe, comfortable hostels for international students (2–3 per room, fully furnished with beds, study tables, wardrobes, heating/AC).
// //               </p>
// //               <ul className="list-disc pl-6 mt-4 space-y-2">
// //                 <li>Common kitchens for self-cooking (popular for Indian meals)</li>
// //                 <li>Mess/canteen with Indian food options</li>
// //                 <li>Laundry facilities</li>
// //                 <li>Nearby Indian restaurants/grocery stores</li>
// //               </ul>

// //               <p className="mt-6">
// //                 <strong>Approximate monthly living expenses (2025–2026):</strong>
// //               </p>
// //               <ul className="list-disc pl-6 mt-4 space-y-2">
// //                 <li>Hostel: ₹8,000 – ₹20,000</li>
// //                 <li>Food: ₹8,000 – ₹15,000</li>
// //                 <li>Transport + Misc: ₹4,000 – ₹8,000</li>
// //                 <li><strong>Total monthly:</strong> ≈ ₹20,000 – ₹45,000</li>
// //               </ul>

// //               <p className="mt-6 italic text-gray-600">
// //                 Many campuses offer Indian mess facilities for familiar diet at low cost.
// //               </p>
// //             </div>
// //           </div>
// //         </div>

// //         {/* ==================== ADMISSION PROCESS ==================== */}
// //         <div className="py-16 bg-white">
// //           <div className="container mx-auto px-4 max-w-6xl">
// //             <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
// //               Admission Process for MBBS in Egypt 2025–2026
// //             </h2>

// //             <div className="max-w-4xl mx-auto">
// //               <p className="text-lg text-gray-700 mb-8 leading-relaxed">
// //                 The process is simple and varies slightly by university:
// //               </p>

// //               <div className="space-y-10">
// //                 <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
// //                   <h4 className="text-xl font-bold text-blue-900 mb-4">
// //                     1. Research & Select University
// //                   </h4>
// //                   <p className="text-gray-700">
// //                     Choose NMC/WHO-recognized ones like Cairo, Ain Shams, Alexandria.
// //                   </p>
// //                 </div>

// //                 <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
// //                   <h4 className="text-xl font-bold text-blue-900 mb-4">
// //                     2. Check Eligibility
// //                   </h4>
// //                   <ul className="list-disc pl-6 space-y-2 text-gray-700">
// //                     <li>17+ years by Dec 31 admission year</li>
// //                     <li>50%+ PCB in 12th</li>
// //                     <li>NEET qualified (Indians)</li>
// //                   </ul>
// //                 </div>

// //                 <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
// //                   <h4 className="text-xl font-bold text-blue-900 mb-4">
// //                     3. Apply Online
// //                   </h4>
// //                   <p className="text-gray-700">
// //                     Submit form + documents → Get invitation letter (2–4 weeks).
// //                   </p>
// //                 </div>

// //                 <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
// //                   <h4 className="text-xl font-bold text-blue-900 mb-4">
// //                     4. Visa & Travel
// //                   </h4>
// //                   <p className="text-gray-700">
// //                     Apply for student visa → Arrive, register, medical check.
// //                   </p>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* ==================== DOCUMENTS + ELIGIBILITY + SCHOLARSHIPS ==================== */}
// //         <div className="py-16 bg-gradient-to-b from-white to-gray-50">
// //           <div className="container mx-auto px-4 max-w-7xl">
// //             <div className="grid md:grid-cols-2 gap-12">
// //               {/* Left - Required Documents */}
// //               <div>
// //                 <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center md:text-left">
// //                   Required Documents for MBBS in Egypt 2025–2026
// //                 </h2>

// //                 <div className="space-y-6">
// //                   <div className="bg-white p-6 rounded-xl shadow-sm border">
// //                     <h5 className="text-lg font-semibold text-blue-800">
// //                       Educational Documents
// //                     </h5>
// //                     <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-1">
// //                       <li>10th & 12th marksheets/certificates</li>
// //                       <li>NEET scorecard</li>
// //                       <li>Passport (valid 18+ months)</li>
// //                     </ul>
// //                   </div>

// //                   <div className="bg-white p-6 rounded-xl shadow-sm border">
// //                     <h5 className="text-lg font-semibold text-blue-800">
// //                       Other Documents
// //                     </h5>
// //                     <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-1">
// //                       <li>Passport photos</li>
// //                       <li>Medical fitness/HIV certificate</li>
// //                       <li>Invitation letter</li>
// //                     </ul>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Right - Eligibility + Scholarships */}
// //               <div>
// //                 <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
// //                   Eligibility Criteria & Scholarships
// //                 </h2>

// //                 <div className="bg-white p-6 rounded-xl shadow-sm border mb-8">
// //                   <h4 className="text-xl font-semibold text-blue-900 mb-4">
// //                     Basic Eligibility
// //                   </h4>
// //                   <ul className="list-decimal pl-5 space-y-2 text-gray-700">
// //                     <li>Age 17+ by Dec 31</li>
// //                     <li>50%+ PCB (40% reserved)</li>
// //                     <li>NEET qualified</li>
// //                   </ul>
// //                 </div>

// //                 <div className="bg-white p-6 rounded-xl shadow-sm border">
// //                   <h4 className="text-xl font-semibold text-blue-900 mb-4">
// //                     Scholarships
// //                   </h4>
// //                   <ul className="space-y-4">
// //                     <li>
// //                       <strong>Egypt Government/University Quota</strong>
// //                       <br />
// //                       <span className="text-gray-600 text-sm">
// //                         Merit-based; covers partial tuition.
// //                       </span>
// //                     </li>
// //                     <li>
// //                       <strong>Merit/Need-based</strong>
// //                       <br />
// //                       <span className="text-gray-600 text-sm">
// //                         Offered by universities for high scores.
// //                       </span>
// //                     </li>
// //                   </ul>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* ==================== COMPARISON TABLE ==================== */}
// //         <div className="py-16 bg-white">
// //           <div className="container mx-auto px-4 max-w-5xl">
// //             <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
// //               MBBS in Egypt vs MBBS in India – Quick Comparison (2025–2026)
// //             </h2>

// //             <div className="overflow-x-auto">
// //               <table className="min-w-full border-collapse border border-gray-300 text-left">
// //                 <thead>
// //                   <tr className="bg-blue-900 text-white">
// //                     <th className="p-4 border border-gray-300 text-center font-semibold">
// //                       Criteria
// //                     </th>
// //                     <th className="p-4 border border-gray-300 text-center font-semibold">
// //                       MBBS in Egypt
// //                     </th>
// //                     <th className="p-4 border border-gray-300 text-center font-semibold">
// //                       MBBS in India
// //                     </th>
// //                   </tr>
// //                 </thead>
// //                 <tbody className="text-gray-700">
// //                   <tr className="bg-gray-50">
// //                     <td className="p-4 border font-medium">
// //                       Tuition Fees (Total Approx.)
// //                     </td>
// //                     <td className="p-4 border">₹25–45 Lakhs</td>
// //                     <td className="p-4 border">
// //                       Govt: Low<br />Private: ₹50–90+ Lakhs
// //                     </td>
// //                   </tr>
// //                   <tr>
// //                     <td className="p-4 border font-medium">
// //                       Donation / Capitation
// //                     </td>
// //                     <td className="p-4 border text-green-700">No</td>
// //                     <td className="p-4 border text-red-700">
// //                       Often high in private
// //                     </td>
// //                   </tr>
// //                   <tr className="bg-gray-50">
// //                     <td className="p-4 border font-medium">Course Duration</td>
// //                     <td className="p-4 border">6 years</td>
// //                     <td className="p-4 border">5.5 + 1 internship</td>
// //                   </tr>
// //                   <tr>
// //                     <td className="p-4 border font-medium">Admission Competition</td>
// //                     <td className="p-4 border">Easier (NEET-based)</td>
// //                     <td className="p-4 border">Very high</td>
// //                   </tr>
// //                   <tr className="bg-gray-50">
// //                     <td className="p-4 border font-medium">Global Recognition</td>
// //                     <td className="p-4 border">
// //                       NMC, WHO, good FMGE prep
// //                     </td>
// //                     <td className="p-4 border">
// //                       NMC, varies by college
// //                     </td>
// //                   </tr>
// //                 </tbody>
// //               </table>
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

// //       {/* ==================== FAQs SECTION (Bonus) ==================== */}
// //       <div className="py-16 bg-gray-100">
// //         <div className="container mx-auto px-4 max-w-6xl">
// //           <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">
// //             Most Searched FAQs About MBBS in Egypt
// //           </h2>
// //           <div className="space-y-6">
// //             <div className="bg-white p-6 rounded-xl shadow">
// //               <h4 className="text-xl font-bold">Is MBBS in Egypt valid in India?</h4>
// //               <p>Yes—pass FMGE/NEXT to practice.</p>
// //             </div>
// //             <div className="bg-white p-6 rounded-xl shadow">
// //               <h4 className="text-xl font-bold">Total cost?</h4>
// //               <p>₹25–45 lakhs approx.</p>
// //             </div>
// //             <div className="bg-white p-6 rounded-xl shadow">
// //               <h4 className="text-xl font-bold">NEET required?</h4>
// //               <p>Yes, for Indian students.</p>
// //             </div>
// //             <div className="bg-white p-6 rounded-xl shadow">
// //               <h4 className="text-xl font-bold">Duration?</h4>
// //               <p>6 years (5 academic + 1 internship).</p>
// //             </div>
// //             <div className="bg-white p-6 rounded-xl shadow">
// //               <h4 className="text-xl font-bold">English medium?</h4>
// //               <p>Yes, for international programs.</p>
// //             </div>
// //             <div className="bg-white p-6 rounded-xl shadow">
// //               <h4 className="text-xl font-bold">Indian food available?</h4>
// //               <p>Yes—hostel kitchens, mess, restaurants.</p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Egypt;

// import React, { useState } from "react";

// import EgyptFlag from "../../Images/country flag png/Egypt.svg"; // Correct path to Egypt flag

// const Egypt = () => {
//   const [showMoreAbout, setShowMoreAbout] = useState(false);
//   const [showMoreClimate, setShowMoreClimate] = useState(false);

//   return (
//     <div className="min-h-screen bg-gray-50 font-sans">
//       {/* ==================== HEADER CAROUSEL ==================== */}
//       <div className="relative h-screen overflow-hidden">
//         <div className="absolute inset-0">
//           <img
//             src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Alexandria_University.JPG/1280px-Alexandria_University.JPG"
//             alt="Alexandria University"
//             className="w-full h-full object-cover brightness-75"
//           />
//           <div className="absolute inset-0 flex items-center justify-center">
//             <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl">
//               STUDY MBBS IN EGYPT
//             </h1>
//           </div>
//         </div>
//       </div>

//       {/* ==================== MAIN CONTENT ==================== */}
//       <div className="container mx-auto px-4 py-12 max-w-7xl">
//         {/* Intro Section */}
//         <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
//           <div>
//             <img
//               src={EgyptFlag}
//               alt="Egypt flag"
//               className="w-32 md:w-40 border-4 border-gray-800 rounded shadow-lg"
//             />
//           </div>
//           <div>
//             <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
//               Explore MBBS Opportunities in Egypt 2025–2026
//             </h2>
//           </div>
//         </div>

//         {/* About Egypt + Image */}
//         <div className="grid md:grid-cols-2 gap-12 mb-20">
//           <div>
//             <h2 className="text-3xl font-bold text-center md:text-left text-blue-900 mb-6">
//               About Egypt
//             </h2>
//             <p className="text-lg leading-relaxed text-gray-700">
//               Egypt's rich history and prehistoric treasures make it a unique location for medical study. Famous landmarks like the Pyramids, Sphinx, and Karnak Temple line the Nile. In Cairo, visit the Mohammad Ali Mosque and Egyptian Museum. Egyptian medical universities attract MBBS students globally, offering a safe environment for both male and female students. Admission is straightforward with no additional entrance exams beyond NEET for Indians. The curriculum is MCQ-based with English-medium instruction and strong practical training in hospitals.
//             </p>

//             <p className="mt-4 text-lg leading-relaxed text-gray-700">
//               MBBS in Egypt prepares students for respected global medical careers. Affordable alternatives include China, Nepal, Germany, Philippines, Ukraine, Bangladesh, and Kyrgyzstan, but Egypt remains popular for its 6-year duration (exempting preparatory courses for internationals) and cosmopolitan society.
//             </p>

//             {showMoreAbout ? (
//               <p className="mt-4 text-lg leading-relaxed text-gray-700">
//                 International students from Malaysia, Nepal, Nigeria, and more choose Egypt for its skilled faculty, visiting professors, and equal opportunities.
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
//               src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Egyptian_Museum_in_Cairo_in_May_2015.JPG"
//               alt="Egyptian Museum"
//               className="rounded-xl shadow-2xl w-full h-auto object-cover"
//             />
//           </div>
//         </div>

//         {/* Quick Information + About MBBS */}
//         <div className="grid md:grid-cols-2 gap-12 mb-20">
//           {/* Left – Quick Info Table */}
//           <div>
//             <h3 className="text-2xl font-bold text-center text-blue-900 mb-6">
//               Quick Information – Study MBBS in Egypt
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
//                     <td className="p-4">50% in PCB aggregate (40% reserved)</td>
//                   </tr>
//                   <tr className="bg-gray-100">
//                     <td className="p-4 font-semibold">Course Duration</td>
//                     <td className="p-4">6 Years (5+1 internship)</td>
//                   </tr>
//                   <tr>
//                     <td className="p-4 font-semibold">NEET</td>
//                     <td className="p-4">Compulsory for Indians</td>
//                   </tr>
//                   <tr className="bg-gray-100">
//                     <td className="p-4 font-semibold">IELTS/TOEFL</td>
//                     <td className="p-4">Not Required</td>
//                   </tr>
//                   <tr>
//                     <td className="p-4 font-semibold">Medium of Teaching</td>
//                     <td className="p-4">English</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           {/* Right – About MBBS */}
//           <div>
//             <h3 className="text-3xl font-bold text-blue-900 mb-6 text-center md:text-left">
//               About MBBS in Egypt
//             </h3>
//             <p className="text-lg leading-relaxed text-gray-700">
//               Studying MBBS in Egypt is straightforward with a safe learning environment. No donation/capitation fees. Many universities follow a modern/US-influenced curriculum with advanced facilities. Skilled faculty ensure excellent teacher-student ratios. Graduates are well-prepared for exams like FMGE/NEXT, USMLE, PLAB.
//             </p>

//             {showMoreClimate ? (
//               <p className="mt-4 text-lg leading-relaxed text-gray-700">
//                 Egypt's climate is warm (desert/temperate), with mild winters and hot summers—comfortable with indoor heating/AC. Students enjoy multicultural vibes, extracurriculars, and volunteer opportunities.
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
//             Top Medical Universities in Egypt
//           </h2>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 name: "Cairo University",
//                 img: "https://upload.wikimedia.org/wikipedia/commons/5/57/CairoUniv.jpg",
//               },
//               {
//                 name: "Ain Shams University",
//                 img: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Eng_asu_main_bldng.JPG",
//               },
//               {
//                 name: "Alexandria University",
//                 img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Alexandria_University.JPG/1280px-Alexandria_University.JPG",
//               },
//               {
//                 name: "Mansoura University",
//                 img: "https://s3.ap-south-1.amazonaws.com/gotouniv/cover_photo/2002/cover_photo_1500X500.jpg",
//               },
//               {
//                 name: "Assiut University",
//                 img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Assiut_University.jpg/800px-Assiut_University.jpg", // Placeholder
//               },
//               {
//                 name: "Helwan University",
//                 img: "https://upload.wikimedia.org/wikipedia/commons/b/b4/%D0%9F%D0%B3%D0%BD%D0%B8%D1%83._%D0%9A%D0%BE%D1%80%D0%BF%D1%83%D1%81_%E2%84%965.jpg",
//               },
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
//               Advantages of Studying MBBS in Egypt 2025–2026
//             </h2>

//             <div className="space-y-6">
//               <div>
//                 <h5 className="text-xl font-semibold">
//                   1. Affordable High-Quality Education
//                 </h5>
//                 <p className="text-gray-700">
//                   Globally recognized at low cost compared to West/private India.
//                 </p>
//               </div>
//               <div>
//                 <h5 className="text-xl font-semibold">
//                   2. No Donation / Simple Admission
//                 </h5>
//                 <p className="text-gray-700">
//                   Straightforward process; NEET compulsory for Indians.
//                 </p>
//               </div>
//               <div>
//                 <h5 className="text-xl font-semibold">
//                   3. English Medium + Modern Curriculum
//                 </h5>
//                 <p className="text-gray-700">
//                   US-influenced with advanced labs/research.
//                 </p>
//               </div>
//               <div>
//                 <h5 className="text-xl font-semibold">
//                   4. Strong Clinical Exposure + Global Prep
//                 </h5>
//                 <p className="text-gray-700">
//                   Prepares for FMGE/USMLE/PLAB; part-time work possible in some cases.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div>
//             <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
//               Cost of Study MBBS in Egypt
//             </h2>
//             <p className="text-lg text-gray-700 leading-relaxed">
//               MBBS in Egypt is highly affordable for Indian students. Government subsidies keep fees low—no donations. Total cost (tuition + living) often ₹25–45 lakhs for the full course. Annual tuition ~$5,000–$8,000 (~₹4–7 lakhs). Living expenses are reasonable, with hostels and Indian food options available.
//             </p>
//           </div>
//         </div>

//         {/* ==================== FOOD & ACCOMMODATION SECTION ==================== */}
//         <div className="bg-gradient-to-b from-gray-50 to-white py-16">
//           <div className="container mx-auto px-4 max-w-6xl">
//             <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
//               Food and Accommodation Cost – MBBS in Egypt
//             </h2>

//             <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
//               <p>
//                 Students who choose to study MBBS in Egypt look for comfortable and affordable living facilities. Egyptian medical universities provide hostel facilities and essential amenities for international students.
//               </p>

//               <h4 className="text-2xl font-bold mt-8 mb-4">Hostel Facilities</h4>
//               <ul className="list-disc pl-6 space-y-2">
//                 <li>Most medical universities in Egypt provide hostel facilities for international students.</li>
//                 <li>Hostel rooms are usually shared by 2–3 students.</li>
//                 <li>Hostels are designed to provide a safe and comfortable living environment.</li>
//                 <li>Students can stay in university hostels during their entire MBBS course duration.</li>
//               </ul>

//               <h4 className="text-2xl font-bold mt-8 mb-4">Room Facilities</h4>
//               <p>University hostel rooms generally include the following amenities:</p>
//               <ul className="list-disc pl-6 space-y-2">
//                 <li>Fully furnished rooms</li>
//                 <li>Comfortable beds, mattress and blankets, bedsheets</li>
//                 <li>Study tables and chairs</li>
//                 <li>Wardrobes or cupboards</li>
//               </ul>

//               <h4 className="text-2xl font-bold mt-8 mb-4">Kitchen and Food Facilities</h4>
//               <ul className="list-disc pl-6 space-y-2">
//                 <li>Most hostels provide common kitchens for students.</li>
//                 <li>Students can cook their own meals in the kitchen.</li>
//                 <li>Indian students can prepare Indian food, which helps them maintain their regular diet.</li>
//                 <li>Many universities provide mess or canteen facilities offering Indian meals.</li>
//                 <li>Indian restaurants are available near many university campuses.</li>
//                 <li>Students can also enjoy local Egyptian cuisine and international food options.</li>
//               </ul>

//               <h4 className="text-2xl font-bold mt-8 mb-4">Laundry and Daily Facilities</h4>
//               <ul className="list-disc pl-6 space-y-2">
//                 <li>Hostels often provide laundry rooms or washing machine facilities.</li>
//                 <li>Students can easily manage daily activities such as cooking and washing clothes.</li>
//                 <li>These facilities make living in Egypt comfortable and convenient for international students.</li>
//               </ul>

//               <p className="mt-8">
//                 <strong>Approximate monthly living expenses (2025–2026):</strong>
//               </p>
//               <ul className="list-disc pl-6 mt-4 space-y-2">
//                 <li>Hostel / Accommodation: ₹4,000 – ₹15,000 (often $50–150/month; annual ~$600–$2,000)</li>
//                 <li>Food (self-cooking + mess/Indian options): ₹8,000 – ₹15,000</li>
//                 <li>Transport + Miscellaneous: ₹3,000 – ₹10,000</li>
//                 <li><strong>Total monthly:</strong> ≈ ₹15,000 – ₹40,000</li>
//               </ul>

//               <p className="mt-6 italic text-gray-600">
//                 Many campuses offer Indian mess facilities and nearby stores for familiar diet at low cost. Costs vary by city (Cairo higher) and lifestyle.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* ==================== ADMISSION PROCESS ==================== */}
//         <div className="py-16 bg-white">
//           <div className="container mx-auto px-4 max-w-6xl">
//             <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
//               Admission Process For MBBS In Egypt 2026-27
//             </h2>

//             <div className="max-w-4xl mx-auto">
//               <p className="text-lg text-gray-700 mb-8 leading-relaxed">
//                 The MBBS admission process in Egypt is simple but may vary depending on the university.
//               </p>

//               <h4 className="text-2xl font-bold mb-4">Admission Stages</h4>
//               <ul className="list-decimal pl-6 space-y-4 text-gray-700">
//                 <li>Stage 1: Research and choose a recognized medical university in Egypt.</li>
//                 <li>Stage 2: Check the eligibility criteria for the selected university.</li>
//                 <li>Stage 3: Fill out the university application form online.</li>
//                 <li>Stage 4: Submit the required academic and identification documents.</li>
//                 <li>Stage 5: Appear for entrance exams if required by the university (rare for internationals).</li>
//                 <li>Stage 6: Receive the admission confirmation or invitation letter.</li>
//                 <li>Stage 7: Apply for a student visa at the Egyptian Embassy.</li>
//                 <li>Stage 8: Travel to Egypt and complete the university registration process.</li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* ==================== DOCUMENTS + ELIGIBILITY ==================== */}
//         <div className="py-16 bg-gradient-to-b from-white to-gray-50">
//           <div className="container mx-auto px-4 max-w-7xl">
//             <div className="grid md:grid-cols-2 gap-12">
//               {/* Left - Documents */}
//               <div>
//                 <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center md:text-left">
//                   Documents Required for MBBS in Egypt 2026-27
//                 </h2>

//                 <div className="space-y-6">
//                   <div className="bg-white p-6 rounded-xl shadow-sm border">
//                     <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-1">
//                       <li>Completed admission application form</li>
//                       <li>10th class mark sheet and certificate</li>
//                       <li>12th class mark sheet and certificate</li>
//                       <li>NEET scorecard or entrance exam result</li>
//                       <li>Valid passport copy</li>
//                       <li>Passport-size photographs</li>
//                       <li>Medical certificate confirming good health</li>
//                       <li>Invitation letter issued by the university</li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>

//               {/* Right - Eligibility */}
//               <div>
//                 <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
//                   Eligibility Criteria for MBBS in Egypt
//                 </h2>

//                 <div className="bg-white p-6 rounded-xl shadow-sm border">
//                   <ul className="list-disc pl-6 space-y-2 text-gray-700">
//                     <li>The student must be at least 17 years old by 31st December of the admission year.</li>
//                     <li>The student must have minimum 50% marks in 12th standard with the following subjects: Physics, Chemistry, Biology.</li>
//                     <li>NEET qualification is mandatory for Indian students.</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ==================== TOP UNIVERSITIES LIST + COURSE DURATION ==================== */}
//         <div className="py-16 bg-white">
//           <div className="container mx-auto px-4 max-w-6xl">
//             <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">
//               Top Medical Universities in Egypt
//             </h2>
//             <div className="overflow-x-auto mb-12">
//               <table className="min-w-full border border-gray-300">
//                 <thead>
//                   <tr className="bg-blue-900 text-white">
//                     <th className="p-4">University Name</th>
//                     <th className="p-4">Country Rank</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr><td className="p-4">Cairo University</td><td className="p-4">1</td></tr>
//                   <tr className="bg-gray-100"><td className="p-4">Ain Shams University</td><td className="p-4">2</td></tr>
//                   <tr><td className="p-4">Alexandria University</td><td className="p-4">3</td></tr>
//                   <tr className="bg-gray-100"><td className="p-4">Mansoura University</td><td className="p-4">5</td></tr>
//                   <tr><td className="p-4">Assiut University</td><td className="p-4">7</td></tr>
//                 </tbody>
//               </table>
//             </div>
//             <p className="text-lg text-gray-700 mb-4">
//               These universities are well known for medical education, modern laboratories, and clinical training for international students.
//             </p>

//             <h2 className="text-3xl font-bold text-blue-900 text-center mt-12 mb-6">
//               MBBS Course Duration in Egypt
//             </h2>
//             <p className="text-lg text-gray-700 mb-4"><strong>Total Duration: 6 Years</strong></p>
//             <ul className="list-disc pl-6 space-y-2">
//               <li>Academic Study: 5 Years</li>
//               <li>Internship / Clinical Training: 1 Year</li>
//             </ul>
//             <h4 className="text-2xl font-bold mt-6 mb-4">Course Structure</h4>
//             <ul className="list-disc pl-6 space-y-2">
//               <li>The first years focus on theoretical medical education.</li>
//               <li>Students learn anatomy, physiology, pathology, pharmacology, and other medical subjects.</li>
//               <li>Later years include clinical training in hospitals.</li>
//               <li>The final year consists of practical internship and patient care training.</li>
//             </ul>
//           </div>
//         </div>

//         {/* ==================== COMPARISON TABLE ==================== */}
//         <div className="py-16 bg-gray-100">
//           <div className="container mx-auto px-4 max-w-5xl">
//             <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
//               MBBS in India vs MBBS in Egypt
//             </h2>

//             <div className="overflow-x-auto">
//               <table className="min-w-full border-collapse border border-gray-300 text-left">
//                 <thead>
//                   <tr className="bg-blue-900 text-white">
//                     <th className="p-4 border">Criteria</th>
//                     <th className="p-4 border">MBBS in India</th>
//                     <th className="p-4 border">MBBS in Egypt</th>
//                   </tr>
//                 </thead>
//                 <tbody className="text-gray-700">
//                   <tr className="bg-gray-50">
//                     <td className="p-4 border font-medium">Admission</td>
//                     <td className="p-4 border">NEET and high cut-off required</td>
//                     <td className="p-4 border">Admission based on NEET qualification</td>
//                   </tr>
//                   <tr>
//                     <td className="p-4 border font-medium">Seats Availability</td>
//                     <td className="p-4 border">Government seats very limited</td>
//                     <td className="p-4 border">More seats available for international students</td>
//                   </tr>
//                   <tr className="bg-gray-50">
//                     <td className="p-4 border font-medium">Fees</td>
//                     <td className="p-4 border">Private: ₹50–90 lakh</td>
//                     <td className="p-4 border">Total MBBS cost around ₹25–45 lakh</td>
//                   </tr>
//                   <tr>
//                     <td className="p-4 border font-medium">Course Duration</td>
//                     <td className="p-4 border">Around 5.5 years</td>
//                     <td className="p-4 border">Around 6 years</td>
//                   </tr>
//                   <tr className="bg-gray-50">
//                     <td className="p-4 border font-medium">Admission Competition</td>
//                     <td className="p-4 border">Very high</td>
//                     <td className="p-4 border">Easier</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>

//         {/* ==================== FAQs SECTION ==================== */}
//         <div className="py-16 bg-white">
//           <div className="container mx-auto px-4 max-w-6xl">
//             <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">
//               Most Searched FAQs About MBBS in Egypt
//             </h2>
//             <div className="space-y-8">
//               <div>
//                 <h4 className="text-xl font-bold">1. Is MBBS in Egypt valid for Indian students?</h4>
//                 <p>Yes, MBBS degrees from recognized Egyptian universities are valid for Indian students. Graduates must pass the FMGE/NEXT exam conducted by the National Medical Commission to practice in India.</p>
//               </div>
//               <div>
//                 <h4 className="text-xl font-bold">2. What is the total cost of MBBS in Egypt?</h4>
//                 <p>The total cost of MBBS in Egypt usually ranges between ₹25 lakh to ₹45 lakh depending on the university, hostel, and living expenses.</p>
//               </div>
//               <div>
//                 <h4 className="text-xl font-bold">3. Is NEET required for MBBS in Egypt?</h4>
//                 <p>Yes, NEET qualification is mandatory for Indian students who want to study MBBS abroad and practice in India.</p>
//               </div>
//               <div>
//                 <h4 className="text-xl font-bold">4. What is the duration of MBBS in Egypt?</h4>
//                 <p>The MBBS course duration in Egypt is 6 years, which includes 5 years of academic study and 1 year of internship.</p>
//               </div>
//               <div>
//                 <h4 className="text-xl font-bold">5. Is hostel accommodation available for international students in Egypt?</h4>
//                 <p>Yes, most Egyptian universities provide hostel accommodation with basic facilities such as beds, study tables, cupboards, kitchens, and laundry rooms.</p>
//               </div>
//               <div>
//                 <h4 className="text-xl font-bold">6. Is Egyptian medical education taught in English?</h4>
//                 <p>Yes, many universities in Egypt offer MBBS programs in English medium, especially for international students.</p>
//               </div>
//               <div>
//                 <h4 className="text-xl font-bold">7. Can Indian students find Indian food in Egypt?</h4>
//                 <p>Yes, students can cook Indian food in hostel kitchens, and many universities also have Indian mess facilities and nearby Indian restaurants.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Floating Enroll Button */}
//       <button
//         className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-5 rounded-full shadow-2xl hover:scale-105 transition transform animate-pulse"
//         onClick={() => alert("Open Admission Modal / Redirect to form")}
//       >
//         <span className="font-bold text-lg">ENROLL NOW!</span>
//       </button>
//     </div>
//   );
// };

// export default Egypt;

// import React, { useState } from "react";
// import EgyptFlag from "../../Images/country flag png/Egypt.svg"; // Correct path to Egypt flag

// const FAQItem = ({ question, answer }) => {
//   const [isOpen, setIsOpen] = useState(false);
// const [openIndex, setOpenIndex] = useState(null); // null = none open
// const [showMoreAbout, setShowMoreAbout] = useState(false);
//   const [showMoreClimate, setShowMoreClimate] = useState(false);
//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   // FAQ data – expanded with common real questions + answers (2025-2026 context)
//   const faqData = [
//     {
//       question: "Is MBBS in Egypt valid for Indian students?",
//       answer:
//         "Yes, MBBS degrees from NMC/WHO-recognized Egyptian universities are valid in India. Graduates must qualify the FMGE (or upcoming NEXT) exam conducted by the National Medical Commission (NMC) to practice in India.",
//     },
//     {
//       question: "What is the total cost of MBBS in Egypt for Indian students?",
//       answer:
//         "The total cost (tuition + hostel + food + misc.) usually ranges from ₹30 lakh to ₹45 lakh for the full 6-year course, depending on the university and lifestyle. Annual tuition is typically $5,000–$8,000 (≈₹4–7 lakh). No donation or capitation fees.",
//     },
//     {
//       question: "Is NEET required for MBBS in Egypt?",
//       answer:
//         "Yes, NEET qualification is compulsory for Indian students as per NMC guidelines to study MBBS abroad and return to practice in India.",
//     },
//     {
//       question: "What is the duration of MBBS in Egypt?",
//       answer:
//         "The MBBS course duration is 6 years: 5 years of academic study + 1 year of compulsory rotatory internship in affiliated hospitals.",
//     },
//     {
//       question: "What are the eligibility criteria for MBBS in Egypt 2026?",
//       answer:
//         "• Minimum 17 years old by 31st December of admission year.\n" +
//         "• 10+2 with Physics, Chemistry, Biology (PCB) – minimum 50% aggregate (some sources/universities mention 60% for better chances).\n" +
//         "• NEET qualified (mandatory for Indians).\n" +
//         "• No upper age limit in most cases, but visa rules may apply.",
//     },
//     {
//       question: "Is IELTS/TOEFL required to study MBBS in Egypt?",
//       answer:
//         "No, IELTS or TOEFL is not required for most universities. The medium of instruction is English, especially for international programs.",
//     },
//     {
//       question: "Is hostel accommodation and Indian food available for students?",
//       answer:
//         "Yes, most universities provide hostel facilities (shared rooms, furnished, with kitchens/laundry). Many hostels/messes offer Indian food options, self-cooking is common, and Indian restaurants/mess facilities exist near campuses in cities like Cairo and Alexandria.",
//     },
//     {
//       question: "When does MBBS admission start in Egypt for 2026-27?",
//       answer:
//         "Admissions usually open after NEET results (July–September) and continue till January/February 2026–27 for most universities. Apply early through official channels or authorized portals.",
//     },
//   ];
//   return (
//     <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
//       >
//         <h4 className="text-xl font-semibold text-blue-900 pr-8">
//           {question}
//         </h4>
//         <span
//           className={`text-2xl font-bold text-blue-600 transform transition-transform duration-300 ${
//             isOpen ? "rotate-180" : ""
//           }`}
//         >
//           ▼
//         </span>
//       </button>

//       <div
//         className={`overflow-hidden transition-all duration-300 ease-in-out ${
//           isOpen ? "max-h-96 py-5 px-6" : "max-h-0"
//         }`}
//       >
//         <p className="text-lg text-gray-700 leading-relaxed">{answer}</p>
//       </div>
//     </div>
//   );
// };

// const Egypt = () => {
//   const [showMoreAbout, setShowMoreAbout] = useState(false);
//   const [showMoreClimate, setShowMoreClimate] = useState(false);

//   return (
//     <div className="min-h-screen bg-gray-50 font-sans">
//       {/* ==================== HEADER CAROUSEL ==================== */}
//       <div className="relative h-screen overflow-hidden">
//         <div className="absolute inset-0">
//           <img
//             src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Alexandria_University.JPG/1280px-Alexandria_University.JPG"
//             alt="Alexandria University"
//             className="w-full h-full object-cover brightness-75"
//           />
//           <div className="absolute inset-0 flex items-center justify-center">
//             <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl">
//               STUDY MBBS IN EGYPT
//             </h1>
//           </div>
//         </div>
//       </div>

//       {/* ==================== MAIN CONTENT ==================== */}
//       <div className="container mx-auto px-4 py-12 max-w-7xl">
//         {/* Intro Section */}
//         <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
//           <div>
//             <img
//               src={EgyptFlag}
//               alt="Egypt flag"
//               className="w-32 md:w-40 border-4 border-gray-800 rounded shadow-lg"
//             />
//           </div>
//           <div>
//             <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
//               Explore MBBS Opportunities in Egypt 2025–2026
//             </h2>
//           </div>
//         </div>

//         {/* About Egypt + Image */}
//         <div className="grid md:grid-cols-2 gap-12 mb-20">
//           <div>
//             <h2 className="text-3xl font-bold text-center md:text-left text-blue-900 mb-6">
//               About Egypt
//             </h2>
//             <p className="text-lg leading-relaxed text-gray-700">
//               Egypt's rich history and prehistoric treasures make it a unique location for medical study. Famous landmarks like the Pyramids, Sphinx, and Karnak Temple line the Nile. In Cairo, visit the Mohammad Ali Mosque and Egyptian Museum. Egyptian medical universities attract MBBS students globally, offering a safe environment for both male and female students. Admission is straightforward with no additional entrance exams beyond NEET for Indians. The curriculum is MCQ-based with English-medium instruction and strong practical training in hospitals.
//             </p>
//             <p className="mt-4 text-lg leading-relaxed text-gray-700">
//               MBBS in Egypt prepares students for respected global medical careers. Affordable alternatives include China, Nepal, Germany, Philippines, Ukraine, Bangladesh, and Kyrgyzstan, but Egypt remains popular for its 6-year duration (exempting preparatory courses for internationals) and cosmopolitan society.
//             </p>
//             {showMoreAbout ? (
//               <p className="mt-4 text-lg leading-relaxed text-gray-700">
//                 International students from Malaysia, Nepal, Nigeria, and more choose Egypt for its skilled faculty, visiting professors, and equal opportunities.
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
//               src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Egyptian_Museum_in_Cairo_in_May_2015.JPG"
//               alt="Egyptian Museum"
//               className="rounded-xl shadow-2xl w-full h-auto object-cover"
//             />
//           </div>
//         </div>

//         {/* Quick Information + About MBBS */}
//         <div className="grid md:grid-cols-2 gap-12 mb-20">
//           {/* Left – Quick Info Table */}
//           <div>
//             <h3 className="text-2xl font-bold text-center text-blue-900 mb-6">
//               Quick Information – Study MBBS in Egypt
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
//                     <td className="p-4">50% in PCB aggregate (40% reserved)</td>
//                   </tr>
//                   <tr className="bg-gray-100">
//                     <td className="p-4 font-semibold">Course Duration</td>
//                     <td className="p-4">6 Years (5+1 internship)</td>
//                   </tr>
//                   <tr>
//                     <td className="p-4 font-semibold">NEET</td>
//                     <td className="p-4">Compulsory for Indians</td>
//                   </tr>
//                   <tr className="bg-gray-100">
//                     <td className="p-4 font-semibold">IELTS/TOEFL</td>
//                     <td className="p-4">Not Required</td>
//                   </tr>
//                   <tr>
//                     <td className="p-4 font-semibold">Medium of Teaching</td>
//                     <td className="p-4">English</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           {/* Right – About MBBS */}
//           <div>
//             <h3 className="text-3xl font-bold text-blue-900 mb-6 text-center md:text-left">
//               About MBBS in Egypt
//             </h3>
//             <p className="text-lg leading-relaxed text-gray-700">
//               Studying MBBS in Egypt is straightforward with a safe learning environment. No donation/capitation fees. Many universities follow a modern/US-influenced curriculum with advanced facilities. Skilled faculty ensure excellent teacher-student ratios. Graduates are well-prepared for exams like FMGE/NEXT, USMLE, PLAB.
//             </p>
//             {showMoreClimate ? (
//               <p className="mt-4 text-lg leading-relaxed text-gray-700">
//                 Egypt's climate is warm (desert/temperate), with mild winters and hot summers—comfortable with indoor heating/AC. Students enjoy multicultural vibes, extracurriculars, and volunteer opportunities.
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
//             Top Medical Universities in Egypt
//           </h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 name: "Cairo University",
//                 img: "https://upload.wikimedia.org/wikipedia/commons/5/57/CairoUniv.jpg",
//               },
//               {
//                 name: "Ain Shams University",
//                 img: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Eng_asu_main_bldng.JPG",
//               },
//               {
//                 name: "Alexandria University",
//                 img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Alexandria_University.JPG/1280px-Alexandria_University.JPG",
//               },
//               {
//                 name: "Mansoura University",
//                 img: "https://s3.ap-south-1.amazonaws.com/gotouniv/cover_photo/2002/cover_photo_1500X500.jpg",
//               },
//               {
//                name: "Assiut University",
//                 img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Assiut_University.jpg/800px-Assiut_University.jpg", // Placeholder
//               },
//               {
//                 name: "Helwan University",
//                 img: "https://upload.wikimedia.org/wikipedia/commons/b/b4/%D0%9F%D0%B3%D0%BD%D0%B8%D1%83._%D0%9A%D0%BE%D1%80%D0%BF%D1%83%D1%81_%E2%84%965.jpg",
//               },
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
//               Advantages of Studying MBBS in Egypt 2025–2026
//             </h2>
//             <div className="space-y-6">
//               <div>
//                 <h5 className="text-xl font-semibold">
//                   1. Affordable High-Quality Education
//                 </h5>
//                 <p className="text-gray-700">
//                   Globally recognized at low cost compared to West/private India.
//                 </p>
//               </div>
//               <div>
//                 <h5 className="text-xl font-semibold">
//                   2. No Donation / Simple Admission
//                 </h5>
//                 <p className="text-gray-700">
//                   Straightforward process; NEET compulsory for Indians.
//                 </p>
//               </div>
//               <div>
//                 <h5 className="text-xl font-semibold">
//                   3. English Medium + Modern Curriculum
//                 </h5>
//                 <p className="text-gray-700">
//                   US-influenced with advanced labs/research.
//                 </p>
//               </div>
//               <div>
//                 <h5 className="text-xl font-semibold">
//                   4. Strong Clinical Exposure + Global Prep
//                 </h5>
//                 <p className="text-gray-700">
//                   Prepares for FMGE/USMLE/PLAB; part-time work possible in some cases.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div>
//             <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
//               Cost of Study MBBS in Egypt
//             </h2>
//             <p className="text-lg text-gray-700 leading-relaxed">
//               MBBS in Egypt is highly affordable for Indian students. Government subsidies keep fees low—no donations. Total cost (tuition + living) often ₹25–45 lakhs for the full course. Annual tuition ~$5,000–$8,000 (~₹4–7 lakhs). Living expenses are reasonable, with hostels and Indian food options available.
//             </p>
//           </div>
//         </div>

//         {/* ==================== FOOD & ACCOMMODATION SECTION ==================== */}
//         <div className="bg-gradient-to-b from-gray-50 to-white py-16">
//           <div className="container mx-auto px-4 max-w-6xl">
//             <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
//               Food and Accommodation Cost – MBBS in Egypt
//             </h2>
//             <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
//               <p>
//                 Students who choose to study MBBS in Egypt look for comfortable and affordable living facilities. Egyptian medical universities provide hostel facilities and essential amenities for international students.
//               </p>
//               <h4 className="text-2xl font-bold mt-8 mb-4">Hostel Facilities</h4>
//               <ul className="list-disc pl-6 space-y-2">
//                 <li>Most medical universities in Egypt provide hostel facilities for international students.</li>
//                 <li>Hostel rooms are usually shared by 2–3 students.</li>
//                 <li>Hostels are designed to provide a safe and comfortable living environment.</li>
//                 <li>Students can stay in university hostels during their entire MBBS course duration.</li>
//               </ul>
//               <h4 className="text-2xl font-bold mt-8 mb-4">Room Facilities</h4>
//               <p>University hostel rooms generally include the following amenities:</p>
//               <ul className="list-disc pl-6 space-y-2">
//                 <li>Fully furnished rooms</li>
//                 <li>Comfortable beds, mattress and blankets, bedsheets</li>
//                 <li>Study tables and chairs</li>
//                 <li>Wardrobes or cupboards</li>
//               </ul>
//               <h4 className="text-2xl font-bold mt-8 mb-4">Kitchen and Food Facilities</h4>
//               <ul className="list-disc pl-6 space-y-2">
//                 <li>Most hostels provide common kitchens for students.</li>
//                 <li>Students can cook their own meals in the kitchen.</li>
//                 <li>Indian students can prepare Indian food, which helps them maintain their regular diet.</li>
//                 <li>Many universities provide mess or canteen facilities offering Indian meals.</li>
//                 <li>Indian restaurants are available near many university campuses.</li>
//                 <li>Students can also enjoy local Egyptian cuisine and international food options.</li>
//               </ul>
//               <h4 className="text-2xl font-bold mt-8 mb-4">Laundry and Daily Facilities</h4>
//               <ul className="list-disc pl-6 space-y-2">
//                 <li>Hostels often provide laundry rooms or washing machine facilities.</li>
//                 <li>Students can easily manage daily activities such as cooking and washing clothes.</li>
//                 <li>These facilities make living in Egypt comfortable and convenient for international students.</li>
//               </ul>
//               <p className="mt-8">
//                 <strong>Approximate monthly living expenses (2025–2026):</strong>
//               </p>
//               <ul className="list-disc pl-6 mt-4 space-y-2">
//                 <li>Hostel / Accommodation: ₹4,000 – ₹15,000 (often $50–150/month; annual ~$600–$2,000)</li>
//                 <li>Food (self-cooking + mess/Indian options): ₹8,000 – ₹15,000</li>
//                 <li>Transport + Miscellaneous: ₹3,000 – ₹10,000</li>
//                 <li><strong>Total monthly:</strong> ≈ ₹15,000 – ₹40,000</li>
//               </ul>
//               <p className="mt-6 italic text-gray-600">
//                 Many campuses offer Indian mess facilities and nearby stores for familiar diet at low cost. Costs vary by city (Cairo higher) and lifestyle.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* ==================== ADMISSION PROCESS ==================== */}
//         <div className="py-16 bg-white">
//           <div className="container mx-auto px-4 max-w-6xl">
//             <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
//               Admission Process For MBBS In Egypt 2026-27
//             </h2>
//             <div className="max-w-4xl mx-auto">
//               <p className="text-lg text-gray-700 mb-8 leading-relaxed">
//                 The MBBS admission process in Egypt is simple but may vary depending on the university.
//               </p>
//               <h4 className="text-2xl font-bold mb-4">Admission Stages</h4>
//               <ul className="list-decimal pl-6 space-y-4 text-gray-700">
//                 <li>Stage 1: Research and choose a recognized medical university in Egypt.</li>
//                 <li>Stage 2: Check the eligibility criteria for the selected university.</li>
//                 <li>Stage 3: Fill out the university application form online.</li>
//                 <li>Stage 4: Submit the required academic and identification documents.</li>
//                 <li>Stage 5: Appear for entrance exams if required by the university (rare for internationals).</li>
//                 <li>Stage 6: Receive the admission confirmation or invitation letter.</li>
//                 <li>Stage 7: Apply for a student visa at the Egyptian Embassy.</li>
//                 <li>Stage 8: Travel to Egypt and complete the university registration process.</li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* ==================== DOCUMENTS + ELIGIBILITY ==================== */}
//         <div className="py-16 bg-gradient-to-b from-white to-gray-50">
//           <div className="container mx-auto px-4 max-w-7xl">
//             <div className="grid md:grid-cols-2 gap-12">
//               {/* Left - Documents */}
//               <div>
//                 <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center md:text-left">
//                   Documents Required for MBBS in Egypt 2026-27
//                 </h2>
//                 <div className="space-y-6">
//                   <div className="bg-white p-6 rounded-xl shadow-sm border">
//                     <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-1">
//                       <li>Completed admission application form</li>
//                       <li>10th class mark sheet and certificate</li>
//                       <li>12th class mark sheet and certificate</li>
//                       <li>NEET scorecard or entrance exam result</li>
//                       <li>Valid passport copy</li>
//                       <li>Passport-size photographs</li>
//                       <li>Medical certificate confirming good health</li>
//                       <li>Invitation letter issued by the university</li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>

//               {/* Right - Eligibility */}
//               <div>
//                 <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
//                   Eligibility Criteria for MBBS in Egypt
//                 </h2>
//                 <div className="bg-white p-6 rounded-xl shadow-sm border">
//                   <ul className="list-disc pl-6 space-y-2 text-gray-700">
//                     <li>The student must be at least 17 years old by 31st December of the admission year.</li>
//                     <li>The student must have minimum 50% marks in 12th standard with the following subjects: Physics, Chemistry, Biology.</li>
//                     <li>NEET qualification is mandatory for Indian students.</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ==================== TOP UNIVERSITIES LIST + COURSE DURATION ==================== */}
//         <div className="py-16 bg-white">
//           <div className="container mx-auto px-4 max-w-6xl">
//             <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">
//               Top Medical Universities in Egypt
//             </h2>
//             <div className="overflow-x-auto mb-12">
//               <table className="min-w-full border border-gray-300">
//                 <thead>
//                   <tr className="bg-blue-900 text-white">
//                     <th className="p-4">University Name</th>
//                     <th className="p-4">Country Rank</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr><td className="p-4">Cairo University</td><td className="p-4">1</td></tr>
//                   <tr className="bg-gray-100"><td className="p-4">Ain Shams University</td><td className="p-4">2</td></tr>
//                   <tr><td className="p-4">Alexandria University</td><td className="p-4">3</td></tr>
//                   <tr className="bg-gray-100"><td className="p-4">Mansoura University</td><td className="p-4">5</td></tr>
//                   <tr><td className="p-4">Assiut University</td><td className="p-4">7</td></tr>
//                 </tbody>
//               </table>
//             </div>
//             <p className="text-lg text-gray-700 mb-4">
//               These universities are well known for medical education, modern laboratories, and clinical training for international students.
//             </p>
//             <h2 className="text-3xl font-bold text-blue-900 text-center mt-12 mb-6">
//               MBBS Course Duration in Egypt
//             </h2>
//             <p className="text-lg text-gray-700 mb-4"><strong>Total Duration: 6 Years</strong></p>
//             <ul className="list-disc pl-6 space-y-2">
//               <li>Academic Study: 5 Years</li>
//               <li>Internship / Clinical Training: 1 Year</li>
//             </ul>
//             <h4 className="text-2xl font-bold mt-6 mb-4">Course Structure</h4>
//             <ul className="list-disc pl-6 space-y-2">
//               <li>The first years focus on theoretical medical education.</li>
//               <li>Students learn anatomy, physiology, pathology, pharmacology, and other medical subjects.</li>
//               <li>Later years include clinical training in hospitals.</li>
//               <li>The final year consists of practical internship and patient care training.</li>
//             </ul>
//           </div>
//         </div>

//         {/* ==================== COMPARISON TABLE ==================== */}
//         <div className="py-16 bg-gray-100">
//           <div className="container mx-auto px-4 max-w-5xl">
//             <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
//               MBBS in India vs MBBS in Egypt
//             </h2>
//             <div className="overflow-x-auto">
//               <table className="min-w-full border-collapse border border-gray-300 text-left">
//                 <thead>
//                   <tr className="bg-blue-900 text-white">
//                     <th className="p-4 border">Criteria</th>
//                     <th className="p-4 border">MBBS in India</th>
//                     <th className="p-4 border">MBBS in Egypt</th>
//                   </tr>
//                 </thead>
//                 <tbody className="text-gray-700">
//                   <tr className="bg-gray-50">
//                     <td className="p-4 border font-medium">Admission</td>
//                     <td className="p-4 border">NEET and high cut-off required</td>
//                     <td className="p-4 border">Admission based on NEET qualification</td>
//                   </tr>
//                   <tr>
//                     <td className="p-4 border font-medium">Seats Availability</td>
//                     <td className="p-4 border">Government seats very limited</td>
//                     <td className="p-4 border">More seats available for international students</td>
//                   </tr>
//                   <tr className="bg-gray-50">
//                     <td className="p-4 border font-medium">Fees</td>
//                     <td className="p-4 border">Private: ₹50–90 lakh</td>
//                     <td className="p-4 border">Total MBBS cost around ₹25–45 lakh</td>
//                   </tr>
//                   <tr>
//                     <td className="p-4 border font-medium">Course Duration</td>
//                     <td className="p-4 border">Around 5.5 years</td>
//                     <td className="p-4 border">Around 6 years</td>
//                   </tr>
//                   <tr className="bg-gray-50">
//                     <td className="p-4 border font-medium">Admission Competition</td>
//                     <td className="p-4 border">Very high</td>
//                     <td className="p-4 border">Easier</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>

//         {/* ==================== FAQs SECTION (Improved Accordion) ==================== */}
//       <div className="min-h-screen bg-gray-50 font-sans">
//       {/* ==================== HEADER CAROUSEL ==================== */}
//       <div className="relative h-screen overflow-hidden">
//         <div className="absolute inset-0">
//           <img
//             src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Alexandria_University.JPG/1280px-Alexandria_University.JPG"
//             alt="Alexandria University"
//             className="w-full h-full object-cover brightness-75"
//           />
//           <div className="absolute inset-0 flex items-center justify-center">
//             <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl">
//               STUDY MBBS IN EGYPT
//             </h1>
//           </div>
//         </div>
//       </div>

//       {/* ==================== MAIN CONTENT ==================== */}
//       <div className="container mx-auto px-4 py-12 max-w-7xl">

//         <div className="py-16 bg-gray-50">
//           <div className="container mx-auto px-4 max-w-4xl">
//             <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
//               Frequently Asked Questions – MBBS in Egypt 2026-27
//             </h2>

//             <div className="space-y-5">
//               {faqData.map((item, index) => (
//                 <div
//                   key={index}
//                   className={`bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md ${
//                     openIndex === index ? "shadow-lg border-blue-300" : ""
//                   }`}
//                 >
//                   <button
//                     onClick={() => toggleFAQ(index)}
//                     className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-blue-200"
//                   >
//                     <div className="flex items-center gap-4">
//                       <span className="text-2xl font-bold text-blue-700 min-w-[2.5rem]">
//                         {index + 1}.
//                       </span>
//                       <h4 className="text-xl md:text-2xl font-semibold text-blue-900 leading-tight">
//                         {item.question}
//                       </h4>
//                     </div>

//                     <span className="text-3xl text-blue-600 flex-shrink-0 transition-transform duration-300">
//                       {openIndex === index ? (
//                         <FiMinus className="transform rotate-0" />
//                       ) : (
//                         <FiPlus className="transform rotate-0" />
//                       )}
//                     </span>
//                   </button>

//                   <div
//                     className={`px-6 transition-all duration-500 ease-in-out ${
//                       openIndex === index
//                         ? "max-h-[600px] pb-8 pt-2 opacity-100"
//                         : "max-h-0 pb-0 opacity-0"
//                     }`}
//                     style={{ overflow: "hidden" }}
//                   >
//                     <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
//                       {item.answer}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="text-center mt-12">
//               <p className="text-gray-600 text-lg">
//                 Have more questions? Feel free to contact our experts for free counseling!
//               </p>
//             </div>
//           </div>
//         </div>

//       </div>

//       {/* Floating Enroll Button */}
//       <button
//         className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-5 rounded-full shadow-2xl hover:scale-105 transition transform animate-pulse"
//         onClick={() => alert("Open Admission Modal / Redirect to form")}
//       >
//         <span className="font-bold text-lg">ENROLL NOW!</span>
//       </button>
//     </div>
//   );
// };

// export default Egypt;

// import React, { useState } from "react";
// import EgyptFlag from "../../Images/country flag png/Egypt.svg"; // Correct path to Egypt flag
// import { FiPlus, FiMinus } from "react-icons/fi";

// const Egypt = () => {
//   const [showMoreAbout, setShowMoreAbout] = useState(false);
//   const [showMoreClimate, setShowMoreClimate] = useState(false);
//   const [openIndex, setOpenIndex] = useState(null); // null = none open by default

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   // FAQ data – realistic & updated for 2026-27 context
//   const faqData = [
//     {
//       question: "Is MBBS in Egypt valid for Indian students?",
//       answer:
//         "Yes, MBBS degrees from NMC/WHO-recognized Egyptian universities are valid in India. Graduates must qualify the FMGE (or upcoming NEXT) exam conducted by the National Medical Commission (NMC) to practice in India.",
//     },
//     {
//       question: "What is the total cost of MBBS in Egypt for Indian students?",
//       answer:
//         "The total cost (tuition + hostel + food + misc.) usually ranges from ₹30 lakh to ₹45 lakh for the full 6-year course, depending on the university and lifestyle. Annual tuition is typically $5,000–$8,000 (≈₹4–7 lakh). No donation or capitation fees.",
//     },
//     {
//       question: "Is NEET required for MBBS in Egypt?",
//       answer:
//         "Yes, NEET qualification is compulsory for Indian students as per NMC guidelines to study MBBS abroad and return to practice in India.",
//     },
//     {
//       question: "What is the duration of MBBS in Egypt?",
//       answer:
//         "The MBBS course duration is 6 years: 5 years of academic study + 1 year of compulsory rotatory internship in affiliated hospitals.",
//     },
//     {
//       question: "What are the eligibility criteria for MBBS in Egypt 2026?",
//       answer:
//         "• Minimum 17 years old by 31st December of admission year.\n" +
//         "• 10+2 with Physics, Chemistry, Biology (PCB) – minimum 50% aggregate (some universities mention 60% for better chances).\n" +
//         "• NEET qualified (mandatory for Indians).\n" +
//         "• No upper age limit in most cases, but visa rules may apply.",
//     },
//     {
//       question: "Is IELTS/TOEFL required to study MBBS in Egypt?",
//       answer:
//         "No, IELTS or TOEFL is not required for most universities. The medium of instruction is English, especially for international programs.",
//     },
//     {
//       question: "Is hostel accommodation and Indian food available for students?",
//       answer:
//         "Yes, most universities provide hostel facilities (shared rooms, furnished, with kitchens/laundry). Many hostels/messes offer Indian food options, self-cooking is common, and Indian restaurants/mess facilities exist near campuses in cities like Cairo and Alexandria.",
//     },
//     {
//       question: "When does MBBS admission start in Egypt for 2026-27?",
//       answer:
//         "Admissions usually open after NEET results (July–September) and continue till January/February 2026–27 for most universities. Apply early through official channels or authorized portals.",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 font-sans">
//       {/* ==================== HEADER CAROUSEL ==================== */}
//       <div className="relative h-screen overflow-hidden">
//         <div className="absolute inset-0">
//           <img
//             src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Alexandria_University.JPG/1280px-Alexandria_University.JPG"
//             alt="Alexandria University"
//             className="w-full h-full object-cover brightness-75"
//           />
//           <div className="absolute inset-0 flex items-center justify-center">
//             <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl">
//               STUDY MBBS IN EGYPT
//             </h1>
//           </div>
//         </div>
//       </div>

//       {/* ==================== MAIN CONTENT ==================== */}
//       <div className="container mx-auto px-4 py-12 max-w-7xl">
//         {/* Intro Section */}
//         <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
//           <div>
//             <img
//               src={EgyptFlag}
//               alt="Egypt flag"
//               className="w-32 md:w-40 border-4 border-gray-800 rounded shadow-lg"
//             />
//           </div>
//           <div>
//             <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
//               Explore MBBS Opportunities in Egypt 2025–2026
//             </h2>
//           </div>
//         </div>

//         {/* About Egypt + Image */}
//         <div className="grid md:grid-cols-2 gap-12 mb-20">
//           <div>
//             <h2 className="text-3xl font-bold text-center md:text-left text-blue-900 mb-6">
//               About Egypt
//             </h2>
//             <p className="text-lg leading-relaxed text-gray-700">
//               Egypt's rich history and prehistoric treasures make it a unique location for medical study. Famous landmarks like the Pyramids, Sphinx, and Karnak Temple line the Nile. In Cairo, visit the Mohammad Ali Mosque and Egyptian Museum. Egyptian medical universities attract MBBS students globally, offering a safe environment for both male and female students. Admission is straightforward with no additional entrance exams beyond NEET for Indians. The curriculum is MCQ-based with English-medium instruction and strong practical training in hospitals.
//             </p>
//             <p className="mt-4 text-lg leading-relaxed text-gray-700">
//               MBBS in Egypt prepares students for respected global medical careers. Affordable alternatives include China, Nepal, Germany, Philippines, Ukraine, Bangladesh, and Kyrgyzstan, but Egypt remains popular for its 6-year duration (exempting preparatory courses for internationals) and cosmopolitan society.
//             </p>
//             {showMoreAbout ? (
//               <p className="mt-4 text-lg leading-relaxed text-gray-700">
//                 International students from Malaysia, Nepal, Nigeria, and more choose Egypt for its skilled faculty, visiting professors, and equal opportunities.
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
//               src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Egyptian_Museum_in_Cairo_in_May_2015.JPG"
//               alt="Egyptian Museum"
//               className="rounded-xl shadow-2xl w-full h-auto object-cover"
//             />
//           </div>
//         </div>

//         {/* Quick Information + About MBBS */}
//         <div className="grid md:grid-cols-2 gap-12 mb-20">
//           <div>
//             <h3 className="text-2xl font-bold text-center text-blue-900 mb-6">
//               Quick Information – Study MBBS in Egypt
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
//                     <td className="p-4">50% in PCB aggregate (40% reserved)</td>
//                   </tr>
//                   <tr className="bg-gray-100">
//                     <td className="p-4 font-semibold">Course Duration</td>
//                     <td className="p-4">6 Years (5+1 internship)</td>
//                   </tr>
//                   <tr>
//                     <td className="p-4 font-semibold">NEET</td>
//                     <td className="p-4">Compulsory for Indians</td>
//                   </tr>
//                   <tr className="bg-gray-100">
//                     <td className="p-4 font-semibold">IELTS/TOEFL</td>
//                     <td className="p-4">Not Required</td>
//                   </tr>
//                   <tr>
//                     <td className="p-4 font-semibold">Medium of Teaching</td>
//                     <td className="p-4">English</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           <div>
//             <h3 className="text-3xl font-bold text-blue-900 mb-6 text-center md:text-left">
//               About MBBS in Egypt
//             </h3>
//             <p className="text-lg leading-relaxed text-gray-700">
//               Studying MBBS in Egypt is straightforward with a safe learning environment. No donation/capitation fees. Many universities follow a modern/US-influenced curriculum with advanced facilities. Skilled faculty ensure excellent teacher-student ratios. Graduates are well-prepared for exams like FMGE/NEXT, USMLE, PLAB.
//             </p>
//             {showMoreClimate ? (
//               <p className="mt-4 text-lg leading-relaxed text-gray-700">
//                 Egypt's climate is warm (desert/temperate), with mild winters and hot summers—comfortable with indoor heating/AC. Students enjoy multicultural vibes, extracurriculars, and volunteer opportunities.
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

//         {/* UNIVERSITIES GRID */}
//         <div className="mb-20">
//           <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
//             Top Medical Universities in Egypt
//           </h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               { name: "Cairo University", img: "https://upload.wikimedia.org/wikipedia/commons/5/57/CairoUniv.jpg" },
//               { name: "Ain Shams University", img: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Eng_asu_main_bldng.JPG" },
//               { name: "Alexandria University", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Alexandria_University.JPG/1280px-Alexandria_University.JPG" },
//               { name: "Mansoura University", img: "https://s3.ap-south-1.amazonaws.com/gotouniv/cover_photo/2002/cover_photo_1500X500.jpg" },
//               { name: "Assiut University", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Assiut_University.jpg/800px-Assiut_University.jpg" },
//               { name: "Helwan University", img: "https://upload.wikimedia.org/wikipedia/commons/b/b4/%D0%9F%D0%B3%D0%BD%D0%B8%D1%83._%D0%9A%D0%BE%D1%80%D0%BF%D1%83%D1%81_%E2%84%965.jpg" },
//             ].map((uni, i) => (
//               <div
//                 key={i}
//                 className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
//               >
//                 <img src={uni.img} alt={uni.name} className="w-full h-64 object-cover" />
//                 <div className="p-6 text-center">
//                   <h4 className="text-xl font-bold text-blue-900">{uni.name}</h4>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* ADVANTAGES + COST */}
//         <div className="grid md:grid-cols-2 gap-12 mb-20">
//           <div>
//             <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center md:text-left">
//               Advantages of Studying MBBS in Egypt 2025–2026
//             </h2>
//             <div className="space-y-6">
//               <div>
//                 <h5 className="text-xl font-semibold">1. Affordable High-Quality Education</h5>
//                 <p className="text-gray-700">Globally recognized at low cost compared to West/private India.</p>
//               </div>
//               <div>
//                 <h5 className="text-xl font-semibold">2. No Donation / Simple Admission</h5>
//                 <p className="text-gray-700">Straightforward process; NEET compulsory for Indians.</p>
//               </div>
//               <div>
//                 <h5 className="text-xl font-semibold">3. English Medium + Modern Curriculum</h5>
//                 <p className="text-gray-700">US-influenced with advanced labs/research.</p>
//               </div>
//               <div>
//                 <h5 className="text-xl font-semibold">4. Strong Clinical Exposure + Global Prep</h5>
//                 <p className="text-gray-700">Prepares for FMGE/USMLE/PLAB; part-time work possible in some cases.</p>
//               </div>
//             </div>
//           </div>

//           <div>
//             <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
//               Cost of Study MBBS in Egypt
//             </h2>
//             <p className="text-lg text-gray-700 leading-relaxed">
//               MBBS in Egypt is highly affordable for Indian students. Government subsidies keep fees low—no donations. Total cost (tuition + living) often ₹25–45 lakhs for the full course. Annual tuition ~$5,000–$8,000 (~₹4–7 lakhs). Living expenses are reasonable, with hostels and Indian food options available.
//             </p>
//           </div>
//         </div>

//         {/* FOOD & ACCOMMODATION */}
//         <div className="bg-gradient-to-b from-gray-50 to-white py-16">
//           <div className="container mx-auto px-4 max-w-6xl">
//             <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
//               Food and Accommodation Cost – MBBS in Egypt
//             </h2>
//             <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
//               {/* ... your original hostel/food content remains unchanged ... */}
//               <p>
//                 Students who choose to study MBBS in Egypt look for comfortable and affordable living facilities. Egyptian medical universities provide hostel facilities and essential amenities for international students.
//               </p>
//               <h4 className="text-2xl font-bold mt-8 mb-4">Hostel Facilities</h4>
//               <ul className="list-disc pl-6 space-y-2">
//                 <li>Most medical universities in Egypt provide hostel facilities for international students.</li>
//                 <li>Hostel rooms are usually shared by 2–3 students.</li>
//                 <li>Hostels are designed to provide a safe and comfortable living environment.</li>
//                 <li>Students can stay in university hostels during their entire MBBS course duration.</li>
//               </ul>
//               {/* ... rest of the food/accommodation content ... */}
//               <p className="mt-8">
//                 <strong>Approximate monthly living expenses (2025–2026):</strong>
//               </p>
//               <ul className="list-disc pl-6 mt-4 space-y-2">
//                 <li>Hostel / Accommodation: ₹4,000 – ₹15,000 (often $50–150/month; annual ~$600–$2,000)</li>
//                 <li>Food (self-cooking + mess/Indian options): ₹8,000 – ₹15,000</li>
//                 <li>Transport + Miscellaneous: ₹3,000 – ₹10,000</li>
//                 <li><strong>Total monthly:</strong> ≈ ₹15,000 – ₹40,000</li>
//               </ul>
//               <p className="mt-6 italic text-gray-600">
//                 Many campuses offer Indian mess facilities and nearby stores for familiar diet at low cost. Costs vary by city (Cairo higher) and lifestyle.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* ADMISSION PROCESS, DOCUMENTS, TOP UNIVERSITIES, COMPARISON TABLE */}
//         {/* ... keep all these sections as they were in your original code ... */}

//         {/* ==================== FAQ SECTION ==================== */}
//         <div className="py-16 bg-gray-50">
//           <div className="container mx-auto px-4 max-w-4xl">
//             <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
//               Frequently Asked Questions – MBBS in Egypt 2026-27
//             </h2>

//             <div className="space-y-5">
//               {faqData.map((item, index) => (
//                 <div
//                   key={index}
//                   className={`bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md ${
//                     openIndex === index ? "shadow-lg border-blue-300" : ""
//                   }`}
//                 >
//                   <button
//                     onClick={() => toggleFAQ(index)}
//                     className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-blue-200"
//                   >
//                     <div className="flex items-center gap-4">
//                       <span className="text-2xl font-bold text-blue-700 min-w-[2.5rem]">
//                         {index + 1}.
//                       </span>
//                       <h4 className="text-xl md:text-2xl font-semibold text-blue-900 leading-tight">
//                         {item.question}
//                       </h4>
//                     </div>

//                     <span className="text-3xl text-blue-600 flex-shrink-0 transition-transform duration-300">
//                       {openIndex === index ? <FiMinus /> : <FiPlus />}
//                     </span>
//                   </button>

//                   <div
//                     className={`px-6 transition-all duration-500 ease-in-out ${
//                       openIndex === index
//                         ? "max-h-[600px] pb-8 pt-2 opacity-100"
//                         : "max-h-0 pb-0 opacity-0"
//                     }`}
//                     style={{ overflow: "hidden" }}
//                   >
//                     <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
//                       {item.answer}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="text-center mt-12">
//               <p className="text-gray-600 text-lg">
//                 Have more questions? Feel free to contact our experts for free counseling!
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Floating Enroll Button */}
//       <button
//         className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-5 rounded-full shadow-2xl hover:scale-105 transition transform animate-pulse"
//         onClick={() => alert("Open Admission Modal / Redirect to form")}
//       >
//         <span className="font-bold text-lg">ENROLL NOW!</span>
//       </button>
//     </div>
//   );
// };

// export default Egypt;

import React, { useState } from "react";
import EgyptFlag from "../../Images/country flag png/Egypt.svg"; // Correct path to Egypt flag
import { FiPlus, FiMinus } from "react-icons/fi";

const Egypt = () => {
  const [showMoreAbout, setShowMoreAbout] = useState(false);
  const [showMoreClimate, setShowMoreClimate] = useState(false);
  const [openIndex, setOpenIndex] = useState(null); // null = none open by default

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // FAQ data – realistic & updated for 2026-27 context
  const faqData = [
    {
      question: "Is MBBS in Egypt valid for Indian students?",
      answer:
        "Yes, MBBS degrees from NMC/WHO-recognized Egyptian universities are valid in India. Graduates must qualify the FMGE (or upcoming NEXT) exam conducted by the National Medical Commission (NMC) to practice in India.",
    },
    {
      question: "What is the total cost of MBBS in Egypt for Indian students?",
      answer:
        "The total cost (tuition + hostel + food + misc.) usually ranges from ₹30 lakh to ₹45 lakh for the full 6-year course, depending on the university and lifestyle. Annual tuition is typically $5,000–$8,000 (≈₹4–7 lakh). No donation or capitation fees.",
    },
    {
      question: "Is NEET required for MBBS in Egypt?",
      answer:
        "Yes, NEET qualification is compulsory for Indian students as per NMC guidelines to study MBBS abroad and return to practice in India.",
    },
    {
      question: "What is the duration of MBBS in Egypt?",
      answer:
        "The MBBS course duration is 6 years: 5 years of academic study + 1 year of compulsory rotatory internship in affiliated hospitals.",
    },
    {
      question: "What are the eligibility criteria for MBBS in Egypt 2026?",
      answer:
        "• Minimum 17 years old by 31st December of admission year.\n" +
        "• 10+2 with Physics, Chemistry, Biology (PCB) – minimum 50% aggregate (some universities mention 60% for better chances).\n" +
        "• NEET qualified (mandatory for Indians).\n" +
        "• No upper age limit in most cases, but visa rules may apply.",
    },
    {
      question: "Is IELTS/TOEFL required to study MBBS in Egypt?",
      answer:
        "No, IELTS or TOEFL is not required for most universities. The medium of instruction is English, especially for international programs.",
    },
    {
      question:
        "Is hostel accommodation and Indian food available for students?",
      answer:
        "Yes, most universities provide hostel facilities (shared rooms, furnished, with kitchens/laundry). Many hostels/messes offer Indian food options, self-cooking is common, and Indian restaurants/mess facilities exist near campuses in cities like Cairo and Alexandria.",
    },
    {
      question: "When does MBBS admission start in Egypt for 2026-27?",
      answer:
        "Admissions usually open after NEET results (July–September) and continue till January/February 2026–27 for most universities. Apply early through official channels or authorized portals.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* ==================== HEADER CAROUSEL ==================== */}
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Alexandria_University.JPG/1280px-Alexandria_University.JPG"
            alt="Alexandria University"
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl">
              STUDY MBBS IN EGYPT
            </h2>
          </div>
        </div>
      </div>

      {/* ==================== MAIN CONTENT ==================== */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Intro Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div>
            <img
              src={EgyptFlag}
              alt="Egypt flag"
              className="w-32 md:w-40 border-4 border-gray-800 rounded shadow-lg"
            />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
              Explore MBBS Opportunities in Egypt 2025–2026
            </h1>
          </div>
        </div>

        {/* About Egypt + Image */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-center md:text-left text-blue-900 mb-6">
              About Egypt
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Egypt's rich history and prehistoric treasures make it a unique
              location for medical study. Famous landmarks like the Pyramids,
              Sphinx, and Karnak Temple line the Nile. In Cairo, visit the
              Mohammad Ali Mosque and Egyptian Museum. Egyptian medical
              universities attract MBBS students globally, offering a safe
              environment for both male and female students. Admission is
              straightforward with no additional entrance exams beyond NEET for
              Indians. The curriculum is MCQ-based with English-medium
              instruction and strong practical training in hospitals.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              MBBS in Egypt prepares students for respected global medical
              careers. Affordable alternatives include China, Nepal, Germany,
              Philippines, Ukraine, Bangladesh, and Kyrgyzstan, but Egypt
              remains popular for its 6-year duration (exempting preparatory
              courses for internationals) and cosmopolitan society.
            </p>
            {showMoreAbout ? (
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                International students from Malaysia, Nepal, Nigeria, and more
                choose Egypt for its skilled faculty, visiting professors, and
                equal opportunities.
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
              src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Egyptian_Museum_in_Cairo_in_May_2015.JPG"
              alt="Egyptian Museum"
              className="rounded-xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Quick Information + About MBBS */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-2xl font-bold text-center text-blue-900 mb-6">
              Quick Information – Study MBBS in Egypt
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 text-left">
                <tbody>
                  <tr className="bg-gray-100">
                    <td className="p-4 font-semibold">Recognition</td>
                    <td className="p-4">NMC & WHO approved</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Eligibility</td>
                    <td className="p-4">50% in PCB aggregate (40% reserved)</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="p-4 font-semibold">Course Duration</td>
                    <td className="p-4">6 Years (5+1 internship)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">NEET</td>
                    <td className="p-4">Compulsory for Indians</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="p-4 font-semibold">IELTS/TOEFL</td>
                    <td className="p-4">Not Required</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Medium of Teaching</td>
                    <td className="p-4">English</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-900 mb-6 text-center md:text-left">
              About MBBS in Egypt
            </h3>
            <p className="text-lg leading-relaxed text-gray-700">
              Studying MBBS in Egypt is straightforward with a safe learning
              environment. No donation/capitation fees. Many universities follow
              a modern/US-influenced curriculum with advanced facilities.
              Skilled faculty ensure excellent teacher-student ratios. Graduates
              are well-prepared for exams like FMGE/NEXT, USMLE, PLAB.
            </p>
            {showMoreClimate ? (
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                Egypt's climate is warm (desert/temperate), with mild winters
                and hot summers—comfortable with indoor heating/AC. Students
                enjoy multicultural vibes, extracurriculars, and volunteer
                opportunities.
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

        {/* UNIVERSITIES GRID */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
            Top Medical Universities in Egypt
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Cairo University",
                img: "https://upload.wikimedia.org/wikipedia/commons/5/57/CairoUniv.jpg",
              },
              {
                name: "Ain Shams University",
                img: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Eng_asu_main_bldng.JPG",
              },
              {
                name: "Alexandria University",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Alexandria_University.JPG/1280px-Alexandria_University.JPG",
              },
              {
                name: "Mansoura University",
                img: "https://s3.ap-south-1.amazonaws.com/gotouniv/cover_photo/2002/cover_photo_1500X500.jpg",
              },
              {
                name: "Assiut University",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Assiut_University.jpg/800px-Assiut_University.jpg",
              },
              {
                name: "Helwan University",
                img: "https://upload.wikimedia.org/wikipedia/commons/b/b4/%D0%9F%D0%B3%D0%BD%D0%B8%D1%83._%D0%9A%D0%BE%D1%80%D0%BF%D1%83%D1%81_%E2%84%965.jpg",
              },
            ].map((uni, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={uni.img}
                  alt={uni.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold text-blue-900">
                    {uni.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ADVANTAGES + COST */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center md:text-left">
              Advantages of Studying MBBS in Egypt 2025–2026
            </h2>
            <div className="space-y-6">
              <div>
                <h5 className="text-xl font-semibold">
                  1. Affordable High-Quality Education
                </h5>
                <p className="text-gray-700">
                  Globally recognized at low cost compared to West/private
                  India.
                </p>
              </div>
              <div>
                <h5 className="text-xl font-semibold">
                  2. No Donation / Simple Admission
                </h5>
                <p className="text-gray-700">
                  Straightforward process; NEET compulsory for Indians.
                </p>
              </div>
              <div>
                <h5 className="text-xl font-semibold">
                  3. English Medium + Modern Curriculum
                </h5>
                <p className="text-gray-700">
                  US-influenced with advanced labs/research.
                </p>
              </div>
              <div>
                <h5 className="text-xl font-semibold">
                  4. Strong Clinical Exposure + Global Prep
                </h5>
                <p className="text-gray-700">
                  Prepares for FMGE/USMLE/PLAB; part-time work possible in some
                  cases.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Cost of Study MBBS in Egypt
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              MBBS in Egypt is highly affordable for Indian students. Government
              subsidies keep fees low—no donations. Total cost (tuition +
              living) often ₹25–45 lakhs for the full course. Annual tuition
              ~$5,000–$8,000 (~₹4–7 lakhs). Living expenses are reasonable, with
              hostels and Indian food options available.
            </p>
          </div>
        </div>

        {/* FOOD & ACCOMMODATION */}
        <div className="bg-gradient-to-b from-gray-50 to-white py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
              Food and Accommodation Cost – MBBS in Egypt
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p>
                Students who choose to study MBBS in Egypt look for comfortable
                and affordable living facilities. Egyptian medical universities
                provide hostel facilities and essential amenities for
                international students.
              </p>
              <h4 className="text-2xl font-bold mt-8 mb-4">
                Hostel Facilities
              </h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Most medical universities in Egypt provide hostel facilities
                  for international students.
                </li>
                <li>Hostel rooms are usually shared by 2–3 students.</li>
                <li>
                  Hostels are designed to provide a safe and comfortable living
                  environment.
                </li>
                <li>
                  Students can stay in university hostels during their entire
                  MBBS course duration.
                </li>
              </ul>
              <h4 className="text-2xl font-bold mt-8 mb-4">Room Facilities</h4>
              <p>
                University hostel rooms generally include the following
                amenities:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fully furnished rooms</li>
                <li>Comfortable beds, mattress and blankets, bedsheets</li>
                <li>Study tables and chairs</li>
                <li>Wardrobes or cupboards</li>
              </ul>
              <h4 className="text-2xl font-bold mt-8 mb-4">
                Kitchen and Food Facilities
              </h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Most hostels provide common kitchens for students.</li>
                <li>Students can cook their own meals in the kitchen.</li>
                <li>
                  Indian students can prepare Indian food, which helps them
                  maintain their regular diet.
                </li>
                <li>
                  Many universities provide mess or canteen facilities offering
                  Indian meals.
                </li>
                <li>
                  Indian restaurants are available near many university
                  campuses.
                </li>
                <li>
                  Students can also enjoy local Egyptian cuisine and
                  international food options.
                </li>
              </ul>
              <h4 className="text-2xl font-bold mt-8 mb-4">
                Laundry and Daily Facilities
              </h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Hostels often provide laundry rooms or washing machine
                  facilities.
                </li>
                <li>
                  Students can easily manage daily activities such as cooking
                  and washing clothes.
                </li>
                <li>
                  These facilities make living in Egypt comfortable and
                  convenient for international students.
                </li>
              </ul>
              <p className="mt-8">
                <strong>
                  Approximate monthly living expenses (2025–2026):
                </strong>
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>
                  Hostel / Accommodation: ₹4,000 – ₹15,000 (often $50–150/month;
                  annual ~$600–$2,000)
                </li>
                <li>
                  Food (self-cooking + mess/Indian options): ₹8,000 – ₹15,000
                </li>
                <li>Transport + Miscellaneous: ₹3,000 – ₹10,000</li>
                <li>
                  <strong>Total monthly:</strong> ≈ ₹15,000 – ₹40,000
                </li>
              </ul>
              <p className="mt-6 italic text-gray-600">
                Many campuses offer Indian mess facilities and nearby stores for
                familiar diet at low cost. Costs vary by city (Cairo higher) and
                lifestyle.
              </p>
            </div>
          </div>
        </div>

        {/* ==================== FAQ SECTION (without s.no) ==================== */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
              Frequently Asked Questions – MBBS in Egypt 2026-27
            </h2>

            <div className="space-y-5">
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md ${
                    openIndex === index ? "shadow-lg border-blue-300" : ""
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-blue-200"
                  >
                    <h4 className="text-xl md:text-2xl font-semibold text-blue-900 leading-tight">
                      {item.question}
                    </h4>

                    <span className="text-3xl text-blue-600 flex-shrink-0 transition-transform duration-300">
                      {openIndex === index ? <FiMinus /> : <FiPlus />}
                    </span>
                  </button>

                  <div
                    className={`px-6 transition-all duration-500 ease-in-out ${
                      openIndex === index
                        ? "max-h-[600px] pb-8 pt-2 opacity-100"
                        : "max-h-0 pb-0 opacity-0"
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

            <div className="text-center mt-12">
              <p className="text-gray-600 text-lg">
                Have more questions? Feel free to contact our experts for free
                counseling!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Enroll Button */}
      <button
        className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-5 rounded-full shadow-2xl hover:scale-105 transition transform animate-pulse"
        onClick={() => alert("Open Admission Modal / Redirect to form")}
      >
        <span className="font-bold text-lg">ENROLL NOW!</span>
      </button>
    </div>
  );
};

export default Egypt;
