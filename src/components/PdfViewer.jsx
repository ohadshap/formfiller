import React, { useState, useEffect, useRef } from 'react';
import pdfjsLib from 'pdfjs-dist';
import 'pdfjs-dist/build/pdf.worker.entry'; // Make sure to add this line

const PdfViewer = ({ url }) => {
    const [pdfDoc, setPdfDoc] = useState(null);
    const canvasRef = useRef(null);
  
    useEffect(() => {
      async function loadPdf() {
        const pdf = await pdfjsLib.getDocument(url).promise;
        setPdfDoc(pdf);
      }
      loadPdf();
    }, [url]);
  
    useEffect(() => {
      async function renderPdf() {
        if (!pdfDoc) return;
  
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const page = await pdfDoc.getPage(1);
        const viewport = page.getViewport({scale: 1});
        canvas.width = viewport.width;
        canvas.height = viewport.height;
  
        const renderContext = {
          canvasContext: context,
          viewport: viewport
        };
        page.render(renderContext);
      }
      renderPdf();
    }, [pdfDoc]);
  
    return (
      <canvas ref={canvasRef} />
    );
}

export default PdfViewer;
  