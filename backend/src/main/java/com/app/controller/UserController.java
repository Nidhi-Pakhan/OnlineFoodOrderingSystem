package com.app.controller;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.AddressRepository;
import com.app.dao.UserRepository;
import com.app.dto.AddressDTO;
import com.app.dto.ChangePassword;
import com.app.dto.LoginRequest;
import com.app.dto.UserDTO;
import com.app.pojos.Address;
import com.app.pojos.User1;
import com.app.service.ICustomerService;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/user")
public class UserController {
	
	//dependencies
	@Autowired
	private ICustomerService customerSevice;

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private AddressRepository addressRepository;
	
	public UserController() {
		System.out.println("in UserController " + getClass().getName());

	}
	
	
	@PostMapping("/signup")
	public ResponseEntity<?> customerSignup(@RequestBody UserDTO userDTO){
		
		System.out.println("in signup of UserController " + userDTO);
		return new ResponseEntity<>(customerSevice.addCustomerDetails(userDTO), HttpStatus.OK);		
	}

	@PostMapping("/signin")
	public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest request) {
		String email = request.getEmail();
		String pass = request.getPassword();
		System.out.println("inside sign in "+ email+ pass);
		//System.out.println(request.getEmail());
		User1 userDTO = customerSevice.getCustomerDetailsByEmail(request.getEmail());
        System.out.println("sending userDTO : "+userDTO);
        if(userDTO != null) {
        	if (userDTO.getEmail().equals(request.getEmail())) {

    			if (userDTO.getPassword().equals(request.getPassword())) {
    				return ResponseEntity.ok(userDTO);
    			} 
    			  else {	  //wrong password	
    				return  ResponseEntity.ok("incorrect password.");
    			}
    		} else { //incorrect email
    			return ResponseEntity.ok("incorrect email.");
    		}
        }else {
        	return ResponseEntity.ok("incorrect email.");
        }
	
	}

	
		@PostMapping("/changepassword")
		public ResponseEntity<?> update(@RequestBody ChangePassword chpass){   //email pass
			User1 user = userRepository.findByEmail(chpass.getEmail());
		    System.out.println("inside change password" +user);
		    System.out.println(user.getEmail()+" ------- "+chpass.getEmail());
		    HashMap<String, Object> map = new HashMap<>();
		    
			if(user.getEmail().equals(chpass.getEmail())) {
				
				user.setPassword(chpass.getPassword());
				
				System.out.println("new pass : "+user.getPassword());
				
				userRepository.save(user);
				
				map.put("status", "success");
				map.put("data", user);
				return ResponseEntity.ok(map);
				
				
//				//return (ResponseEntity<?>) ResponseEntity.status(HttpStatus.OK);
//				return ResponseEntity.ok("Password reset");
			}else {
				map.put("status", "error");
				map.put("data", "");
				ResponseEntity.status(HttpStatus.NOT_MODIFIED).build();
				return ResponseEntity.ok(map);
				//return (ResponseEntity<?>) ResponseEntity.status(HttpStatus.NOT_FOUND);
				//return ResponseEntity.ok("Password  reset failed");
			}

		}

		
		@PostMapping("/add-address/{user}")
		public ResponseEntity<?> addAddress(@PathVariable User1 user ,@RequestBody AddressDTO addressdto){
			System.out.println("inside add-address controller");
			   return new ResponseEntity<>(customerSevice.addAddress(addressdto , user),HttpStatus.OK);
		   
		}
		
		@PostMapping("/editprofile")
		public ResponseEntity<?>editProfile(@RequestBody UserDTO userdto){
			//User user1=userService.save(user);
			System.out.println("user====="+userdto);
			
			User1 user=userRepository.findByEmail(userdto.getEmail());
			System.out.println("ac====="+user);
			
			//user.setEmail(userdto.getEmail());
			user.setFirstName(userdto.getFirstName());
			user.setLastName(userdto.getLastName());
			user.setPhone(userdto.getPhone());
			user.setPassword(user.getPassword());
			//user.setRole(user.getRole());
			
			System.out.println("aaaa======"+user);
			
			userRepository.save(user);
			return ResponseEntity.ok("ok");
		}
		
		
		@PostMapping("/editaddress")
		public ResponseEntity<?> editaddress(@RequestBody AddressDTO addressdto){
			System.out.println("inside ediitAddress");
			System.out.println(addressdto);
			System.out.println("=============="+addressdto.getUserId());
			Address addrs = addressRepository.getAddressByUserId(addressdto.getUserId());
			System.out.println(addrs);
			addrs.setAddressLine1(addressdto.getAddressLine1());
			addrs.setAddressLine2(addressdto.getAddressLine2());
			addrs.setCity(addressdto.getCity());
			addrs.setCountry(addressdto.getCountry());
			addrs.setPinCode(addressdto.getPinCode());
			addrs.setState(addressdto.getState());
			
			addressRepository.save(addrs);
			return ResponseEntity.ok("ok");
			
		}
}



