import React from 'react';

const StudentInput = ({ onAddStudent }) => {
    const [name, setName] = React.useState('');
    const [age, setAge] = React.useState('');
    const [course, setCourse] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !age || !course) return;
        onAddStudent({ name, age, course });
        setName('');
        setAge('');
        setCourse('');
    };

    return (
        <form onSubmit={handleSubmit} style={{ margin: '10px 0', textAlign: 'left' }}>
            <div>
                <label>Name: </label>
                <input value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Age: </label>
                <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
            </div>
            <div>
                <label>Course: </label>
                <input value={course} onChange={(e) => setCourse(e.target.value)} />
            </div>
            <button type="submit" style={{ marginTop: '10px' }}>Add Student</button>
        </form>
    );
};

export default StudentInput;