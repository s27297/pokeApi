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

import {faker} from "@faker-js/faker"

function ExpenseFetcher(){

}

export default function Home() {
    const {ladowanie,ustawListe,data,setdata,nowy}=useContext(GlobalContext)

    const generateFakeExpenses=()=>{return [...Array(1000)].map(()=>({
        date:faker.date.between({ from: '2000-01-01', to: Date.now()}).toISOString().split('T')[0],
        kwota:faker.number.int({min:1,max:1000}),
        title:faker.word.words(2),
        opis:faker.word.words({count:{min:3,max:100}}),
        category:faker.helpers.arrayElement(["Jedzenie","Transport","Rozrywka","Rachunki"]),
      //  date:faker.helpers.arrayElement(["2022-09-28"])
    }))}
    useEffect(() => {
       // const cat=generateFakeExpenses()

        //cat.map(expense=>{nowy((expense))})

    }, []);
    useEffect(() => {

        if(data) {
            ustawListe(data);
            return;
        }
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