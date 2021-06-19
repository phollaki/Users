import React from "react";
import "./UserItem.css";
function UserItem(props) {
  return (
    <div className="userItem">
      <li>
        <div className="userItem__name">
          <p>Name: </p>
          {props.name}
        </div>
        <div className="userItem__age">
          <p>Age: </p>
          {props.age}
        </div>
      </li>
    </div>
  );
}

export default UserItem;
