const NavTabs = () => {
    return (
      <div className="">
        <ul className="nav nav-underline flex-nowrap overflow-scroll custom-scroll">
          <li className="nav-item mx-2">
            <a className="nav-link d-flex align-items-center active text-info">
              All
              <span className="badge bg-primary ms-2 rounded-5">93</span>
            </a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link d-flex align-items-center">
              Groups
              <span className="badge bg-primary ms-2 rounded-5">30</span>
            </a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link d-flex align-items-center">
              Community
              <span className="badge bg-primary ms-2 rounded-5">50</span>
            </a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link d-flex align-items-center">
              Regulars
              <span className="badge bg-primary ms-2 rounded-5">13</span>
            </a>
          </li>
        </ul>
        <hr className="my-0" />
      </div>
    );
  };
  
  export default NavTabs;