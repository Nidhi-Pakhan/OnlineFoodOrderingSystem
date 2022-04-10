package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.ProductRepository;
import com.app.dto.ProductDTO;
import com.app.pojos.CategoryType;
import com.app.pojos.Product;
import com.app.pojos.Status;

@Service
@Transactional
public class ProductServiceImpl implements IProductService{

	@Autowired
	private ProductRepository productRepository;
	
	@Override
	public Product addProduct(Product product) {	
		return productRepository.save(product);
	}

	@Override
	public String deleteProductById(Integer id) {
		if(id!= null) {
			 productRepository.deleteById(id);
			 return "Product with Id : "+id+"removed";
		}
		else {
			return "No product found with id : "+id;
		}
	}

	@Override
	public String updateProduct(Integer id, ProductDTO productdto) {
		Product product = productRepository.findById(id).get();
		product.setName(productdto.getName());
		product.setDescription(productdto.getDescription());
		product.setPrice(productdto.getPrice());
		product.setStatus(productdto.getStatus());
		product.setCategoryType(productdto.getCategoryType());
		productRepository.save(product);
		return "updated!!";
	}

	@Override
	public List<Product> getAllProduct() {
		//console.log(productRepository.findAll());
		List<Product>  list = productRepository.findAll();
		System.out.println("inside productServceimpl : "+list);
	    return list;
	}

	@Override
	public List<Product> getProductByName(String name) {
		return productRepository.findByName(name);
		
	}

	@Override
	public List<Product> getProductByCategory(CategoryType categoryType) {
		System.out.println("inside getProductBy CAtegory  "+ categoryType);
		return productRepository.findByCategoryType(categoryType);
		
	}

	@Override
	public List<Product> displayCart(Integer userID) {
		return productRepository.diplayCart(userID);
		
	}

	@Override
	public void changeProductStatus(Status status , Integer pid) {
		Product product = productRepository.findById(pid).orElseThrow();
		if(status == Status.AVAILABLE) {
			product.setStatus(Status.UNAVAILABLE);
			productRepository.save(product);
		}else {
			//status = inactive
			product.setStatus(Status.AVAILABLE);
			productRepository.save(product);
		}
	}
}
