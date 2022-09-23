import { createContext, useContext, useState } from 'react';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function UserStateProvider({ children }) {
  const [userState, setUserState] = useState({ name: null });

  function loginUser(data) {
    setUserState(data);
  }

  return (
    <LocalStateProvider value={{ userState, loginUser }}>
      {children}
    </LocalStateProvider>
  );
}

function useUser() {
  const all = useContext(LocalStateContext);
  return all;
}

export { UserStateProvider, useUser };
