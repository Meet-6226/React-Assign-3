import React,{useEffect, useState} from 'react';

function Timer() {
    const [time, settime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            settime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1>Timer</h1>
            <p>{time.toLocaleTimeString()}</p>
        </div>
    );
}

export default Timer;
