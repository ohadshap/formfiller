import React, { useState, useEffect } from "react";
import "../App.css";
import DashboardCard from "../components/DashboardCard";
import "@aws-amplify/ui-react/styles.css";
import {
    Flex,
    Heading,
    Image,
    Text,
    View,
} from "@aws-amplify/ui-react";
import { fetchDocsAndTemps } from "../utils/api/fetchers"


const Home = () => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        getTemplates();
      }, []);
    
      const getTemplates = async () => {
          const docsFromAPI = await fetchDocsAndTemps();
          console.log('FETCH DOCS', docsFromAPI);
          setDocs(docsFromAPI);
      }

    return (
        <View className="App">
            <Heading level={1}>This is My Home page</Heading>
            <Heading level={3}>Existing Templates</Heading>
            {/* <View margin="3rem 0">
                {docs.map((doc) => (
                    <Flex
                    key={doc.id || doc.name}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    >
                    <Text as="strong" fontWeight={700}>
                        {doc.name}
                    </Text>
                    <Text as="span">{doc.description}</Text>
                    {doc.image && (
                        <Image
                        src={doc.image}
                        alt={`visual aid for ${doc.name}`}
                        style={{ width: 400 }}
                        />
                    )}
                    </Flex>
                ))}
            </View> */}
            {(docs && docs.length) && ( 
                <DashboardCard items={docs}/>
            )}
        </View>
    );
};
  
export default Home;