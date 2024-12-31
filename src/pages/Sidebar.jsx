import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="fixed top-16 left-0 w-64 h-full bg-yellow-300 text-gray-800 shadow-lg p-4 space-y-6">
      <ul>
        <li>
          <Link
            to="/"
            className="block text-lg py-3 hover:text-gray-900 hover:bg-yellow-300 rounded-lg transition duration-300"
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/enquiry-form"
            className="block text-lg py-3 hover:text-gray-900 hover:bg-yellow-300 rounded-lg transition duration-300"
          >
            Enquiry Form
          </Link>
        </li>
        <li>
          <Link
            to="/courses"
            className="block text-lg py-3 hover:text-gray-900 hover:bg-yellow-300 rounded-lg transition duration-300"
          >
            Courses
          </Link>
        </li>
        <li>
          <Link
            to="/trainers"
            className="block text-lg py-3 hover:text-gray-900 hover:bg-yellow-300 rounded-lg transition duration-300"
          >
            Trainers
          </Link>
        </li>
        <li>
          <Link
            to="/addmission"
            className="block text-lg py-3 hover:text-gray-900 hover:bg-yellow-300 rounded-lg transition duration-300"
          >
            Admission
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
