const Dashboard = () => {
  return (
    <>
      <div className="h-auto w-full flex flex-col bg-yellow-300 p-6 mt-6 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div className="card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out cursor-pointer transform hover:scale-105">
            <div className="container text-center text-gray-700">
              <h4 className="text-xl font-semibold"><b>Total Admission</b></h4>
              <p className="py-4 text-2xl text-yellow-600">(3)</p>
            </div>
          </div>
          <div className="card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out cursor-pointer transform hover:scale-105">
            <div className="container text-center text-gray-700">
              <h4 className="text-xl font-semibold"><b>Today Admission</b></h4>
              <p className="py-4 text-2xl text-yellow-600">(3)</p>
            </div>
          </div>
          <div className="card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out cursor-pointer transform hover:scale-105">
            <div className="container text-center text-gray-700">
              <h4 className="text-xl font-semibold"><b>Total Enquiries</b></h4>
              <p className="py-4 text-2xl text-yellow-600">(3)</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out cursor-pointer transform hover:scale-105">
            <div className="container text-center text-gray-700">
              <h4 className="text-xl font-semibold"><b>Today Enquiries</b></h4>
              <p className="py-4 text-2xl text-yellow-600">(3)</p>
            </div>
          </div>
          <div className="card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out cursor-pointer transform hover:scale-105">
            <div className="container text-center text-gray-700">
              <h4 className="text-xl font-semibold"><b>Total Admission</b></h4>
              <p className="py-4 text-2xl text-yellow-900">(3)</p>
            </div>
          </div>
          <div className="card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out cursor-pointer transform hover:scale-105">
            <div className="container text-center text-gray-700">
              <h4 className="text-xl font-semibold"><b>Total Admission</b></h4>
              <p className="py-4 text-2xl text-yellow-600">(3)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-300 text-white mt-6 p-4 rounded-lg shadow-lg hover:shadow-xl cursor-pointer transition duration-300 ease-in-out w-60 mx-auto">
        <button className="w-60 font-semibold text-lg">Add Courses</button>
      </div>

      <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
        <h3 className="text-center text-yellow-600 text-2xl font-bold mb-6">Courses</h3>
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="py-3 px-6 border-b text-left text-gray-700">Course Name</th>
              <th className="py-3 px-6 border-b text-left text-gray-700">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-3 px-6 border-b text-gray-700">Backend</td>
              <td className="py-3 px-6 border-b text-gray-700">
                Learn server-side development with Node.js, Express, and databases.
              </td>
            </tr>
            <tr>
              <td className="py-3 px-6 border-b text-gray-700">Frontend</td>
              <td className="py-3 px-6 border-b text-gray-700">
                Master the basics of HTML, CSS, and JavaScript for building interactive web pages.
              </td>
            </tr>
            <tr>
              <td className="py-3 px-6 border-b text-gray-700">Data Analytics</td>
              <td className="py-3 px-6 border-b text-gray-700">
                Learn data processing and visualization using Python and tools like Pandas and Matplotlib.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashboard;
