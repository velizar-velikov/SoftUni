import { useEffect, useState } from 'react';
import AddButton from '../AddButton.jsx';

export default function Form({ onSubmit }) {
    return (
        <section className="form-container">
            <form onSubmit={onSubmit}>
                <label htmlFor="task">Task Name</label>
                <input type="text" id="task" name="task" placeholder="task name" />
                <AddButton />
            </form>
        </section>
    );
}
