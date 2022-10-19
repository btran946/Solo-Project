import React, { useState } from 'react';

const TodoItems = ({ content, id, completed, arrOfTodos, setTodos, todo }) => {
  const [edit, setEdit] = useState(false);
  const [updateInput, setUpdateInput] = useState(content);
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
    <div>
      {edit ? (
        <div id={id} completed={completed}>
          <form>
            <input onChange={handleOnChange} type='text' value={updateInput} />
            <button onClick={handleUpdate}>update</button>
          </form>
        </div>
      ) : (
        <div id={id} completed={completed}>
          <h3>{content}</h3>
          <button onClick={handleEdit}>edit</button>
          <button onClick={handleDelete}>delete</button>
        </div>
      )}
    </div>
  );
};

export default TodoItems;
