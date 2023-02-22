// I found the manual from this site https://www.tractorpdfmanual.com/
import React from "react";

function Manuals() {
  return (
    <div className="bg-gray-100 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Manuals</h2>
      <div className="flex flex-col items-center">
        <div className="w-72 flex-shrink-0 shadow-lg rounded-lg overflow-hidden m-4">
          <a
            href="https://res.cloudinary.com/dxetyokin/image/upload/v1676986201/Assigment%201/512_series_gitwzk.pdf"
            className="block bg-white hover:bg-gray-100 transition-colors duration-300"
          >
            <img
              src="https://assets.jimstatic.com/s/img/cc/icons/pdf.png"
              alt="Download PDF"
              className="w-16 h-16 mx-auto my-4"
            />
            <div className="text-gray-800 px-6 py-4">
              <h3 className="font-bold mb-2 text-xl">
                AGCO Allis 1300 Series FrontCut Operator's Manual
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                Adobe Acrobat Document - 474.6 KB
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300">
                Download
              </button>
            </div>
          </a>
        </div>
        <div className="w-72 flex-shrink-0 shadow-lg rounded-lg overflow-hidden m-4">
          <a
            href="https://res.cloudinary.com/dxetyokin/image/upload/v1676986201/Assigment%201/512_series_gitwzk.pdf"
            className="block bg-white hover:bg-gray-100 transition-colors duration-300"
          >
            <img
              src="https://assets.jimstatic.com/s/img/cc/icons/pdf.png"
              alt="Download PDF"
              className="w-16 h-16 mx-auto my-4"
            />
            <div className="text-gray-800 px-6 py-4">
              <h3 className="font-bold mb-2 text-xl">
                AGCO Allis 1300 Series FrontCut Operator's Manual
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                Adobe Acrobat Document - 474.6 KB
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300">
                Download
              </button>
            </div>
          </a>
        </div>
        <div className="w-72 flex-shrink-0 shadow-lg rounded-lg overflow-hidden m-4">
          <a
            href="https://res.cloudinary.com/dxetyokin/image/upload/v1676986201/Assigment%201/512_series_gitwzk.pdf"
            className="block bg-white hover:bg-gray-100 transition-colors duration-300"
          >
            <img
              src="https://assets.jimstatic.com/s/img/cc/icons/pdf.png"
              alt="Download PDF"
              className="w-16 h-16 mx-auto my-4"
            />
            <div className="text-gray-800 px-6 py-4">
              <h3 className="font-bold mb-2 text-xl">
                AGCO Allis 1300 Series FrontCut Operator's Manual
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                Adobe Acrobat Document - 474.6 KB
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300">
                Download
              </button>
            </div>
          </a>
        </div>
        <div className="w-72 flex-shrink-0 shadow-lg rounded-lg overflow-hidden m-4">
          <a
            href="https://res.cloudinary.com/dxetyokin/image/upload/v1676986201/Assigment%201/512_series_gitwzk.pdf"
            className="block bg-white hover:bg-gray-100 transition-colors duration-300"
          >
            <img
              src="https://assets.jimstatic.com/s/img/cc/icons/pdf.png"
              alt="Download PDF"
              className="w-16 h-16 mx-auto my-4"
            />
            <div className="text-gray-800 px-6 py-4">
              <h3 className="font-bold mb-2 text-xl">
                AGCO Allis 1300 Series FrontCut Operator's Manual
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                Adobe Acrobat Document - 474.6 KB
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300">
                Download
              </button>
            </div>
          </a>
        </div>
        {/* Add more manuals here */}
      </div>
    </div>
  );
}

export default Manuals;
