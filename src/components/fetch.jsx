import React,{useEffect, useState} from 'react';

function Fetch() {
    const [quote, setQuote] = useState("Loading quote...");
    const [author, setAuthor] = useState("");

    const fetchQuote = async () => {
        try {
            const res = await fetch("https://api.quotable.io/random");
            const data = await res.json();
            setQuote(data.content);
            setAuthor(data.author);
        } catch (err) {
            setQuote("Error loading quote!");
            setAuthor("");
        }
    };

    useEffect(() => {
        fetchQuote();
    }, []);

    return (
        <>
            <div>
                <h1>Random Quote</h1>
                <p>{quote}</p>
                <p>- {author}</p>
            </div>

        </>
    );
}

export default Fetch;