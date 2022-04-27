import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import ToDoCard from './ToDoCard'

const DetailsComponent = (props) => {
    const [datas, setDatas] = useState([])
    useEffect(() => {
        setDatas(JSON.parse(localStorage.getItem("datas")))
    }, [])
    const deleteCard = (key) => {
        console.log('in details comp', key)
        const ele = datas.filter((dat) => {
            return dat.controlId != key
        })
        localStorage.setItem("datas", JSON.stringify(ele))
        setDatas(ele)
    }
    return (
        <div className='DetailsComponent'>
            <h2 className='text-center'>To Do Lists</h2>
            {/*<div className='mx-auto'>
                <Link to="/add">
                <button type="button" class="btn btn-primary">Add</button>
            </Link> 
            </div>*/}
            
            <ToDoCard details={datas} deleteKey={deleteCard} />
        </div>
    )

}

export default DetailsComponent