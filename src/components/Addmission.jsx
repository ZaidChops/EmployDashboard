import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ImCross } from "react-icons/im";
import {
  addAdmission,
  setEditingAdmission,
  updateAdmission,
  clearEditingAdmission,
} from "../redux-config/AddmissionSlice";

const Addmissions = () => {
  const dispatch = useDispatch();
  const { admissions, editingAdmission } = useSelector((state) => state.admissionData);

  const [formData, setFormData] = useState({
    name: "",
    fathersName: "",
    mothersName: "",
    dob: "",
    mobile: "",
    email: "",
    academicQualification: "",
    marks: "",
    tempAddress: "",
    permAddress: "",
    source: "",
    reference: "",
    photo: null,
  });

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const generateAdmissionId = () => {
    const admissionCount = admissions.length + 1;
    const formattedId = `XCA${String(admissionCount).padStart(3, '0')}`;
    return formattedId;
  };
  useEffect(() => {
    if (editingAdmission) {
      setFormData(editingAdmission);
    } else {
      setFormData({
        name: "",
        fathersName: "",
        mothersName: "",
        dob: "",
        mobile: "",
        email: "",
        academicQualification: "",
        marks: "",
        tempAddress: "",
        permAddress: "",
        source: "",
        reference: "",
        photo: null,
      });
    }
  }, [editingAdmission]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.name &&
      formData.fathersName &&
      formData.mothersName &&
      formData.dob &&
      formData.mobile &&
      formData.email &&
      formData.academicQualification &&
      formData.marks &&
      formData.tempAddress &&
      formData.permAddress &&
      formData.source &&
      formData.reference
    ) {
      if (editingAdmission) {
        dispatch(updateAdmission({ ...formData, id: editingAdmission.id }));
        dispatch(clearEditingAdmission());
      } else {
        dispatch(addAdmission({ ...formData, id: generateAdmissionId() }));
      }

      setIsPopupOpen(false);
    } else {
      alert("Please fill all fields!");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, photo: e.target.files[0] });
  };

  return (
    <div className="p-6">
      <button
        onClick={() => setIsPopupOpen(true)}
        className="bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition duration-300"
      >
        Add Admission
      </button>

      {isPopupOpen && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[600px] relative max-h-[80vh] overflow-y-auto">
            <button
              onClick={() => setIsPopupOpen(false)}
              className="absolute top-2 right-2 text-xl text-gray-500 hover:text-gray-700"
            >
              <ImCross />
            </button>
            <h2 className="text-xl font-bold mb-4 text-yellow-600">
              {editingAdmission ? "Edit Admission" : "Add Admission"}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                {[ 
                  { label: "Name", name: "name" },
                  { label: "Father's Name", name: "fathersName" },
                  { label: "Mother's Name", name: "mothersName" },
                  { label: "Date of Birth", name: "dob", type: "date" },
                  { label: "Mobile", name: "mobile" },
                  { label: "Email", name: "email" },
                  { label: "Academic Qualification", name: "academicQualification" },
                  { label: "Marks", name: "marks" },
                  { label: "Temporary Address", name: "tempAddress" },
                  { label: "Permanent Address", name: "permAddress" },
                  { label: "Source of Admission", name: "source" },
                  { label: "Reference", name: "reference" },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block mb-1 text-yellow-600">{field.label}</label>
                    <input
                      type={field.type || "text"}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      className="border-2 border-yellow-300 p-2 w-full rounded-lg"
                    />
                  </div>
                ))}
                <div className="col-span-2">
                  <label className="block mb-1 text-yellow-600">Upload Photo</label>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="border-2 border-yellow-300 p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 w-full mt-4"
              >
                {editingAdmission ? "Update Admission" : "Add Admission"}
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="mt-6">
        <h3 className="text-lg font-bold mb-4 text-yellow-600">Admissions List</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2 text-yellow-600">ID</th>
                <th className="border p-2 text-yellow-600">Name</th>
                <th className="border p-2 text-yellow-600">Fathers Name</th>
                <th className="border p-2 text-yellow-600">Mothers Name</th>
                <th className="border p-2 text-yellow-600">Date of Birth</th>
                <th className="border p-2 text-yellow-600">Mobile</th>
                <th className="border p-2 text-yellow-600">Email</th>
                <th className="border p-2 text-yellow-600">Academic Qualification</th>
                <th className="border p-2 text-yellow-600">Marks</th>
                <th className="border p-2 text-yellow-600">Temporary Address</th>
                <th className="border p-2 text-yellow-600">Permanent Address</th>
                <th className="border p-2 text-yellow-600">Source</th>
                <th className="border p-2 text-yellow-600">Reference</th>
                <th className="border p-2 text-yellow-600">Photo</th>
                <th className="border p-2 text-yellow-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {admissions.map((admission) => (
                <tr key={admission.id} className="hover:bg-gray-50">
                  <td className="border p-2">{admission.id}</td>
                  <td className="border p-2">{admission.name}</td>
                  <td className="border p-2">{admission.fathersName}</td>
                  <td className="border p-2">{admission.mothersName}</td>
                  <td className="border p-2">{admission.dob}</td>
                  <td className="border p-2">{admission.mobile}</td>
                  <td className="border p-2">{admission.email}</td>
                  <td className="border p-2">{admission.academicQualification}</td>
                  <td className="border p-2">{admission.marks}</td>
                  <td className="border p-2">{admission.tempAddress}</td>
                  <td className="border p-2">{admission.permAddress}</td>
                  <td className="border p-2">{admission.source}</td>
                  <td className="border p-2">{admission.reference}</td>
                  <td className="border p-2">
                    {admission.photo ? (
                      <img
                        src={URL.createObjectURL(admission.photo)}
                        alt="Uploaded"
                        className="h-16 w-16 object-cover"
                      />
                    ) : (
                      "N/A"
                    )}
                  </td>
                  <td className="border p-2">
                    <button
                      onClick={() => {
                        dispatch(setEditingAdmission(admission));
                        setIsPopupOpen(true);
                      }}
                      className="bg-yellow-600 text-white px-2 py-1 rounded-lg hover:bg-yellow-700"
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
    </div>
  );
};

export default Addmissions;
