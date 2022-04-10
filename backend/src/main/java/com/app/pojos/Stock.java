package com.app.pojos;
import javax.persistence.*;

@Entity
@Table(name="Stock")
public class Stock extends BaseEntity{

	
private int quantity;

@OneToOne
@JoinColumn(name = "product_id")
private Product selectedProduct;	

public Stock() {
	System.out.println("in ctr of stock");
}

public Stock(int quantity) {
	super();
	this.quantity = quantity;
}

public int getQuantity() {
	return quantity;
}

public void setQuantity(int quantity) {
	this.quantity = quantity;
}

public Product getSelectedProduct() {
	return selectedProduct;
}

public void setSelectedProduct(Product selectedProduct) {
	this.selectedProduct = selectedProduct;
}

@Override
public String toString() {
	return "Stock [quantity=" + quantity + "]";
}



}
