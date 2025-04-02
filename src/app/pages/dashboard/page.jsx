// // // "use client";

// // // import React, { useState, useRef } from "react";
// // // import { QRCodeCanvas } from "qrcode.react";

// // // export default function Dashboard() {
// // //   const [url, setUrl] = useState("");
// // //   const [fgColor, setFgColor] = useState("#000000"); // Foreground color
// // //   const [bgColor, setBgColor] = useState("#ffffff"); // Background color
// // //   const qrRef = useRef(); // Ref for downloading QR code

// // //   // Function to download QR Code
// // //   const downloadQRCode = () => {
// // //     const canvas = qrRef.current.querySelector("canvas");
// // //     if (canvas) {
// // //       const link = document.createElement("a");
// // //       link.href = canvas.toDataURL("image/png");
// // //       link.download = "qrcode.png";
// // //       link.click();
// // //     }
// // //   };

// // //   return (
// // //     <div className="h-screen flex items-center justify-center  text-white">
// // //       <div className=" p-6 rounded-xl shadow-lg flex w-3/4 max-w-3xl">
// // //         {/* Left Side - Input Box & Customization */}
// // //         <div className="w-1/2 p-4 bg-[#9BA8AB]">
// // //           <h2 className="text-xl font-bold mb-2">Enter URL</h2>
// // //           <input
// // //             type="text"
// // //             placeholder="Enter URL here..."
// // //             className="w-full p-2 rounded-md text-black"
// // //             value={url}
// // //             onChange={(e) => setUrl(e.target.value)}
// // //           />
          
// // //           {/* Customization Options */}
// // //           <div className="mt-4">
// // //             <label className="block">Foreground Color:</label>
// // //             <input
// // //               type="color"
// // //               value={fgColor}
// // //               onChange={(e) => setFgColor(e.target.value)}
// // //               className="w-full cursor-pointer"
// // //             />

// // //             <label className="block mt-2">Background Color:</label>
// // //             <input
// // //               type="color"
// // //               value={bgColor}
// // //               onChange={(e) => setBgColor(e.target.value)}
// // //               className="w-full cursor-pointer"
// // //             />
// // //           </div>
// // //         </div>

// // //         {/* Right Side - QR Code & Download */}
// // //         <div className=" bg-[#9BA8AB] w-1/2 p-4 flex flex-col items-center">
// // //           {url ? (
// // //             <>
// // //               <div className="p-4 bg-white rounded-xl shadow-md" ref={qrRef}>
// // //                 <QRCodeCanvas 
// // //                   value={url} 
// // //                   size={200} 
// // //                   bgColor={bgColor} 
// // //                   fgColor={fgColor} 
// // //                   level="H"
// // //                   includeMargin={true}
// // //                 />
// // //               </div>
// // //               <button 
// // //                 onClick={downloadQRCode} 
// // //                 className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md"
// // //               >
// // //                 Download QR
// // //               </button>
// // //             </>
// // //           ) : (
// // //             <p className="text-gray-400">QR Code will appear here</p>
// // //           )}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }



// // "use client";

// // import React, { useState, useRef } from "react";
// // import { QRCodeCanvas } from "qrcode.react";

// // export default function Dashboard() {
// //   const [url, setUrl] = useState("");
// //   const [fgColor, setFgColor] = useState("#000000"); // Foreground color
// //   const [bgColor, setBgColor] = useState("#ffffff"); // Background color
// //   const qrRef = useRef(); // Ref for downloading QR code

// //   // Function to download QR Code
// //   const downloadQRCode = () => {
// //     const canvas = qrRef.current.querySelector("canvas");
// //     if (canvas) {
// //       const link = document.createElement("a");
// //       link.href = canvas.toDataURL("image/png");
// //       link.download = "qrcode.png";
// //       link.click();
// //     }
// //   };

// //   return (
// //     <div className="h-screen flex items-center justify-center text-white">
// //       <div className="p-8 rounded-xl  flex w-4/5 gap-8 max-w-5xl min-h-[700px]">
        
// //         {/* Left Side - Input Box & Customization */}
// //         <div className="w-1/2 border-2 shadow-2xl border-black rounded-2xl p-6 bg-[#9BA8AB] flex flex-col justify-center">
// //           <h2 className="text-2xl font-bold mb-4 text-center">Enter URL</h2>
// //           <input
// //             type="text"
// //             placeholder="Enter URL here..."
// //             className="w-full p-3 text-lg shadow-2xl border-2 border-black bg-[#FFFFFF] rounded-xl text-black"
// //             value={url}
// //             onChange={(e) => setUrl(e.target.value)}
// //           />
          
// //           {/* Customization Options */}
// //           <div className="mt-6">
// //             <label className="block text-lg">Foreground Color:</label>
// //             <input
// //               type="color"
// //               value={fgColor}
// //               onChange={(e) => setFgColor(e.target.value)}
// //               className="w-full cursor-pointer h-12"
// //             />

// //             <label className="block mt-4 text-lg">Background Color:</label>
// //             <input
// //               type="color"
// //               value={bgColor}
// //               onChange={(e) => setBgColor(e.target.value)}
// //               className="w-full cursor-pointer h-12"
// //             />
// //           </div>
// //         </div>

// //         {/* Right Side - QR Code & Download */}
// //         <div className="bg-[#9BA8AB] border-2 shadow-2xl rounded-2xl border-black w-1/2 p-6 flex flex-col items-center justify-center">
// //           {url ? (
// //             <>
// //               <div className=" bg-white rounded-3xl shadow-md" ref={qrRef}>
// //                 <QRCodeCanvas 
// //                   value={url} 
// //                   size={250} 
// //                   bgColor={bgColor} 
// //                   fgColor={fgColor} 
// //                   level="H"
// //                   includeMargin={true}
// //                   className="rounded-3xl"
                
// //                 />
// //               </div>
// //               <button 
// //                 onClick={downloadQRCode} 
// //                 className="mt-6 px-6 py-3 text-lg text-white bg-black hover:scale-105 transition-all rounded-md"
// //               >
// //                 Download QR
// //               </button>
// //             </>
// //           ) : (
// //             <p className="text-black text-2xl font-semibold">QR Code will appear here</p>
// //           )}
// //         </div>

// //       </div>
// //     </div>
// //   );
// // }


// "use client";

// import React, { useState, useRef, useEffect } from "react";
// import { QRCodeCanvas } from "qrcode.react";

// export default function Dashboard() {
//   const [url, setUrl] = useState("");
//   const [fgColor, setFgColor] = useState("#000000"); // Foreground color
//   const [bgColor, setBgColor] = useState("#ffffff"); // Background color
//   const [logo, setLogo] = useState(null); // Logo image
//   const [isPopupOpen, setIsPopupOpen] = useState(false); // Popup state
//   const qrRef = useRef(); // Ref for downloading QR code
//   const popupRef = useRef(); // Ref for popup to detect outside clicks

//   // Function to download QR Code
//   const downloadQRCode = () => {
//     const canvas = qrRef.current.querySelector("canvas");
//     if (canvas) {
//       const link = document.createElement("a");
//       link.href = canvas.toDataURL("image/png");
//       link.download = "qrcode.png";
//       link.click();
//     }
//   };

//   // Handle logo upload
//   const handleLogoUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => setLogo(reader.result);
//       reader.readAsDataURL(file);
//     }
//   };

//   // Close popup when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (popupRef.current && !popupRef.current.contains(event.target)) {
//         setIsPopupOpen(false);
//       }
//     };

//     if (isPopupOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [isPopupOpen]);

//   return (
//     <div className="flex-col flex items-center justify-center min-h-screen text-white">
//       {/* <div className="p-8 rounded-xl flex w-4/5 gap-8 max-w-5xl min-h-[700px]"> */}
//       <div className="p-2 md:p-4 rounded-xl flex flex-col md:flex-row w-full md:w-4/5 gap-6 md:gap-8 max-w-6xl min-h-screen md:min-h-[600px] mx-auto">
        
//         {/* Left Side - Input Box & Customization */}
//         <div className="w-1/2 border-2 shadow-2xl border-black rounded-2xl p-6 bg-[#9BA8AB] flex flex-col justify-center">
//         <h2 className="text-2xl font-bold mb-4 text-left flex text-black items-center gap-2">
//   Enter URL
//   <img src="/urlLogo.png" alt="URL Icon" className="w-6 h-6" />
// </h2>
//           <input
//             type="text"
//             placeholder="https://"
//             className="w-full p-3 text-lg shadow-2xl border-2 border-black bg-[#FFFFFF] rounded-xl text-black"
//             value={url}
//             onChange={(e) => setUrl(e.target.value)}
//           />
          
//           {/* Customize Button */}
//           <button 
//             onClick={() => setIsPopupOpen(true)} 
//             className="mt-6 w-full px-6 py-3 text-lg text-white bg-black hover:scale-105 transition-all rounded-md"
//           >
//             Customize
//           </button>
//         </div>

//         {/* Right Side - QR Code & Download */}
//         <div className="bg-[#9BA8AB] border-2 shadow-2xl rounded-2xl border-black w-1/2 p-6 flex flex-col items-center justify-center">
//           {url ? (
//             <>
//               <div className="bg-white rounded-3xl shadow-md" ref={qrRef}>
//                 <QRCodeCanvas 
//                   value={url} 
//                   size={250} 
//                   bgColor={bgColor} 
//                   fgColor={fgColor} 
//                   level="H"
//                   includeMargin={true}
//                   imageSettings={logo ? { src: logo, height: 50, width: 50, excavate: true } : null}
//                   className="rounded-3xl"
//                 />
//               </div>
//               <button 
//                 onClick={downloadQRCode} 
//                 className="mt-6 px-6 py-3 text-lg text-white bg-black hover:scale-105 transition-all rounded-md"
//               >
//                 Download QR
//               </button>
//             </>
//           ) : (
//             <p className="text-black text-2xl font-semibold animate-pulse">QR Code will appear here</p>
//           )}
//         </div>
//       </div>

//       {/* Popup for Customization */}
//       {isPopupOpen && (
//         <div className="fixed inset-0 bg-black/50  flex justify-center items-center">
//           <div ref={popupRef} className="bg-white text-black p-6 rounded-lg shadow-lg w-96">
//             <h2 className="text-xl font-bold mb-4">Customize QR Code</h2>
            
//             <div className="flex flex-row justify-between">
//               {/* Foreground Color */}
//             <div className="flex flex-col justify-center">
//             <label className="block text-md">Foreground </label>
//             <input
//               type="color"
//               value={fgColor}
//               onChange={(e) => setFgColor(e.target.value)}
//               className="w-40  cursor-pointer h-10 mb-4"
//             />
//             </div>

//             {/* Background Color */}
//             <div className="flex flex-col">
//             <label className="block text-md">Background </label>
//             <input
//               type="color"
//               value={bgColor}
//               onChange={(e) => setBgColor(e.target.value)}
//               className="w-40  cursor-pointer h-10 mb-4"
//             />
//             </div>
//             </div>
//             {/* Upload Logo */}
//             <label className="block font-bold text-xl mb-5">Upload Logo</label>
//             <input 
//               type="file" 
//               accept="image/*" 
//               onChange={handleLogoUpload} 
//               className="w-full text-sm mb-4"
//             />

//             {/* Logo Preview */}
//             {logo && (
//               <div className="mt-4 flex justify-center">
//                 <img src={logo} alt="Logo Preview" className="h-16 w-16 object-contain border" />
//               </div>
//             )}

//             {/* Close Button */}
//             <button 
//               onClick={() => setIsPopupOpen(false)} 
//               className="mt-4 w-full px-4 py-2 text-lg text-white bg-black hover:scale-105 transition-all rounded-md"
//             >
//               Done
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }



"use client";

import React, { useState, useRef, useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function Dashboard() {
  const [url, setUrl] = useState("");
  const [fgColor, setFgColor] = useState("#000000"); // Foreground color
  const [bgColor, setBgColor] = useState("#ffffff"); // Background color
  const [logo, setLogo] = useState(null); // Logo image
  const [isPopupOpen, setIsPopupOpen] = useState(false); // Popup state
  const qrRef = useRef(); // Ref for downloading QR code
  const popupRef = useRef(); // Ref for popup to detect outside clicks

  // Function to download QR Code
  const downloadQRCode = () => {
    const canvas = qrRef.current.querySelector("canvas");
    if (canvas) {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "qrcode.png";
      link.click();
    }
  };

  // Handle logo upload
  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setLogo(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsPopupOpen(false);
      }
    };

    if (isPopupOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPopupOpen]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white p-4">
      <div className="p-2 md:p-4 rounded-xl flex flex-col md:flex-row w-full md:w-4/5 gap-6 md:gap-8 max-w-6xl min-h-screen md:min-h-[600px] mx-auto">
        
        {/* Left Side - Input Box & Customization */}
        <div className="w-full md:w-1/2 border-2 shadow-2xl border-black rounded-2xl p-6 bg-[#9BA8AB] flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4 text-left flex text-black items-center gap-2">
            Enter URL
            <img src="/urlLogo.png" alt="URL Icon" className="w-6 h-6" />
          </h2>
          <input
            type="text"
            placeholder="https://"
            className="w-full p-3 text-lg shadow-2xl border-2 border-black bg-[#FFFFFF] rounded-xl text-black"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          
          {/* Customize Button */}
          <button 
            onClick={() => setIsPopupOpen(true)} 
            className="mt-6 w-full px-6 py-3 text-lg text-white bg-black hover:scale-105 transition-all rounded-md"
          >
            Customize
          </button>
        </div>

        {/* Right Side - QR Code & Download */}
        <div className="bg-[#9BA8AB] border-2 shadow-2xl rounded-2xl border-black w-full md:w-1/2 p-6 flex flex-col items-center justify-center">
          {url ? (
            <>
              <div className="bg-white rounded-3xl shadow-md" ref={qrRef}>
                <QRCodeCanvas 
                  value={url} 
                  size={250} 
                  bgColor={bgColor} 
                  fgColor={fgColor} 
                  level="H"
                  includeMargin={true}
                  imageSettings={logo ? { src: logo, height: 50, width: 50, excavate: true } : null}
                  className="rounded-3xl"
                />
              </div>
              <button 
                onClick={downloadQRCode} 
                className="mt-6 px-6 py-3 text-lg text-white bg-black hover:scale-105 transition-all rounded-md"
              >
                Download QR
              </button>
            </>
          ) : (
            <p className="text-black text-2xl font-semibold animate-pulse">QR Code will appear here</p>
          )}
        </div>
      </div>

      {/* Popup for Customization */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center px-4">
          <div ref={popupRef} className="bg-white text-black p-6 rounded-lg shadow-lg w-full max-w-sm">
            <h2 className="text-xl font-bold mb-4">Customize QR Code</h2>
            
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              {/* Foreground Color */}
              <div className="flex flex-col">
                <label className="block text-md">Foreground</label>
                <input
                  type="color"
                  value={fgColor}
                  onChange={(e) => setFgColor(e.target.value)}
                  className="w-full sm:w-40 cursor-pointer h-10"
                />
              </div>

              {/* Background Color */}
              <div className="flex flex-col">
                <label className="block text-md">Background</label>
                <input
                  type="color"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                  className="w-full sm:w-40 cursor-pointer h-10"
                />
              </div>
            </div>

            {/* Upload Logo */}
            <label className="block font-bold text-lg mt-4">Upload Logo</label>
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleLogoUpload} 
              className="w-full text-sm mb-4"
            />

            {/* Logo Preview */}
            {logo && (
              <div className="mt-4 flex justify-center">
                <img src={logo} alt="Logo Preview" className="h-16 w-16 object-contain border" />
              </div>
            )}

            {/* Close Button */}
            <button 
              onClick={() => setIsPopupOpen(false)} 
              className="mt-4 w-full px-4 py-2 text-lg text-white bg-black hover:scale-105 transition-all rounded-md"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
