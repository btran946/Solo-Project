import React, { useState } from 'react';

const TodoItems = ({ content, id, completed, arrOfTodos, setTodos, todo }) => {
  const [edit, setEdit] = useState(false);
  const [updateInput, setUpdateInput] = useState(content);
  const [completeStatus, setCompleteStatus] = useState(false);

  const handleCompleted = (e) => {
    e.preventDefault();
    const newArr = [];
    arrOfTodos.forEach((item) => {
      if (item.id === todo.id) {
        item.completed = true;
      }
      newArr.push(item);
    });
    setTodos(newArr);
  };

  const handleUndo = (e) => {
    e.preventDefault();
    const newArr = [];
    arrOfTodos.forEach((item) => {
      if (item.id === todo.id) {
        item.completed = false;
      }
      newArr.push(item);
    });
    setTodos(newArr);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    const updatedArr = arrOfTodos.filter((item) => item.id !== todo.id);
    setTodos(updatedArr);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setEdit(true);
  };

  const handleOnChange = (e) => {
    e.preventDefault();
    console.log(e.target);
    setUpdateInput(e.target.value);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    setEdit(false);
    const newArr = [];
    arrOfTodos.forEach((item) => {
      if (item.id === todo.id) {
        item.content = updateInput;
      }
      newArr.push(item);
    });

    setTodos(newArr);
  };

  return (
    <div className='TodoItemsContainer'>
      {edit ? (
        <div className='todo' id={id} completed={completed}>
          <form>
            <input onChange={handleOnChange} type='text' value={updateInput} />
            <button onClick={handleUpdate}>update</button>
          </form>
        </div>
      ) : (
        <div className='todo' id={id} completed={completed}>
          <p
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {content}
          </p>
          <div className='buttonContainer'>
            <button className='edit' onClick={handleEdit}>
              edit
            </button>
            <button className='delete' onClick={handleDelete}>
              delete
            </button>
            {todo.completed ? (
              <button onClick={handleUndo}>undo!</button>
            ) : (
              <button className='complete' onClick={handleCompleted}>
                complete
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoItems;
