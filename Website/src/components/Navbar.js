import React from 'react';
import { Sidebar, Menu, MenuItem} from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {
  render() {
    return (
      <div>
        <Sidebar>
          <Menu>
            <MenuItem routerLink={<Link to="/" />}>Home</MenuItem>
            <MenuItem routerLink={<Link to="/about" />}>About</MenuItem>
          </Menu>
        </Sidebar>
      </div>
    );
  }
}