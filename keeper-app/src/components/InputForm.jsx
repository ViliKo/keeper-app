import React from 'react';

const InputForm = (props) => {
	return (
		<div className="form">
			<input onChange={props.onChange} type="text" value={props.value} />
			<button onClick={props.onClick}>
				<span>Add</span>
			</button>
		</div>
	);
};

export default InputForm;
