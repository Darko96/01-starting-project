import styled from "styled-components";

// button je metoda koja se nalazi unutar objekta styled koji smo
// importovali kao paket
// Ovo je posebna metoda posle koje se ne nalaze zagrade nego
// kosi znaci navoda
// Ono sto prosledimo unutar navodnika ce biti prosledjeno button metodi
// I onda ce button metoda da vrati novu button komponentu
// Stilove mozemo da dodajemo unutar navodnika
const Button = styled.button`
  width: 100%;
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  @media (min-width: 768px) {
    width: auto;
  }

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;

// const Button = (props) => {
//   return (
//     <button type={props.type} className="button" onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };

export default Button;
