import "./../styles/navbar.css";

function Navbar() {
  return (
    <header className="navbar-wrapper">
      <nav className="navbar container">
        <div className="logo">Abikshaw.L</div>

        <ul className="nav-links">
          <li><a href="#home" className="active">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <button className="hire-btn">Hire Me</button>
      </nav>
    </header>
  );
}

export default Navbar;