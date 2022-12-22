import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import React from "react";
import { Link } from "react-router-dom";

export default function SidebarLayout() {
  return (
    <div className='sidebar'>
      <Sidebar className='sidebar-outer'>
        <Menu className="sidebar">
          <MenuItem routerLink={<Link to="/" />}>Trainmarch</MenuItem>
          <MenuItem routerLink={<Link to="/rules" />}>Rules</MenuItem>
          <SubMenu label="Characters">
            <MenuItem routerLink={<Link to="/character/creation" />}>Creating Your Character</MenuItem>
            <MenuItem routerLink={<Link to="/character/banned" />}>Banned Content</MenuItem>
            <MenuItem routerLink={<Link to="/character/retirement" />}>Retirement</MenuItem>
          </SubMenu>
          <SubMenu label="Downtime">
            <MenuItem routerLink={<Link to="/downtime/about" />}>About Downtime</MenuItem>
            <SubMenu label="Crafting">
              <MenuItem routerLink={<Link to="/downtime/crafting/howto" />}>How to craft</MenuItem>
              <MenuItem routerLink={<Link to="/downtime/crafting/items" />}>Items</MenuItem>
              <MenuItem routerLink={<Link to="/downtime/crafting/potions" />}>Potions</MenuItem>
              <MenuItem routerLink={<Link to="/downtime/crafting/scrolls" />}>Spell Scrolls</MenuItem>
            </SubMenu>
            <MenuItem routerLink={<Link to="/downtime/housing" />}>Housing</MenuItem>
            <MenuItem routerLink={<Link to="/downtime/learning" />}>Learning Skills</MenuItem>
            <MenuItem routerLink={<Link to="/downtime/scrolls" />}>Learning Spell Scrolls</MenuItem>
            <MenuItem routerLink={<Link to="/downtime/research" />}>Research</MenuItem>
            <MenuItem routerLink={<Link to="/downtime/working" />}>Working</MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </div >
  )
}