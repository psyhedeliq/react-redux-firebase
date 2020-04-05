import React, { useState, useRef } from 'react';

const AddSubject = ({
  id = null,
  title = '',
  description = '',
  updateData,
}) => {
  const [formData, setFormData] = useState({
    title,
    description,
    id,
  });

  // the input from the DOM will be titleRef.current because that is how useRef() works!
  const titleRef = useRef();

  // onChange handler
  const onChange = (e) => {
    const { name, value } = e.target;
    // console.log('onChange', name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // onSubmit handler
  const onSubmit = (e) => {
    e.preventDefault();
    // console.log('onSubmit', formData);
    updateData(formData);

    // reset the form input values
    setFormData({
      title: '',
      description: '',
    });
    titleRef.current.focus();
  };

  return (
    <div>
      <h1>Add a new subject</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor='title'>Title:</label>
        <input
          ref={titleRef}
          name='title'
          type='text'
          id='title'
          value={formData.title}
          onChange={onChange}
        />

        <label htmlFor='description'>Description</label>
        <textarea
          name='description'
          id='description'
          cols='30'
          rows='10'
          value={formData.description}
          onChange={onChange}
        />

        <button type='submit'>Save subject</button>
      </form>
    </div>
  );
};

export { AddSubject };
