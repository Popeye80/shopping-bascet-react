import CartItem from "../CartItem";
import propTypes from "prop-types";

const CartItemList = ({ items }) => (
  <div className="cart-item-list">
    {items.map((item) => (
      <CartItem key={item.id} item={item} />
    ))}
  </div>
);

CartItemList.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
    })
  ),
};

export default CartItemList;
