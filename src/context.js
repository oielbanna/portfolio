import React, { useState } from 'react';
// https://blog.logrocket.com/use-hooks-and-context-not-react-and-redux/

export const Context = React.createContext();

export const Store = ({ children }) => {
  const [selectedProject, updateSelectedProject] = useState(-1);

  return (
    <Context.Provider
      value={{ selectedProject, updateSelectedProject }}
    >
      {children}
    </Context.Provider>
  );
}