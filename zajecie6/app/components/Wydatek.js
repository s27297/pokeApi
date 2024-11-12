'use client'
import { FaTrash } from "react-icons/fa";
import React from "react";
import {Fa0} from "react-icons/fa6";
import EditWydatek from "@/app/add_edit/EditWydatek";


//wydatek to pokazywany wydatek

// onRemove={(id)=>{
//        const newList=list.filter(wydatek=>wydatek.id!==id)
//            setList(newList)
//        }}

// onClick={(id)=>
//        {
//             setExpanse(id.target.id)
//        }zeby pokazalo detali wydatku

// editClick={f=>{setEditowanie(f)
//        }}zeby zaczacz editowac
export default function Wydatek({wydatek,onRemove=f=>f,onClick=f=>f, editClick=f=>f}){
    return(
        <div  id={wydatek.id}  style={{backgroundColor:"lightblue"}} >
            <br/>
            <button  onClick={() => onRemove(wydatek.id)}>
                <FaTrash/>
            </button>
            <div  >
            <p  onClick={onClick} id={wydatek.id} > title={wydatek.title}</p>
            <p id={wydatek.id} >kwota={wydatek.kwota}</p>
            <p id={wydatek.id} >category={wydatek.category}</p>
            <p id={wydatek.id} >date={wydatek.date}</p><br/>
        </div>
            <button onClick={()=>{editClick(wydatek.id)
            }} >Edituj</button>

        </div>
    )
}