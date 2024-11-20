import React from 'react';

const PdfViewer = ({ pdfUrl }) => {
    return (
        <div className="d-flex flex-column align-items-center">
            <iframe 
                src={pdfUrl} 
                width="100%" 
                height="350px" 
                title="PDF Viewer"
                style={{ border: 'none' }}
            ></iframe>
        </div>
    );
};

export default PdfViewer;
