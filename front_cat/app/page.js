'use client'
import Image from "next/image";

import lista from "./data/lista.json"
import Wyswetl from "@/app/components/Wyswetl";
import Filtr from "@/app/components/Filtr";
import {useContext, useEffect, useLayoutEffect, useRef, useState} from "react";
import DateFiltr from "@/app/components/DateFiltr";
import ExpanseDetails from "@/app/components/ExpanseDetails";
import AddWydatek from "@/app/add_edit/AddWydatek";
import {GlobalContext} from "@/app/Providers/WydatekProvider";


function ExpenseFetcher(){

}

export default function Home() {
    const {ladowanie,ustawListe}=useContext(GlobalContext)

    //const reference=useRef(null)

    useEffect(() => {

        ustawListe()


    }, []);
    return (<div>
        {ladowanie && <p>loading</p>}
        {!ladowanie &&
        <div>
            <AddWydatek></AddWydatek>
            <Filtr
            ></Filtr>
            <DateFiltr></DateFiltr>
            <Wyswetl>
            </Wyswetl>
        </div>}</div>
    );
}