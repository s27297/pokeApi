'use client'
export default function DateFiltr({onChange=f=>f}){
    return (
        <div>
       <label><input type="date" onChange={onChange}/></label><br/>
        </div>
            )
}