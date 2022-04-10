package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.dto.ProductDTO;
import com.app.pojos.Cart;
import com.app.pojos.CategoryType;
import com.app.pojos.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {

	public void save(ProductDTO productdto);

	public List<Product> findByName(String name);

	public List<Product> findByCategoryType(CategoryType categoryType);
	
	@Query(value = "CALL DISPLAY_CART(:userId );", nativeQuery = true)
	List<Product> diplayCart(@Param("userId") Integer userId);
	
	@Query(value = "CALL DISPLAY_ORDER(:orderId );", nativeQuery = true)
	List<Product> diplayOrderItems(@Param("orderId") Integer orderId);
	
}
