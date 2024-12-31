import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTrainer, editTrainer } from "../redux-config/TrainerSlice";

const generateUniqueId = (trainers) => {
  const prefix = "XCT";
  const newIdNumber = trainers.length + 1;
  return `${prefix}${String(newIdNumber).padStart(3, "0")}`;
};

const Trainers = () => {
  const dispatch = useDispatch();
  const trainers = useSelector((state) => state.trainers);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    techStack: "",
    joinTime: "",
    batchTime: "",
    duration: "",
  });

  // (trainer = null): This part defines the parameters of the function. It takes one parameter named trainer, which defaults to null if no argument is provided when the function is called. This means that if the function is called without an argument, trainer will be null.

  const handleOpen = (trainer = null) => {
    if (trainer) {
      setFormData(trainer);
    } else {
      setFormData({
        id: "",
        name: "",
        email: "",
        techStack: "",
        joinTime: "",
        batchTime: "",
        duration: "",
      });
    }
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (formData.id) {
      dispatch(editTrainer(formData));
    } else {
      const newId = generateUniqueId(trainers);
      dispatch(addTrainer({ ...formData, id: newId }));
    }
    handleClose();
  };

  return (
    <div className="p-6">
      <button
        className="bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition duration-300"
        onClick={() => handleOpen()}
      >
        Add Trainer
      </button>
      <div className="overflow-x-auto mt-6">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-gray-700">ID</th>
              <th className="border p-2 text-gray-700">Name</th>
              <th className="border p-2 text-gray-700">Email</th>
              <th className="border p-2 text-gray-700">Tech Stack</th>
              <th className="border p-2 text-gray-700">Join Time</th>
              <th className="border p-2 text-gray-700">Batch Time</th>
              <th className="border p-2 text-gray-700">Duration</th>
              <th className="border p-2 text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {trainers.map((trainer) => (
              <tr key={trainer.id} className="hover:bg-gray-50">
                <td className="border p-2 text-center">{trainer.id}</td>
                <td className="border p-2 text-center">{trainer.name}</td>
                <td className="border p-2 text-center">{trainer.email}</td>
                <td className="border p-2 text-center">{trainer.techStack}</td>
                <td className="border p-2 text-center">{trainer.joinTime}</td>
                <td className="border p-2 text-center">{trainer.batchTime}</td>
                <td className="border p-2 text-center">{trainer.duration}</td>
                <td className="border p-2 text-center">
                  <button className="bg-yellow-600 text-white px-4 py-2 mx-2 rounded-lg hover:bg-yellow-700 transition duration-300"
                    onClick={() => handleOpen(trainer)} >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {open && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4 text-yellow-600">
              {formData.id ? "Edit Trainer" : "Add Trainer"}
            </h2>
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  className="w-full border-2 border-yellow-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  className="w-full border-2 border-yellow-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="techStack"
                  className="w-full border-2 border-yellow-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Tech Stack"
                  value={formData.techStack}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="joinTime"
                  className="w-full border-2 border-yellow-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Join Time"
                  value={formData.joinTime}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="batchTime"
                  className="w-full border-2 border-yellow-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Batch Time"
                  value={formData.batchTime}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="duration"
                  className="w-full border-2 border-yellow-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Duration"
                  value={formData.duration}
                  onChange={handleChange}
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition duration-300 mr-2"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300"
                  onClick={handleClose}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Trainers;
