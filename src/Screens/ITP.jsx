import React, { useState } from 'react';
import { jsPDF } from 'jspdf';

const ITP = () => {
    const [image, setImage] = useState(null);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = () => setImage(reader.result);
            reader.readAsDataURL(file);
        } else {
            alert('Please upload a valid image file.');
        }
    };

    const convertToPDF = () => {
        if (!image) return alert('Please upload an image.');

        const doc = new jsPDF();
        doc.addImage(image, 'JPEG', 0, 0, 210, 297); // A4 size in mm
        doc.save('converted.pdf');
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-20">

            <h2 className="text-4xl font-semibold text-center mb-6">Welcome To <span className='text-violet-600'>Free </span> <span className='text-red-600'>PDF</span> utility app</h2>

            <h3 className='text-center text-xl text-gray-600 font-semibold'>Image to PDF converter</h3>

            <div className="flex justify-center mb-6 mt-24">
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="file:border-2 file:border-gray-300 file:border-dashed file:rounded-lg file:px-6 file:py-4 file:text-lg file:cursor-pointer file:hover:border-green-500 file:hover:bg-gray-100"
                />
            </div>

            <button
                className="w-full py-3 px-6 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-200"
                onClick={convertToPDF}
            >
                Convert to PDF
            </button>
        </div>
    );
};

export default ITP;
