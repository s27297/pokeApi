'useClient'
import {useState} from "react";
import {useInput} from "@/app/hooks/useInput";




const EditWydatek=({wydatek,edit,editowanie=f=>f})=>{
     console.log(wydatek)
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

        console.log(title)
        const nowyWydatek = {
            id: wydatek.id,
            title: title.value,
            opis: opis.value,
            kwota: kwota.value,
            date: date.value,
            category: category.value
        }
        editowanie(nowyWydatek)

        edit(-1)
    }

    }
    return(
        <form>
            <label><input type="text" id="title" {...title} required/> </label>
            <label><input type="date" id="date" {...date} required/> </label>
            <label><input type="number" id="kwota" {...kwota} required/> </label>
            <label><input type="textarea" id="opis" {...opis} required/> </label>
            <select {...category } required>
                <option value="Jedzenie">Jedzenie</option>
                <option value="Rachunki">Rachunki</option>
                <option value="Transport">Transport</option>
                <option value="Rozrywka">Rozrywka</option>
            </select>
            <button type='submit'> Edit</button>
        </form>
    )
}
export default EditWydatek