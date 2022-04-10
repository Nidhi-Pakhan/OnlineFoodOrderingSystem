package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.CartRepository;
import com.app.dao.ProductRepository;
import com.app.dao.UserRepository;
import com.app.dto.CartDTO;
import com.app.pojos.Cart;
import com.app.pojos.Product;
import com.app.pojos.User1;

@Service
@Transactional
public class CartServiceImpl implements ICartService{

	@Autowired
	private CartRepository cartRepository;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private ProductRepository productRepository;
	
	@Override
	public List<Cart> getAllCartContents(Integer userId) {
		System.out.println("inside cart service");
		List<Cart> list = cartRepository.findAllItemsByUser(userId);
		System.out.println("inside cartservice getAll cart returning " +list);
		return list;
		
	}


	@Override
	public String addItemToCart(CartDTO cartdto) {
		Integer productId = cartdto.getProductId();
		Integer quantity = cartdto.getQuantity();
		Integer userId = cartdto.getUserId();
		
		User1 customer = userRepository.findById(userId).get();
		Product product = productRepository.findById(productId).get();
		
		double c_amt = quantity * product.getPrice();
		//save 
		cartRepository.save(new Cart(quantity, product, customer, c_amt));
		
		return quantity + " " + "(s) of " + product.getName() + " added to cart";
	}


	@Override
	public String deleteByUserId(User1 userId) {
		System.out.println("inside CartService delete by userId"+userId);
		
		Cart c = cartRepository.findByUserId(userId);
		System.out.println("");
		return "Cart Details Deleted Successfully";
	}


	@Override
	public Double getCartTotalAmt(Integer userId) {
		
			double cart_amt = 0.0;
			List<Cart> cart = cartRepository.findAllItemsByUser(userId);
			for (Cart cart2 : cart) {
				cart_amt = cart_amt + cart2.getCartamt();
			}
			System.out.println(cart_amt);
			// System.out.println(cart);
			return cart_amt;
		}


	@Override
	public String deleteCartItem(Integer userId, Integer productId) {
		/*
		 * User1 userId = userRepository.findById(user.getId()).orElseThrow(); Product
		 * productId = productRepository.findById(product.getId()).orElseThrow();
		 * System.out.println("inside CartService deleteCartItem"+userId+"-----------"+
		 * productId);
		 */
		cartRepository.cartItemdelete(userId , productId);
		return "Item Removed";
	}
	



}
