package com.app.pojos;
import java.time.LocalDateTime;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="orders")
public class Order extends BaseEntity {
	
	@Column(name="total_price")
	private double totalPrice;
	
	@DateTimeFormat(pattern="yyyy-MM-dd hh:mm:ss")
	@Column(name="order_date")
	private LocalDateTime issuedOn;
	
	@Enumerated(EnumType.STRING)
	@Column(length=25,name="order_status")
	private OrderStatus orderStatus;
	

	//@ManyToOne(fetch = FetchType.LAZY)
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="customer_id",nullable = false)
	private User1 userId;
	

	public Order() {
	}

	public Order(double totalPrice, LocalDateTime issuedOn,
			OrderStatus orderStatus, User1 userId) {
		super();
		this.totalPrice = totalPrice;
		this.issuedOn = issuedOn;
		this.orderStatus = orderStatus;
		this.userId = userId;
	}

	public double getTotalPrice() {
		return totalPrice;
	}

	public void setTotalPrice(double totalPrice) {
		this.totalPrice = totalPrice;
	}

	

	public LocalDateTime getIssuedOn() {
		return issuedOn;
	}

	public void setIssuedOn(LocalDateTime issuedOn) {
		this.issuedOn = issuedOn;
	}

	public OrderStatus getOrderStatus() {
		return orderStatus;
	}

	public void setOrderStatus(OrderStatus orderStatus) {
		this.orderStatus = orderStatus;
	}

	public User1 getUserId() {
		return userId;
	}

	public void setUserId(User1 userId) {
		this.userId = userId;
	}

	@Override
	public String toString() {
		return "Order [ID=" + getId() + ",totalPrice=" + totalPrice + ", orderDate=" + issuedOn + ", orderStatus=" + orderStatus
				 + "]";
	}

	
	
}