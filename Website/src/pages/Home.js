import React from 'react'
import Navbar from '../components/Navbar'
import {Outlet} from "react-router-dom";
import { useProSidebar } from 'react-pro-sidebar';

export default function Home() {
  const { collapseSidebar } = useProSidebar();

  return (
    <div className="grid-container">
        <Navbar/>
        <button onClick={() => collapseSidebar()}>Collapse</button>
        <Outlet />
      </div>
  )
}