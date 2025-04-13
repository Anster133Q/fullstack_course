import React from "react";

export function UserCard({ name, email }) {
    return (
        <div className="border p-4 rounded shadow-lg max-w-sm bg-white">
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="text-gray-600">{email}</p>
        </div>
    );
}
