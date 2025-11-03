import React from 'react';
import StudentInput from './studentInput.jsx';
import StudentList from './studentList.jsx';

function App() {
    const [students, setStudents] = React.useState([]);
    const handleAddStudent = (student) => {
        setStudents((prevStudents) => [...prevStudents, student]);
    };

    return (
        <>
            <StudentInput onAddStudent={handleAddStudent} />
            <StudentList students={students} />
        </>
    );
}

export default App;