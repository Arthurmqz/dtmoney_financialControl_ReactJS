import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

interface Transaction{
  id:number;
  title:string;
  amount:number;
  type:string;
  category:string;
  createAt:string;
}

export function TransactionTable () {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('/transactions')
    .then(response => setTransactions(response.data.transactions))
  }, []);

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => {
            return(
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                {new Intl.NumberFormat('pt-PT', {
                  style:'currency',
                  currency: 'EUR',
                }).format(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>
                {new Intl.DateTimeFormat('pt-PT').format(
                  new Date(transaction.createAt)
                  )}
                </td>
              </tr>
            )
          })}
        </tbody>

      </table>
      
    </Container>
  )
}