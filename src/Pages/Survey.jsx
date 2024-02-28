import React, { useState } from "react";

export default function Survey() {
  const [optSel, setOptSel] = useState("");
  console.log(optSel)
  const [option, setOptions] =
    useState(["Javascript 🔥", "Python 🐍", "Java 🙏", "C /C++ ⭐"]);
  return (
    <div className="h-75 d-flex justify-content-center align-items-center">
      <div className="survey-form shadow p-4 d-flex flex-column justify-content-between">
        <h2>Which Programming Language do you like ?</h2>
        <div className="d-flex flex-column align-items-start gap-4 mt-3 w-100">
          {option.map((v, i) => (
            <div className="d-flex" key={i}>
              <input
                type="radio"
                name="options"
                className="me-2"
                id={i}
                onClick={()=>{setOptSel(v)}}
              />
              <label htmlFor={i}>
                <h5> {v}</h5>
              </label>
            </div>
          ))}
        </div>

        <div className=" d-flex justify-content-between">
          <div className="info"></div>
          <button className="vote btn btn-primary">Vote</button>
        </div>
      </div>
    </div>
  );
}
