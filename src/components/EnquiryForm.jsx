import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineEdit } from "react-icons/md";
import { MdPreview } from "react-icons/md";
import axios from "axios";
import {
  addData,
  editData,
  updateUser,
  showData,
} from "../redux-config/UserSlice";

const EnquiryForm = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData.allData);
  const editUser = useSelector((state) => state.userData.editUser);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNo: "",
    course: "",
    status: "pending",
    demo: false,
  });

  const [showModal, setShowModal] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [previewData, setPreviewData] = useState(null);

  const generateEnquiryId = () => {
    const lastEnquiry = userData[userData.length - 1];
    const nextIdNumber = lastEnquiry
      ? parseInt(lastEnquiry.enquiryId.substring(2)) + 1
      : 1;
    return `XCE${nextIdNumber.toString().padStart(3, "0")}`;
  };

  const fetchEnquiries = async () => {
    try {
      const response = await axios.get("http://localhost:9000/enquiry/list");
      const data = response.data.enquiry || [];
      dispatch(showData(data));
    } catch (error) {
      console.error("Error fetching enquiries:", error);
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
        await axios.put(
          `http://localhost:9000/enquiry/${editUser.data._id}`,
          formData
        );
        dispatch(updateUser({ ...formData, id: editUser.data._id }));
      } else {
        const response = await axios.post(
          "http://localhost:9000/enquiry/enquiry-form",
          formData
        );
        const EnquiryID = generateEnquiryId();
        dispatch(addData({ ...response.data, enquiryId: EnquiryID }));
      }
      setShowModal(false);
      resetForm();
      fetchEnquiries();
    } catch (error) {
      console.error("Error submitting enquiry:", error);
    }
  };

  const handlePreview = (enquiry) => {
    setPreviewData(enquiry);
    setShowPreview(true);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      contactNo: "",
      course: "",
      status: "pending",
      demo: false,
    });
    setShowModal(false);
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  useEffect(() => {
    if (editUser.isEdit) {
      setFormData({
        name: editUser.data.name || "",
        email: editUser.data.email || "",
        contactNo: editUser.data.contactNo || "",
        course: editUser.data.course || "",
        status: editUser.data.status || "pending",
        demo: editUser.data.demo || false,
      });
      setShowModal(true);
    }
  }, [editUser]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-yellow-700">Enquiry Form</h2>
      <button
        onClick={() => {
          resetForm();
          setShowModal(true);
        }}
        className="bg-yellow-600 text-white p-2 rounded mb-4 hover:bg-yellow-700"
      >
        Add Enquiry
      </button>

      <h3 className="text-xl font-semibold mb-4 text-yellow-600">
        Enquiry Details
      </h3>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2 text-yellow-600">ID</th>
            <th className="border p-2 text-yellow-600">Name</th>
            <th className="border p-2 text-yellow-600">Email</th>
            <th className="border p-2 text-yellow-600">Contact</th>
            <th className="border p-2 text-yellow-600">Course</th>
            <th className="border p-2 text-yellow-600">Status</th>
            <th className="border p-2 text-yellow-600">Demo</th>
            <th className="border p-2 text-yellow-600">Actions</th>
          </tr>
        </thead>
        <tbody>
          {userData.length > 0 ? (
            userData.map((enquiry, index) => (
              <tr key={index} className="text-center">
                <td className="border p-2">{enquiry.enquiryId}</td>
                <td className="border p-2">{enquiry.name}</td>
                <td className="border p-2">{enquiry.email}</td>
                <td className="border p-2">{enquiry.contactNo}</td>
                <td className="border p-2">{enquiry.course}</td>
                <td className="border p-2">{enquiry.status}</td>
                <td className="border p-2">{enquiry.demo ? "Yes" : "No"}</td>
                <td className="border p-2">
                  <button
                    className="bg-yellow-400 text-white px-2 py-1 rounded mr-2 hover:bg-yellow-500"
                    onClick={() => dispatch(editData(enquiry))}
                  >
                    <MdOutlineEdit />
                  </button>
                  <button
                    className="bg-yellow-400 text-white px-2 py-1 rounded hover:bg-yellow-500"
                    onClick={() => handlePreview(enquiry)}
                  >
                    <MdPreview />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="text-center p-4 text-yellow-600">
                No enquiries found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-100 p-6 rounded shadow-md max-w-2xl w-full mt-10">
            <h3 className="text-xl font-semibold mb-4 text-yellow-700">
              {editUser.isEdit ? "Edit Enquiry" : "Add Enquiry"}
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2 text-yellow-600">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border p-2 rounded text-yellow-700"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-yellow-600">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border p-2 rounded text-yellow-700"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-yellow-600">Contact No</label>
                <input
                  type="text"
                  name="contactNo"
                  value={formData.contactNo}
                  onChange={handleChange}
                  className="w-full border p-2 rounded text-yellow-700"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-yellow-600">Course</label>
                <input
                  type="text"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full border p-2 rounded text-yellow-700"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-yellow-600">Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full border p-2 rounded text-yellow-700"
                >
                  <option value="pending">Pending</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
              <div className="mb-4 flex items-center">
                <label className="block mb-2 mr-4 text-yellow-600">Demo</label>
                <input
                  type="checkbox"
                  name="demo"
                  checked={formData.demo}
                  onChange={handleChange}
                  className="h-5 w-5"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-gray-400 text-white px-4 py-2 rounded mr-2 hover:bg-gray-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700"
                >
                  {editUser.isEdit ? "Update" : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showPreview && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-100 p-6 rounded shadow-md max-w-2xl w-full">
            <h3 className="text-xl font-semibold mb-4 text-yellow-700">
              Enquiry Details
            </h3>
            <div className="mb-4">
              <strong>Name:</strong> {previewData.name}
            </div>
            <div className="mb-4">
              <strong>Email:</strong> {previewData.email}
            </div>
            <div className="mb-4">
              <strong>Contact Number:</strong> {previewData.contactNo}
            </div>
            <div className="mb-4">
              <strong>Course:</strong> {previewData.course}
            </div>
            <div className="mb-4">
              <strong>Status:</strong> {previewData.status}
            </div>
            <div className="mb-4">
              <strong>Demo:</strong> {previewData.demo ? "Yes" : "No"}
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setShowPreview(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded"
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

export default EnquiryForm;
