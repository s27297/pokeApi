'use client'



export default function ExpanseDetails({wydatek,onClick=f=>f}){
    return(
        <section  >


            <h1>title={wydatek.title}</h1>
            <h1>kwota={wydatek.kwota}</h1>
            <h1>category={wydatek.category}</h1>
            <h1>date={wydatek.date}</h1>
            <h1>opis={wydatek.opis}</h1><br/>
            <h1 onClick={onClick} >Zamknij</h1>


        </section>
    )
}