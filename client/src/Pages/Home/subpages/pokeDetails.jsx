import React, { useEffect, useState } from "react";
import { useSelector} from "react-redux";
import Barchar from "../../../components/chart";
import { Content,Img,CharCont,DataCont} from "../../../components/Home/pkDetailsElements";



export default function Details() {
    let details = useSelector((state) => state.pokeDetails)
    const [isLoading,setIsLoading]=useState(true)
    useEffect(()=>{
        if(isLoading){
           setTimeout(()=>{
               setIsLoading(!isLoading)
           },(2000)) 
        }
    },[isLoading])
    function Loading(){
        return(<div>
            Loading....
        </div>)
    }
    let image=details.name&&require(`../../../assets/characterGifs/${details.name.split("")[0].toUpperCase()+details.name.slice(1)}.gif2webp`)
    if(isLoading){
        return(<Loading/>)
       
    }else{
         return (
        <div>
            <div id="details" >
                {!details?.name? "Error not Found" :
                <Content>
                    {details?.name?<Img loading="lazy" image={image.default}/>:null}
                    <DataCont>
                        <p>ID:{details?.id}</p>
                        <h1>{details?.name}</h1>
                        <hr/>
                        <h6>Height</h6>
                        <p>{details?.height}</p>
                        <h6>Weight</h6>
                        <p>{details?.weight}</p>
                    </DataCont>
                    <CharCont>
                           {details.stats?<Barchar details={details}/>:null}
                    </CharCont>
                </Content>}
            </div>
        </div>
    )
    }
    
    
}