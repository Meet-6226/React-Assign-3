import React from 'react';

const BookInput = ({ onAddBook }) => {
    const [title, setTitle] = React.useState('');
    const [author, setAuthor] = React.useState('');
    const [genre, setGenre] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !author || !genre) return;
        onAddBook({ title, author, genre });
        setTitle('');
        setAuthor('');
        setGenre('');
    };

    return (
        <form onSubmit={handleSubmit} style={{ margin: '10px 0', textAlign: 'left' }}>
            <div>
                <label>Title: </label>
                <input value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label>Author: </label>
                <input value={author} onChange={(e) => setAuthor(e.target.value)} />
            </div>
            <div>
                <label>Genre: </label>
                <input value={genre} onChange={(e) => setGenre(e.target.value)} />
            </div>
            <button type="submit" style={{ marginTop: '10px' }}>Add Book</button>
        </form>
    );
};

export default BookInput;