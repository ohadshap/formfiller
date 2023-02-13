import React, { useState, useEffect } from "react";
import {
    Button,
    Grid,
    Image,
    Collection,
    Card,
    View,
    Divider,
    Flex,
} from "@aws-amplify/ui-react";
import { getDoc } from "../utils/api/fetchers"

const BigPopUp = ({id = null, closePopUp}) => {
    // const [doc, setDoc] = useState({});

    useEffect(() => {
        fetchDoc();
    }, []);

    const fetchDoc = async (docId) => {
        if (docId) {
            const docFromAPI = await getDoc();
            console.log('docsss', docFromAPI);
        }
    }

    return (
        <View className="big_popup">
            <Grid
                templateColumns="1fr 6fr"
                templateRows="1fr 4fr 1fr"
                height="100%"
                >
                <Card
                    columnStart="2"
                    columnEnd="-1"
                    backgroundColor="blue"
                >
                    Header
                </Card>
                <Card
                    columnStart="1"
                    columnEnd="2"
                    rowStart="1"
                    rowEnd="-1"
                    backgroundColor="green"
                >
                    Nav
                </Card>
                <Card
                    columnStart="2"
                    columnEnd="-1"
                    backgroundColor="black"
                >
                    Main
                </Card>
                <Card
                    columnStart="2"
                    columnEnd="-1"
                    backgroundColor="red"
                >
                    Footer
                    <Button onClick={() => closePopUp()}></Button>
                </Card>
            </Grid>
        </View>
    );
};

export default BigPopUp;