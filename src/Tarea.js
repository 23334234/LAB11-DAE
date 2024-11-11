import React, { useState } from 'react';

function Tarea({ tarea, onDelete, onEdit, completada, onToggleCompletada }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(tarea);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => { 
        onEdit(editedText);
        setIsEditing(false);
    };

    return (
        <li className="d-flex align-items-center mb-2">
            <input type="checkbox" checked={completada} onChange={onToggleCompletada} className="mr-2" />
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={editedText}
                        onChange={(e) => setEditedText(e.target.value)}
                        className="form-control mr-2"
                    />
                    <button onClick={handleSaveClick} className="btn btn-success btn-sm mr-2">Guardar</button>
                </>
            ) : (
                <>
                    <span className={completada ? "text-muted text-decoration-line-through" : ""}>
                        {tarea}
                    </span>
                    <button onClick={onDelete} className="btn btn-danger btn-sm ml-2">Eliminar</button>
                    <button onClick={handleEditClick} className="btn btn-secondary btn-sm ml-2">Editar</button>
                </>
            )}
        </li>
    );
}

export default Tarea;
