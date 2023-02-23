import React, { useState, useEffect, useRef } from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';
import * as pdfjsLib from 'pdfjs-dist';
import 'pdfjs-dist/build/pdf.worker.entry'; // Make sure to add this line
import { Button, ScrollView, Text, Flex } from '@aws-amplify/ui-react';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// const options = {
//   cMapUrl: 'cmaps/',
//   cMapPacked: true,
//   standardFontDataUrl: 'standard_fonts/',
// };

const PdfViewer = ({ url }) => {
    const [pdfDoc, setPdfDoc] = useState(null);
    // const [docPages, setDocPages] = useState([]);
    const canvasRef = useRef(null);
    console.log('pdfViewer - url', url);
    const [numPages, setNumPages] = useState(null);
    // const [file, setFile] = useState(url);
    const [pageNumber, setPageNumber] = useState(1);
  
    useEffect(() => {
      async function loadPdf() {
        const pdf = await pdfjsLib.getDocument({ url }).promise;
        // const pages = [];
        // for (let i = 1; i <= pdf.numPages; i++) {
        //   const page = await pdf.getPage(i);
        //   pages.push(page);
        // }
        // console.log("PAGES LENGTH", pages.length);
        setPdfDoc(pdf);
        setNumPages(pdf.numPages)
        // setDocPages(pages);
        // setFile(url);
      }

      loadPdf();
    }, [url]);
  
    useEffect(() => {
      async function renderPdf() {
        if (!pdfDoc) return;
        console.log("pdfDoc", pdfDoc);
        // await new Promise(resolve => setTimeout(resolve, 1000));
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const page = await pdfDoc.getPage(pageNumber);
        const viewport = page.getViewport({scale: 1});
        canvas.width = viewport.width;
        canvas.height = viewport.height;
  
        const renderContext = {
          canvasContext: context,
          viewport: viewport
        };
        page.render(renderContext);
      }
      // pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.js';
      renderPdf();
    }, [pdfDoc, pageNumber]);

    const handleMouseDown = e => {
      const canvas = canvasRef.current;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      console.log(`Clicked at (${x}, ${y})`);
    };
    
    const nextPage = () => {
      console.log("next page", `from ${pageNumber} to +1`);
      setPageNumber(pageNumber + 1);
    }
    
    const backPage = () => {
      console.log("back page", `from ${pageNumber} to +1`);
      setPageNumber(pageNumber - 1);
    }

    return (
      <Flex direction="column">
        <Flex
          justifyContent="space-around"
        >
          <Button
            size='small'
            isDisabled={pageNumber === 1}
            onClick={backPage}
            >
              back
          </Button>
          <Text>Page {pageNumber} of {numPages}</Text>
          <Button
            size='small'
            onClick={nextPage}
            isDisabled={pageNumber === numPages}
            >
              next
          </Button>
        </Flex>
          <ScrollView
            border="1px solid grey"
            boxShadow="1px 3px 4px grey"
            borderRadius="10px"
            height="85vh"
            width="70vw"
            >
            <canvas className='viewer_canvas' ref={canvasRef} onMouseDown={handleMouseDown} />
          </ScrollView>
      </Flex>
    );

    // const onDocumentLoadSuccess = ({ numPages }) => {
    //   console.log('logged success', numPages);
    //   setNumPages(numPages);
    // }

    // return (
    //   <div>
        {/* <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document> */}
         {/* {(file && pdfDoc) && (<Document
          file={{ url: pdfDoc }}
          onLoadSuccess={() => onDocumentLoadSuccess()}
          loading="Loading"
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
          </Document>)} */}
    //     <p>
    //       Page {pageNumber} of {numPages}
    //     </p>
    //   </div>
    // );
    // return (
    //   <ScrollView height="78vh" width="70vw">
    //     {/* <canvas className="viewer_canvas" ref={canvasRef} onMouseDown={handleMouseDown} /> */}
    //     <Document file={canvasRef} onLoadSuccess={onDocumentLoadSuccess}>
    //       <Page pageNumber={currentPage} width={canvasRef.current?.width} />
    //     </Document>
    //   </ScrollView>
    // );
}

export default PdfViewer;