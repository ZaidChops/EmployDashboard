import { CiLogin } from "react-icons/ci";
// import {Lin}
const Navbar = () => {
  return (
    <div className="fixed w-full left-0 bg-yellow-500 text-white p-4 shadow-md z-20">
      <nav className="flex justify-between items-center px-6">
        {/* <h1 className="text-xl font-bold text-white">MyApp</h1> */}
        {/* <Link to="/public/logo.png">My App</Link> */}
        <h1>My App</h1>
        <button className="ml-auto text-white bg-yellow-700 rounded-full px-4 py-2 font-bold text-2xl">
          <CiLogin />
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
