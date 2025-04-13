import React, { useState } from "react";

export function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Email: ${email}\\nPassword: ${password}`);
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 border rounded max-w-sm">
            <div className="mb-2">
                <label className="block">Email:</label>
                <input
                    type="email"
                    className="border p-2 w-full rounded"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className="mb-2">
                <label className="block">Password:</label>
                <input
                    type="password"
                    className="border p-2 w-full rounded"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-700">
                Login
            </button>
        </form>
    );
}
