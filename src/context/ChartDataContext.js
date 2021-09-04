import React, {createContext, useContext, useState} from 'react';

const DataContext = createContext(null);
const DispatchContext = createContext(null);

export function DataProvider({children}){
    const [data, dispatch] = useState([]);

    return(
      <DataContext.Provider value ={data}>
          <DispatchContext.Provider value={dispatch}>
              {children}
          </DispatchContext.Provider>
      </DataContext.Provider>
    );
}

export function useDataContext() {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error('Cannot find DataContext');
    }
    return context;
}

export function useDispatchContext() {
    const context = useContext(DispatchContext);
    if (!context) {
        throw new Error('Cannot find DispatchContext');
    }
    return context;
}