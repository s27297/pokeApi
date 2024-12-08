import {GlobalContext} from "@/app/Providers/WydatekProvider";

'useClient'
import {useContext, useState} from "react";
import {useInput} from "@/app/hooks/useInput";



//wydatek===ten wydatek ktory trzeba editowac

//edit to ustawenia stata editotowania na -1 zeby bylo widoczno kiedy ktos edituje

//zaedidituj={(wydate)=>{
//            const newList=list.map(wydatek=>wydate.id===wydatek.id?wydate:wydatek)
//            setList(newList)
//    }}
const EditWydatek=({wydatek})=>{
    const {list,zaedituj,onClickToStartOrEndEdit}=useContext(GlobalContext)

    const [title,setTitle]=useInput(wydatek.title)
    const [date,setdate]=useInput(wydatek.date)
    const [opis,setopis]=useInput(wydatek.opis)
    const [kwota,setkwota]=useInput(wydatek.kwota)
    const [category,setcategory]=useInput(wydatek.category)




    onsubmit=(e)=> {
        var validowane = true
        e.preventDefault()
        if (title.value.length < 3) {
            alert("title musi byc co najmniej 3 litery")
            validowane = false
        }
        if (title.value.length > 20) {
            alert("title musi byc nie wicej niz 20 liter")
            validowane = false
        }
        if (opis.value.length < 3) {
            alert("opis musi byc co najmniej 3 litery")
            validowane = false
        }
        if (kwota.value<1) {
            alert("kwota musi wynosic co najmniej 1 ")
            validowane = false
        }
        if (validowane) {

            // console.log(title)
            const nowyWydatek = {

                title: title.value,
                opis: opis.value,
                kwota: kwota.value,
                date: date.value,
                category: category.value
            }
            zaedituj(nowyWydatek,wydatek.id)

            onClickToStartOrEndEdit(-1)
        }

    }
    return(
        <form style={{background:"yellow"}}>
            <label>Title:<input type="text" id="title" {...title} required/> </label><br/>
            <label>Date: <input type="date" id="date" {...date} required/> </label><br/>
            <label>kwota: <input type="number" id="kwota" {...kwota} min={1} required/> </label><br/>
            <label>opis: <input type="textarea" id="opis" {...opis} required/> </label><br/>
            Kategory: <select {...category} required>
            <option value="Jedzenie">Jedzenie</option>
            <option value="Rachunki">Rachunki</option>
            <option value="Transport">Transport</option>
            <option value="Rozrywka">Rozrywka</option>
        </select><br/>
            <button type='submit'> Edit</button>
        </form>
    )
}
export default EditWydatek