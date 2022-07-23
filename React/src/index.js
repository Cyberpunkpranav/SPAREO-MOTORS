import React from 'react';
import ReactDOM from 'react-dom'
import Packagebundle from './packages';

function Packages(content){
  return(
     <button className="container btn bg-warning bg-opacity-50 col-12 mb-3">
          <h2>{content.type}</h2>
          <h3>{content.price}</h3>
          <p><b className="fs-4">Includes</b> {content.description}</p>
      </button>
  )
}

export default Packages;


 ReactDOM.render(<Packagebundle /> , document.getElementById("root"));
