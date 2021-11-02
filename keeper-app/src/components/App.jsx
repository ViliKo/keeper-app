import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import ToDoItem from './toDoItem';
import InputForm from './InputForm';

const createNote = (note) => {
	return <Note key={note.key} title={note.title} content={note.content} />;
};

const App = (_) => {
	const [ inputText, setInputText ] = useState('');
	const [ items, setItems ] = useState([]);

	const handleChange = (event) => {
		const newValue = event.target.value;
		setInputText(newValue);
	};

	const addItem = () => {
		setItems((prevItems) => {
			return [ ...prevItems, inputText ];
		});
		setInputText('');
	};

	const deleteItem = (id) => {
		setItems((prevItems) => {
			return prevItems.filter((item, index) => {
				return index !== id;
			});
		});
	};

	return (
		<div className="container">
			<Header />
			<InputForm onChange={handleChange} value={inputText} onClick={addItem} />
			<div>
				<ul>
					{items.map((todoItem, index) => (
						<ToDoItem key={index} id={index} text={todoItem} onChecked={deleteItem} />
					))}
				</ul>
			</div>
			<Footer />
		</div>
	);
};

export default App;
