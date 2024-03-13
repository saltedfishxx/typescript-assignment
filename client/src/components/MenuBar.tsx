import React from 'react';
import { NavLink } from 'react-router-dom';
import './MenuBar.css'

const MenuBar: React.FC = () => {
  return (
    <div className="menu-bar">
      <h1>Notification task</h1>
      <NavLink className={({ isActive }) => isActive ? 'menu-item active' : 'menu-item'} to="/">Main</NavLink>
      <NavLink className={({ isActive }) => isActive ? 'menu-item active' : 'menu-item'} to="/settings">Settings</NavLink>
    </div>
  );
};

export default MenuBar;