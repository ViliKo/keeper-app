import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Notes from './Notes';
import AddNote from './AddNote';

const App = () => {
	const [ noteText, setNoteText ] = useState({
		title: '',
		note: ''
	});
	const [ notes, setNotes ] = useState([]);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setNoteText((prevValue) => {
			if (name === 'title') {
				return {
					title: value,
					note: prevValue.note
				};
			} else if (name === 'note') {
				return {
					title: prevValue.title,
					note: value
				};
			}
		});
	};

	const addNote = (event) => {
		event.preventDefault();
		setNotes((prevNotes) => {
			return [ ...prevNotes, noteText ];
		});
		setNoteText({ title: '', note: '' });
	};

	const deleteNote = (id) => {
		setNotes((prevNotes) => {
			return prevNotes.filter((item, index) => {
				return index !== id;
			});
		});
	};

	return (
		<div className="container">
			<Header />
			<AddNote
				onChange={handleChange}
				valueTitle={noteText.title}
				valueNote={noteText.note}
				nameTitle="title"
				nameNote="note"
				onClick={addNote}
			/>
			<ul className="notes_containers">
				{notes.map((note, index) => (
					<Notes key={index} id={index} title={note.title} note={note.note} onChecked={deleteNote} />
				))}
			</ul>
			<Footer />
		</div>
	);
};

export default App;
