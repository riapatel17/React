import { createContext, useState } from "react"

export const context = createContext()

const Context = ({ children }) => {
    const [todos, setTodos] = useState([]);
    return (
        <context.Provider value={{ todos, setTodos }}>
            {children}
        </context.Provider>)
}

export default Context
