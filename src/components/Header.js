import { Link } from "react-router-dom";

function Header() {
  return (
    <Link to="/">
      <h1 className="head white">Movie App</h1>
    </Link>
  );
}

export default Header;
