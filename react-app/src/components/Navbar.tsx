interface Props {
  cartItemCount: number;
}

const Navbar = ({ cartItemCount }: Props) => {
  return (
    <div>
      <p>Navbar {cartItemCount}</p>
    </div>
  );
};

export default Navbar;
