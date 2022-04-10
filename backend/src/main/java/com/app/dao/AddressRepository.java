package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.pojos.Address;
import com.app.pojos.User1;

@Repository
public interface AddressRepository extends JpaRepository<Address, Integer>{

	public Address findBySelectedUser(User1 user);

	@Query(value="select id, address_line_1,address_line_2,city,country,pin_code,state ,user_id from addresses where user_id=:userID" , nativeQuery = true)
	public Address getAddressByUserId(Integer userID);

	//public Address findBySelectedUser(User1 user);
}
