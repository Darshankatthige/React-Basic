import React, { useState, useEffect, useRef } from "react";
import { useSelector,  useDispatch } from "react-redux";
import { apiServices } from "../../src/utils/apiServices";
import "bootstrap/dist/css/bootstrap.min.css";
import _ from "lodash";
import { increment } from "../actions";

export const UserProfile = () => {
  const [usersData, setUserData] = useState([]);
  const [offSet, setOffSet] = useState(0);
  const count = useSelector((state) => {
    return state.counter;
  });
  const dispatch = useDispatch();
  const userRef = useRef();
  useEffect(() => {
    geuserList();
  }, []);

  function geuserList(pageNumber) {
    setOffSet(offSet + 1);
    pageNumber = offSet;
    apiServices
      .get(`https://randomuser.me/api?page=${pageNumber}`)
      .then((response) => {
        let userResponse = response.data.results;
        setUserData([...usersData, ...userResponse]);
        console.log("userResponse", userResponse);
        userRef.current.focus();
      })
      .catch((error) => [console.log("Error", error)]);
  }
  const getNameOftheUser = (UserInfo) => {
    const {
      name: { first, last },
    } = UserInfo;
    return `${first} ${last}`;
  };
  const getuserImage = (userInfo) => {
    return userInfo.picture.large;
  };

  return (
    <div className="">
      <div className="text-right pull-right">
        {count} Count :
        <button
          className="btn-primary"
          varient="primary"
          onClick={() => {
            geuserList();
          }}
        >
          Add Random User
        </button>
        <button
          className="btn-primary"
          varient="primary"
          onClick={() => {
            dispatch(increment());
          }}
        >
          Increment
        </button>
      </div>

      <div className=" row">
        {usersData &&
          usersData &&
          _.map(usersData, (user) => (
            <div className="col-md-1">
              <div className="card p-2" ref={userRef}>
                <img src={getuserImage(user)} />
              </div>
              <div className="user text-dark font-weight-bold">
                {getNameOftheUser(user)}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
