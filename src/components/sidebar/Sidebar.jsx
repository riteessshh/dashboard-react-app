import React from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <aside>
        <Link to={`/`}>
          <h1>InfoMet</h1>
        </Link>

        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">
              <i className="bi bi-house"></i>Dashboard
            </a>
          </li>
          <hr />
          <li className="nav-item">
            <a className="nav-link">
              <Link to={`/topics`}>
                <i className="bi bi-archive"></i>Topics
              </Link>
            </a>
          </li>
          <hr />
          <li className="nav-item">
            <a className="nav-link" href="/pestles">
              <i className="bi bi-book"></i>Fields
            </a>
          </li>
          <hr />
          <li className="nav-item">
            <a className="nav-link">
              <i className="bi bi-door-open"></i>Countries
            </a>
          </li>
          <hr />
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="bi bi-envelope"></i>Email
            </a>
          </li>
          <hr />
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="bi bi-chat-left-dots"></i>Chat
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
}
