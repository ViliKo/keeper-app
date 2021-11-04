import React from 'react';

const AddNote = (props) => {
	return (
		<form className="add_note">
			Title: <input className="add_note__title" name="title" onChange={props.onChange} type="text" value={props.valueTitle} />
			Text: <input className="add_note__note" name="note" onChange={props.onChange} type="text" value={props.valueNote} />
			<button className="add_note__button" onClick={props.onClick}>
				<span>Add</span>
			</button>
		</form>
	);
};

export default AddNote;
