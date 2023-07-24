import React, { useState } from 'react'

function FetchApi() {

	const [data, setData] = useState([]);
	const [inputs, setInputs] = useState([]);
	const [error, setError] = useState(null);

	// To Get Api
	const getApi = async () => {
		try {
			const response = await fetch('https://jsonplaceholder.typicode.com/users')
			const data = await response.json();
			setData(data)
		} catch (error) {
			setError(error);
		}
	}

	// To Post Api
	const postApi = async () => {
		try {
			const response = await fetch('https://jsonplaceholder.typicode.com/users', {
				method: 'POST',
				body: JSON.stringify({
					name: inputs.name,
					address: inputs.address,
					phone: parseInt(inputs.phone),
				}),
				headers: {
					'Content-type': 'application/json'
				},
			})
			const data = await response.json();
			console.log('Post', data)
		} catch (error) {
			setError(error);
		}
	}

	const handleChange = (e) => {
		e.persist()
		setInputs(() => ({
			...inputs,
			[e.target.name]: e.target.value
		}))
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		postApi()
		console.log('Submit', inputs)
	}

	return (
		<div>
			<h3>API Practice</h3>
			<button onClick={getApi}>Fetch API</button><br />
			<div>
				<ul>
					{data.map((user) => (
						<li key={user.id}>{user.name}</li>
					))}
				</ul>
			</div>
			<div>
				<form onSubmit={handleSubmit}>
					<input type="text" name="name" placeholder='Name' onChange={handleChange} /><br />
					<input type="text" name="address" placeholder='Address' onChange={handleChange} /><br />
					<input type="tel" name="phone" placeholder='Phone' onChange={handleChange} /><br />
					<input type="submit" value="Submit" />
				</form>
			</div>
			{error ? <p>An error occurred: {error.message}</p> : null}
		</div>
	)
}

export default FetchApi
