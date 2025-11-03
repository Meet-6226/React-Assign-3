import React from 'react';

const StudentList = ({ students = [] }) => {
    return (
        <div style={{ marginTop: '20px' }}>
            <h2>Student List</h2>
            {students.length === 0 ? (
                <p>No students added yet.</p>
            ) : (
                students.map((student, index) => (
                    <div
                        key={index}
                        style={{ border: '1px solid #ccc', padding: '10px', margin: '10px auto', width: '250px', textAlign: 'left' }}
                    >
                        <p><strong>Name:</strong> {student.name}</p>
                        <p><strong>Age:</strong> {student.age}</p>
                        <p><strong>Course:</strong> {student.course}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default StudentList;