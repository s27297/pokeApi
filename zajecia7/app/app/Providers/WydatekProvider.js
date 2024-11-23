'use client'
import {useState,createContext} from "react";
import lista from "../data/lista.json"


export const GlobalContext=createContext()

export default function WydatekProvider({children}) {
    const [category, setCategory] = useState("All")
    const [date, setDate] = useState("1000.01.01")
    const [expanse, setExpanse] = useState(-1)
    const [editowanie, setEditowanie] = useState(-1)
    const [list,setList]=useState([])
    const [listPofiltrowana,setListPofiltrowana]=useState([])
    const [najnowszyWydatek, setNajnowszyWydatek] = useState(null)


    const znajdzNainowszyWydatek=(lis)=>{
        if(lis) {
            const listaaaaa = lis.reduce((item, max) => ((item.date > max.date ? item : max)), lis[0])

            if(listaaaaa)setNajnowszyWydatek(listaaaaa.id)
        }
    }
    const ustawListe= (lis)=>{
        setList(lis)
       const s=new Promise((resolve, reject)=>{
           resolve(lis)
       })
       s.then(r=>{console.log(r)
           if(!r) {
               alert("lista nie zaladowala")
               console.error("lista nie zaladowana")
           }
           else
               setList(lis)})
           .catch(err=>{console.error("Error: "+err)})
       // setListPofiltrowana(lis)
    }
    const ustawListePofiltrowana=  (lis)=>{

       if(lis&&lis.length>0)  znajdzNainowszyWydatek(lis)
        setListPofiltrowana(lis)
    }
   const zaedituj=(wydate)=>{
           const newList=list.map(wydatek=>wydate.id===wydatek.id?wydate:wydatek)
           setList(newList)
   }

    const onClickToStartOrEndEdit=(id)=>
       {

           setEditowanie(id)
       }
    const nowy=(valu)=>{
        //  console.log(valu)
        var newWydatki=[...list,valu]
        // console.log(newWydatki)
        setList(newWydatki)
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
        // console.log(list)
        // console.log(id)
        const newList=list.filter(wydatek=>wydatek.id!==id)
        setList(newList)
    }
    return(
        <GlobalContext.Provider value={{
       onRemove, category,date,expanse,editowanie,nowy,onCategoryChange,onDateChange,onClickToExpanse,
            onUnExpanseClick,ustawListe,list,onClickToStartOrEndEdit,zaedituj,
            ustawListePofiltrowana,listPofiltrowana,najnowszyWydatek}}
>
            {children}
        </GlobalContext.Provider>
)
}