import { PropsWithChildren } from 'react';

import { Context } from "../../main.tsx";

import Store from "../../store/store.ts";

export const ContextProvider = ({children}: PropsWithChildren) => {
  return (
    <Context.Provider
      value={{
        store: new Store(),
      }}
    >
      {children}
    </Context.Provider>
  );
};
