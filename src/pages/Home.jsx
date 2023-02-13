import React, { useState, useEffect } from "react";
import "../App.css";
import DashboardCard from "../components/DashboardCard";
import BigPopUp from "../components/BigPopup";
import "@aws-amplify/ui-react/styles.css";
import {
    Button,
    Flex,
    Heading,
    Image,
    Text,
    View,
} from "@aws-amplify/ui-react";
import { fetchDocsAndTemps, getDoc } from "../utils/api/fetchers"


const Home = () => {
    const [docs, setDocs] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        getTemplates();
      }, []);
    
      const getTemplates = async () => {
            const docsFromAPI = await fetchDocsAndTemps();
            console.log('FETCH DOCS', docsFromAPI);
            const singleDoc = await getDoc();
            setDocs(docsFromAPI);
      }

      const showPopUp = () => {
          setShow(true);
      }

      const closePopUp = () => {
        setShow(false);
      }

    return (
        <View className="App">
            <Heading level={6}>Home</Heading>
            <Heading level={2}>Existing Templates</Heading>
            {!show && (
                <Button onClick={() => showPopUp()}> SHOW </Button>
            )}
            {show && (
                <>
                    <div className="blur_background"></div>
                    <BigPopUp closePopUp={closePopUp}/>
                    {/* <BigPopUp id='b0dbd57b-dab3-4593-910e-a3ed2afcd910' closePopUp={closePopUp}/> */}
                </>
            )}
            {(docs && docs.length) && ( 
                <DashboardCard items={docs}/>
            )}
        </View>
    );
};
  
export default Home;