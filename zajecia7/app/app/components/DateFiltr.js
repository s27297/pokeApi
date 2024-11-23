'use client'


//editowanie jezeli !==-1 to nie pokazuj nic bo ktos edituje

//expanse jezeli !==-1 to nie pokazuj nic bo ktos patrze na detali jakegos wydatku

// onChange={(cat)=>{
//                  // console.log(cat.target.value)
//                   setDate(cat.target.value)
//
//           }}
import {useContext} from "react";
import {GlobalContext} from "@/app/Providers/WydatekProvider";

export default function DateFiltr(){
    const {editowanie,expanse,onDateChange}=useContext(GlobalContext)
    if(editowanie!==-1) return(<div></div>)
    if(expanse!==-1) return(<div></div>)

    return (
        <div>
            <label><input type="date" onChange={onDateChange}/></label><br/>
        </div>
    )
}