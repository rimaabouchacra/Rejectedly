// import React, { useState, useRef, useEffect } from 'react';
// import './index.css';
// import '../index.css';


// const Analysis = () => {
//   const [showAnalysis, setShowAnalysis] = useState(true);
//   const overlayRef = useRef(null);

//   function handleOverlayClick2(e) {
//     if (e.target === overlayRef.current) {
//       setShowAnalysis(false);
      
//     }
//   }
  

//   useEffect(() => {
//     document.addEventListener('mousedown', handleOverlayClick2);
//     return () => {
//       document.removeEventListener('mousedown', handleOverlayClick2);
//     };
//   }, []);

//   return (
//     <div>
//       {showAnalysis && (
//         <div className="analysis" ref={overlayRef}>
//           <h1>ANALYSIS</h1>
//           <h3 className='analysis-type'>
//             Analysis type
//           </h3>
//           <div>
//             <p>
//               Where does it come from? Contrary to popular belief, Lorem Ipsum
//               is not simply random text. It has roots in a piece of classical
//               Latin literature from 45 BC, making it over 2000 years old.
//               Richard McClintock, a Latin professor at Hampden-Sydney College
//               in Virginia, looked up one of the more obscure Latin words,
//               consectetur, from a Lorem Ipsum passage, and going through the
//               cites of the word in classical literature, discovered the
//               undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
//               1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
//               and Evil) by Cicero, written in 45 BC. This book is a treatise
//               on the theory of ethics, very popular during the Renaissance.
//               The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
//               comes from a line in section 1.10.32.
              
//             </p>
//           </div>
//           <button className="all-btn" onClick={() => setShowAnalysis(false)}>
//             CLOSE
//           </button>
   
//         </div>
//       )}
//     </div>
//   );
// };

// export default Analysis;





import React, { useState, useRef, useEffect } from 'react';
import './index.css';
import '../index.css';


const Analysis = ({analysisType, analysisText }) => {
  const [showAnalysis, setShowAnalysis] = useState(true);
  const overlayRef = useRef(null);
 

  function handleOverlayClick2(e) {
    if (e.target === overlayRef.current) {
      setShowAnalysis(false);
      
    }
  }
  

  useEffect(() => {
    document.addEventListener('mousedown', handleOverlayClick2);
    return () => {
      document.removeEventListener('mousedown', handleOverlayClick2);
    };
  }, []);

  return (
    <div>
      {showAnalysis && (
        <div className="analysis" ref={overlayRef}>
          <h1>ANALYSIS</h1>
          <h3 className='analysis-ty'>
            {analysisType}
          </h3>
          <div>
            <p>
              {analysisText}
              
            </p>
          </div>
          <button className="all-btn" onClick={() => setShowAnalysis(false)}>
            CLOSE
          </button>
   
        </div>
      )}
    </div>
  );
};

export default Analysis;
