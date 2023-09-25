import React, { useState } from "react";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { Dialog } from "@mui/material";
import styles from './EditForm.module.scss';

const EditForm = ({ editTodo, onSubmit, isOpen, onClose }) => {
    const [editName, setEditName] = useState(editTodo.title);

    const handleSubmitForm = (e) => {
        onSubmit(e, editName);
    };
    return (
        <>
            <Dialog
                onClose={() => onClose(false)}
                open={isOpen}>

                <form className={styles.EditForm} onSubmit={handleSubmitForm}>
                    <h4>Edit todo</h4>
                    <Input
                        type="text"
                        color="secondary"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                    />
                    <Button
                        type="submit"
                        variant="outlined"
                        size="small"
                        color="secondary"
                    >
                        Edit
                    </Button>
                </form>
            </Dialog>
        </>
    );
};

export default EditForm;
