import React from 'react';

const AddNote = (props) => {
	return (
		<form className="form">
			<input name="title" onChange={props.onChange} type="text" value={props.valueTitle} />
			<input name="note" onChange={props.onChange} type="text" value={props.valueNote} />
			<button onClick={props.onClick}>
				<span>Add</span>
			</button>
		</form>
	);
};

export default AddNote;
