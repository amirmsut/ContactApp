import React, { useState } from "react";

const Contact = () => {
    const [contact, setContact] = useState({
        name: "",
        lastName: "",
        email: "",
        phone: "",
    });

    const changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setContact((contact) => ({ ...contact, [name]: value }));
    };

    const addHandler = () => {
        console.log(contact);
    };

    return (
        <div className="text-center">
            <div className="">
                <input
                    className="border text-red-200 p-1 rounded-md m-1"
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={contact.name}
                    onCHange={changeHandler}
                />
                <input
                    className="border text-red-200 p-1 rounded-md m-1"
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={contact.lastName}
                    onCHange={changeHandler}
                />
                <input
                    className="border text-red-200 p-1 rounded-md m-1"
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={contact.email}
                    onCHange={changeHandler}
                />
                <input
                    className="border text-red-200 p-1 rounded-md m-1"
                    type="number"
                    placeholder="Phone"
                    name="number"
                    value={contact.number}
                    onCHange={changeHandler}
                />
                <button
                    className="border items-center p-1 bg-blue-400 rounded-md m-1 hover:bg-blue-600"
                    onClick={addHandler}
                >
                    Add Contact
                </button>
            </div>
        </div>
    );
};

export default Contact;
