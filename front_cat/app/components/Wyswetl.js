'use client'
import Wydatek from "@/app/components/Wydatek";
import ExpanseDetails from "@/app/components/ExpanseDetails";
import EditWydatek from "@/app/add_edit/EditWydatek";
import {useContext, useLayoutEffect, useState} from "react";
import {GlobalContext} from "@/app/Providers/WydatekProvider";
 const rowsPerPage=3


export default function Wyswetl(){

    let {category,date,expanse,editowanie,list,onCategoryChange,onDateChange, ustawListePofiltrowana,listPofiltrowana}=useContext(GlobalContext)

    if(!list)return<p>Pusta lista</p>
    if(expanse!==-1)return (<ExpanseDetails wydatek={list.filter(q=>q.id==expanse)[0]}></ExpanseDetails> )
    if(editowanie!==-1)return (<EditWydatek  wydatek={list.filter(q=>q.id==editowanie)[0]}></EditWydatek> )
    //lab7


    const [page,setPage]=useState(1)

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
    const listaNaPage=listPofiltrowana.slice(page * rowsPerPage - rowsPerPage, page * rowsPerPage);
    return <div>

        {listaNaPage.map(wydatek=> <Wydatek key={wydatek.id}
                                            wydatek={wydatek}>

        </Wydatek>)}
        <div style={{color:"red"}}>
        {page>1&& <button style={{float:"left"}} onClick={()=>setPage(page-1)}>Poprzednia</button>}
        {page*rowsPerPage<listPofiltrowana.length&& <button  style={{float:"right"}} onClick={()=>setPage(page+1)}>Nastepna</button>}
        </div>
    </div>
    //
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