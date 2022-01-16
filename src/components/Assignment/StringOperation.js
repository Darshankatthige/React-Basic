import React, { useState, useEffect } from "react";

export const StringOperation = () => {
  const [string1, setString1] = useState("ABC");
  const [string2, setString2] = useState("A");
  const [outPutStr1, setoutPutStr1] = useState(null);
  const [outPutStr2, setoutPutStr2] = useState(null);

  useEffect(() => {
    computeString();
  }, []);

  function computeString() {
    let outputString1 = "";

    for (let i = 0; i < string1.length; i++) {
      let isExist = 0;
      for (let j = 0; j < string2.length; j++) {
        if (string1[i] != string2[j]) {
          isExist = isExist + 1;
          if (j == string2.length - 1 && isExist > 0) {
            outputString1 = outputString1.concat(string1[i]);
          }
        } else if (string1[i] == string2[j]) {
          break;
        }
      }
    }
    setoutPutStr1(outputString1);
    let opString2 = "";
    for (let i = 0; i < string2.length; i++) {
      let isExist = 0;
      for (let j = 0; j < string1.length; j++) {
        if (string2[i] != string1[j]) {
          isExist = isExist + 1;
          if (j == string1.length - 1 && isExist > 0) {
            opString2 = opString2.concat(string2[i]);
          }
        } else if (string2[i] == string1[j]) {
          break;
        }
      }
    }

    setoutPutStr2(opString2);
  }
  return (
    <div className=" p-2">
      <div>
        <strong>
         1) Write a program which takes two strings as input from the user
          (string1 and str2).
        </strong>
        <ul>
          <li>This program should print two strings as output (op1 and op2)</li>
          <li>
            op1 should contain all the characters which are present in string1
            but NOT present in str2
          </li>
          <li>
            op2 should contain all the characters which are present in str2 but
            NOT present in string1.
          </li>
        </ul>
      </div>

      <div className="row">
        <div className="col-md-4">
          <label>String 1</label>
          <input
            type="text"
            className="form-control"
            value={string1}
            onChange={(event) => {
              setString1(event.target.value);
            }}
          ></input>
        </div>
        <div className="col-md-4">
          <label>String 2</label>
          <input
            type="text"
            className="form-control"
            value={string2}
            onChange={(event) => {
              setString2(event.target.value);
            }}
          ></input>
        </div>
        <div className="col-md-4 pt-4 mt-2">
          <button
            className="btn btn-primary"
            onClick={() => {
              computeString();
            }}
          >
            Compute
          </button>
        </div>
      </div>

      <div className="row mt-3 p-2">
        <div className=" col-md-4 mr-3 d-flex">
          OutPutString 1:{" "}
          <div className="font-weight-bold">
            {outPutStr1 ? outPutStr1 : "null"}
          </div>
        </div>
        <div className=" col-md-4 d-flex">
          <span>OutPutString 2 : </span>{" "}
          <div className="font-weight-bold">
            {outPutStr2 ? outPutStr2 : "null"}
          </div>
        </div>
      </div>
    </div>
  );
};
