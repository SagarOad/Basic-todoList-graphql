import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { gql, useQuery } from "@apollo/client";

const query = gql`
  query GetTodosWithUser {
    getTodos {
      id
      title
      completed
      user {
        id
        name
      }
    }
  }
`;

function App() {
  const { data, loading } = useQuery(query);
  if (loading) return <h2>Loading....</h2>;
  return (

  <table>
    <tbody>
      {
        data.getTodos.map(todo => <tr key={todo.id}>
          <td>{todo.title}</td>
          <td>{todo.user.name}</td>
        </tr>)
      }
    </tbody>
  </table>
  );
}

export default App;
