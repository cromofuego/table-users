import React, { useState } from "react";

const AppContext = React.createContext();

const AppProvider = (props) => {

  const [inputNameEmailWebsiteNewUser, setInputNameEmailWebsiteNewUser] = useState({
    name: '',
    email: '',
    website: '',
    status: '',
  })

  const [idUserShouldBeRemove, setIdUserShouldBeRemove] = useState(NaN);

  return (
    <AppContext.Provider
      value={{
        inputNameEmailWebsiteNewUser,
        setInputNameEmailWebsiteNewUser,
        idUserShouldBeRemove,
        setIdUserShouldBeRemove,
      }}
    >
      {props.children}
    </AppContext.Provider>
  )

};

export { AppProvider, AppContext };
