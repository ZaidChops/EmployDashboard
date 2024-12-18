// // import React from 'react'

// import { Link } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import EnquiryForm from "../components/EnquiryForm";
// import Home from "./Home";

// const Sidebar = () => {
//   return (
//     <>
//       <div>
//         <div className="w-1/3 h-screen bg-slate-950 md:flex flex-col  ">
//           <Link  className="text-2xl ml-0 py-2 text-center text-white">
//             Dashboard
//           </Link>
//           <Link
//            to={"/"}
//             className="text-2xl ml-0  py-2 text-center text-white">
//             Home
//           </Link>
//           <Link className="text-2xl ml-0  py-2 text-center text-white">
//             Courses
//           </Link>
//           <Link
//             to={"/enquiryForm"}
//             className="text-2xl ml-0 py-2 text-center text-white"
//           >
//             EnquiryForm
//           </Link>
//         </div>
//         {/* <div className="w-2/3 h-screen bg-red-950">
//           <Router>
//             <Routes>
            
//               <Route path="/enquiryForm" element={<EnquiryForm />} />
//               <Route path="/" element={<Home />} />
//             </Routes>
//           </Router>
//           <h1 className="text-center bg-black">Form</h1>
//         </div> */}
//       </div>
//     </>
//   );
// };

// export default Sidebar;

// // import React from "react";
// // import { Link } from "react-router-dom";

// // const Sidebar = () => {
// //   return (
// //     <div className="h-screen w-64 bg-gray-800 text-white fixed top-0 left-0">
// //       <h2 className="text-2xl font-bold text-center py-4 border-b border-gray-700">
// //         Dashboard
// //       </h2>
// //       <nav className="mt-4">
// //         <ul className="space-y-2">
// //           <li>
// //             <Link
// //               to="/courses"
// //               className="block px-4 py-2 hover:bg-gray-700 rounded transition"
// //             >
// //               Courses
// //             </Link>
// //           </li>
// //           <li>
// //             <Link
// //               to="/enquiryform"
// //               className="block px-4 py-2 hover:bg-gray-700 rounded transition"
// //             >
// //               Enquiry Form
// //             </Link>
// //           </li>
// //         </ul>
// //       </nav>
// //     </div>
// //   );
// // };

// // export default Sidebar;
// import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="fixed top-16 left-0 w-64 h-full bg-gray-900 text-white shadow-lg p-4 space-y-6">
      <ul>
        <li>
          <Link to="/" className="block text-lg py-3 hover:text-blue-400">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/enquiry-form" className="block text-lg py-3 hover:text-blue-400">
            Enquiry Form
          </Link>
        </li>
        <li>
          <Link to="/enquiry-details" className="block text-lg py-3 hover:text-blue-400">
            Enquiry Details
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
