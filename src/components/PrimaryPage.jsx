import {React,useEffect, useState} from "react";
import BookData from '../data/BookData.json'

const PrimaryPage = () => {

   const [FideID, setFideID] = useState('')

   const Download =()=>{
       var Data = BookData.filter(data=>data.FideNo==parseInt(FideID))[0]

       if(Data!==undefined){
            localStorage.setItem("DATA", JSON.stringify(Data))
            window.open('/certificate','','width=500px, height=700px , left=450px')
        }else{
            alert('Entered ID is Wrong')
        }
   } 

   

  return (
    <div className="primaryPage">
      <div className="header">
        <span>Gujarat State Association <br /> 3rd Gujarat International Open</span>
      </div>
      <div className="download_Div">
        <div>
            <label htmlFor="fide">Please Enter Your FIDE ID</label>
            <input onChange={(e)=>setFideID(e.target.value)} value={FideID} type="text" name="FideID" id="fide" placeholder="Enter FIDE ID Here..."/>
        </div>
        <button onClick={Download}>Download Certificate</button>
      </div>
    </div>
  );
};

export default PrimaryPage;
