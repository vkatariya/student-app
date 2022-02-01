const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-white">
      <div className="container">
        <a className="navbar-brand" href="/"></a>
        <img src="./assets/images/logo.png" alt="Logo" height="30px"></img>

        <div>
          <ul className="navbar-nav mr-auto"></ul>
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <a href="#!" className="btn btn-primary mr-3">
                Add Student
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-a dropdown-toggle"
                href="!#"
                id="navbarDropdown"
                data-toggle="dropdown"
              >
                <img
                  src="./assets/images/user.jpg"
                  alt="Logo"
                  height="30px"
                ></img>
                <span className="ml-2 navbar-text">Vinod Katariya </span>
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="!#">
                  Profile
                </a>
                <a className="dropdown-item" href="!#">
                  Logout
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="!#">
                  Ads
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
