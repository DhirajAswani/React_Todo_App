import React, {useState} from 'react';
import "./Todo.css";
import {List, ListItem, ListItemAvatar, ListItemText, Button, Modal} from '@material-ui/core';
import db from './firebase';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

function Todo(props) {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <>
        <Modal open={open} onnClose={handleClose}>
            <div>
                <h1>
                    Open
                </h1>
                <button onClick={event => setOpen(false)}>button</button>
            </div>
        </Modal>
        <List>
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={props.todo.todo} secondary = "Deadline!!" />
            </ListItem>
            <Button variant="contained" color="primary" onClick={event => setOpen(true)}><EditIcon/> Edit </Button>
            <Button variant="contained" color="secondary" onClick={ event => db.collection('todos').doc(props.todo.id).delete() }><DeleteIcon /> Delete </Button>
        </List>
        </>
    )
}

export default Todo
