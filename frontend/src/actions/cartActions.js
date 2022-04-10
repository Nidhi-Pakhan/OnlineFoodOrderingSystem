export const addToCartAction = (products) => {
    return {
      type: 'add-to-cart',
      product: products,
    }
  }
  
  export const removeFromCartAction = (products) => {
    return {
      type: 'remove-from-cart',
      product: products,
    }
  }
  