import { NavLink } from "react-router-dom";

function Navbar() {
      const activeStyle = {
    fontWeight: 'bold',
    color: 'blue',
  };
  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <NavLink
        to="/user"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        end
      >
        All Users
      </NavLink>
      {" | "}
      <NavLink
        to="/add-user"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Add User
      </NavLink>
    </nav>
  );
}

export default Navbar;
