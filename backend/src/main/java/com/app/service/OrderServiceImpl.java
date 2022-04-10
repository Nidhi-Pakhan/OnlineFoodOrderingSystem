package com.app.service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.CartRepository;
import com.app.dao.OrderProductRepository;
import com.app.dao.OrderRepository;
import com.app.dao.ProductRepository;
import com.app.dao.UserRepository;
import com.app.pojos.Cart;
import com.app.pojos.Order;
import com.app.pojos.OrderProduct;
import com.app.pojos.OrderStatus;
import com.app.pojos.Product;
import com.app.pojos.User1;

@Service
@Transactional
public class OrderServiceImpl implements IOrderService{

	@Autowired
	private CartRepository cartRepository;
	
	@Autowired
	private OrderRepository orderRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private OrderProductRepository orderproductRepository;
	
	@Autowired
	private ProductRepository productRepository;
	
	@Override
	public String placeOrderForUser(Integer userId) {
		System.out.println("INisde placeOrderForUser in Orderservice");
		List<Cart> cartItems = cartRepository.findAllItemsByUser(userId);
		
		double cartTotal = 0.0;
		
		for (Cart item : cartItems) {
			cartTotal += item.getQuantity() * item.getSelectedProduct().getPrice();
		}
		
		User1 user = userRepository.findById(userId).get();    // findBy returns optional , use get() to get req task . --> stackoverflow
//format(DateTimeFormatter.ofPattern(""))
		Order newOrder = new Order(cartTotal, LocalDateTime.now() , OrderStatus.PENDING, user);
		orderRepository.save(newOrder);
		cartItems.forEach(item -> {
			orderproductRepository.save(new OrderProduct(item.getSelectedProduct().getPrice(), item.getQuantity(), newOrder,
					item.getSelectedProduct()));
		});
		
		//delete from cart
        cartRepository.deleteAll(cartItems);
		
		return "Order Placed Successfully!";
	}

	@Override
	public List<Order> getAllOrders() {
		List<Order> orders   = orderRepository.findAll();
		System.out.println(orders);
		return orders;
	}

	@Override
	public List<Order> getAllOrdersById(Integer customer_id) {	
		List<Order> list = orderRepository.findAllByCustId(customer_id);
		System.out.println("inside getAllOrdersById orderService");		
		return list;
		//return orderRepository.findAllByCustId(customer_id);
	}

	@Override
	public String changeOrderStatus(Integer orderId) {
		
		Order order = orderRepository.findById(orderId).get();
		
		if (order != null) {
			System.out.println("order : " + order);
			
			if (order.getOrderStatus().equals(OrderStatus.PENDING)) {
				order.setOrderStatus(OrderStatus.DELIVERED);
			}
			return "Order status chnaged Successfully";

		}

		return "Order not found";
	}

	
	@Override
	public List<Order> findPresentOrder(LocalDateTime today) {
		return orderRepository.findByIssuedOnBefore(today);
		
	}

	@Override
	public List<Product> getOrderProducts(int orderId) {
		return productRepository.diplayOrderItems(orderId);
		
	}

	@Override
	public List<Order> findTodaysOrder(LocalDateTime now) {
		
		return orderRepository.findByIssuedOn(now);
	}

	
	
}
