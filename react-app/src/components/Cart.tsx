interface Props {
  cartItems: string[];
  onRemove: () => void;
}

const Cart = ({ cartItems, onRemove }: Props) => {
  return (
    <div>
      <p>Carts</p>
      {cartItems.map((item) => (
        <li key={item}> {item}</li>
      ))}

      <button onClick={onRemove}>Clear</button>
    </div>
  );
};

export default Cart;
