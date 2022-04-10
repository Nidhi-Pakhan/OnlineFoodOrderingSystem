package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.Role;
import com.app.pojos.User1;


@Repository
public interface UserRepository extends JpaRepository<User1, Integer>{

	// @Query("select u from User u where u.email= :email")
	// public User findByEmail( @Param("email") String email);
	public User1 findByEmail(String email);

	public List<User1> findByRole(Role role);
	
	
}
