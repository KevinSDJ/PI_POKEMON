import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Barchar from "../../../components/chart";
import { Content, Img, CharCont, DataCont, TypesCont,Icon} from "../../../components/Home/pkDetailsElements";



export default function Details() {
    let details = useSelector((state) => state.pokeDetails)
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        if (isLoading) {
            setTimeout(() => {
                setIsLoading(!isLoading)
            }, (2000))
        }
    }, [isLoading])
    function Loading() {
        return (<div>
            Loading....
        </div>)
    }
    let image = details.name && require(`../../../assets/characterGifs/${details.name.split("")[0].toUpperCase() + details.name.slice(1)}.gif2webp`)
    if (isLoading) {
        return (<Loading />)

    } else {
        if(details.name){
            return (
            <div>
                <div id="details" >
                    {!details?.name ? "Error not Found" :
                        <Content>
                            <Img loading="lazy" image={image.default} />
                            <DataCont>
                                <p>ID:{details?.id}</p>
                                <h1>{details?.name}</h1>
                                <hr />
                                <h6>Height</h6>
                                <p>{details?.height}</p>
                                <h6>Weight</h6>
                                <p>{details?.weight}</p>
                                <hr/>
                                <TypesCont types={details.types}>
                                    {details.types?.map(e =><Icon key={e} icon={require(`../../../assets/iconsTypes/${e}.png`).default}>{e}</Icon>)}
                                </TypesCont>
                            </DataCont>

                            <CharCont>
                                {details.stats ? <Barchar details={details} /> : null}
                            </CharCont>
                        </Content>}
                </div>
            </div>
            )
        }else{
            return(<div>
                Not found
            </div>)
        }
    }


}