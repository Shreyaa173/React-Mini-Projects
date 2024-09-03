import AppName from "./components/AppName/AppName";
import TodoItem from "./components/TodoItem/TodoItem";
import TodoListHead from "./components/TodoListHead/TodoListHead";

function App() {
  return (
    <>
      <AppName /> 
      <TodoListHead />   
      <TodoItem />           
    </>
  );
}

export default App;
