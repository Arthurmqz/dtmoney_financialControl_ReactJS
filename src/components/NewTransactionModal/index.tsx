
import Modal from 'react-modal';
import incomeIcon from '../../assets/income.svg';
import outcomeIcon from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg';
import { Container, TransactionTypeContainer } from './style';


interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}


export function NewTransactionModal({ isOpen, onRequestClose}: NewTransactionModalProps){
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

      <Container>
      <h2>Transaction registration</h2>

      <input 
      placeholder="Title" 
      />

      <input 
      placeholder="Amount"
      type="number" 
      />

      <TransactionTypeContainer>  

      <button
      type="button" 
      >
        <img src={incomeIcon} alt="Income Icon" 
        />
        <span>Income</span>
      </button>

      <button
      type="button" 
      >
        <img src={outcomeIcon} alt="Outcome Icon" 
        />
        <span>Outcome</span>
      </button>

      </TransactionTypeContainer>

      <input
      placeholder="category" 
      type="text" 
      />

      <button type="submit">
        Register
      </button>
      </Container>

  </Modal>
  );
}

