import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Sidebar from "./pages/Sidebar";
import EnquiryForm from "./components/EnquiryForm";
import Dashboard from './pages/Dashboard';
import Courses from "./components/Courses";
import Trainers from "./components/Trainers";
import Addmissions from "./components/Addmission";

function App() {
  return (
   
      <Router>
        <div className="flex">
          <Sidebar />
          <div className="ml-64 flex-1">
            <Navbar />
            <div className="p-4 mt-16 overflow-auto h-[calc(100vh-4rem)]">
              <Routes>
                <Route path="/enquiry-form" element={<EnquiryForm />} />
                <Route path="/courses" element={<Courses/>} />
                <Route path="/addmission" element={<Addmissions/>} />
                <Route path="/trainers" element={<Trainers/>} />
                <Route path="/" element={<Dashboard/>} />
           
              </Routes>
            </div>
          </div>
        </div>
      </Router>

  );
}

export default App;
