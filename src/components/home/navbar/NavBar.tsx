import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../../config/firebase";
import { toast } from "react-toastify";

interface Props {}

const NavBar: React.FC<Props> = () => {
  const toggleMenuExpanded = () => {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    document.getElementById("navbar-burger")!.classList.toggle("is-active");
    document.getElementById("navbar-menu")!.classList.toggle("is-active");
  };

  const logOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error(error);
      toast(error.message, { type: "error" });
    }
  };

  return (
    <nav className="navbar has-background-dark">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item is-size-4 has-text-light">
          Kanban Board
        </Link>
        <button
          type="button"
          className="navbar-burger burger button is-primary has-text-light is-roundless"
          id="navbar-burger"
          onClick={toggleMenuExpanded}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div
        id="navbar-menu"
        className="navbar-menu"
        style={{ paddingRight: "14px", paddingLeft: "14px" }}
      >
        <div className="navbar-end">
          <div className="buttons">
            <button
              type="button"
              className="button navbar-item has-text-weight-bold is-primary"
            >
              <span className="icon">
                <i className="fas fa-plus"></i>
              </span>
              <span>New Project</span>
            </button>
            <button
              type="button"
              className="button navbar-item is-light"
              onClick={logOut}
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
