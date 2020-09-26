import React,{useState,useEffect} from 'react'

export default function Checkbox({categories}){
    return(
        {categories.map((c,i)=>{
            return(
                <li className="list-unstyled">
                    <input type="checkbox" className="form-check-input"/>
                </li>
            )
        })}
    )
}