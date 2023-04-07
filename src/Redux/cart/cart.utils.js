export const addItemToCart = (cartItems, newItem) => {
  const itemExist = cartItems.find((item) => item.id === newItem.id);

  if (itemExist) {
    return cartItems.map((item) =>
      item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  return [...cartItems, { ...newItem, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cardItemToRemove) => {
  const itemExist = cartItems.find((item) => item.id === cardItemToRemove.id);

  if (itemExist.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cardItemToRemove.id);
  }

  return cartItems.map((item) =>
    item.id === cardItemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};
