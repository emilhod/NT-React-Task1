import React, {useEffect} from "react";
import Task from "./Task"
import axios from 'axios'
import { setData } from "../redux/actions/dataActions";
import { useDispatch, useSelector } from "react-redux";

const Tasks = ({ tasks, onDelete, onToggle }) => {
    const data = useSelector(state => state);
    const dispatch = useDispatch();


    const fetchData = async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos/").catch((err => {
            console.log("Error;", err)
        }))
        dispatch(setData(response.data))
    }
    

    useEffect(() =>{
        fetchData()
    },[])

    console.log("Products: ", data)
    return (
        <>
           {tasks.map((task) => 
           (<Task key= {task.id} 
            task={task} 
            onDelete={onDelete} 
            onToggle={onToggle}/>
           ))} 
        </>
    )
}

export default Tasks
