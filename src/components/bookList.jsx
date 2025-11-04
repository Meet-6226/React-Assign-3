import React from 'react';

const BookList = ({ books = [] }) => {
    return (
        <div style={{ marginTop: '20px' }}>
            <h2>Book List</h2>
            {books.length === 0 ? (
                <p>No books added</p>
            ) : (
                books.map((book, index) => (
                    <div
                        key={index}
                        style={{ border: '1px solid #ccc', padding: '10px', margin: '10px auto', width: '250px', textAlign: 'left' }}
                    >
                        <p><strong>Title:</strong> {book.title}</p>
                        <p><strong>Author:</strong> {book.author}</p>
                        <p><strong>Genre:</strong> {book.genre}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default BookList;