import React, { useState } from "react";
import ContactsList from "./ContactsList";
import inputs from "../constants/inputs";
import { v4 } from "uuid";

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

    const deleteHandler = (id) => {
        const NewContacts = contacts.filter((contact) => contact.id !== id);
        setContacts(NewContacts);
    };

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
                        value={contact[input.name]}
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
            <ContactsList contacts={contacts} deleteHandler={deleteHandler} />
        </div>
    );
};

export default Contact;
