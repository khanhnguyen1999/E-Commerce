import React,{useState,useEffect} from 'react'

export default function Checkbox({categories,handleFilters}){
    const [checked,setChecked]=useState([])

    const handleToggle = c=> ()=>{
        const currentCategoryId = checked.indexOf(c)
        const newCheckedCategoryId = [...checked]
        if(currentCategoryId ===-1){
            newCheckedCategoryId.push(c)
        }else{
            newCheckedCategoryId.splice(currentCategoryId,1)
        }
        console.log(newCheckedCategoryId)
        setChecked(newCheckedCategoryId)
        handleFilters(newCheckedCategoryId)
    }
    return(
        categories.map((c,i)=>{
            console.log("category ",c)
            return(
                <li key={i} className="list-unstyled">
                    <input onChange={handleToggle(c._id)} value={checked.indexOf(c._id===-1)} type="checkbox" className="form-check-input"/>
                    <label className="form-check-label">{c.name}</label>
                </li>
            )
        })
    )
}