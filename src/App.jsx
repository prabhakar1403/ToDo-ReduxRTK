import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  
  return (
    <>
    <h2 className='text-center font-bold'>Your Personalised ToDo Diary</h2>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App