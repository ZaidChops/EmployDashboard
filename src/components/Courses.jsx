// import { useState, useEffect } from "react";
// import { ImCross } from "react-icons/im";
// import { MdOutlineEdit } from "react-icons/md";
// import { MdPreview } from "react-icons/md";

// import { useDispatch, useSelector } from "react-redux";
// import {
//   addCourse,
//   setEditingCourse,
//   updateCourse,
//   clearEditingCourse,
// } from "../redux-config/CourseSlice";

// const Courses = () => {
//   const dispatch = useDispatch();
//   const { courses, editingCourse } = useSelector((state) => state.courseData);

//   const [courseName, setCourseName] = useState("");
//   const [courseCategory, setCourseCategory] = useState("");
//   const [coursePrice, setCoursePrice] = useState("");
//   const [courseTiming, setCourseTiming] = useState("");
//   const [courseDuration, setCourseDuration] = useState("");
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [showPreview, setShowPreview] = useState(false);
//   const [previewData, setPreviewData] = useState(null);

//   const categories = [
//     "JavaScript",
//     "Python",
//     "Data Science",
//     "DevOps",
//     "React",
//     "Java",
//     "NodeJs",
//     "HTML",
//     "CSS",
//     "Tailwind",
//   ];

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
//       setCourseTiming(editingCourse.timing);
//       setCourseDuration(editingCourse.duration);
//     } else {
//       setCourseName("");
//       setCourseCategory("");
//       setCoursePrice("");
//       setCourseTiming("");
//       setCourseDuration("");
//     }
//   }, [editingCourse]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (courseName && courseCategory && coursePrice && courseTiming && courseDuration) {
//       if (editingCourse) {
//         dispatch(
//           updateCourse({
//             id: editingCourse.id,
//             name: courseName,
//             category: courseCategory,
//             price: coursePrice,
//             timing: courseTiming,
//             duration: courseDuration,
//           })
//         );
//         dispatch(clearEditingCourse()); // Reset editing state
//       } else {
//         const newCourseId = generateCourseId();
//         dispatch(
//           addCourse({
//             id: newCourseId,
//             name: courseName,
//             category: courseCategory,
//             price: coursePrice,
//             timing: courseTiming,
//             duration: courseDuration,
//           })
//         );
//       }

//       // Reset form and close popup
//       setCourseName("");
//       setCourseCategory("");
//       setCoursePrice("");
//       setCourseTiming("");
//       setCourseDuration("");
//       setIsPopupOpen(false);
//     } else {
//       alert("Please fill all fields!");
//     }
//   };

//   // Preview functionality
//   const handlePreview = (course) => {
//     setPreviewData(course); // Set preview data
//     setShowPreview(true); // Show preview modal
//   };

//   return (
//     <div className="p-6">
//       <button
//         onClick={() => setIsPopupOpen(true)}
//         className="bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition duration-300"
//       >
//         Add Course
//       </button>

//       {isPopupOpen && (
//         <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-6 rounded-lg w-96 relative">
//             <button
//               onClick={() => setIsPopupOpen(false)}
//               className="absolute top-2 right-2 text-xl text-yellow-500 hover:text-yellow-600"
//             >
//               <ImCross />
//             </button>
//             <h2 className="text-xl font-bold mb-4 text-yellow-600">
//               {editingCourse ? "Edit Course" : "Add Course"}
//             </h2>
//             <form onSubmit={handleSubmit} className="mb-6">
//               <div className="mb-4">
//                 <input
//                   type="text"
//                   value={courseName}
//                   onChange={(e) => setCourseName(e.target.value)}
//                   placeholder="Course Name"
//                   className="border-2 border-yellow-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
//                 />
//               </div>
//               <div className="mb-4">
//                 <select
//                   value={courseCategory}
//                   onChange={(e) => setCourseCategory(e.target.value)}
//                   className="border-2 border-yellow-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
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
//                   className="border-2 border-yellow-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
//                 />
//               </div>
//               <div className="mb-4">
//                 <input
//                   type="text"
//                   value={courseTiming}
//                   onChange={(e) => setCourseTiming(e.target.value)}
//                   placeholder="Timing (e.g., 10:00 AM - 12:00 PM)"
//                   className="border-2 border-yellow-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
//                 />
//               </div>
//               <div className="mb-4">
//                 <input
//                   type="text"
//                   value={courseDuration}
//                   onChange={(e) => setCourseDuration(e.target.value)}
//                   placeholder="Duration (e.g., 4 weeks)"
//                   className="border-2 border-yellow-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
//                 />
//               </div>
//               <div className="flex justify-between">
//                 <button
//                   type="submit"
//                   className="bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition duration-300 w-full"
//                 >
//                   {editingCourse ? "Update Course" : "Add Course"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* Courses List */}
//       <div className="mt-6">
//         <h3 className="text-lg font-bold mb-4 text-yellow-600">Courses List</h3>
//         <table className="w-full table-auto border-collapse">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="border p-2 text-gray-700">Course ID</th>
//               <th className="border p-2 text-gray-700">Course Name</th>
//               <th className="border p-2 text-gray-700">Category</th>
//               <th className="border p-2 text-gray-700">Price</th>
//               <th className="border p-2 text-gray-700">Timing</th>
//               <th className="border p-2 text-gray-700">Duration</th>
//               <th className="border p-2 text-gray-700">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {courses.map((course) => (
//               <tr key={course.id} className="hover:bg-gray-50">
//                 <td className="border p-2 text-center">{course.id}</td>
//                 <td className="border p-2 text-center">{course.name}</td>
//                 <td className="border p-2 text-center">{course.category}</td>
//                 <td className="border p-2 text-center">{course.price}</td>
//                 <td className="border p-2 text-center">{course.timing}</td>
//                 <td className="border p-2 text-center">{course.duration}</td>
//                 <td className="border p-2 text-center">
//                   <button
//                     onClick={() => {
//                       dispatch(setEditingCourse(course));
//                       setIsPopupOpen(true);
//                     }}
//                     className="bg-yellow-600 text-white px-4 py-2 mx-2 rounded-lg hover:bg-yellow-700 transition duration-300"
//                   >
//                     <MdOutlineEdit />
//                   </button>
//                   <button
//                     className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition duration-300"
//                     onClick={() => handlePreview(course)}
//                   >
//                     <MdPreview />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Preview Modal */}
//       {showPreview && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded shadow-md max-w-2xl w-full">
//             <h3 className="text-xl font-semibold mb-4 text-yellow-700">
//               Course Details
//             </h3>
//             <div className="mb-4">
//               <strong>Name:</strong> {previewData.name}
//             </div>
//             <div className="mb-4">
//               <strong>Category:</strong> {previewData.category}
//             </div>
//             <div className="mb-4">
//               <strong>Price:</strong> {previewData.price}
//             </div>
//             <div className="mb-4">
//               <strong>Timing:</strong> {previewData.timing}
//             </div>
//             <div className="mb-4">
//               <strong>Duration:</strong> {previewData.duration}
//             </div>
//             <div className="flex justify-end">
//               <button
//                 type="button"
//                 onClick={() => setShowPreview(false)}
//                 className="bg-red-600 text-white px-4 py-2 rounded"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Courses;
import { useState, useEffect } from "react";
import { ImCross } from "react-icons/im";
import { MdOutlineEdit } from "react-icons/md";
import { MdPreview } from "react-icons/md";

import { useDispatch, useSelector } from "react-redux";
import {
  addCourse,
  setEditingCourse,
  updateCourse,
  clearEditingCourse,
} from "../redux-config/CourseSlice";

const Courses = () => {
  const dispatch = useDispatch();
  const { courses, editingCourse } = useSelector((state) => state.courseData);

  const [courseData, setCourseData] = useState({
    name: "",
    category: "",
    price: "",
    timing: "",
    duration: "",
  });
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [previewData, setPreviewData] = useState(null);

  const categories = [
    "JavaScript",
    "Python",
    "Data Science",
    "DevOps",
    "React",
    "Java",
    "NodeJs",
    "HTML",
    "CSS",
    "Tailwind",
  ];

  const generateCourseId = () => {
    const lastCourse = courses[courses.length - 1];
    const nextIdNumber = lastCourse ? parseInt(lastCourse.id.substring(2)) + 1 : 1;
    return `XC${nextIdNumber.toString().padStart(3, "0")}`;
  };

  useEffect(() => {
    if (editingCourse) {
      setCourseData({
        name: editingCourse.name,
        category: editingCourse.category,
        price: editingCourse.price,
        timing: editingCourse.timing,
        duration: editingCourse.duration,
      });
    } else {
      setCourseData({
        name: "",
        category: "",
        price: "",
        timing: "",
        duration: "",
      });
    }
  }, [editingCourse]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, category, price, timing, duration } = courseData;

    if (name && category && price && timing && duration) {
      if (editingCourse) {
        dispatch(
          updateCourse({
            id: editingCourse.id,
            ...courseData,
          })
        );
        dispatch(clearEditingCourse()); // Reset editing state
      } else {
        const newCourseId = generateCourseId();
        dispatch(
          addCourse({
            id: newCourseId,
            ...courseData,
          })
        );
      }

      // Reset form and close popup
      setCourseData({
        name: "",
        category: "",
        price: "",
        timing: "",
        duration: "",
      });
      setIsPopupOpen(false);
    } else {
      alert("Please fill all fields!");
    }
  };

  // Preview functionality
  const handlePreview = (course) => {
    setPreviewData(course); // Set preview data
    setShowPreview(true); // Show preview modal
  };

  return (
    <div className="p-6">
      <button
        onClick={() => setIsPopupOpen(true)}
        className="bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition duration-300"
      >
        Add Course
      </button>

      {isPopupOpen && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-96 relative">
            <button
              onClick={() => setIsPopupOpen(false)}
              className="absolute top-2 right-2 text-xl text-yellow-500 hover:text-yellow-600"
            >
              <ImCross />
            </button>
            <h2 className="text-xl font-bold mb-4 text-yellow-600">
              {editingCourse ? "Edit Course" : "Add Course"}
            </h2>
            <form onSubmit={handleSubmit} className="mb-6">
              <div className="mb-4">
                <input
                  type="text"
                  value={courseData.name}
                  onChange={(e) => setCourseData({ ...courseData, name: e.target.value })}
                  placeholder="Course Name"
                  className="border-2 border-yellow-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div className="mb-4">
                <select
                  value={courseData.category}
                  onChange={(e) => setCourseData({ ...courseData, category: e.target.value })}
                  className="border-2 border-yellow-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
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
                  value={courseData.price}
                  onChange={(e) => setCourseData({ ...courseData, price: e.target.value })}
                  placeholder="Price"
                  className="border-2 border-yellow-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  value={courseData.timing}
                  onChange={(e) => setCourseData({ ...courseData, timing: e.target.value })}
                  placeholder="Timing (e.g., 10:00 AM - 12:00 PM)"
                  className="border-2 border-yellow-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  value={courseData.duration}
                  onChange={(e) => setCourseData({ ...courseData, duration: e.target.value })}
                  placeholder="Duration (e.g., 4 weeks)"
                  className="border-2 border-yellow-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition duration-300 w-full"
                >
                  {editingCourse ? "Update Course" : "Add Course"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Courses List */}
      <div className="mt-6">
        <h3 className="text-lg font-bold mb-4 text-yellow-600">Courses List</h3>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-gray-700">Course ID</th>
              <th className="border p-2 text-gray-700">Course Name</th>
              <th className="border p-2 text-gray-700">Category</th>
              <th className="border p-2 text-gray-700">Price</th>
              <th className="border p-2 text-gray-700">Timing</th>
              <th className="border p-2 text-gray-700">Duration</th>
              <th className="border p-2 text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id} className="hover:bg-gray-50">
                <td className="border p-2 text-center">{course.id}</td>
                <td className="border p-2 text-center">{course.name}</td>
                <td className="border p-2 text-center">{course.category}</td>
                <td className="border p-2 text-center">{course.price}</td>
                <td className="border p-2 text-center">{course.timing}</td>
                <td className="border p-2 text-center">{course.duration}</td>
                <td className="border p-2 text-center">
                  <button
                    onClick={() => {
                      dispatch(setEditingCourse(course));
                      setIsPopupOpen(true);
                    }}
                    className="bg-yellow-600 text-white px-4 py-2 mx-2 rounded-lg hover:bg-yellow-700 transition duration-300"
                  >
                    <MdOutlineEdit />
                  </button>
                  <button
                    className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition duration-300"
                    onClick={() => handlePreview(course)}
                  >
                    <MdPreview />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-md max-w-2xl w-full">
            <h3 className="text-xl font-semibold mb-4 text-yellow-700">
              Course Details
            </h3>
            <div className="mb-4">
              <strong>Name:</strong> {previewData.name}
            </div>
            <div className="mb-4">
              <strong>Category:</strong> {previewData.category}
            </div>
            <div className="mb-4">
              <strong>Price:</strong> {previewData.price}
            </div>
            <div className="mb-4">
              <strong>Timing:</strong> {previewData.timing}
            </div>
            <div className="mb-4">
              <strong>Duration:</strong> {previewData.duration}
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setShowPreview(false)}
                className="bg-red-600 text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;
