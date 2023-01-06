import React from 'react';
import { Sidebar, Menu, MenuItem, sidebarClasses, menuClasses} from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {
  render() {
    return (
      <div className='grid-child'>
        <Sidebar
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: '#121212',
            color: 'white',
          }
        }}>
          <Menu rootStyles={{
            [`.${menuClasses.button}:hover`]: {
              backgroundColor: '#232323'
            },
          }}>
            <MenuItem routerLink={<Link to="/" />}>Home</MenuItem>
            <MenuItem routerLink={<Link to="/about" />}>About</MenuItem>
          </Menu>
        </Sidebar>
      </div>
    );
  }
}