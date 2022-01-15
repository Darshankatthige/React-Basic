import _ from "lodash";
import React, { useEffect, useState } from "react";
import { apiServices } from "../../utils/apiServices";
import "bootstrap/dist/css/bootstrap.min.css";

export const Assignment03 = () => {
  const [userInfo, setUserInfo] = useState({});
  const [userID, setUserId] = useState(1);
  const [errors, setErrors] = useState("");

  //componentDidMount
  useEffect(() => {
    getDataFromApi(); //api call funciton
  }, []);

  const getDataFromApi = async (payload = userID) => {
    let response = await apiServices.get(
      `https://reqres.in/api/users/${payload}`
    );
    if (_.get(response, "data.data", false)) {
      setUserInfo(response.data.data);
    } else {
      setErrors("Something Went Wrong...Pls check UserID");
      setUserInfo({});
    }
  };

  //to get Firstname and Lastname
  const getUserName = (userObject) => {
    const { first_name, last_name } = userObject;
    return `${first_name}  ${last_name}`;
  };

  //Error handle JSX
  const errorHandel = () => {
    return errors ? (
      <div className="font-wieght-bold text-danger">{errors}</div>
    ) : (
      <div className=" font-wieght-bold">Loading...........</div>
    );
  };
  return (
    <div>
      <div className="row p-2">
        <div className="col-md-6 mr-0  ">
          <div class="input-group mb-3">
            <strong>
              2) Write a program to call the below mentioned rest APIs.
            </strong>
            Display the email ids returned by the GET method
            <input
              type="text"
              className="form-control col-md-8 "
              placeholder="Please Enter User ID"
              onChange={(event) => {
                setErrors("");
                setUserId(event.target.value);
              }}
            ></input>
            <button
              className="btn btn-primary"
              onClick={() => {
                getDataFromApi();
              }}
            >
              {"Search"}
            </button>
          </div>

          {errors ? (
            <div className="mt-4 text-danger">
              <i>https://reqres.in/api/users/ {userID}</i>
            </div>
          ) : (
            <div className="mt-4 text-success">
              <i>https://reqres.in/api/users/ {userInfo.id}</i>
            </div>
          )}
        </div>
        <div className="col-md-6 ">
          {!_.isEmpty(userInfo) ? (
            <div className="justify-content-center row">
              <div className="card mt-3  col-md-8 p-2">
                <img src={userInfo.avatar} />
                <div className="font-weight-bold text-center">
                  {getUserName(userInfo)}
                </div>
                <div className="text-center">{userInfo.email}</div>
              </div>
            </div>
          ) : (
            <div className="pt-4"> {errorHandel()} </div>
          )}
        </div>
      </div>
    </div>
  );
};
