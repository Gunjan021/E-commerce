import React from "react";
import { Link } from "react-router-dom";

function FormController(props) {
  const onNext = () => {
    localStorage.setItem("1st data----->", JSON.stringify(props.formdata2));
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <Link to={props.prevpath}>
        <button className="btn" type="button">
          Previous
        </button>
      </Link>
      <Link to={props.nextpath}>
        <button className="btn" onClick={onNext} type="button">
          Next
        </button>
      </Link>
    </div>
  );
}

export default FormController;
