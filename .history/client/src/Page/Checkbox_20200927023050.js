import React,{useState,useEffect} from 'react'

export default function Checkbox({categories}){
    const [checked,setChecked]=useState([])

    const handleToggle = c=> ()=>{
        const currentCategoryId = checked.indexOf(c)
        const newCheckedCategoryId = [...checked]
        if(currentCategoryId ===-1){
            newCheckedCategoryId.push(c)
        }else{
            newCheckedCategoryId.splice(currentCategoryId,1)
        }
        setChecked(newCheckedCategoryId)
    }
    return(
        categories.map((c,i)=>{
            return(
                <li key={i} className="list-unstyled">
                    <input onChange={handleToggle(c._id)} value={checked.indexOf} type="checkbox" className="form-check-input"/>
                    <label className="form-check-label">{c.name}</label>
                </li>
            )
        })
    )
}