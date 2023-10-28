import React, { useState } from "react";
import ContactsList from "./ContactsList";

const Contact = () => {
    const [contacts, setContacts] = useState([]);
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
        setContacts((contacts) => [...contacts, contact]);
        setContact({
            name: "",
            lastName: "",
            email: "",
            phone: "",
        });
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
                    onChange={changeHandler}
                />
                <input
                    className="border text-red-200 p-1 rounded-md m-1"
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={contact.lastName}
                    onChange={changeHandler}
                />
                <input
                    className="border text-red-200 p-1 rounded-md m-1"
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={contact.email}
                    onChange={changeHandler}
                />
                <input
                    className="border text-red-200 p-1 rounded-md m-1"
                    type="number"
                    placeholder="Phone"
                    name="number"
                    value={contact.number}
                    onChange={changeHandler}
                />
                <button
                    className="border items-center p-1 bg-blue-400 rounded-md m-1 hover:bg-blue-600"
                    onClick={addHandler}
                >
                    Add Contact
                </button>
            </div>
            <ContactsList contacts={contacts} />
        </div>
    );
};

export default Contact;
