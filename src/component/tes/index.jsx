import React, { useState } from "react";
import "../../css/sb-admin-2.css";
import "../../css/sb-admin-2.min.css";

const Tes = () => {
  const [open, setOpen] = useState(true);

  console.log("cek", open);

  return (
    <div id="wrapper">
      {/* Sidebar */}

      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* Title */}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">SKRIPSI</div>
        </a>
        <hr className="sidebar-divider my-0" />

        <li className="nav-item active">
          <a className="nav-link" href="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </a>
        </li>
        <hr className="sidebar-divider" />

        <div className="sidebar-heading">Interface</div>

        <li className="nav-item">
          <a className="nav-link" href="charts.html">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Imbalanced Data</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/dataset">
            <i className="fas fa-fw fa-table"></i>
            <span>Dataset</span>
          </a>
        </li>

        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <div className="">
              {open ? <div>tol</div> : <div>kon</div>}
              <button type="submit" onClick={() => setOpen(!open)}>
                cek tombol
              </button>
            </div>
          </nav>
        </div>
      </div>
      {/* End Sidebar */}
    </div>
  );
};

export default Tes;
