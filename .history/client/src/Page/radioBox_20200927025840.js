import React,{useState,useEffect} from 'react'

export default function radioBox({prices}){
    const [value,setValue]=useState(0)
    const handleChange = ()=>{
        console.log("!23")
    }
    return(
        prices.map((p,i)=>{
            return(
                <div key={i}>
                    <input onChange={handleChange} value={`${p._id}`} type="radio" className="mr-2 ml-4"/>
                    <label className="form-check-label">{p.name}</label>
                </div>
            )
        })
    )
}