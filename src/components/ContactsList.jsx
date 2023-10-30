import React from "react";
import ContactItem from "./ContactItem";

// styles
import styles from "./ContactList.module.css";

const ContactsList = ({ contacts, deleteHandler }) => {
    console.log(contacts);
    return (
        <div className={styles.container}>
            <h3>Contacts List</h3>
            {contacts.length ? (
                <ul className={styles.contacts}>
                    {contacts.map((contact) => (
                        <ContactItem
                            key={contact.id}
                            data={contact}
                            deleteHandler={deleteHandler}
                        />
                    ))}
                </ul>
            ) : (
                <p>No Contacts yet!</p>
            )}
        </div>
    );
};

export default ContactsList;

// When using remove in app we need unique-id
