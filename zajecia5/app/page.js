'use client'
import Image from "next/image";

import lista from "./data/lista.json"
import Wyswetl from "@/app/components/Wyswetl";
import Filtr from "@/app/components/Filtr";
import {useState} from "react";
import DateFiltr from "@/app/components/DateFiltr";
import ExpanseDetails from "@/app/components/ExpanseDetails";

export default function Home() {
    let [category,setCategory] = useState("All")
    let [date,setDate] = useState("1000.01.01")
    let [expanse,setExpanse]=useState(-1)

    const [list,setList]=useState(lista)
    function handleChange  (selectedOption) {
        console.log('cat');

    }
  return (
      <div>
          <Filtr
              onChange={(cat)=>{
                  console.log(cat.target.value)
                  setCategory(cat.target.value)

          }}
          ></Filtr>
          <DateFiltr onChange={(cat)=>{

              console.log(cat.target.value)
              setDate(cat.target.value)
          }

          }></DateFiltr>
   <Wyswetl
       lista={list}
       category={category}
       date={date}
       expanse={expanse}
       onClick={(id)=>
          // <ExpanseDetails wydatek={list.filter(q=>q.id===id.target.id)[0]}></ExpanseDetails>
       {
           console.log(id.target.id)
            setExpanse(id.target.id)
           // (<ExpanseDetails wydatek={list.filter(q=>q.id==id.target.id)[0]}></ExpanseDetails>)
       }

       }
       onExpanseClick={()=>setExpanse(-1)}
       onRemove={(id)=>{
       const newList=list.filter(wydatek=>wydatek.id!==id)
           setList(newList)
       }}>

   </Wyswetl>

      </div>
  );
}


