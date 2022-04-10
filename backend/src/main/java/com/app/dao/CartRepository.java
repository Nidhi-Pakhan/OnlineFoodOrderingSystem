package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.app.pojos.Cart;
import com.app.pojos.User1;

@Repository
public interface CartRepository extends JpaRepository<Cart, Integer>{

	//@Query(value="select product_id from cart where user_id=:id" , nativeQuery = true)
	@Query("Select c from Cart c join fetch c.productId where c.userId.id=:id")
	List<Cart> findAllItemsByUser(@Param("id") Integer userId);

	
	String deleteByUserId(User1 userId);


	Cart findByUserId(User1 userId);

	@Modifying
    @Transactional
	 @Query(value ="delete from cart where product_id=:productId and user_id=:userId LIMIT 1" , nativeQuery = true) 
	 void cartItemdelete(Integer userId, Integer productId);
	 
}
