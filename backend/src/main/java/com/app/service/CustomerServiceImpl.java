package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.AddressRepository;
import com.app.dao.UserRepository;
import com.app.dto.AddressDTO;
import com.app.dto.UserDTO;
import com.app.pojos.Address;
import com.app.pojos.Role;
import com.app.pojos.User1;

@Service
@Transactional
public class CustomerServiceImpl implements ICustomerService  {

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private AddressRepository addressRepository;
	
	@Override
	public String addCustomerDetails(UserDTO userDTO) {
		if (userDTO != null) {
			 System.out.println("userDTO : " + userDTO);
			 User1 user = new User1( userDTO.getFirstName(),userDTO.getLastName(),userDTO.getEmail(),userDTO.getPassword(),userDTO.getPhone());			
			 System.out.println("user : " + user);
			  //set role= = customer
			 user.setRole(Role.CUSTOMER);
			 System.out.println("user : " + user);
			 System.out.println("User added: " + userRepository.save(user));
				
			return "User Added successfully!";			
		}else 
			return "User Addition failed!";
	}

	
	@Override
	public User1 getCustomerDetailsByEmail(String email) {
         User1 user  = userRepository.findByEmail(email);
         System.out.println("inside getCustomerDetailsByEmail "+user);
		return user;
	}


	@Override
	public String addCustomer(UserDTO userdto) {
		if (userdto != null) {
			 System.out.println("userDTO : " + userdto);
			 User1 user = new User1( userdto.getFirstName(),userdto.getLastName(),userdto.getEmail(),userdto.getPassword(),userdto.getPhone(),userdto.getRole());			
			 System.out.println("user : " + user);
				if (user.getRole().equals(Role.EMPLOYEE)) {
					//Role = EMPLOYEE
					System.out.println("user" + user);
					System.out.println("Employee added " + userRepository.save(user));
					return "Employee Added Successfully !!";
				} else {
					//Role =DELIVERY_BOY
					System.out.println("user" + user);
					System.out.println("Delivery Boy added " + userRepository.save(user));
					return "Delivery Boy  Added Successfully !!";
				}
		}
		return "Adding Failed";
	}


	@Override
	public String deleteCustomerDetails(User1 user) {
		if (user != null) {
			userRepository.delete(user);

			return "Customer deleted successfully !!";
		} else
			return "No customer found!";
	}


	@Override
	public String addAddress(AddressDTO addressdto, User1 user) {
			System.out.println("inside custServiec");
			Integer id =user.getId();
			System.out.println(id);
		Address a= addressRepository.findBySelectedUser(user);
		System.out.println("returned address "+a);
		System.out.println("outside if ");
		if(addressdto!= null) {
			System.out.println("inside first oif");
			if(a == null) {
				System.out.println("inside second oif");
			      Address address = new Address(addressdto.getAddressLine1(),addressdto.getAddressLine2(),addressdto.getCity(),addressdto.getPinCode(), addressdto.getState(), addressdto.getCountry());
			      System.out.println("userDTO : " + addressdto);
			      System.out.println("user : " + address);
			      System.out.println("inside addAddress "+user );
			
			      address.setSelectedUser(user);
			      System.out.println("Address added: " + addressRepository.save(address));
			      return "Address Added successfully!";
			} else {
				//a != null
				return "Address already added!";
			}
		}
		else {
			return "Address Addition failed!";
		}
		
	}


	@Override
	public List<User1> getAllUserByRole(Role role) {
		System.out.println(role);
		return userRepository.findByRole(role);
		
	}


	@Override
	public User1 updateUserProfile(Integer userId, UserDTO userdto) {
		User1 userDetails = userRepository.findById(userId).get();
		System.out.println(userDetails);//old 
		System.out.println(userdto); //new updated
		//User1 newUserDetails = new User1(userdto.getPassword(),userdto.getFirstName(), userdto.getLastName(),userdto.getEmail(), userdto.getPhone(), userdto.getRole());
		
		userDetails.setFirstName(userdto.getFirstName());
		userDetails.setLastName(userdto.getLastName());
		userDetails.setEmail(userdto.getEmail());
		userDetails.setPhone(userdto.getPhone());
		
		userRepository.save(userDetails);
		return userDetails;
	}


  
	
}

