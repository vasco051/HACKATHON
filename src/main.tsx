import { createContext, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';

import { IRootStore } from './types/IRootStore.ts';

export const Context = createContext<IRootStore>({} as IRootStore);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
