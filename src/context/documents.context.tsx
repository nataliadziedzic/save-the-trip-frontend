import React from 'react'

interface DocumentsContextValue {
  tripId: number | null
  documentsId: number | null
}
interface SetDocumentsContextValue {
  setTripId: (id: number) => void
  setDocumentsId: (id: number) => void
}

export const DocumentsContext = React.createContext<DocumentsContextValue>(null!)
export const SetDocumentsContext = React.createContext<SetDocumentsContextValue>(null!)

export const useDocumentsContext = () => {
  return React.useContext(DocumentsContext)
}
export const useSetDocumentsContext = () => {
  return React.useContext(SetDocumentsContext)
}

export interface DocumentsContextProviderProps {
  children: React.ReactNode
}

const DocumentsContextProvider: React.FC<DocumentsContextProviderProps> = ({ children }) => {
  const [tripId, setTripId] = React.useState<number | null>(null)
  const [documentsId, setDocumentsId] = React.useState<number | null>(null)

  return (
    <DocumentsContext.Provider
      value={{
        tripId,
        documentsId,
      }}
    >
      <SetDocumentsContext.Provider value={{ setTripId, setDocumentsId }}>{children}</SetDocumentsContext.Provider>
    </DocumentsContext.Provider>
  )
}

export default DocumentsContextProvider
