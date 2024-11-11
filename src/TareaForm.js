import React, { useState } from 'react';

function TareaForm({ agregarTarea }) {
    const [texto, setTexto] = useState("");
    const [error, setError] = useState(""); 

    const handleSubmit = (e) => {
        e.preventDefault();
        if (texto.trim() === "") {
            setError("La tarea no puede estar en blanco.");
            return;
        }
        if (texto.length > 50) {
            setError("La tarea no puede tener más de 50 caracteres.");
            return;
        }
        agregarTarea(texto);
        setTexto("");
        setError(""); 
    };

    return (
        <form onSubmit={handleSubmit} className="form-inline mb-3">
            <input
                type="text"
                className="form-control mr-2"
                placeholder="Añadir tarea..."
                value={texto}
                onChange={(e) => {
                    setTexto(e.target.value);
                    setError("");
                }}
            />
            <button type="submit" className="btn btn-primary">Agregar Tarea</button>
            {error && <small className="text-danger ml-2">{error}</small>}
        </form>
    );
}

export default TareaForm;
