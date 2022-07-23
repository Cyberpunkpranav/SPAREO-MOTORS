
import React from "react";
import Packages from "./index";

function Packagebundle(){
    return(
     <div className="Packagebundle">
     <Packages 
     type ="Basic Package"
     price= "At Rs-2,999/- only"
     description="Engine Oil Replacement, Oil Filter Replacement, Air Filter Replacement, Washing and Cleaning"
     />
     <Packages 
     type = "Standard Package"
     price="At Rs-3,499/-only"
     description="Engine Oil Replacement, Oil Filter Replacement, Air Filter Replacement, Washing and Cleaning"
     />
     <Packages 
     type ="Advanced Package"
     price="At Rs-3,999/- only"
     description="Engine Oil Replacement, Oil Filter Replacement, Air Filter Replacement, Washing and Cleaning"
     />
     </div>
    )
   }
   export default Packagebundle;