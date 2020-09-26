import React,{useState,useEffect} from 'react'

export default function radioBox({prices}){
    const [value,setValue]=useState(0)
    return(
        prices.map((p,i)=>{
            return(
                <li key={i} className="list-unstyled">
                    <input onChange={handleToggle(p._id)} value={checked.indexOf(p._id===-1)} type="radio" className="form-check-input"/>
                    <label className="form-check-label">{c.name}</label>
                </li>
            )
        })
    )
}