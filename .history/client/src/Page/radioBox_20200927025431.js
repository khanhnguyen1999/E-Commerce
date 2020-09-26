import React,{useState,useEffect} from 'react'

export default function radioBox({price}){
    const [value,setValue]=useState(0)
    return(
        price.map((c,i)=>{
            return(
                <li key={i} className="list-unstyled">
                    <input onChange={handleToggle(c._id)} value={checked.indexOf(c._id===-1)} type="checkbox" className="form-check-input"/>
                    <label className="form-check-label">{c.name}</label>
                </li>
            )
        })
    )
}