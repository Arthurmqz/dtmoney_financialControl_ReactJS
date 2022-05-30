
import Modal from 'react-modal'
import { Container } from './style';


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
      <Container>
      <h2>Transaction registration</h2>

      <input placeholder="Title" />
      <input placeholder="Amount" type="number" />
      <input placeholder="category" type="text" />

      <button type="submit">
        Register
      </button>
      </Container>

  </Modal>
  );
}

