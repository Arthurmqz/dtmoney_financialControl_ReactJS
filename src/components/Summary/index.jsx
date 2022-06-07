import { Container } from "./style";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { useTransactions } from "../../hooks/useTransactions";

export function Summary () {
  const  { transactions }  = useTransactions()

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit'){
      acc.deposit += transaction.amount;
      acc.total += transaction.amount;
    } else {
      acc.withdraw += transaction.amount;
      acc.total -= transaction.amount;
    }

    return acc;
  }, {
    deposit:0,
    withdraw:0,
    total:0,
  })

  return(
    <Container>
      <div>
        <header>
          <p>Income</p>
          <img src={incomeImg} alt="income" />
        </header>
        <strong>
        {new Intl.NumberFormat('pt-PT', {
                  style:'currency',
                  currency: 'EUR',
                }).format(summary.deposit)}
        </strong>
      </div>
      <div>
        <header>
          <p>Outcome</p>
          <img src={outcomeImg} alt="outcome" />
        </header>
        <strong>
        {new Intl.NumberFormat('pt-PT', {
                  style:'currency',
                  currency: 'EUR',
                }).format(summary.withdraw)}
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="total" />
        </header>
        <strong>
        {new Intl.NumberFormat('pt-PT', {
                  style:'currency',
                  currency: 'EUR',
                }).format(summary.total)}
        </strong>
      </div>

    </Container>
  )
}