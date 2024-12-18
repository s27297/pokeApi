'use client'
import Wydatek from "@/app/components/Wydatek";
import ExpanseDetails from "@/app/components/ExpanseDetails";
import EditWydatek from "@/app/add_edit/EditWydatek";


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
export default function Wyswetl({zaedidituj=f=>f, lista=[],category="All",date="1000-01-01",onRemove=f=>f, onClick=f=>f,expanse=-1,onExpanseClick=f=>f, editClick=f=>f,editowanie=-1}){

    if(!lista.length)return<p>Pusta lista</p>
    if(expanse!==-1)return (<ExpanseDetails onClick={onExpanseClick} wydatek={lista.filter(q=>q.id==expanse)[0]}></ExpanseDetails> )
    if(editowanie!==-1)return (<EditWydatek edit={editClick} wydatek={lista.filter(q=>q.id==editowanie)[0]} zaedidituj={zaedidituj}></EditWydatek> )

    const newList=lista.filter(wydatek=>((wydatek.category===category||category==="All")&&wydatek.date>date))
    if(!newList.length)return<div style={{backgroundColor: "lightblue"}}><p>Pusta lista</p></div>
    return(
        <div style={{backgroundColor: "lightblue"}}>
            {newList.map(wydatek => <Wydatek key={wydatek.id}
                                             onRemove={onRemove}
                                             wydatek={wydatek}
                                             onClick={onClick}
                                             editClick={editClick}>

            </Wydatek>)}
            <br/>
            <br/>
            <br/>
        </div>
    )
}