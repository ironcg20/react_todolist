// import "./TodoItem.css";

const TodoItem = (props) => {
  const deleteTodo = () => {
    console.log(props.id);
    props.onCheck(props.id);
  };
  return (
    <div className='todo' onClick={deleteTodo}>
      <input type='checkbox'></input>
      <label>{props.text}</label>
    </div>
  );
};

export default TodoItem;
