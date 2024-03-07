import React, { useRef, useState } from "react";
import { survey } from "../Resources/survey";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('')
  // useState ---> whenever the state changes it will re-render the component
  const search_ref = useRef();
  console.log("re-render");
  return (
    <div className="container">
      <div className="d-flex">
        <h1 className="mb-4">Top survey's</h1>
        <div className="d-flex search ms-auto mt-1">
          <input
            className="f mr-sm-2 rounded"
            type="search"
            placeholder="Search"
            aria-label="Search"
            ref={search_ref}
            onKeyDown={(e)=>{
              if(e.key == 'Enter'){
                setSearch(search_ref.current.value)
              }
            }}
          />
          <button className="btn btn-outline-primary my-2 my-sm-0" onClick={()=>{setSearch(search_ref.current.value)}}>
            Search
          </button>
        </div>
      </div>

      <div className="d-flex flex-wrap gap-3">
        {survey.map((v) => {
          if (v.name.toLowerCase().includes(search)) {
            return (
              <div
                key={v.id}
                onClick={() => {
                  navigate(`/survey/${v.id}`);
                }}
                className="survey rounded shadow p-4"
              >
                {v.name}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
