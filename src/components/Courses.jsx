
// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   addCourse,
//   setEditingCourse,
//   updateCourse,
//   clearEditingCourse,
// } from "../redux-config/courseSlice";

// const Courses = () => {
//   const dispatch = useDispatch();
//   const { courses, editingCourse } = useSelector((state) => state.courseData);

//   const [courseName, setCourseName] = useState("");
//   const [courseCategory, setCourseCategory] = useState("");
//   const [coursePrice, setCoursePrice] = useState("");
//   const [isPopupOpen, setIsPopupOpen] = useState(false);

//   const categories = [
//     "JavaScript", "Python", "Data Science", "DevOps", "React", "Java", "NodeJs", "HTML", "CSS", "Tailwind",
//   ];

//   // Generate Course ID
//   const generateCourseId = () => {
//     const lastCourse = courses[courses.length - 1];
//     const nextIdNumber = lastCourse ? parseInt(lastCourse.id.substring(2)) + 1 : 1;
//     return `XC${nextIdNumber.toString().padStart(3, "0")}`;
//   };

//   useEffect(() => {
//     if (editingCourse) {
//       setCourseName(editingCourse.name);
//       setCourseCategory(editingCourse.category);
//       setCoursePrice(editingCourse.price);
//     } else {
//       setCourseName("");
//       setCourseCategory("");
//       setCoursePrice("");
//     }
//   }, [editingCourse]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (courseName && courseCategory && coursePrice) {
//       if (editingCourse) {
//         dispatch(
//           updateCourse({
//             id: editingCourse.id, name: courseName,  category: courseCategory, price: coursePrice,
//           })
//         );
//         dispatch(clearEditingCourse()); // Reset editing state
//       } else {
//         const newCourseId = generateCourseId();
//         dispatch(
//           addCourse({
//             id: newCourseId,name: courseName,category: courseCategory, price: coursePrice,
//           })
//         );
//       }

//       // Reset form and close popup
//       setCourseName("");
//       setCourseCategory("");
//       setCoursePrice("");
//       setIsPopupOpen(false);
//     } else {
//       alert("Please fill all fields!");
//     }
//   };

//   return (
//     <div className="p-6">
//       <button
//         onClick={() => setIsPopupOpen(true)}
//         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//       >
//         Add Course
//       </button>

//       {/* Popup for Add/Edit Course */}
//       {isPopupOpen && (
//         <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-6 rounded shadow-lg w-96">
//             <h2 className="text-xl font-bold mb-4">
//               {editingCourse ? "Edit Course" : "Add Course"}
//             </h2>
//             <form onSubmit={handleSubmit} className="mb-6">
//               <div className="mb-4">
//                 <input
//                   type="text"
//                   value={courseName}
//                   onChange={(e) => setCourseName(e.target.value)}
//                   placeholder="Course Name"
//                   className="border p-2 w-full"
//                 />
//               </div>
//               <div className="mb-4">
//                 <select
//                   value={courseCategory}
//                   onChange={(e) => setCourseCategory(e.target.value)}
//                   className="border p-2 w-full"
//                 >
//                   <option value="">Select Category</option>
//                   {categories.map((category, index) => (
//                     <option key={index} value={category}>
//                       {category}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div className="mb-4">
//                 <input
//                   type="text"
//                   value={coursePrice}
//                   onChange={(e) => setCoursePrice(e.target.value)}
//                   placeholder="Price"
//                   className="border p-2 w-full"
//                 />
//               </div>
//               <div className="flex justify-between">
//               <button
//                 type="submit"
//                 className="bg-blue-500 text-white px-4 py-2 rounded w-full"
//               >
//                 {editingCourse ? "Update Course" : "Add Course"}
//               </button>
//               <button
//                 type="button"
//                 onClick={() => setIsPopupOpen(false)}
//                 className="ml-2 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 w-full"
//               >
//                 Close
//               </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* Courses List */}
//       <div className="mt-6">
//         <h3 className="text-lg font-bold mb-4">Courses List</h3>
//         <table className="w-full table-auto border-collapse">
//           <thead>
//             <tr>
//               <th className="border p-2">Course ID</th>
//               <th className="border p-2">Course Name</th>
//               <th className="border p-2">Category</th>
//               <th className="border p-2">Price</th>
//               <th className="border p-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {courses.map((course) => (
//               <tr key={course.id}>
//                 <td className="border p-2 text-center">{course.id}</td>
//                 <td className="border p-2 text-center">{course.name}</td>
//                 <td className="border p-2 text-center">{course.category}</td>
//                 <td className="border p-2 text-center">{course.price}</td>
//                 <td className="border p-2 text-center">
//                   <button
//                     onClick={() => {
//                       dispatch(setEditingCourse(course));
//                       setIsPopupOpen(true);
//                     }}
//                     className="bg-yellow-500 text-white px-2 py-1 rounded"
//                   >
//                     Edit
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Courses;
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCourse,setEditingCourse, updateCourse,clearEditingCourse,
} from "../redux-config/CourseSlice";

const Courses = () => {
  const dispatch = useDispatch();
  const { courses, editingCourse } = useSelector((state) => state.courseData);


  const [formData, setFormData] = useState({
    courseName: "",
    courseCategory: "",
    coursePrice: "",
  });
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const categories = [
    "JavaScript", "Python", "Data Science", "DevOps", "React", "Java", "NodeJs", "HTML", "CSS", "Tailwind",
  ];

 
  const generateCourseId = () => {
    const lastCourse = courses[courses.length - 1];
    const nextIdNumber = lastCourse ? parseInt(lastCourse.id.substring(2)) + 1 : 1;
    return `XC${nextIdNumber.toString().padStart(3, "0")}`;
  };

  useEffect(() => {
    if (editingCourse) {
      setFormData({
        courseName: editingCourse.name,
        courseCategory: editingCourse.category,
        coursePrice: editingCourse.price,
      });
    } else {
      setFormData({
        courseName: "",
        courseCategory: "",
        coursePrice: "",
      });
    }
  }, [editingCourse]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { courseName, courseCategory, coursePrice } = formData;

    if (courseName && courseCategory && coursePrice) {
      if (editingCourse) {
        dispatch(
          updateCourse({
            id: editingCourse.id,
            name: courseName,
            category: courseCategory,
            price: coursePrice,
          })
        );
        dispatch(clearEditingCourse()); 
      } else {
        const newCourseId = generateCourseId();
        dispatch(
          addCourse({
            id: newCourseId,
            name: courseName,
            category: courseCategory,
            price: coursePrice,
          })
        );
      }

  
      setFormData({
        courseName: "",
        courseCategory: "",
        coursePrice: "",
      });
      setIsPopupOpen(false);
    } else {
      alert("Please fill all fields!");
    }
  };

  return (
    <div className="p-6">
      <button
        onClick={() => setIsPopupOpen(true)}
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-600"
      >
        Add Courses
      </button>

  
      {isPopupOpen && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">
              {editingCourse ? "Edit Course" : "Add Course"}
            </h2>
            <form onSubmit={handleSubmit} className="mb-6">
              <div className="mb-4">
                <input
                  type="text"
                  name="courseName"
                  value={formData.courseName}
                  onChange={handleChange}
                  placeholder="Course Name"
                  className="border p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <select
                  name="courseCategory"
                  value={formData.courseCategory}
                  onChange={handleChange}
                  className="border p-2 w-full"
                >
                  <option value="">Select Category</option>
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="coursePrice"
                  value={formData.coursePrice}
                  onChange={handleChange}
                  placeholder="Price"
                  className="border p-2 w-full"
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-black text-white px-4 py-2 rounded w-full"
                >
                  {editingCourse ? "Update Course" : "Add Course"}
                </button>
                <button
                  type="button"
                  onClick={() => setIsPopupOpen(false)}
                  className="ml-2 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 w-full"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

  
      <div className="mt-6">
        <h3 className="text-lg font-bold mb-4">Courses List</h3>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="border p-2">Course ID</th>
              <th className="border p-2">Course Name</th>
              <th className="border p-2">Category</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id}>
                <td className="border p-2 text-center">{course.id}</td>
                <td className="border p-2 text-center">{course.name}</td>
                <td className="border p-2 text-center">{course.category}</td>
                <td className="border p-2 text-center">{course.price}</td>
                <td className="border p-2 text-center">
                  <button
                    onClick={() => {
                      dispatch(setEditingCourse(course));
                      setIsPopupOpen(true);
                    }}
                    className="bg-black text-white px-2 py-1 rounded"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Courses;
