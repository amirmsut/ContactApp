import React, { useState } from "react";
import ContactsList from "./ContactsList";
import inputs from "../constants/inputs";
import { v4 } from "uuid";

// const inputs = [
//     { type: text, name: "name", placeholder: "Name" },
//     { type: text, name: "lastName", placeholder: "Last Name" },
//     { type: email, name: "email", placeholder: "Email" },
//     { type: number, name: "phone", placeholder: "PhoneNumber" },
// ];

const Contact = () => {
    const [contacts, setContacts] = useState([]);
    const [alert, setAlert] = useState("");
    const [contact, setContact] = useState({
        id: "",
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
        if (
            !contact.name ||
            !contact.lastName ||
            !contact.email ||
            !contact.phone
        ) {
            setAlert("Please enter valid data");
            return;
        }
        setAlert("");
        const newContact = { ...contact, id: v4() };
        setContacts((contacts) => [...contacts, newContact]);
        setContact({
            name: "",
            lastName: "",
            email: "",
            phone: "",
        });
    };

    return (
        <div className="text-center">
            <div>
                {inputs.map((input) => (
                    <input
                        type={input.type}
                        placeholder={input.placeholder}
                        name={input.name}
                        value={contact[name]}
                        onChange={changeHandler}
                    />
                ))}
                <button
                    className="border items-center p-1 bg-blue-400 rounded-md m-1 hover:bg-blue-600"
                    onClick={addHandler}
                >
                    Add Contact
                </button>
            </div>
            <div>{alert && <p>{alert}</p>}</div>
            <ContactsList contacts={contacts} />
        </div>
    );
};

export default Contact;
