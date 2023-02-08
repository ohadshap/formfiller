import React from "react";
import "../App.css";
import "@aws-amplify/ui-react/styles.css";
import {
    Heading,
    View,
} from "@aws-amplify/ui-react";


const Home = () => {
    return (
        <View className="App">
            <Heading level={1}>This is My Home page</Heading>
        </View>
    );
};
  
export default Home;