import React from 'react';
import { BsBell } from 'react-icons/bs';
import { BsCart3 } from 'react-icons/bs';
import { BsSearch } from 'react-icons/bs';
import { FiFlag } from 'react-icons/fi';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-style">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse vw-100 justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav w-100">
            {/* me-auto mb-2 mb-lg-0 */}
            <div className="container">
              <div className="row row-display-responsive">
                <div className="col-12 col-md-2 my-2">
                  <li className="nav-item li-container-icon-flag ">
                    <FiFlag className="flag-lenguage me-2" />
                    <p className="text-white mb-0">Español</p>
                  </li>
                </div>

                <div className="col-12 col-md-1 my-2">
                  <li className="nav-item">
                    <BsSearch className="search-icon" />
                  </li>
                </div>

                <div className="col-12 col-md-1 my-2">
                  <li className="nav-item">
                    <BsCart3 className="cart-notifications" />
                    <span className="span-counte-notifications-cart">8</span>
                  </li>
                </div>

                <div className="col-12 col-md-1 my-2">
                  <li className="nav-item">
                    <BsBell className="bell-notifications" />
                    <span className="span-counte-notifications-bell">5</span>
                  </li>
                </div>

                <div className="col-12 col-md-1 my-2">
                  <li className="nav-item name-user">
                    <p className="pb-0">Joel Doe</p>
                    <p className="pb-0">Admin</p>
                  </li>
                </div>

                <div className="col-12 col-md-1">
                  <li className="nav-item photo-profile">
                    <span className="span-online"></span>
                    JD
                  </li>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
