import { useState } from "react";
import "./App.css";
import UserInput from "./UserInput";
import UserList from "./UserList";
function App() {
  const [users, setUsers] = useState([
    { name: "Péter", age: 31, id: "user1" },
    { name: "László", age: 25, id: "user2" },
  ]);
  const userDataEventHandler = (e) => {
    setUsers((prevUsers) => {
      const updateUsers = [...prevUsers];
      updateUsers.unshift({
        name: e.name,
        age: e.age,
        id: Math.random().toString(),
      });
      return updateUsers;
    });
  };

  return (
    <div className="app">
      <div className="app__input">
        <UserInput getData={userDataEventHandler} />
        <UserList users={users} />
      </div>
    </div>
  );
}

export default App;
