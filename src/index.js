import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import React from "react";
import { ProSidebarProvider } from 'react-pro-sidebar';
import SidebarLayout from "./SidebarLayout";
import "./App.css"

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <ProSidebarProvider>
      <div className="rowC">
        <SidebarLayout className="sidebar-layout" />
        <App className="App" />
      </div>
    </ProSidebarProvider>
  </BrowserRouter>,
  rootElement
);  