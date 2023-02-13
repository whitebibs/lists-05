import React, { useState } from "react"


export function TodoList() {
    const [item, setItems] = useState([]);
    const [input, setInput] = useState("");

    const list = (todo) => {
        const newItems = {
            id: Math.random(),
            todo: todo,
        };
        setItems([...item, newItems])


        setInput("");
    };
    const resetTodoList = () => {
        setItems([])
    }


    return (
        <div>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={() => list(input)}>Add</button>
            <button onClick={resetTodoList} style={{ marginLeft: ".5rem" }}>Reset</button>
            <ul>
                {item.map((todo) => (
                    <li key={todo.id}>
                        {todo.todo}
                    </li>
                ))}
            </ul>
        </div>
    )
}