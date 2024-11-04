'use client'
export default function DateFiltr({onChange=f=>f,editowanie=-1}){
    if(editowanie!=-1) return(<div></div>)

    return (
        <div>
       <label><input type="date" onChange={onChange}/></label><br/>
        </div>
            )
}