// // import './App.css'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./pages/Navbar";
// import Home from "./pages/Home";
// import Sidebar from "./pages/Sidebar";
// import EnquiryForm from './components/EnquiryForm'

// function App() {
//   return (
//     <>
//       <Router>
//         <Navbar />
//         <Sidebar />
//             <Routes>
            
//               <Route path="/enquiryForm" element={<EnquiryForm />} />
//               <Route path="/" element={<Home />} />
//             </Routes>
//           </Router>
       
//     </>
//   );
// }

// export default App;
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { EnquiryContext } from "./components/EnquiryContext";
import Navbar from "./pages/Navbar";
import Sidebar from "./pages/Sidebar";
import EnquiryForm from "./components/EnquiryForm";
import EnquiryDetails from "./components/EnquiryDetails";
import Home from "./pages/Home";

function App() {
  const [enquiries, setEnquiries] = useState([]);

  return (
    <EnquiryContext.Provider value={{ enquiries, setEnquiries }}>
      <Router>
        <div className="flex">
         
          <Sidebar />
  
          <div className="ml-64 flex-1">
            <Navbar />
            <div className="p-4 mt-16 overflow-auto h-[calc(100vh-4rem)]">
              <Routes>
                <Route path="/enquiry-form" element={<EnquiryForm />} />
                <Route path="/enquiry-details" element={<EnquiryDetails />} />
                <Route path="/" element={<Home/>} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </EnquiryContext.Provider>
  );
}

export default App;
