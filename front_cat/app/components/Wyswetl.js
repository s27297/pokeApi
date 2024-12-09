'use client'
import Wydatek from "@/app/components/Wydatek";
import ExpanseDetails from "@/app/components/ExpanseDetails";
import EditWydatek from "@/app/add_edit/EditWydatek";
import {useContext, useLayoutEffect, useState} from "react";
import {GlobalContext} from "@/app/Providers/WydatekProvider";
import Pagination from "@/app/components/Pagination";
import {FixedSizeList} from "react-window";


export default function Wyswetl(){

    let {page,setPage,category,date,expanse,editowanie,list,onCategoryChange,onDateChange, ustawListePofiltrowana,listPofiltrowana}=useContext(GlobalContext)

    if(!list)return<p>Pusta lista</p>
    if(expanse!==-1)return (<ExpanseDetails wydatek={list.filter(q=>q.id==expanse)[0]}></ExpanseDetails> )
    if(editowanie!==-1)return (<EditWydatek  wydatek={list.filter(q=>q.id==editowanie)[0]}></EditWydatek> )
    //lab7



    useLayoutEffect(() => {
        async function posortuj(){
            const newList1=list.filter(wydatek=>((wydatek.category===category||category==="All")&&wydatek.date>date))
            ustawListePofiltrowana(newList1)
            setPage(1)
        }
        posortuj()
    }, [category,date,list])

    // const  newList=list.filter(wydatek=>((wydatek.category===category||category==="All")&&wydatek.date>date))
    if(!listPofiltrowana.length)return<div style={{backgroundColor: "lightblue"}}><p>Pusta lista</p></div>
    const rederRow=({index,style})=>(

        <div style={{...style}}>

            <Wydatek  key={listPofiltrowana[index].id}
                      wydatek={listPofiltrowana[index]} />
        </div>
    )

    //paginacja
   return <Pagination />

    //zwykla
    // return(
    // <div style={{backgroundColor: "lightblue"}}>
    //     {listPofiltrowana.map(wydatek => <Wydatek key={wydatek.id}
    //                                               wydatek={wydatek} >
    //
    //     </Wydatek>)}
    //     <br/>
    //     <br/>
    //     <br/>
    // </div>
// )
    //react-window

    // return (
    //     <FixedSizeList
    //         height={window.innerHeight}
    //         width={window.innerWidth-20}
    //         itemCount={listPofiltrowana.length}
    //         itemSize={200}
    //     >
    //         {rederRow}
    //     </FixedSizeList>
    // )
}//koniecc funkcji!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!









// return(
//     <div style={{backgroundColor: "lightblue"}}>
//         {listPofiltrowana.map(wydatek => <Wydatek key={wydatek.id}
//                                                   wydatek={wydatek} >
//
//         </Wydatek>)}
//         <br/>
//         <br/>
//         <br/>
//     </div>
// )



// useEffect(() => {
//         // Subskrypcja kanału informacyjnego
//
//         // Odtworzenie dźwięku powitalnego
//
//
//        const interval= setInterval(()=>{
//
//             let s=0
//             list.map(wydatek=>s+=wydatek.kwota)
//
//             if(s>10000)
//                 console.log("za duze wydatki, one rowne: "+s)
//            else
//                console.log("wydatki nie przekroczaja budgetu i rowne: "+s)
//             },2000
//         )
//         // Funkcja czyszcząca: anulowanie subskrypcji i odtworzenie dźwięku pożegnalnego
//         return () => {
//             clearInterval(interval)
//
//         };
//     }, );