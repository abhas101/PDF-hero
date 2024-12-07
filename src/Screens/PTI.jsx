import React, { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import html2canvas from 'html2canvas';

const PTI = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [image, setImage] = useState(null);

  const handlePDFUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setPdfFile(URL.createObjectURL(file));
    } else {
      alert('Please upload a valid PDF file.');
    }
  };

  const convertPDFToImage = async () => {
    if (!pdfFile) return alert('Please upload a PDF file.');

    const response = await fetch(pdfFile);
    const arrayBuffer = await response.arrayBuffer();
    const pdfDoc = await PDFDocument.load(arrayBuffer);

    // We'll render the first page of the PDF
    const page = pdfDoc.getPages()[0];
    const { width, height } = page.getSize();
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;

    const context = canvas.getContext('2d');
    const pdfImage = await page.render({ scale: 1.5 }).toCanvas();
    context.drawImage(pdfImage, 0, 0);

    setImage(canvas.toDataURL());
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-20 ">
      <h2 className="text-4xl font-semibold text-center mb-6">Welcome To <span className='text-violet-600'>Free </span> <span className='text-red-600'>PDF</span> utility app</h2>

      <h3 className='text-center text-xl text-gray-600 font-semibold'>PDF to image converter</h3>
      
      <div className="flex justify-center mb-6 mt-24">
        <input
          type="file"
          accept="application/pdf"
          onChange={handlePDFUpload}
          className="file:border-2 file:border-gray-300 file:border-dashed file:rounded-lg file:px-6 file:py-4 file:text-lg file:cursor-pointer file:hover:border-blue-500 file:hover:bg-gray-100"
        />
      </div>

      <button
        className="w-full py-3 px-6 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
        onClick={convertPDFToImage}
      >
        Convert to Image
      </button>

      {image && (
        <div className="mt-6">
          <img src={image} alt="PDF Preview" className="w-full h-auto rounded-lg shadow-md" />
        </div>
      )}
    </div>
  );
};

export default PTI;
