import React from 'react';

const GlobalContext = React.createContext()

const GlobalContextProvider = GlobalContext.Provider;

export default GlobalContext;

export { GlobalContextProvider as GlobalContextProvider };