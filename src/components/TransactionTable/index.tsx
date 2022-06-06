import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";
import { Container } from "./style";



export function TransactionTable () {
  const { transactions } = useContext (TransactionsContext)

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