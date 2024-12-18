// import { useRef, useState } from "react";
// import Data from "./Data";

// function EnquiryForm() {
//   const [studentList, setStudentList] = useState(Data);
//   const [courseList] = useState(["JAVASCRIPT", "PYTHON", "REACT", "DATA ANALYTICS"]);
//   const [editingStudent, setEditingStudent] = useState(null);

//   let nameRef = useRef();
//   let contactRef = useRef();
//   let courseRef = useRef();

//   const removeStudent = (studentId) => {
//     if (window.confirm("Do you want to delete it?")) {
//       const index = studentList.findIndex((student) => student.id === studentId);
//       studentList.splice(index, 1);
//       setStudentList([...studentList]);
//     }
//   };

//   const addOrUpdateStudent = () => {
//     let name = nameRef.current.value;
//     let contact = contactRef.current.value;
//     let course = courseRef.current.value;

//     if (editingStudent) {
//       const updatedStudentList = studentList.map((student) =>
//         student.id === editingStudent.id ? { ...student, name, contact, course } : student
//       );
//       setStudentList(updatedStudentList);
//       setEditingStudent(null);
//     } else {
//       const newStudent = { id: Date.now(), name, contact, course };
//       setStudentList([...studentList, newStudent]);
//     }

//     nameRef.current.value = "";
//     contactRef.current.value = "";
//     courseRef.current.value = "Select Courses";
//   };

//   const editStudent = (student) => {
//     setEditingStudent(student);
//     nameRef.current.value = student.name;
//     contactRef.current.value = student.contact;
//     courseRef.current.value = student.course;
//   };

//   return (
//     <>

//       <div className="bg-blue-600 text-white text-center py-2">
//         <h2 className="text-lg font-bold">Enquiry Form</h2>
//       </div>

//       <div className="p-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <input
//             ref={nameRef}
//             type="text"
//             placeholder="Enter student name"
//             className="border p-2 rounded w-full"
//           />
//           <input
//             ref={contactRef}
//             type="text"
//             placeholder="Enter student contact"
//             className="border p-2 rounded w-full"
//           />
//           <select ref={courseRef} className="border p-2 rounded w-full">
//             <option>Select branch</option>
//             {courseList.map((course, index) => (
//               <option key={index} value={course}>
//                 {course}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="mt-4">
//           <button
//             onClick={addOrUpdateStudent}
//             className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
//           >
//             {editingStudent ? "Update" : "Add"}
//           </button>
//         </div>
//       </div>

//       <div className="p-4">
//         <table className="table-auto w-full border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border p-2">S.No</th>
//               <th className="border p-2">Name</th>
//               <th className="border p-2">Course</th>
//               <th className="border p-2">Contact</th>
//               <th className="border p-2">Edit</th>
//               <th className="border p-2">Remove</th>
//             </tr>
//           </thead>
//           <tbody>
//             {studentList.map((student, index) => (
//               <tr key={index} className="text-center">
//                 <td className="border p-2">{index + 1}</td>
//                 <td className="border p-2">{student.name}</td>
//                 <td className="border p-2">{student.course}</td>
//                 <td className="border p-2">{student.contact}</td>
//                 <td className="border p-2">
//                   <button
//                     onClick={() => editStudent(student)}
//                     className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 transition"
//                   >
//                     Edit
//                   </button>
//                 </td>
//                 <td className="border p-2">
//                   <button
//                     onClick={() => removeStudent(student.id)}
//                     className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition"
//                   >
//                     Remove
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// }

// export default EnquiryForm;
// import  { useState } from "react";
// import { useContext } from "react";
// import { EnquiryContext } from "./EnquiryContext";

// const EnquiryForm = () => {
//   const { enquiries, setEnquiries } = useContext(EnquiryContext);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     contactNo:"",
//     course: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setEnquiries([...enquiries, { ...formData, id: enquiries.length + 1 }]);
//     setFormData({ name: "", email: "", contactNo:"",course: "" });
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-6">Enquiry Form</h2>
//       <form onSubmit={handleSubmit} className="space-y-4 mb-8">
//         <div>
//           <label className="block">Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className="border p-2 w-full"
//           />
//         </div>
//         <div>
//           <label className="block">Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="border p-2 w-full"
//           />
//         </div>
//         <div>
//           <label className="block">Contactr:</label>
//           <input
//             type="text"
//             name="contactNo"
//             value={formData.contactNo}
//             onChange={handleChange}
//             required
//             className="border p-2 w-full"
//           />
//         </div>
//         <div>
//           <label className="block">Course:</label>
//           <input
//             type="text"
//             name="course"
//             value={formData.course}
//             onChange={handleChange}
//             required
//             className="border p-2 w-full"
//           />
//         </div>
//         <button type="submit" className="bg-blue-500 text-white p-2 rounded">
//           Add Enquiry
//         </button>
//       </form>
//     </div>
//   );
// };

// export default EnquiryForm;
import { useState, useEffect, useContext } from "react";
import { EnquiryContext } from "./EnquiryContext";

const EnquiryForm = () => {
  const { enquiries, setEnquiries } = useContext(EnquiryContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNo: "",
    course: "",
  });

  // Load enquiries from local storage when the component mounts
  useEffect(() => {
    const storedEnquiries = localStorage.getItem("enquiries");
    if (storedEnquiries) {
      setEnquiries(JSON.parse(storedEnquiries));
    }
  }, [setEnquiries]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEnquiry = { ...formData, id: enquiries.length + 1 };
    const updatedEnquiries = [...enquiries, newEnquiry];

    // Update the context state
    setEnquiries(updatedEnquiries);

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
