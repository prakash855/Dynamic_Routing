import "./styles.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import User from "./User";

export default function App() {
  let users = [
    { id: 1, name: "Prakash" },
    { id: 2, name: "Jyoti" },
    { id: 3, name: "Pragati" },
    { id: 4, name: "Satyam" },
    { id: 5, name: "Shivam" }
  ];
  return (
    <div className="App">
      <Router>
        <h1>DYNAMIC ROUTING</h1>
        {users.map((user) => (
          <div>
            <Link to={"/user/" + user.id + "/" + user.name}>{user.name}</Link>
          </div>
        ))}
        <Route path="/user/:id/:name">
          <User />
        </Route>
      </Router>
    </div>
  );
}
