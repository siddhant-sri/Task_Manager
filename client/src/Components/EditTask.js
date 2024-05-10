import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";

const EditTask = ({ task, getTask }) => {
  //   console.log("edot", task);
  //   console.log("gettask", getTask);

  const [taskName, setTaskName] = useState(task.name);
  const [description, setDescription] = useState(task.description);

  const updateTask = async (e) => {
    e.preventDefault();
    try {
      let body = {};
      body.name = taskName;
      body.description = description;
      const response = await fetch(
        `http://localhost:5000/task/${task.task_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      console.log("res", response);
      if (response.ok) {
        toast.success("Task Updated", {
          position: "top-center",
          autoClose: 3000,
        });
      }
      //   $(".modalForm").modal("hide");
      getTask();
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-warning fw-bold bg-gradient text-white"
        data-bs-toggle="modal"
        data-bs-target={`#id${task.task_id}`}
      >
        Edit
      </button>

      {/* <!-- Modal --> */}

      <div
        className="modal fade modalForm"
        id={`id${task.task_id}`}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Edit Task
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="d-flex align-items-center">
                <div>Name : </div>
                <div className="mx-5">
                  <input
                    type="text"
                    className="form-control my-2"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <div className="d-flex align-items-center">
                  <div>Description : </div>
                  <div className="mx-2">
                    <input
                      type="text"
                      className="form-control my-2"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary fw-bold bg-gradient"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-warning fw-bold bg-gradient text-white"
                data-bs-dismiss="modal"
                onClick={(e) => updateTask(e)}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTask;
