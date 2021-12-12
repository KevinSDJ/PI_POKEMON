import React, { useEffect, useState } from "react";
import { useSelector} from "react-redux";
import Barchar from "../../../components/chart";



export default function Details() {
    let details = useSelector((state) => state.pokeDetails)
    const [isLoading,setIsLoading]=useState(true)
    useEffect(()=>{
        if(isLoading){
           setTimeout(()=>{
               setIsLoading(!isLoading)
           },(1000)) 
        }
    },[isLoading])
    function Loading(){
        return(<div>
            Loading....
        </div>)
    }
    if(isLoading){
        return(<Loading/>)
       
    }else{
         return (
        <div>
            <div id="details" >
                {!details? "Error not Found" :
                <div  style={{display:"flex",justifyContent:"center"}}>
                    <div style={{width:"600px",backgroundColor:"lightgray"}}>
                           {details.stats?<Barchar details={details}/>:null}
                    </div>
                     
                </div>}
            </div>
        </div>
    )
    }
    
    
}