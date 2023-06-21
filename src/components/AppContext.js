import {createContext, useState} from "react";

const AppContext = createContext();

export function AppProvider({children}){
        const [items,setItems] = useState([])
    return(
      <AppContext.Provider value={{items,setItems}}>
          {children}
      </AppContext.Provider>
    );
}

export default AppContext;