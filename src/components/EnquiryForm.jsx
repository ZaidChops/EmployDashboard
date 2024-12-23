
// // import { useState } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import { addData, updateUser } from "../redux-config/UserSlice";
// // import { useEffect } from "react";

// // const EnquiryForm = () => {
// //   const dispatch = useDispatch();
// //   const userData = useSelector((state) => state.userData.allData);
// //   const editData = useSelector((state) => state.userData.editUser)
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     contactNo: "",
// //     course: "",
// //     demo: false,
// //   });

// //   const [showModal, setShowModal] = useState(false);
// //   const [isEditing, setIsEditing] = useState(false);
// //   const [updateUser, setUpdateUser] = useState(null);
// //   const [editId, setEditId] = useState(null);

// //   const handleChange = (e) => {
// //     const { name, value, type, checked } = e.target;
// //     setFormData({...formData, [name]: type === "checkbox" ? checked : value,});
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if(editData.isEdit){
// //       dispatch(updateUser({id: editData.data.id, formData}))
// //     } else {
// //       const newEnquiry = { ...formData, id: crypto.randomUUID() };
// //       dispatch(addData(newEnquiry));
// //     }
// //   };

// //   useEffect(()=>{
// //     if(editData.isEdit) setFormData(editData.data)
// //   },[editData])

// //   const handleEdit = (id) => {
// //     const enquiry = userData.find((item) => item.id === id);
// //     setFormData(enquiry);
// //     setIsEditing(true);
// //     setEditId(id);
// //     setShowModal(true);
// //   };

// //   return (
// //     <div>
// //       <h2 className="text-2xl font-bold mb-6">Enquiry Form</h2>

// //       <button
// //         onClick={() => setShowModal(true)}
// //         className="bg-black text-white p-2 rounded mb-4">
// //         Add Enquiry
// //       </button>

// //       <h3 className="text-xl font-semibold mb-4">Enquiry Details</h3>
// //       <table className="w-full border-collapse border border-gray-300">
// //         <thead>
// //           <tr className="bg-gray-100">
// //             <th className="border p-2">Name</th>
// //             <th className="border p-2">Email</th>
// //             <th className="border p-2">Contact</th>
// //             <th className="border p-2">Course</th>
// //             <th className="border p-2">Demo</th>
// //             <th className="border p-2">Actions</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {userData.map((enquiry) => (
// //             <tr key={enquiry.id} className="text-center">
// //               <td className="border p-2">{enquiry.name}</td>
// //               <td className="border p-2">{enquiry.email}</td>
// //               <td className="border p-2">{enquiry.contactNo}</td>
// //               <td className="border p-2">{enquiry.course}</td>
// //               <td className="border p-2">{enquiry.demo ? "Yes" : "No"}</td>
// //               <td className="border p-2">
// //                 <button
// //                   onClick={() => handleEdit(enquiry.id)}
// //                   className="bg-black text-white p-2 rounded mr-2"
// //                 >
// //                   Edit
// //                 </button>
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>

// //       {showModal && (
// //         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
// //           <div className="bg-white p-6 rounded-lg shadow-lg w-96">
// //             <h2 className="text-xl font-bold mb-4">
// //               {isEditing ? "Edit Enquiry" : "Add Enquiry"}
// //             </h2>
// //             <form onSubmit={handleSubmit} className="space-y-4">
// //               <div>
// //                 <label className="block">Name:</label>
// //                 <input
// //                   type="text"
// //                   name="name"
// //                   value={formData.name}
// //                   onChange={handleChange}
// //                   required
// //                   className="border p-2 w-full"
// //                 />
// //               </div>
// //               <div>
// //                 <label className="block">Email:</label>
// //                 <input
// //                   type="email"
// //                   name="email"
// //                   value={formData.email}
// //                   onChange={handleChange}
// //                   required
// //                   className="border p-2 w-full"
// //                 />
// //               </div>
// //               <div>
// //                 <label className="block">Contact:</label>
// //                 <input
// //                   type="text"
// //                   name="contactNo"
// //                   value={formData.contactNo}
// //                   onChange={handleChange}
// //                   required
// //                   className="border p-2 w-full"
// //                 />
// //               </div>
// //               <div>
// //                 <label className="block">Course:</label>
// //                 <input
// //                   type="text"
// //                   name="course"
// //                   value={formData.course}
// //                   onChange={handleChange}
// //                   required
// //                   className="border p-2 w-full"
// //                 />
// //               </div>
// //               <div>
// //                 <label className="block">Demo:</label>
// //                 <input
// //                   type="checkbox"
// //                   name="demo"
// //                   checked={formData.demo}
// //                   onChange={handleChange}
// //                   className="mr-2"
// //                 />
// //                 <span>Yes</span>
// //               </div>
// //               <div className="flex justify-end space-x-4">
// //                 <button
// //                   type="button"
// //                   onClick={() => setShowModal(false)}
// //                   className="bg-gray-300 text-gray-800 p-2 rounded"
// //                 >
// //                   Cancel
// //                 </button>
// //                 <button
// //                   type="submit"
// //                   className="bg-black text-white p-2 rounded"
// //                 >
// //                   {isEditing ? "Update" : "Submit"}
// //                 </button>
// //               </div>
// //             </form>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default EnquiryForm;


// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addData, editData, updateUser } from "../redux-config/UserSlice";

// const EnquiryForm = () => {
//   const dispatch = useDispatch();
//   const userData = useSelector((state) => state.userData.allData);
//   const editUser = useSelector((state) => state.userData.editUser);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     contactNo: "",
//     course: "",
//     demo: false,
//   });
//   const [showModal, setShowModal] = useState(false);

//   // Handle form changes
//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (editUser.isEdit) {
//       // Update existing data
//       dispatch(updateUser({ ...formData, id: editUser.data.id }));
//     } else {
//       // Add new enquiry
//       dispatch(addData({ ...formData, id: crypto.randomUUID() }));
//     }
//     setShowModal(false);
//     resetForm();
//   };

//   // Populate form data on edit
//   useEffect(() => {
//     if (editUser.isEdit) {
//       setFormData(editUser.data);
//       setShowModal(true);
//     }
//   }, [editUser]);

//   // Reset form to initial state
//   const resetForm = () => {
//     setFormData({
//       name: "",
//       email: "",
//       contactNo: "",
//       course: "",
//       demo: false,
//     });
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-6">Enquiry Form</h2>
//       <button
//         onClick={() => {
//           resetForm();
//           setShowModal(true);
//         }}
//         className="bg-black text-white p-2 rounded mb-4"
//       >
//         Add Enquiry
//       </button>

//       <h3 className="text-xl font-semibold mb-4">Enquiry Details</h3>
//       <table className="w-full border-collapse border border-gray-300">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="border p-2">Name</th>
//             <th className="border p-2">Email</th>
//             <th className="border p-2">Contact</th>
//             <th className="border p-2">Course</th>
//             <th className="border p-2">Demo</th>
//             <th className="border p-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {userData.map((enquiry) => (
//             <tr key={enquiry.id} className="text-center">
//               <td className="border p-2">{enquiry.name}</td>
//               <td className="border p-2">{enquiry.email}</td>
//               <td className="border p-2">{enquiry.contactNo}</td>
//               <td className="border p-2">{enquiry.course}</td>
//               <td className="border p-2">{enquiry.demo ? "Yes" : "No"}</td>
//               <td className="border p-2">
//                 <button
//                   onClick={() => dispatch(editData(enquiry))}
//                   className="bg-black text-white p-2 rounded mr-2"
//                 >
//                   Edit
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//             <h2 className="text-xl font-bold mb-4">
//               {editUser.isEdit ? "Edit Enquiry" : "Add Enquiry"}
//             </h2>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label className="block">Name:</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="border p-2 w-full"
//                 />
//               </div>
//               <div>
//                 <label className="block">Email:</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="border p-2 w-full"
//                 />
//               </div>
//               <div>
//                 <label className="block">Contact:</label>
//                 <input
//                   type="text"
//                   name="contactNo"
//                   value={formData.contactNo}
//                   onChange={handleChange}
//                   required
//                   className="border p-2 w-full"
//                 />
//               </div>
//               <div>
//                 <label className="block">Course:</label>
//                 <input
//                   type="text"
//                   name="course"
//                   value={formData.course}
//                   onChange={handleChange}
//                   required
//                   className="border p-2 w-full"
//                 />
//               </div>
//               <div>
//                 <label className="block">Demo:</label>
//                 <input
//                   type="checkbox"
//                   name="demo"
//                   checked={formData.demo}
//                   onChange={handleChange}
//                   className="mr-2"
//                 />
//                 <span>Yes</span>
//               </div>
//               <div className="flex justify-end space-x-4">
//                 <button
//                   type="button"
//                   onClick={() => setShowModal(false)}
//                   className="bg-gray-300 text-gray-800 p-2 rounded"
//                 >
//                   Cancel
//                 </button>
//                 <button type="submit" className="bg-black text-white p-2 rounded">
//                   {editUser.isEdit ? "Update" : "Submit"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default EnquiryForm;

import  { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addData, editData, updateUser } from "../redux-config/UserSlice";

const EnquiryForm = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData.allData);
  const editUser = useSelector((state) => state.userData.editUser);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNo: "",
    course: "",
    demo: false,
  });
  const [showModal, setShowModal] = useState(false);

  const fetchEnquiries = async () => {
    try {
      const response = await axios.get("http://localhost:9000/enquiry/list");
      console.log("Fetched Enquiries: ", response.data);
      response.data.forEach((enquiry) => dispatch(addData(enquiry)));
    } catch (error) {
      console.error("Error fetching enquiries: ", error);
    }
  };

  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editUser.isEdit) {
        
        await axios.put(`http://localhost:9000/enquiry/${editUser.data.id}`, formData);
        dispatch(updateUser({ ...formData, id: editUser.data.id }));
      } else {
 
        const newEnquiry = { ...formData, id: crypto.randomUUID() };
        await axios.post("http://localhost:9000/enquiry/enquiry-form", newEnquiry);
        dispatch(addData(newEnquiry));
      }
      setShowModal(false);
      resetForm();
      fetchEnquiries(); 
    } catch (error) {
      console.error("Error submitting enquiry: ", error);
    }
  };

  useEffect(() => {
    if (editUser.isEdit) {
      setFormData(editUser.data);
      setShowModal(true);
    }
  }, [editUser]);

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      contactNo: "",
      course: "",
      demo: false,
    });
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Enquiry Form</h2>
      <button
        onClick={() => {
          resetForm();
          setShowModal(true);
        }}
        className="bg-black text-white p-2 rounded mb-4"
      >
        Add Enquiry
      </button>

      <h3 className="text-xl font-semibold mb-4">Enquiry Details</h3>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Contact</th>
            <th className="border p-2">Course</th>
            <th className="border p-2">Demo</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((enquiry) => (
            <tr key={enquiry.id} className="text-center">
              <td className="border p-2">{enquiry.name}</td>
              <td className="border p-2">{enquiry.email}</td>
              <td className="border p-2">{enquiry.contactNo}</td>
              <td className="border p-2">{enquiry.course}</td>
              <td className="border p-2">{enquiry.demo ? "Yes" : "No"}</td>
              <td className="border p-2">
                <button
                  onClick={() => dispatch(editData(enquiry))}
                  className="bg-black text-white p-2 rounded mr-2"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">
              {editUser.isEdit ? "Edit Enquiry" : "Add Enquiry"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
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
              <div>
                <label className="block">Demo:</label>
                <input
                  type="checkbox"
                  name="demo"
                  checked={formData.demo}
                  onChange={handleChange}
                  className="mr-2"
                />
                <span>Yes</span>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-gray-300 text-gray-800 p-2 rounded"
                >
                  Cancel
                </button>
                <button type="submit" className="bg-black text-white p-2 rounded">
                  {editUser.isEdit ? "Update" : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnquiryForm;
