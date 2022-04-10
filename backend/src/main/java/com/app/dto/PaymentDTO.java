package com.app.dto;

import com.app.pojos.PaymentStatus;
import com.app.pojos.PaymentType;
import com.app.pojos.User1;

public class PaymentDTO {
	private double amount;
	private PaymentStatus status;
	private PaymentType paymentType;
	private Integer userId;

	public PaymentDTO() {
	}

	public PaymentDTO(Integer Id, double amount, PaymentStatus status, PaymentType paymentType) {
		super();
		this.amount = amount;
		this.status = status;
		this.paymentType = paymentType;
		this.userId = Id;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public PaymentStatus getStatus() {
		return status;
	}

	public void setStatus(PaymentStatus status) {
		this.status = status;
	}

	public PaymentType getPaymentType() {
		return paymentType;
	}

	public void setPaymentType(PaymentType paymentType) {
		this.paymentType = paymentType;
	}

	
	  public Integer getUserId() { return userId; }
	  
	  public void setUserId(Integer userId) { this.userId = userId; }
	  
	  
	  
	  @Override public String toString() { return "PaymentDTO [amount=" + amount +
	  ", status=" + status + ", paymentType=" + paymentType + ", userId=" + userId
	  + "]"; }
	 


	/*
	 * public static Payment toEntity(PaymentDTO dto) { Payment entity = new
	 * Payment(); BeanUtils.copyProperties(dto, entity); return entity; }
	 */

}
