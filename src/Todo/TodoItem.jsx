import React from 'react';
import styles from './TodoItem.module.scss';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Checkbox from '@mui/material/Checkbox';


const TodoItem = ({ todo, onDelete, onChecked, onEdit }) => {
    return (
        <>
            <li className={styles.Item}>
                <Checkbox checked={todo.checked} onChange={() => onChecked(todo.id)} />

                <h5>{todo.title}</h5>
                <div className={styles.BtnBox}>
                    <Stack
                        spacing={1}
                        direction="row">
                        <Button
                            variant="outlined"
                            size="small"
                            color='success'
                            startIcon={<EditIcon />}
                            onClick={() => { onEdit(todo) }}
                        >Edit
                        </Button>
                        <Button
                            variant="outlined"
                            size="small"
                            color='error'
                            startIcon={<DeleteIcon />}
                            onClick={() => onDelete(todo.id)}
                        >Delete
                        </Button>
                    </Stack>
                </div>
            </li>


        </>

    )
}

export default TodoItem;
