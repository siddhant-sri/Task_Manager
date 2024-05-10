import InputTask from "./InputTask";
import ListTask from "./ListTask";
import NavBar from "./Navbar";

const Content = () => {
  return (
    <div style={{ backgroundColor: "#f5f9ff", minHeight: "100vh" }}>
      <div
        style={{
          backgroundColor: "#ffffff",
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 10px 15px",
          height: "80px",
        }}
      >
        <NavBar />
      </div>
      <div className="container content p-3 m-3">
        <div>
          <InputTask />
        </div>
        <div>
          <ListTask />
        </div>
      </div>
    </div>
  );
};

export default Content;
