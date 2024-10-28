'use client'
import { FaTrash } from "react-icons/fa";
import React from "react";
import {Fa0} from "react-icons/fa6";

export default function Wydatek({wydatek,onRemove=f=>f,onClick=f=>f}){
    return(
        <div  id={wydatek.id}  style={{backgroundColor:"lightblue"}} >
            <br/>
            <button  onClick={() => onRemove(wydatek.id)}>
                <FaTrash/>
            </button>
            <div onClick={onClick}>
            <p id={wydatek.id} > title={wydatek.title}</p>
            <p id={wydatek.id} >kwota={wydatek.kwota}</p>
            <p id={wydatek.id} >category={wydatek.category}</p>
            <p id={wydatek.id} >date={wydatek.date}</p><br/>
        </div>

        </div>
    )
}