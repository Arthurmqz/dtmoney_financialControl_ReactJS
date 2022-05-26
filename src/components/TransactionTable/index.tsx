import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

export function TransactionTable () {
  useEffect(() => {
    api.get('/transactions')
    .then(response => console.log(response.data))
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
          <tr>
            <td>Web development</td>
            <td className="deposit">€ 2500.00</td>
            <td>Work</td>
            <td>05/22/22</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Grocery shop</td>
            <td className="withdraw"> - € 50.00</td>
            <td>Home</td>
            <td>05/10/22</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Gym</td>
            <td className="withdraw"> - € 25.00</td>
            <td>Leisure</td>
            <td>05/01/22</td>
          </tr>
        </tbody>
      </table>
      
    </Container>
  )
}