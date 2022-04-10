package com.app.service;

import java.util.List;

import com.app.dto.ProductDTO;
import com.app.pojos.CategoryType;
import com.app.pojos.Product;
import com.app.pojos.Status;


public interface IProductService {

	
	public Product addProduct(Product product);
	
	public String deleteProductById(Integer id);
	
	public String updateProduct(Integer id, ProductDTO productdto);

	public List<Product> getAllProduct();

	public List<Product> getProductByName(String name);

	public List<Product> getProductByCategory(CategoryType categoryType);
	
	public List<Product> displayCart(Integer userID);

	public void changeProductStatus(Status status, Integer pid);
}
