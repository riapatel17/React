import React, { useState, useEffect } from 'react'

function APIFetch() {
  const [data, setData] = useState([]);
  const [inputs, setInputs] = useState({})
  const [error, setError] = useState(null);

  //Get Method

  const apiGet = async () => {
    // make API call to fetch some data
    try {
      const response = await fetch('https://jsonplaceholder.typicodes.com/posts')
      const json = await response.json();
      setData(json);
      console.log(json)
    } catch (error) {
      setError(error);
    }
  }
  //Post Method
  const apiPost = async () => {
    await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'inputs.title',
        body: 'inputs.body',
        userId: parseInt(inputs.userId),
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

  };
  const handleChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,

      [event.target.name]: event.target.value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    apiPost();
    console.log(inputs);
  }
  return (
    <div>
      My API <br />
      <button onClick={apiGet}>Fetch API</button>
      <div>
        <ul>
          {data.map(item => (
            <li key={item.id}> {item.userId},{item.title}</li>
          ))}
          {error ? <p>An error occurred: {error.message}</p> : null}
        </ul>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='title'
            placeholder='title'
            onChange={handleChange} />
          {" "}
          <br />
          <input
            type='text'
            name='body'
            placeholder='body'
            onChange={handleChange} />
          <br />
          <input
            type='number'
            name='userId'
            placeholder='userId'
            onChange={handleChange} />
          <br />
          <input
            type='submit'
            name='Submit'
            onChange={handleChange} />

        </form>
      </div>
    </div>
  );

}
export default APIFetch