import React, { useState } from "react";
import TodoCard from "./TodoCard";

function TodoContainer() {
	const date = new Date();
	const hour = date.getHours();
	let greeting = "";

	if (hour >= 0 && hour < 12) {
		greeting = "Good Morning";
	} else if (hour >= 12 && hour < 17) {
		greeting = "Good Afternoon";
	} else {
		greeting = "Good Evening";
	}

	const [input, setInput] = useState("");
	const [items, setItems] = useState([]);

	function handleChange(e) {
		setInput(e.target.value);
	}

	console.log(input);

	function addItem() {
		setItems((prevItems) => {
			return [...prevItems, input];
		});

		setInput("");
	}

	function deleteItem(id) {
		setItems((prevItems) => {
			return prevItems.filter((item, index) => {
				return index !== id;
			});
		});
	}

	function deleteAllItems(id) {
		setItems([]);
	}

	return (
		<div className="list-container">
			<h2>{greeting}</h2>
			<div className="todo-input">
				<input
					type="text"
					placeholder="Add Something to your list"
					onChange={handleChange}
					value={input}
				/>
				<button className="add-btn" onClick={addItem}>
					Add
				</button>
			</div>

			<div className="list-holder">
				{/* List of todos goes here */}
				{items.map((item, index) => {
					return (
						<TodoCard
							key={index}
							id={index}
							todoItem={item}
							deleteTodo={deleteItem}
						/>
					);
				})}
			</div>

			<button className="clear-btn" onClick={deleteAllItems}>
				Clear List
			</button>
		</div>
	);
}

export default TodoContainer;
