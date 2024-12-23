
const Dashboard = () => {
  return (
    <>
      <div className="h-50% w-full flex flex-col bg-black p-4 mt-2">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="card bg-white p-4 rounded shadow hover:shadow-lg transition duration-300 ease-in-out cursor-pointer transform hover:scale-105">
            <div className="container text-center">
              <h4><b>Total Admission</b></h4>
              <p className="py-5">(3)</p>
            </div>
          </div>
          <div className="card bg-white p-4 rounded shadow  hover:shadow-lg transition duration-300 ease-in-out cursor-pointer transform hover:scale-105">
            <div className="container text-center">
              <h4><b>Today Admission</b></h4>
              <p className="py-5">(3)</p>
            </div>
          </div>
          <div className="card bg-white  hover:shadow-lg transition duration-300 ease-in-out cursor-pointer transform hover:scale-105 p-4 rounded shadow">
            <div className="container text-center">
              <h4><b>Total Enquiries</b></h4>
              <p className="py-5">(3)</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="card bg-white p-4 rounded shadow  hover:shadow-lg transition duration-300 ease-in-out cursor-pointer transform hover:scale-105">
            <div className="container text-center">
              <h4><b>Today Enquiries</b></h4>
              <p className="py-5">(3)</p>
            </div>
          </div>
          <div className="card bg-white p-4 rounded shadow  hover:shadow-lg transition duration-300 ease-in-out cursor-pointer transform hover:scale-105">
            <div className="container text-center">
              <h4><b>Total Admission</b></h4>
              <p className="py-5">(3)</p>
            </div>
          </div>
          <div className="card bg-white p-4 rounded shadow  hover:shadow-lg transition duration-300 ease-in-out cursor-pointer transform hover:scale-105">
            <div className="container text-center">
              <h4><b>Total Admission</b></h4>
              <p className="py-5">(3)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black text-white mt-3 p-4 rounded shadow w-32 h-12 cursor-pointer">
        <button>Add Courses</button>
      </div>
    </>
  );
};

export default Dashboard;