import React from "react";

function FormStepController(props) {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            position: "relative",
            borderRadius: "50%",
            border: "2px solid black",
            padding: "12px 20px",
            background: "lightgreen",
            transition: "ease-in-out 2s",
          }}
        >
          1
        </div>
        <div
          style={{
            position: "relative",
            borderRadius: "50%",
            border: "2px solid black",
            padding: "12px 20px",
            background: "white",
            backgroundColor: props.curpath !== "/" ? "lightgreen" : "white",
            transition: "ease-in-out 2s",
          }}
        >
          2
        </div>
        <div
          style={{
            position: "relative",
            borderRadius: "50%",
            border: "2px solid black",
            padding: "12px 20px",
            background: "white",
            backgroundColor: props.curpath === "/2" ? "lightgreen" : "white",
            transition: "ease-in-out 2s",
          }}
        >
          3
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          border: "2px solid gray",
          width: "35rem",
          top: "175px",
          zIndex: "-1",
        }}
      ></div>
    </div>
  );
}

export default FormStepController;
