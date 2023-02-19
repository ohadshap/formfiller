import React from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import MyTemplates from "./pages/MyTemplates";
import Template from "./pages/Template";
import NewTemplate from "./pages/NewTemplate";
import SideMenu from "./pages/SideMenu";
import {
  withAuthenticator,
} from "@aws-amplify/ui-react";

const App = ({ signOut }) => {
  return (
      <SideMenu logout={signOut}>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/Temps">
            <Route index element={<MyTemplates />}/>
            <Route path=":id" element={<Template />}/>
            <Route path="New" element={<NewTemplate />}/>
          </Route>
        </Routes>
      </SideMenu>
  );
};

export default withAuthenticator(App);