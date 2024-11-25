'use client'
import Wydatek from "@/app/components/Wydatek";
import ExpanseDetails from "@/app/components/ExpanseDetails";
import EditWydatek from "@/app/add_edit/EditWydatek";
import {useContext, useEffect, useLayoutEffect} from "react";
import {GlobalContext} from "@/app/Providers/WydatekProvider";
import {goodbyeChime, welcomeChime} from "@/app/chimes/chimes";


//zaedituj :patrz EditWydatek

//editowanie jezeli nie -1 to trzeba rozwinacz detali wydatku pod numerem editowanie

//lista to wszystkie wydatki

//category to po jakeij kategorji pofiltrowac

//date to od jakiej daty po filtrowac

//onRemove patrcz w Wydatek

//onClick patrcz w Wydatek

//expanse jezeli nie -1 to trzeba rozwinacz detali wydatku pod numerem expanse

//onExpanseClick patrz Expanse Details

//EditClick patrz EditWydatek

//
export default function Wyswetl(){

    let {category,date,expanse,editowanie,list,onCategoryChange,onDateChange, ustawListePofiltrowana,listPofiltrowana}=useContext(GlobalContext)


    if(!list)return<p>Pusta lista</p>
    if(expanse!==-1)return (<ExpanseDetails wydatek={list.filter(q=>q.id==expanse)[0]}></ExpanseDetails> )
    if(editowanie!==-1)return (<EditWydatek  wydatek={list.filter(q=>q.id==editowanie)[0]}></EditWydatek> )
    //lab7



    useLayoutEffect(() => {
        async function posortuj(){
            const newList1=list.filter(wydatek=>((wydatek.category===category||category==="All")&&wydatek.date>date))
            ustawListePofiltrowana(newList1)
        }
        posortuj()
    }, [category,date,list])
    useEffect(() => {
    
       const interval= setInterval(()=>{

            let s=0
            list.map(wydatek=>s+=wydatek.kwota)

            if(s>10000)
                console.log("za duze wydatki, one rowne: "+s)
           else
               console.log("wydatki nie przekroczaja budgetu i rowne: "+s)
            },2000
        )
        
        return () => {
            clearInterval(interval)

        };
    }, );
    // const  newList=list.filter(wydatek=>((wydatek.category===category||category==="All")&&wydatek.date>date))
    if(!listPofiltrowana.length)return<div style={{backgroundColor: "lightblue"}}><p>Pusta lista</p></div>
    return(
        <div style={{backgroundColor: "lightblue"}}>
            {listPofiltrowana.map(wydatek => <Wydatek key={wydatek.id}
                                                      wydatek={wydatek} >

            </Wydatek>)}
            <br/>
            <br/>
            <br/>
        </div>
    )
}
