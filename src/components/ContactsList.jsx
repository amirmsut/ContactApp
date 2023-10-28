import React from "react";
const ContactsList = ({ contacts }) => {
    console.log(contacts);
    return (
        <div>
            <div>
                <h3></h3>
                <ul>
                    {contacts.map((contact) => (
                        <li key={contact.id}>{contact.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ContactsList;

// When using remove in app we need unique-id
