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




export default function Home() {
    const {category,date,expanse,editowanie,list,ustawListe}=useContext(GlobalContext)

    //const reference=useRef(null)

    useEffect(() => {
        async function zrobListe() {
            await ustawListe(lista)

        }
        zrobListe()

    }, []);
    return (
        <div>

            <AddWydatek></AddWydatek>




            <Filtr

            ></Filtr>
            <DateFiltr></DateFiltr>
            <Wyswetl>

            </Wyswetl>

        </div>
    );
}