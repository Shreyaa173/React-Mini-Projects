import AppName from "./components/AppName/AppName";
import TodoListHead from "./components/TodoListHead/TodoListHead";
import TodoItems from "./components/TodoItems/TodoItems";

function App() {
  const todoItems = [{
    name: 'Buy Milk',
    dueDate: '7/9/2024'
  },
  {
    name: 'Go to college',
    dueDate: '8/9/2024'
  },
  {
    name: 'Workout',
    dueDate: '9/9/2024'
  }
  
]
  return (
    <center className="todo-container">
      <AppName /> 
      <TodoListHead />   
      <TodoItems todoItems = {todoItems}/>          
    </center>  
  );
}

export default App;
