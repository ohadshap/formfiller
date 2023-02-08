import React from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { Route, Routes, Link } from 'react-router-dom';
import Home from "./pages/Home";
import MyTemplates from "./pages/MyTemplates";
import TopNavBar from "./pages/topBar";
import SideMenu from "./pages/SideMenu";
import {
  Grid,
  Card,
  Button,
  withAuthenticator,
} from "@aws-amplify/ui-react";

const App = ({ signOut }) => {
  return (
    <SideMenu>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/Temps" element={<MyTemplates />} />
      </Routes>
    </SideMenu>
  );
  // return (
  //   <>
  //   <Grid
  //       columnGap="0.5rem"
  //       rowGap="0.5rem"
  //       // templateColumns="8vw 92vw"
  //       templateRows="8vh 92vh"
  //       height="100vh"
  //   >
  //     <Card
  //       rowStart="1"
  //       rowEnd="2"
  //       backgroundColor={'blue'}
  //     >
  //       <TopNavBar/>
  //     </Card>
  //     <Card
  //       // columnStart="1"
  //       // columnEnd="2"
  //       backgroundColor={'green'}
  //       // minWidth='300px'
  //     >
  //       <SideMenu>
  //         <Card
  //           // columnStart="2"
  //           // columnEnd="-1"
  //           backgroundColor={'red'}
  //           // justifySelf="end"
  //         >
  //           <Routes >
  //             <Route path="/" element={<Home />} />
  //             <Route path="/Temps" element={<MyTemplates />} />
  //           </Routes>
  //         </Card>
  //       </SideMenu>
  //     </Card>
  //   </Grid>
  //     {/* <Button backgroundColor={'pink'} onClick={signOut}>Sign Out</Button> */}
  //   </>
  // );
};

export default withAuthenticator(App);

{/* <nav>
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
</Routes> */}