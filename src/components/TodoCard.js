import React, { useState } from "react";

function TodoCard(props) {
	const [strike, setStrike] = useState(false);

	function checkedClick() {
		setStrike((prevValue) => {
			return !prevValue;
		});
	}
	return (
		<div className="todocard">
			<div className="cancel-box">
				<input type="checkbox" onClick={checkedClick} />
				<span className="checkmark"></span>
			</div>

			<p style={{ textDecoration: strike ? "line-through" : "none" }}>
				{props.todoItem}
			</p>

			<button
				className="delete-todo-btn"
				onClick={() => {
					props.deleteTodo(props.id);
				}}
			>
				&times;
			</button>
		</div>
	);
}

export default TodoCard;
