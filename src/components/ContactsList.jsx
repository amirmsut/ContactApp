import React from "react";
const ContactsList = ({ contacts }) => {
    console.log(contacts);
    return (
        <div>
            <div>
                <h3>Contacts List</h3>
                {contacts.length ? (
                    <ul>
                        {contacts.map((contact) => (
                            <li key={contact.id}>
                                <p>
                                    {contact.name} {contact.lastName}
                                </p>
                                <p>
                                    <span>📬</span>
                                    {contact.email}
                                </p>
                                <p>
                                    <span>📞</span>
                                    {contact.phone}
                                </p>
                                <p>
                                    <span>🗑️</span>
                                    {contact.email}
                                </p>
                            </li>
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
