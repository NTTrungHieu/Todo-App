import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/">Add Tasks</Link>
        </li>
        <li>
          <Link to="/completed">Completed</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
