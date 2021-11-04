import React from 'react';

function Notes(props) {
	return (
		<li className="note">
			<h1>{props.title}</h1>
			<p>{props.note}</p>
			<button
				onClick={() => {
					props.onChecked(props.id);
				}}
			>
				delete
			</button>
		</li>
	);
}

export default Notes;
