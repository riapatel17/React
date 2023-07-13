import React, { useState } from 'react'
import "./Style.css";

function CounterApp() {
	const [count, setCount] = useState(0)
	let showAlert = true;

	const decrement = () => {
		if (showAlert && count === 0) {
			alert("You can't go less than zero")
			showAlert = false
		} else {
			setCount(count - 1)
		}
	}

	return (
		<div className='counter'>
			<h1>Counter App</h1>
			<p>Count: {count}</p>
			<button className='decrement' onClick={decrement}>Decrement</button>
			<button className='reset' onClick={() => setCount(0)}>Reset</button>
			<button className='increment' onClick={() => setCount(count + 1)}>Increment</button>
		</div>
	)
}

export default CounterApp

