import React from 'react';
import { List, Item, Button, Text } from './StyleItem';
import { TransitionGroup } from "react-transition-group";

const PhoneItem = ({ deleteTask, contacts }) => {
    return (
        <>
        <TransitionGroup component={List}>
            {  contacts.length > 0 &&
                contacts.map((contact) => 
                {return (
                    <Item key={contact.id} in={true} appear={true} >
                    <Text>{contact.name}: {contact.number}</Text>
                    <Button onClick={() => deleteTask(contact.id)}>Delete</Button>
                </Item>
                   )}
                )
            }
            </TransitionGroup>
        </>
    );
};

export default PhoneItem;