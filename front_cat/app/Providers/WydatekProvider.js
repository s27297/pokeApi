'use client'
import {useState,createContext} from "react";
import lista from "../data/lista.json"


const loadJSON=key=>key&&JSON.parse(localStorage.getItem(key))
const saveJSON=(key,data)=>{localStorage.setItem(key,JSON.stringify(data))}


export const GlobalContext=createContext()

export default function WydatekProvider({children}) {
    const [category, setCategory] = useState("All")
    const [date, setDate] = useState("1000.01.01")
    const [expanse, setExpanse] = useState(-1)
    const [editowanie, setEditowanie] = useState(-1)
    const [list,setList]=useState([])
    const [listPofiltrowana,setListPofiltrowana]=useState([])
    const [najnowszyWydatek, setNajnowszyWydatek] = useState(null)
    const [ladowanie,setLadowanie]=useState(false)
    const [data,setData]=useState(loadJSON("list"))


   async function zrobListe() {
        setLadowanie(true)
        await fetch("http://localhost:5000/expenses").then(r=>r.json())
            .then(r=>{ setList(r);saveJSON("list",r);return r}).then(r=>console.log(r)).catch(e=>console.log(e))
        //    .finally(()=>setLadowanie(false))
         .finally(()=>setTimeout(()=>setLadowanie(false),1000))
    }
    const znajdzNainowszyWydatek=(lis)=>{
        if(lis) {
            const listaaaaa = lis.reduce((item, max) => ((item.date > max.date ? item : max)), lis[0])

            if(listaaaaa)setNajnowszyWydatek(listaaaaa.id)
        }
    }
    const ustawListe=  (lis) => {
        if(lis){
            setList(lis)
            return;
        }
         zrobListe()


    }
    const ustawListePofiltrowana=  (lis)=>{

        if(lis&&lis.length>0)  znajdzNainowszyWydatek(lis)
        setListPofiltrowana(lis)
    }
    const zaedituj=(wydate,id)=>{


        async function zaeditu() {
            console.log(wydate)

            await fetch(`http://localhost:5000/expenses/${id}`,
                {method:"PUT",
                    body:JSON.stringify(wydate),
                    headers: {
                        "Content-Type": "application/json",
                    }})
                .then(r=>console.log(r.json()))
                .catch(e=>alert(e))
                .finally(()=>{zrobListe()})
        }
        zaeditu()
    }

    const onClickToStartOrEndEdit=(id)=>
    {
    console.log(id)

        setEditowanie(id)
        console.log(editowanie)


    }
    const nowy=(wydate)=>{

        async function zaeditu() {
             console.log(wydate)

            await fetch(`http://localhost:5000/expenses/`,
                {method:"POST",
                    body:JSON.stringify(wydate),
                    headers: {
                        "Content-Type": "application/json",
                    }})
                .then(r=>console.log(r.json()))
                .catch(e=>alert(e))
                .finally(()=>{zrobListe()})
        }
        zaeditu()

    }

    const onCategoryChange=(cat)=>{
        // console.log(cat.target.value)
        setCategory(cat.target.value)

    }

    const onDateChange=(cat)=>{
        //  console.log(cat.target.value)
        setDate(cat.target.value)
    }

    const onClickToExpanse=(id)=>
    {
        setExpanse(id.target.id)
    }
    const  onUnExpanseClick=()=>setExpanse(-1)
    const onRemove=(id)=>{
        async function zaeditu() {


            await fetch(`http://localhost:5000/expenses/${id}`,
                {method:"DELETE",

                    })
                .then(r=>console.log(r.json()))
                .catch(e=>alert(e))
                .finally(()=>{zrobListe()})
        }
        zaeditu()
    }
    return(
        <GlobalContext.Provider value={{
            onRemove, category,date,expanse,editowanie,nowy,onCategoryChange,onDateChange,onClickToExpanse,
            onUnExpanseClick,ustawListe,list,onClickToStartOrEndEdit,zaedituj,
            ustawListePofiltrowana,listPofiltrowana,najnowszyWydatek,ladowanie,data,setData}}
        >
            {children}
        </GlobalContext.Provider>
    )
}