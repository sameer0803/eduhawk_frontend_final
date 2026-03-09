// import React from 'react'
// import Navbar from './component/Navbar'
// import HeroSection from './pages/HeroSection'

// const App = () => {
//   return (
//     <div>
//       <Navbar/>
//       <HeroSection/>
   
//     </div>
//   )
// }

// export default App


import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './pages/layouts/MainLayout.jsx';

// Pages
import Home from './pages/HeroSection.jsx';       // ← yeh tera purana HeroSection hai
import About from './pages/About.jsx';
import Russian from "./pages/Country/Russian.jsx"
import Bangladesh from './pages/Country/Bangladesh.jsx';
import Services from './pages/Component/Services.jsx';
import Contact from './pages/Component/Contact.jsx';

// import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,          // default route (/)
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'mbbs-abroad/russia',
        element: <Russian />,
      },
       {
        path: 'mbbs-abroad/bangladesh',
        element: <Bangladesh />,
      },
      

         {
        path: 'services',
        element: <Services />,
      },

      {
        path:"/contact",
        element:<Contact/>,
      }
      // aur jitne page chahiye add kar sakte ho
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;