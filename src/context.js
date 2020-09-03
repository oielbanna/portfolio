import React from 'react';
// https://blog.logrocket.com/use-hooks-and-context-not-react-and-redux/
const init = {
  theme: "light"
}
const Context = React.createContext(init);

export default Context;