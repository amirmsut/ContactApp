import React from "react";
import ContactItem from "./ContactItem";

const ContactsList = ({ contacts }) => {
    console.log(contacts);
    return (
        <div>
            <div>
                <h3>Contacts List</h3>
                {contacts.length ? (
                    <ul>
                        {contacts.map((contact) => (
                            <ContactItem key={contact.id} data={contact} />
                        ))}
                    </ul>
                ) : (
                    <p>No Contacts yet!</p>
                )}
            </div>
        </div>
    );
};

export default ContactsList;

// When using remove in app we need unique-id
