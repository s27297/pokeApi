'use client'

// onChange={(cat)=>{
//                  // console.log(cat.target.value)
//                   setCategory(cat.target.value)
//
//           }}

//editowanie jezeli !==-1 to nie pokazuj nic bo ktos edituje

//expanse jezeli !==-1 to nie pokazuj nic bo ktos patrze na detali jakegos wydatku
import {useContext} from "react";
import {GlobalContext} from "@/app/Providers/WydatekProvider";

export default function Filtr(){
    const {editowanie,expanse,onCategoryChange}=useContext(GlobalContext)
    if(editowanie!==-1) return(<div></div>)
    if(expanse!==-1)
        return (<div></div>)
    return (
        <div>
            Sortowanie
            <select id={'cat'} onChange={onCategoryChange} style={{color:'red', border:'1px solid black',margin:'2px'}}>
                <option value="All">All</option>
                <option value="jedzenie">jedzenie</option>
                <option value="transport">transport</option>
                <option value="rozrywka">rozrywka</option>
                <option value="rachunki">rachunki</option>
            </select>
        </div>
    )
}