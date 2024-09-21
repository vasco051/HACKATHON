import { App as AntdApp, Layout } from 'antd'

import { AppProviders } from "./components/providers";
import { ErrorBoundary } from "./components/layouts/ErrorBoundary.tsx";
import { ContextProvider } from "./components/layouts/ContextProvider.tsx";
import { Header } from "./components/layouts/header/Header.tsx";

import './assets/styles/index.scss'
import Routing from "./routing/Routes.tsx";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <AntdApp className='app'>
        <ContextProvider>
          <AppProviders>
            <ErrorBoundary>
              <Layout>
                <Header/>
                <Routing/>
              </Layout>
            </ErrorBoundary>
          </AppProviders>
        </ContextProvider>
      </AntdApp>
    </BrowserRouter>
  )
}

export default App;
