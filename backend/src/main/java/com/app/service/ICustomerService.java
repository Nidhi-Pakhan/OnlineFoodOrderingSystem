package com.app.service;

import java.util.List;

import com.app.dto.AddressDTO;
import com.app.dto.UserDTO;
import com.app.pojos.Role;
import com.app.pojos.User1;


public interface ICustomerService {

	
	// method for Sign-up of Customer
	String addCustomerDetails(UserDTO userDTO);
	
	
	User1 getCustomerDetailsByEmail(String email);
		
	//add-user : Admin controller
	String addCustomer(UserDTO userdto);

	//delete-user : Admin controller
	String deleteCustomerDetails(User1 user);


	String addAddress(AddressDTO addressdto, User1 user);


	List<User1> getAllUserByRole(Role role);


	User1 updateUserProfile(Integer userId, UserDTO userdto);


	
}
