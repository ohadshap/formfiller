import React from "react";
import "../App.css";
import "@aws-amplify/ui-react/styles.css";
import  PdfViewer  from "../components/PdfViewer";
import AnnotationCard from '../components/AnnotationCard'
import { useLocation } from "react-router-dom";
import { Storage } from 'aws-amplify';
import { useState, useEffect } from "react";
import { Flex, TextField, Button, Icon, Heading } from "@aws-amplify/ui-react";
import { FaRegTrashAlt } from 'react-icons/fa'


const Template = () => {
    const [pdfUrl, setPdfUrl] = useState("");
    // const [toggle, setToggle] = useState(false);
    // const [inputs, setInputs] = useState([
    //     {
    //         xCoord: null,
    //         yCoord: null,
    //         field: "temp",
    //         fieldText: null,
    //     }
    //   ]);
    const location = useLocation();
    const state = location.state;

    useEffect(() => {
        const getPDFFromS3 = async (fileName) => {
            const result = await Storage.get(fileName, { level: 'public' });
            return result;
        }
        const loadPdf = async () => {
            const url = await getPDFFromS3(state.image); 
            setPdfUrl(url);
        }
        loadPdf();
    }, []);

    // const addInput = () => {
    //     console.log('ADDED INPUT');
    //     setInputs([...inputs,{ xCoord: null, yCoord: null, page: null }]);
    // };
    
    // const handleInputChange = (e, index) => {
    //     const newInputs = [...inputs];
    //     newInputs[index][e.target.name] = e.target.value;
    //     console.log('INPUT change', `index: ${index}, name: ${e.target.name}, value: ${e.target.value}`);
    //     setInputs(newInputs);
    // };
    
    return (
        <>
            {/* <h1>{state.name}</h1>
            <h1>{state.description}</h1> */}
            <Flex
                direction="row"
                gap="1rem"
            >
                {!!pdfUrl && <PdfViewer url={pdfUrl}/>}
                <AnnotationCard />
                {/* <Flex
                    direction="column"
                >
                    <Heading level={3}>Annotations</Heading>
                    {inputs.map((inp, i) => (
                        <Flex
                        key={inp.field}
                        justifyContent="center"
                        justifyItems="center"
                        alignItems="center"
                        direction="column"
                        border="1px solid grey"
                        boxShadow="1px 3px 4px grey"
                        borderRadius="10px"
                        padding="5px"
                        >
                            <TextField
                            name="field"
                            placeholder="Field"
                            label="Field"
                            labelHidden
                            variation="quiet"
                            required
                            onChange={(e) => handleInputChange(e, i)}
                            />
                            <TextField
                            name="fieldText"
                            placeholder="FieldText"
                            label="FieldText"
                            labelHidden
                            variation="quiet"
                            required
                            onChange={(e) => handleInputChange(e, i)}
                            />
                            <TextField
                            name="xCoord"
                            placeholder="X Coordinate"
                            label="X Coordinate"
                            labelHidden
                            variation="quiet"
                            required
                            onChange={(e) => handleInputChange(e, i)}
                            />
                            <TextField
                            name="yCoord"
                            placeholder="Y Coordinate"
                            label="Y Coordinate"
                            labelHidden
                            variation="quiet"
                            required
                            onChange={(e) => handleInputChange(e, i)}
                            />
                            <FaRegTrashAlt />
                        </Flex>
                    ))}
                    <Button size='small' onClick={() => addInput()}>
                    Add Annotation
                    </Button>
                </Flex> */}
            </Flex>
        </>
    );
};

export default Template;
// import { Button } from "@aws-amplify/ui-react";
// const push = () => {
//     console.log('pdfUrl', pdfUrl);
// }
// {!!pdfUrl && (
//     <Button onClick={() => push()}>Push</Button>
// )}
// const fileName = s3Url.split('/').pop();
// const fileName = "אלחלה.pdf";
// const signedUrl = await Storage.get(s3Key, { level: 'public', expires: 300 });
// setToggle(!toggle)
    {/* <h1>{state.image}</h1> */}
    {/* <PdfViewer url={state.image}/> */}
    {/* <PdfViewer url="https://pdf-templates-storage150859-staging.s3.eu-west-1.amazonaws.com/public/%D7%90%D7%9C%D7%97%D7%9C%D7%94.pdf"/> */}
{/* <Text>{pdfUrl}</Text> */}