import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

import { ToastContainer, toast } from "react-toastify";

// Formik Form
const initialValues = {
  email: "",
  password: "",
};

const schema = Yup.object({
  email: Yup.string()
    .required("Email is required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is required field")
    .min(8, "Password must be at least 8 characters"),
});

const Login = () => {
  const navigate = useNavigate();
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
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={async (values) => {
              console.log("val", values);
              const response = await fetch("http://localhost:5000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
              });
              console.log("resFormik", response);
              // Handle successful response
              if (response.ok) {
                toast.success("User Login Successful", {
                  position: "top-center",
                  autoClose: 2000,
                });
              }
              const userData = await response.json();
              console.log("userData", userData);
              if (userData.message === "success") {
                localStorage.setItem("token", userData.token);
                setTimeout(() => {
                  navigate("/main");
                }, 2000);
              } else {
                toast.error("Email or Password is incorrect", {
                  position: "top-center",
                  autoClose: 3000,
                });
              }
            }}
          >
            {(formik) => (
              console.log("formik", formik),
              console.log("errors", formik.errors),
              (
                <form className="container" onSubmit={formik.handleSubmit}>
                  <div className="text-center my-3">
                    <h2 className="text-center my-3">Login</h2>
                    {/* <Link to="/">
                  <button>Back to Home</button>
                </Link> */}
                  </div>
                  <div className="my-3">
                    <label htmlFor="email" className="form-label">
                      E-mail:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <span className="text-danger">
                      {formik.errors.email &&
                        formik.touched.email &&
                        formik.errors.email}
                    </span>
                  </div>
                  <div className="my-3">
                    <label htmlFor="password" className="form-label">
                      Password:
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {/* <span className="text-danger">{formik.errors.password && formik.touched.password && formik.errors.password}</span> */}
                    {formik.errors.password && formik.touched.password ? (
                      <span className="text-danger">
                        {formik.errors.password}
                      </span>
                    ) : null}
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-success fw-bold w-100 bg-gradient"
                    >
                      Login
                    </button>
                  </div>
                </form>
              )
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Login;
