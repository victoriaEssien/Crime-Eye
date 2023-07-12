
import supabase from "../client";
import { useEffect, useState } from "react";

function Leaderboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        // Fetch the users from Supabase authentication table
        const { data: { users }, error } = await supabase.auth.admin.listUsers()

        if (error) {
          // Handle error
          console.error(error);
        } else {
          // Store the users in the state
          setUsers(data);
        }
      } catch (error) {
        // Handle error
        console.error(error);
      }
    }

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Leaderboard</h2>
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.email}</td>
              <td>{user.user_metadata.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
