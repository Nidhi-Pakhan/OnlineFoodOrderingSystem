package com.app.dto;

public class CartDTO {
	
	private Integer userId;
	private Integer productId;
	private int quantity;
	
	public CartDTO() {
		System.out.println("in cart DTO");
	}

	public CartDTO(Integer userId, Integer productId, int quantity) {
		super();
		this.userId = userId;
		this.productId = productId;
		this.quantity = quantity;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public int getProductId() {
		return productId;
	}

	public void setProductId(int productId) {
		this.productId = productId;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	@Override
	public String toString() {
		return "CartDTO [userId=" + userId + ", productId=" + productId + ", quantity=" + quantity + "]";
	}

}
