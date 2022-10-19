import React from 'react';

const TodoItems = ({ content, id, completed, arrOfTodos, setTodos }) => {
  const handleDelete = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(`TodoItem Key: ${e.target.parentElement.id}`);
    const updatedArr = arrOfTodos.filter(
      (todo) => todo.id !== e.target.parentElement.id
    );
    setTodos(updatedArr);
    console.log(updatedArr);
  };

  return (
    <div>
      <div id={id} completed={completed}>
        <h1>{content}</h1>
        <button>edit</button>
        <button onClick={handleDelete}>delete</button>
      </div>
    </div>
  );
};

export default TodoItems;
