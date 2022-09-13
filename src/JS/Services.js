
function Packages(content){
    return(
       <button className=" container btn bg-warning bg-opacity-50 col-12 mb-3">
            <h2>{content.type}</h2>
            <h3>{content.price}</h3>
            <p> <b className="fs-4">Includes</b> {content.description}</p>
        </button>
    )
}

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

ReactDOM.render(<Packagebundle /> , document.getElementById("root"));

     function myProfile(){
        window.location.href = "mainpage.html";
        }
        

      