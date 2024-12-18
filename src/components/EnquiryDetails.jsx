import  { useContext } from "react";
import { EnquiryContext } from "./EnquiryContext";

const EnquiryDetails = () => {
  const { enquiries } = useContext(EnquiryContext);

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-6">Enquiry Details</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">S.No</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Contact</th>
            <th className="border p-2">Course</th>
          </tr>
        </thead>
        <tbody>
          {enquiries.map((enquiry, index) => (
            <tr key={enquiry.id}>
              <td className="border p-2">{index + 1}</td>
              <td className="border p-2">{enquiry.name}</td>
              <td className="border p-2">{enquiry.email}</td>
              <td className="border p-2">{enquiry.contactNo}</td>
              <td className="border p-2">{enquiry.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EnquiryDetails;
