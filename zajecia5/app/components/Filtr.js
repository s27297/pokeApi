'use client'
export default function Filtr({onChange=f=>f}){
    return (
        <select id={'cat'} onChange={onChange} style={{color:'red', border:'1px solid black',margin:'2px'}}>
            <option value="All">All</option>
            <option value="Jedzenie">Jedzenie</option>
            <option value="Transport">Transport</option>
            <option value="Rozrywka">Rozrywka</option>
            <option value="Rachunki">Rachunki</option>
        </select>
    )
}