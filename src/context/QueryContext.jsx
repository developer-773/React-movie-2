import { createContext, useEffect, useState } from "react";


export const QueryContext = createContext()

export const QueryProvider = ({children}) => {

    const [query, setQuery] = useState([]);

    useEffect(() => {}, [])
    return (
        <QueryContext.Provider value={{query, setQuery}}>
            {children}
        </QueryContext.Provider>
    )
}