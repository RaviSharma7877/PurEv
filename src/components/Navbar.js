/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Sidenav, Nav, Toggle } from "rsuite";
import DashboardIcon from "@rsuite/icons/legacy/Dashboard";
import QuestionCircleIcon from "@rsuite/icons/legacy/QuestionCircle";
import EnvelopeIcon from "@rsuite/icons/legacy/Envelope";
import GroupIcon from "@rsuite/icons/legacy/Group";
import MagicIcon from "@rsuite/icons/legacy/Magic";
import GearCircleIcon from "@rsuite/icons/legacy/GearCircle";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [cartVisible, setCartVisible] = useState(false);
  const [activeKey, setActiveKey] = useState("1");

  const toggleExpanded = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  const toggleCart = (event) => {
    event.preventDefault(); 
    setCartVisible(!cartVisible);
  };

  return (
    <nav className="nav">
      <div style={{ width: 240 }}>
        <i
          className={expanded ? "bx bx-x" : "bx bx-menu-alt-left"}
          onClick={toggleExpanded}
        />
        <hr />
        <Sidenav className="sidenav" expanded={expanded} defaultOpenKeys={["2"]}>
          <Sidenav.Body>
            <Nav activeKey={activeKey} onSelect={setActiveKey}>
              <Nav.Item eventKey="1" icon={<DashboardIcon />}>
                Home
              </Nav.Item>
              <Nav.Menu
                placement="rightStart"
                eventKey="2"
                title="Shop Ev's"
                icon={<MagicIcon />}
              >
                <Nav.Menu eventKey="2-1" title="SINGLE SPEED">
                  <Nav.Menu eventKey="2-1-1" title="SingleSpeed/FixedGear">
                  <Nav.Item eventKey="2-1-1-1">Original Series</Nav.Item>
                  </Nav.Menu>
                  <Nav.Item eventKey="2-1-2">Coaster</Nav.Item>
                  <Nav.Item eventKey="2-1-3">Micro Original</Nav.Item>
                </Nav.Menu>
                <Nav.Menu eventKey="2-2" title="CITY BIKES">
                  <Nav.Item eventKey="2-2-1">City Classic</Nav.Item>
                  <Nav.Item eventKey="2-2-2">City Step Through</Nav.Item>
                </Nav.Menu>
                <Nav.Menu eventKey="2-3" title="COMMUTER BIKES">
                <Nav.Item eventKey="2-3-1">Urban Commuter</Nav.Item>
                <Nav.Item eventKey="2-3-1">Commuter Accessories</Nav.Item>
                </Nav.Menu>
                <Nav.Item eventKey="2-4">ALL BIKES</Nav.Item>
                <Nav.Item eventKey="2-5">ACCESSORIES</Nav.Item>
              </Nav.Menu>
              <Nav.Menu
                placement="rightStart"
                eventKey="3"
                title="Settings"
                icon={<GearCircleIcon />}
              >
                <Nav.Item eventKey="3-1">Applications</Nav.Item>
                <Nav.Item eventKey="3-2">Channels</Nav.Item>
                <Nav.Item eventKey="3-3">Versions</Nav.Item>
                <Nav.Menu eventKey="3-5" title="Custom Action">
                  <Nav.Item eventKey="3-5-1">Action Name</Nav.Item>
                  <Nav.Item eventKey="3-5-2">Action Params</Nav.Item>
                </Nav.Menu>
              </Nav.Menu>
              <Nav.Item eventKey="4" icon={<QuestionCircleIcon />}>
                About
              </Nav.Item>
              <Nav.Item eventKey="5" icon={<EnvelopeIcon />}>
                Contact
              </Nav.Item>
              <Nav.Item eventKey="6" icon={<GroupIcon />}>
                Log in
              </Nav.Item>
            </Nav>
          </Sidenav.Body>
          <Sidenav.Toggle
            expanded={expanded}
            onToggle={(expanded) => setExpanded(expanded)}
          />
        </Sidenav>
      </div>
      <div className="logo">
        <a href="/">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="useraccess">
        <a href="/LoginPage">
          <i className="bx bx-user"></i>
        </a>
        <a href="/">
          <i className="bx bx-search-alt-2"></i>
        </a>
        <a href="/" onClick={toggleCart}>
          <i className="bx bxs-cart"></i>
        </a>
        {cartVisible && (
          <div className="cartcontainer">
            <div>
              <i className="bx bx-x" onClick={toggleCart}></i>
            </div>
            <div>
              <h1>CART</h1>
              <p>Currently you don't have any item in the cart</p>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
