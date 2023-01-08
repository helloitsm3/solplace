import { createContext, useContext, useState } from 'react'

interface IAppState {}

interface IAppContext {
  appState?: IAppState
  setAppState?: React.Dispatch<React.SetStateAction<IAppState>>
}

type AppProviderType = {
  children: JSX.Element
}

export const AppContext = createContext<IAppContext>({})
export const AppProvider = ({ children }: AppProviderType) => {
  const [appState, setAppState] = useState<IAppState>({
    isNavActive: false,
  })

  return (
    <AppContext.Provider
      value={{
        appState,
        setAppState,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useApp = (): IAppContext => {
  const context = useContext(AppContext)

  if (!context) {
    throw new Error('You need to useApp inside a function')
  }

  return context
}
