import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from './../features/wishlist/wishlistSlice'; // Wishlist slice'ından removeItem action'ını import et

function Wishlist() {
  const wishlist = useSelector((state) => state.wishlist.items); // Wishlist'teki ürünleri alıyoruz
  const dispatch = useDispatch();

  const handleRemoveFromWishlist = (product) => {
    // Wishlist'ten ürünü silmek için
    dispatch(removeItem(product));
  };

  return (
    <div>
      <h2>Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty</p>
      ) : (
        wishlist.map((product) => (
          <div
            key={product.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              margin: '10px 0',
            }}
          >
            <span>{product.name}</span>
            <button onClick={() => handleRemoveFromWishlist(product)}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Wishlist;
