import TodoItem from "../TodoItem/TodoItem";
const TodoItems = ({todoItems}) => {
  return (
    <>
    {todoItems.map((item) =>  (
        <TodoItem todoDate={item.dueDate} 
        todoName={item.name} />
        ))}
    </>
  );
};

export default TodoItems;
