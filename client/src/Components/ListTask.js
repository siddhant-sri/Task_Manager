import { useEffect, useState } from "react";
import EditTask from "./EditTask";

import { ToastContainer, toast } from "react-toastify";

const ListTask = () => {
  const [taskList, setTaskList] = useState([]);

  // delete task

  const deleteTask = async (id) => {
    try {
      const deleteTask = await fetch("http://localhost:5000/task/" + id, {
        method: "DELETE",
      });
      console.log("delete", deleteTask);
      if (deleteTask) {
        toast.info("Task Deleted", {
          position: "top-center",
          autoClose: 3000,
        });
      }
      setTaskList(taskList.filter((el) => el.task_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getTask = async () => {
    try {
      const url = "http://localhost:5000/task";
      const response = await fetch(url);
      const jsonData = await response.json();
      //   console.log("object", jsonData);
      setTaskList(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTask();
  }, []);

  return (
    <>
      <ToastContainer />
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th scope="col">Sr No.</th>
            <th scope="col">Task Name</th>
            <th scope="col">Description</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {taskList.map((task, index) => (
            <tr key={task.task_id}>
              <td>{index + 1}</td>
              <td>{task.name}</td>
              <td>{task.description}</td>
              <td>
                <EditTask task={task} getTask={getTask} />
              </td>
              <td>
                <button
                  className="btn btn-danger fw-bold bg-gradient"
                  onClick={() => deleteTask(task.task_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListTask;
