import React, { useState } from "react";

export function SimpleForm() {
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted value:", input);
    };

    return (
        <form onSubmit={handleSubmit} className="p-4">
            <input
                type="text"
                className="border p-2 rounded"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter text"
            />
            <button type="submit" className="ml-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
                Submit
            </button>
        </form>
    );
}
