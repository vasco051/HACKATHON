import { useContext } from 'react';

import { Context } from "../main.tsx";

export const useStore = () => {
  const store = useContext(Context);
  return store.store;
};
