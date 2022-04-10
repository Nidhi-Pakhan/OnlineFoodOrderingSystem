package com.app.dao;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.pojos.Cart;
import com.app.pojos.Order;

@Repository
public interface OrderRepository extends JpaRepository<Order, Integer>{
	
	
	/*
	 * @Query("select o from orders o where o.userId.id=:id") List<Order>
	 * findAllByCustId(@Param("id") Integer customer_id);
	 */	
	@Query(value="select * from orders o where o.customer_id=?", nativeQuery=true)
	List<Order>findAllByCustId(Integer customer_id);

	List<Order> findByIssuedOnBefore(LocalDateTime today);

	List<Order> findByIssuedOn(LocalDateTime today);
}
