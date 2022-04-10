package com.app.service;

import java.util.List;

import com.app.dto.CartDTO;
import com.app.pojos.Cart;
import com.app.pojos.Product;
import com.app.pojos.User1;

public interface ICartService {

	List<Cart> getAllCartContents(Integer userId);
	

	String addItemToCart(CartDTO cartdto);


	String deleteByUserId(User1 userId);


	public Double getCartTotalAmt(Integer userId);


	String deleteCartItem(Integer userId, Integer productId);
}
