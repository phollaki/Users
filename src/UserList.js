import React from "react";
import UserItem from "./UserItem";
import "./UserList.css";
function UserList(props) {
  return (
    <div className="userList">
      <ul>
        <h2>Users</h2>
        {props.users.map((user) => (
          <UserItem key={user.id} name={user.name} age={user.age}></UserItem>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
