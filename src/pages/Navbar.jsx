// // import React from 'react'

// const Navbar = () => {
//   return (
//    <>
//    <nav className='d:flex md:flex md:justify-evenly bg-gray-700 text-white py-2  w-full z-10 '>

// <a>Home</a>
// <a>About</a>
// <a>Courses</a>

//    </nav>
//    </>
//   )
// }

// export default Navbar
// import React from "react";

const Navbar = () => {
  return (
    <div className="fixed w-full left-0 text-center bg-gray-600 text-white p-4">
      {/* <h1 className="text-2xl font-bold">Enquiry Management System</h1> */}
      <nav className='d:flex md:flex md:justify-evenly  text-white py-2  w-full z-10 '>
 <a>Home</a>
  <a>About</a>
  <a>Courses</a>

   </nav>
    </div>
  );
};

export default Navbar;
