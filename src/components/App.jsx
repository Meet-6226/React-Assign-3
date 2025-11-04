import React from 'react';
import Fetch from './fetch.jsx';
import Timer from './timer.jsx';

// import BookInput from './booksInfo.jsx';
// import BookList from './bookList.jsx';


function App() {
    // const [books, setBooks] = React.useState([]);
    // const handleAddBook = (book) => {
    //     setBooks((prevBooks) => [...prevBooks, book]);
    // };

    return (
        <>
            {/* <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <h1>Book Management System</h1>
                <BookInput onAddBook={handleAddBook} />
                <BookList books={books} />
            </div>
            <BookInput />
            <BookList /> */}

            <Fetch />
            <Timer />


        </>
    );
}

export default App;