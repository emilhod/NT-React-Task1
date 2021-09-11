import { FaTimes } from 'react-icons/fa'
import { useSelector } from 'react-redux'


const Task = ( { task, onDelete, onToggle }) => {
    const data = useSelector(state => state.allData.data)
    const renderList = data.slice(0,5).map((data) => {
        const {userId, id, title, completed} = data
        return (

            <div className={`task ${completed ? 'completed' : ''}`} onDoubleClick={() => onToggle(id)}>
            <h3>{title}
            <FaTimes 
             style={{color: 'red', cursor: 'pointer'}} 
             onClick={() => onDelete(id)}/>
             </h3>
            <p>UserID: {userId}, ID: {id}</p>
        </div>
        )

        
    })

    return(
        <>{renderList}</>
    )
    
}

export default Task
