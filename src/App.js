import Header from './components/Header';
import { useState } from "react"
import Tasks from './components/Tasks';
import './App.css';
import { setData } from "./redux/actions/dataActions";
import AddTask from './components/AddTask';
import { useDispatch, useSelector } from "react-redux";


function App() {
  const data = useSelector(state => state.allData.data)

  const [showAddTask, setShowAddTask] = useState(true)

  const {userId, id, title, completed} = data
  


  const [tasks, setTasks] = useState ([
    {
        id: 1,
        text: 'Doctors appointment',
        day: 'Feb 5 at 2pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at school',
        day: 'Feb 4 at 9pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food shopping',
        day: 'Feb 1 at 5pm',
        reminder: false,
    }
])

// Add task

const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

//Delete task

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

//toggle remainder

const toggleReminder = (id) => {
  setTasks(tasks.map((data) => id === id ? { ...data, completed: !completed} : data))
}



  return (
    <div className='Container'>
      <Header onAdd={() => setShowAddTask(!showAddTask)}/>
      {showAddTask ? <AddTask onAdd={addTask} /> : ''}
      {tasks.length > 0 ? <Tasks  tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> :'No more Tasks'}
    </div>
  );
}


export default App;
