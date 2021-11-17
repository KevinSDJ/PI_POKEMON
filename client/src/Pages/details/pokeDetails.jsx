import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getById } from '../../actions/actions';



export default function Details(props) {
    let details = useSelector((state) => state.pokeDetails)
    let dispatch = useDispatch()
    useEffect(() => {
        pre()
        if (props.id) {
            dispatch(getById(props.id))
        }
    }, [dispatch, props.id])
    function pre(){
        document.getElementById("details").hidden = true;
        setTimeout(() => {
            document.getElementById("details").hidden = false;
            document.getElementById("load").hidden = true;
         }, (3000))
    }

    return (
        <div>
            <div id="load">{"Loading......."}</div>
            <div id="details" >
                {!details.name ? "Error not Found" : `el id es: ${details.name}`}
            </div>
        </div>

    )
}