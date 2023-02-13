import React, { useState, useEffect } from "react";
import {
    Button,
    Grid,
    Tabs,
    TabItem,
    TextField,
    Collection,
    Card,
    View,
    Divider,
    Flex,
} from "@aws-amplify/ui-react";
import { getDoc } from "../utils/api/fetchers"

const BigPopUp = ({id = null, closePopUp}) => {
    const [doc, setDoc] = useState({});
    const [tabIndex, setTabIndex] = useState(0);

    useEffect(() => {
        fetchDoc(id);
    }, []);

    const fetchDoc = async (docId) => {
        if (docId) {
            console.log('docId', docId);
            const docFromAPI = await getDoc(docId);
            console.log('docsss', docFromAPI);
            setDoc(docFromAPI);
        }
    }

    const createDoc = async () => {
        // event.preventDefault();
        // const form = new FormData(event.target);
        // const image = form.get("image");
        
        // const data = {
        // name: form.get("name"),
        // description: form.get("description"),
        // image: image.name,
        // };
        console.log('createDoc', doc);
    }

    const handleInput = (e) => {
        const newDoc = doc;
        newDoc[e.target.name] = e.target.value;
        console.log('INPUT change', `name: ${e.target.name}, value: ${e.target.value}`);
        setDoc(newDoc);
    }

    const handleTab = () => {
        setTabIndex(0)
    }

    const changeTab = (i) => {
        setTabIndex(Number(i));
    }

    return (
        <View className="big_popup">
            <Grid
                rowGap="0.1rem"
                columnGap="0.1rem"
                templateColumns="1fr 6fr"
                templateRows="1fr 4fr 1fr"
                height="100%"
                >
                <Card
                    columnStart="2"
                    columnEnd="-1"
                    backgroundColor="#000"
                    color="lavender"
                >
                    {doc.name  && (
                        <Card backgroundColor="transparent">{`Edit Template - ${doc.name}`}</Card>
                    )}
                    {!doc.name  && (
                        <Card backgroundColor="transparent">Create New Template</Card>
                    )}
                </Card>
                <Card
                    columnStart="1"
                    columnEnd="2"
                    rowStart="1"
                    rowEnd="-1"
                    backgroundColor="#000"
                >
                    <Tabs 
                        justifyContent="flex-start"
                        direction="column"
                        marginTop="80px"
                        currentIndex={tabIndex} onChange={(i) => changeTab(i)}
                        >
                        <TabItem color="lavender" title="Details">
                        </TabItem>
                        <TabItem color="lavender" title="Fields">
                        </TabItem>
                    </Tabs>
                </Card>
                <Card
                    columnStart="2"
                    columnEnd="-1"
                    backgroundColor="lavender"
                >
                    {tabIndex === 0 && (
                        <>
                            Details
                            <TextField
                                name="name"
                                placeholder="Document Name"
                                defaultValue={doc.name || ''}
                                label="Document Name"
                                labelHidden
                                variation="quiet"
                                required
                                width="270px"
                                padding="20px"
                                onChange={(e) => handleInput(e)}
                            />
                            <TextField
                                name="description"
                                placeholder="Document Description"
                                defaultValue={doc.description || ''}
                                label="Document Description"
                                labelHidden
                                variation="quiet"
                                required
                                width="270px"
                                padding="20px"
                                onChange={(e) => handleInput(e)}
                            />
                            <View
                                padding="20px"
                                width="270px"
                            >
                                {!doc.image && (
                                    <View
                                        name="image"
                                        as="input"
                                        type="file"
                                        style={{ alignSelf: "end" }}
                                        onChange={(e) => handleInput(e)}
                                    />
                                )}
                                {(doc.image && doc.name) && (
                                    <Card>{doc.name}</Card>
                                )}
                            </View>
                        </>
                    )}
                    {tabIndex === 1  && (
                        <View>
                            <Button onClick={() => handleTab()}>SECOND TAB - Fields. click to go back</Button>
                        </View>
                    )}
                </Card>
                <Flex
                    columnStart="2"
                    columnEnd="-1"
                    backgroundColor="#000"
                    color="lavender"
                    direction="row"
                    gap="70%"

                    alignItems="center"
                >
                    <Button color="lavender" marginLeft="35px" onClick={() => closePopUp()}>Close</Button>
                    <Button color="lavender" onClick={() => createDoc()}>Create</Button>
                </Flex>
            </Grid>
        </View>
    );
};

export default BigPopUp;