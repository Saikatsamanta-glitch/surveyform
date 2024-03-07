import React, { useEffect, useState } from "react";
import { survey } from "../Resources/survey";
import { useParams } from "react-router-dom";
export default function Survey() {
  const [optSel, setOptSel] = useState({});
  const [showres, setShowres] = useState(false);
  const { id } = useParams();
  const [option, setOptions] = useState({});
  function fetch_surveydata() {
    const data = survey.filter((v) => {
      if (v.id == id) {
        return v;
      }
    });

    setOptions(data[0]);
  }

  useEffect(fetch_surveydata);
  return (
    <div className="h-75 d-flex justify-content-center align-items-center">
      <div className="survey-form shadow p-4 d-flex flex-column justify-content-between">
        <h2>{option.question}</h2>
        <div className="d-flex flex-column align-items-start gap-4 mt-3 w-100">
          {option?.options?.map((v, i) => (
            <div className="d-flex" key={i}>
              <input
                type="radio"
                name="options"
                className="me-2"
                id={i}
                onClick={() => {
                  setOptSel(v);
                }}
              />
              <label htmlFor={i}>
                <h5> {v.option}</h5>
                <div className={`progress bg-primary ${showres?'d-block':'d-none'}`} style={{width:`${v.percentage+30}px`}}></div>
              </label>
            </div>
          ))}
        </div>
        <div className=" d-flex justify-content-between">
          <div className="info"></div>
          <button className="vote btn btn-primary" onClick={()=>{
            setShowres(true);
            setOptions({...option, ...{optSel, percentage: 100}})
          }}>Vote</button>
        </div>
      </div>
    </div>
  );
}
/*

        
        
          
        

        

 */
