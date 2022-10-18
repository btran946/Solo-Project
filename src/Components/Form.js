import React, { useState } from 'react';
const Form = () => {
  const buttonClickHandler = (e) => {
    console.log(e);
  };

  return (
    <div>
      <form id='todo-form'>
        <div>
          <input type='text' className='todo-input' />
        </div>
        <div>
          <button
            onClick={buttonClickHandler}
            type='submit'
            className='todo-button'
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
