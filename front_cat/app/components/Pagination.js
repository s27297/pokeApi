'use client'


import Wydatek from "@/app/components/Wydatek";
import {useContext, useRef} from "react";
import {GlobalContext} from "@/app/Providers/WydatekProvider";
const rowsPerPage=3

export default function Pagination(){
    const Ref=useRef(1)||null

    const {page,listPofiltrowana,setPage}=useContext(GlobalContext)
    const listaNaPage=listPofiltrowana.slice(page * rowsPerPage - rowsPerPage, page * rowsPerPage);
    return <div>

        {listaNaPage.map(wydatek=> <Wydatek key={wydatek.id}
                                            wydatek={wydatek}>

        </Wydatek>)}
        <div  style={{display:"flex",justifyContent:"space-between",color:"red"}}>
            {page>1&& <button style={{float:"left"}} onClick={()=>setPage(page-1)}>Poprzednia</button>}
            {page===1&& <p/>}
            {/*<div>*/}
            {/*    <input  ref={Ref} type="number" style={{backgroundColor:"yellow",color :"black"}}/>*/}
            {/*<button style={{float:"left"}} onClick={()=>console.log(Ref.current)}>przejdz do strony</button>*/}
            {/*</div>*/}
                {page*rowsPerPage<listPofiltrowana.length&& <button  style={{float:"right"}} onClick={()=>setPage(page+1)}>Nastepna</button>}
        </div>
    </div>
}