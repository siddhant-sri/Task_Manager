import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

import { ToastContainer, toast } from "react-toastify";

const Registration = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const navigate = useNavigate();

  // Formik Form

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object({
      firstName: Yup.string().min(3).max(10, "Must be 10 characters or less"),
      lastName: Yup.string()
        .min(3)
        .max(15, "Must be 15 character or less")
        .required("Please enter last name"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Must be minimum of 8 characters")
        .required("Please enter your password"),
    }),
    onSubmit: async (values, action) => {
      console.log("values", values);
      const response = await fetch("http://localhost:5000/registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      console.log("response", response);
      if (response.ok) {
        toast.success("User Registration Successful", {
          position: "top-center",
          autoClose: 3000,
        });
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      }
    },
  });

  return (
    <>
      <div>
        <ToastContainer />
      </div>
      <div
        className="container-fluid d-flex justify-content-center align-items-center vh-100"
        style={{
          backgroundImage: `url('https://telegra.ph/file/abbea308d79b704d847ad.jpg')`,
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <div
          className="card p-5"
          style={{
            width: "50%",
            maxWidth: "500px",
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 10px 15px",
          }}
        >
          <div className="text-center mb-3">
            <h2>Sign Up</h2>
          </div>
          <div className="card-body">
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">
                  First Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">
                  *Last Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.lastName && formik.touched.lastName ? (
                  <span className="text-danger">{formik.errors.lastName}</span>
                ) : null}
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  *Email:
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.email && formik.touched.email ? (
                  <span className="text-danger">{formik.errors.email}</span>
                ) : null}
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  *Password:
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.password && formik.touched.password ? (
                  <span className="text-danger">{formik.errors.password}</span>
                ) : null}
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-success fw-bold w-100 bg-gradient"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
