import { FormEvent, useContext, useState } from 'react';
import { TransactionsContext } from '../../TransactionsContext';
import Modal from 'react-modal';

import incomeIcon from '../../assets/income.svg';
import outcomeIcon from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg';

import { Container, TransactionTypeContainer, RadioButton } from './style';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}


export function NewTransactionModal({ isOpen, onRequestClose}: NewTransactionModalProps){
  const {createTransactions} = useContext(TransactionsContext)

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    createTransactions({
      title,
      amount,
      category,
      type
    })

  }
  return (
    <Modal 
    isOpen={isOpen} 
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
    >
      <button type="button" 
        onClick={onRequestClose} 
        className="react-modal-close">
        <img src={closeImg} alt="Close Modal"></img> 
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
      <h2>Transaction registration</h2>

      <input 
      placeholder="Title" 
      value={title} 
      onChange={event => setTitle(event.target.value)}
      />

      <input 
      placeholder="Amount"
      type="number" 
      value={amount} 
      onChange={event => setAmount(Number(event.target.value))}
      />

      <TransactionTypeContainer>  

      <RadioButton
      type="button" 
      onClick={() =>{setType('deposit')}}
      isActive={type === 'deposit'}
      activeColor="green"
      >
        <img src={incomeIcon} alt="Income Icon" 
        />
        <span>Income</span>
      </RadioButton>

      <RadioButton
      type="button" 
      onClick={() =>{setType('withdraw')}}
      isActive={type === 'withdraw'}
      activeColor="red"
      >
        <img src={outcomeIcon} alt="Outcome Icon" 
        />
        <span>Outcome</span>
      </RadioButton>

      </TransactionTypeContainer>

      <input
      placeholder="category" 
      type="text" 
      value={category}
      onChange={event => setCategory(event.target.value)}
      />

      <button type="submit">
        Register
      </button>
      </Container>

  </Modal>
  );
}