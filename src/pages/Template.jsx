import React from "react";
import "../App.css";
import "@aws-amplify/ui-react/styles.css";
import  PdfViewer  from "../components/PdfViewer";
import { useLocation } from "react-router-dom";
import { Storage } from 'aws-amplify';
import { useState, useEffect } from "react";


const Template = () => {
    const [pdfUrl, setPdfUrl] = useState("");
    const [toggle, setToggle] = useState(false);
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

    
    return (
        <>
            <h1>{state.name}</h1>
            <h1>{state.description}</h1>
            
            {!!pdfUrl && <PdfViewer url={pdfUrl}/>}
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