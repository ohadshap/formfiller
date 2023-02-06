import React from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { Route, Routes, Link } from 'react-router-dom';
import Home from "./pages/Home";
import MyTemplates from "./pages/MyTemplates";
import {
  Button,
  withAuthenticator,
} from "@aws-amplify/ui-react";

const App = ({ signOut }) => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Temps">My Templates</Link>
          </li>
        </ul>
      </nav>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Temps" element={<MyTemplates />} />
      </Routes>
      <Button onClick={signOut}>Sign Out</Button>
    </>
  );
};

export default withAuthenticator(App);
