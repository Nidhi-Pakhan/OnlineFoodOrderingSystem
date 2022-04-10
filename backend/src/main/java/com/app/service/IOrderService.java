package com.app.service;

import java.time.LocalDateTime;
import java.util.List;

import com.app.pojos.Order;
import com.app.pojos.Product;

public interface IOrderService {

	String placeOrderForUser(Integer userId);

	List<Order> getAllOrders();

	List<Order> getAllOrdersById(Integer customer_id);

	String changeOrderStatus(Integer orderId);

	List<Order> findPresentOrder(LocalDateTime today);

	List<Product> getOrderProducts(int orderId);

	List<Order> findTodaysOrder(LocalDateTime now);

}
