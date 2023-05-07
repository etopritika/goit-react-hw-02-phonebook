import React from 'react';

export default function Contacts({contacts, deleteButton}) {
    return(
        <>
            <ul>{contacts.map(contact => (<li key={contact.id}>{contact.name}: {contact.number}<button onClick={() => deleteButton(contact.id)} type='button'>Delete</button></li>))}</ul>
        </>
    )
}