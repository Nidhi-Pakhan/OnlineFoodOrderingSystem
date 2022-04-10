package com.app.pojos;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="cart")
public class Cart extends BaseEntity{
	
	private int quantity;
	
	@ManyToOne
	@JoinColumn(name="product_id")
	private Product productId;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="user_id")
	private User1 userId;
	
	private double cart_amt;

	public Cart() {
	}

	public Cart(int quantity, Product productId, User1 userId,double cart_amt) {
		super();
		this.quantity = quantity;
		this.productId = productId;
		this.userId = userId;
		this.cart_amt=cart_amt;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public Product getSelectedProduct() {
		return productId;
	}

	public void setSelectedProduct(Product selectedProduct) {
		this.productId = selectedProduct;
	}

	
	
	public Product getProductId() {
		return productId;
	}

	public void setProductId(Product productId) {
		this.productId = productId;
	}

	public User1 getUserId() {
		return userId;
	}

	public void setUserId(User1 userId) {
		this.userId = userId;
	}

	public double getCartamt() {
		return cart_amt;
	}

	public void setCart_amt(double cart_amt) {
		this.cart_amt = cart_amt;
	}

	@Override
	public String toString() {
		return "Cart [ID=" + getId() + ",quantity=" + quantity + "]";
	}
	
	
}
