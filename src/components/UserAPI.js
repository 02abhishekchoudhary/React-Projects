import { useState, useEffect } from "react";
import UserCard from "./UserCard";

const User = () => {
  const [users, setUsers] = useState([]);

  const fetchUser = async () => {
    try {
      const URL = "https://jsonplaceholder.typicode.com/users";
      const fetchUser = await fetch(URL);
      const data = await fetchUser.json();
      setUsers(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching users", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="user-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserCard key={user?.id} userData={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
