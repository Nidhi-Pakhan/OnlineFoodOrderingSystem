package com.app.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ProductDTO;
import com.app.pojos.CategoryType;
import com.app.pojos.Product;
import com.app.pojos.Status;
import com.app.service.IProductService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/product")
public class ProductController {

	@Autowired
	private IProductService productService;

	
	public ProductController() {
		System.out.println("in ProductController " + getClass().getName());

	}

	@PostMapping("/add-product")
	public ResponseEntity<?> save(@RequestBody ProductDTO productDTO) {
		System.out.println("add product method "+ productDTO);
		Product product = new Product(productDTO.getId(), productDTO.getName(), productDTO.getDescription(), productDTO.getPrice(),
				productDTO.getStatus(), productDTO.getCategoryType());
		product = productService.addProduct(product);
		System.out.println(product);
		
		return ResponseEntity.ok(product);
	}

	@DeleteMapping("/delete-product/{id}")
	public ResponseEntity<?> deleteProduct(@PathVariable Integer id) {
		return new ResponseEntity<>(productService.deleteProductById(id), HttpStatus.OK);
	}

	@PutMapping("/update-product/{id}")
	public ResponseEntity<?> updateProduct(@PathVariable Integer id, @RequestBody ProductDTO productdto) {
		System.out.println("inside update prodcut method" + productdto);
		return new ResponseEntity<>(productService.updateProduct(id, productdto), HttpStatus.OK);
	}

	@GetMapping("/product-list")
	public ResponseEntity<?> getAllProduct() {
		System.out.println("inside productController  getAllProduct() :");
		
		  List<Product> list = productService.getAllProduct();
		  System.out.println("inside productController : "+ list);
		  
		  List<ProductDTO> allproducts = new ArrayList<>();
		  for(Product p : list) {
			  allproducts.add(new ProductDTO(p.getId(),p.getName(), p.getDescription(), p.getPrice(),p.getStatus(),p.getCategoryType()));
		  }
		//System.out.println("inside productController : " + productService.getAllProduct());
		//return new ResponseEntity<>(productService.getAllProduct(), HttpStatus.OK);
        //return new ResponseEntity<>(list, HttpStatus.OK);
        	return ResponseEntity.ok(allproducts);
	}
	
	@GetMapping("/find-by-name/{name}")
	public ResponseEntity<?> findByName(@PathVariable String name ) {
		
		//System.out.println(productService.getProductByName(name));
		return new ResponseEntity<>(productService.getProductByName(name), HttpStatus.OK);
		
	}
	
	@GetMapping("/find-product-by-categoryType/{categoryType}")
	public ResponseEntity<?> findProductByCategory(@PathVariable CategoryType categoryType) {
		System.out.println("category :" + categoryType);
		List<Product> list = productService.getProductByCategory(categoryType);
		List<ProductDTO> products = new ArrayList<ProductDTO>();
		for(Product p : list) {
			products.add(new ProductDTO(p.getId(),p.getName(),p.getDescription(),p.getPrice(),p.getStatus(),p.getCategoryType()));
		}
		return ResponseEntity.ok(products);
		
	}
	
	@PutMapping("/change-status/{pid}/{status}")
	public ResponseEntity<?> changeProductStatus(@PathVariable Status status ,@PathVariable Integer pid ){
		productService.changeProductStatus(status , pid);
		return null;
	}
}
