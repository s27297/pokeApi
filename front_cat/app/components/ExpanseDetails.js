'use client'

//wydatek to wydatek ktory trzeba rozwinacz

//   onExpanseClick={()=>setExpanse(-1)} zeby bylo widacz ze nie trzeba pokazywac rozwineta informacje

import {useContext} from "react";
import {GlobalContext} from "@/app/Providers/WydatekProvider";

export default function ExpanseDetails({wydatek}){
    const {onUnExpanseClick}=useContext(GlobalContext)
    return(
        <section style={{background:"red"}} >


            <h1>title={wydatek.title}</h1>
            <h1>kwota={wydatek.kwota}</h1>
            <h1>category={wydatek.category}</h1>
            <h1>date={wydatek.date}</h1>
            <h1>opis={wydatek.opis}</h1><br/>
            <h1 onClick={onUnExpanseClick} >Zamknij</h1>


        </section>
    )
}