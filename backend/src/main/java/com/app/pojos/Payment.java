package com.app.pojos;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity
@Table
public class Payment extends BaseEntity {
	
	@Column
	private double amount;

	@Enumerated(EnumType.STRING)
	@Column
	private PaymentStatus status;
	
	@Enumerated(EnumType.STRING)
	@Column(name="payment_type",length=30)
	private PaymentType paymentType;
	
	@ManyToOne(cascade = CascadeType.ALL)
	private User1 userId;
	
	public Payment() {
	}

	public Payment(double amount, PaymentStatus status, PaymentType paymentType, User1 userId) {
		super();
		this.amount = amount;
		this.status = status;
		this.paymentType = paymentType;
		this.userId = userId;
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

	public User1 getUserId() {
		return userId;
	}

	public void setUserId(User1 userId) {
		this.userId = userId;
	}

	@Override
	public String toString() {
		return "Payment [amount=" + amount + " , status=" + status + ", paymentType="
				+ paymentType + ", userId=" + userId + "]";
	}

		
}
