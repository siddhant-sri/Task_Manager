import React, { useState } from "react";

import { ToastContainer, toast } from "react-toastify";

const InputTask = () => {
  const [name, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      if (!name.trim() || !description.trim()) {
        // Checking if it is not empty
        toast.warning("Please enter task name and description.", {
          position: "top-center",
          autoClose: 3000,
        });
        return; // Exit the function early if name or description is empty
      } else {
        const body = { name, description };
        const response = await fetch("http://localhost:5000/task", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "access-token": localStorage.getItem("token"),
          },
          body: JSON.stringify(body),
        });
        console.log(response);
        if (response.ok) {
          toast.success("Task Added", {
            position: "top-center",
            autoClose: 3000,
          });
        }
        window.location = "/main";
        setTaskName("");
        setDescription("");
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      {/* <h1 className="text-center mt-3">Task Manager</h1> */}
      <ToastContainer />
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control mx-1"
          value={name}
          name="taskName"
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Task name"
        />
        <input
          type="text"
          className="form-control mx-1"
          value={description}
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <button className="btn btn-success fw-bold bg-gradient">Add</button>
      </form>
    </>
  );
};

export default InputTask;
