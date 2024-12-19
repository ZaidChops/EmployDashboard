import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../redux-config/UserSlice";

const EnquiryForm = () => {
  const dispatch = useDispatch()
  const userData = useSelector((state) => state.userData.allData)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNo: "",
    course: "",
  });
  
  useEffect(() => {
    const storedEnquiries = localStorage.getItem("enquiries");
    if (storedEnquiries) {
      setEnquiries(JSON.parse(storedEnquiries));
    }
  }, [dispatch]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEnquiry = { ...formData, id: crypto.randomUUID() };
    const updatedEnquiries = [...userData, newEnquiry];

    dispatch(addData(newEnquiry))

    // Update the context state
    // setEnquiries(updatedEnquiries);

    // Save to local storage
    localStorage.setItem("enquiries", JSON.stringify(updatedEnquiries));

    // Reset form data
    setFormData({ name: "", email: "", contactNo: "", course: "" });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Enquiry Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <div>
          <label className="block">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block">Contact:</label>
          <input
            type="text"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleChange}
            required
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block">Course:</label>
          <input
            type="text"
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
            className="border p-2 w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Add Enquiry
        </button>
      </form>
    </div>
  );
};

export default EnquiryForm;
