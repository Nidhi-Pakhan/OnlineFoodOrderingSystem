package com.app.dto;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import com.app.pojos.CategoryType;
import com.app.pojos.Status;


public class ProductDTO {
	Integer id;
	private String name;
	
	private String description;
	
	private double price;

	@Enumerated(EnumType.STRING)
	private Status status;
	
	@Enumerated(EnumType.STRING)
	private CategoryType categoryType;

	
	public ProductDTO() {
		
	}
	
	public ProductDTO(Integer id, String name, String description, double price, Status status, CategoryType categoryType) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.price = price;
		this.status = status;
		this.categoryType = categoryType;
	}

	
	
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}




	public void setName(String name) {
		this.name = name;
	}




	public String getDescription() {
		return description;
	}




	public void setDescription(String description) {
		this.description = description;
	}




	public double getPrice() {
		return price;
	}




	public void setPrice(double price) {
		this.price = price;
	}




	public Status getStatus() {
		return status;
	}




	public void setStatus(Status status) {
		this.status = status;
	}




	public CategoryType getCategoryType() {
		return categoryType;
	}




	public void setCategoryType(CategoryType categoryType) {
		this.categoryType = categoryType;
	}




	@Override
	public String toString() {
		return "ProductDTO [name=" + name + ", description=" + description + ", price=" + price + ", status=" + status
				+ ", categoryType=" + categoryType + "]";
	}
	
	
}
