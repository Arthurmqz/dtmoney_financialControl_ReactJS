import { Response } from 'miragejs';
import { createContext, ReactNode, useEffect, useState} from 'react'
import { api } from './services/api';

interface Transactions{
  id:number;
  title:string;
  amount:number;
  type:string;
  category:string;
  createAt:string;
}

type TransactionsInput = Omit<Transactions, 'id' | 'createAt'> 

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData{
  transactions: Transactions[];
  createTransactions: (Transactions: TransactionsInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
  );

export function TransactionsProvider({children}: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transactions[]>([])

  useEffect(() => {
    api.get('/transactions')
    .then(response => setTransactions(response.data.transactions))
  }, []);

  async function createTransactions(transactionsInput: TransactionsInput) {
    const response = await api.post('/transactions', {
    ...transactionsInput,
    createAt: new Date()
  })
    const { transaction } = response.data;

    setTransactions([
      ...transactions,
      transaction
    ]);
  }
  

  return(
    <TransactionsContext.Provider value={{transactions, createTransactions}}>
      {children}
    </TransactionsContext.Provider>
  )

}