package com.app.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.DeleteRequest;
import com.app.dto.UserDTO;
import com.app.pojos.Role;
import com.app.pojos.User1;
import com.app.service.ICustomerService;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("/admin")
public class AdminController {

	
	@Autowired
	private ICustomerService customerSevice;
	
	public AdminController() {
		System.out.println("in AdminController " + getClass().getName());

	}
	@PostMapping("/add-user")
	public ResponseEntity<?> addUser(@RequestBody UserDTO userdto){
         System.out.println("inisde adminController"+userdto);
		return new ResponseEntity<>(customerSevice.addCustomer(userdto), HttpStatus.OK);	
		
	}
	
	
	@PostMapping("/delete-user")
	public ResponseEntity<?> deleteCustomerDetails(@RequestBody DeleteRequest req ){        //email
		System.out.println(req.getEmail());
		User1 user = customerSevice.getCustomerDetailsByEmail(req.getEmail());
		return new ResponseEntity<>( customerSevice.deleteCustomerDetails(user), HttpStatus.OK);
	}
	
	@GetMapping("/show/{role}")
	public ResponseEntity<?> showUser(@PathVariable Role role){
		List<User1> list= customerSevice.getAllUserByRole(role);
		List<UserDTO> allusers = new ArrayList<>();
		for (User1 u : list) {
			 allusers.add(new UserDTO(u.getId(),u.getPassword(),u.getFirstName(),u.getLastName(),u.getEmail(),u.getPhone(),u.getRole()));
		  }
			/*
			 * Map<String, Object> map = new HashMap<>(); //empty map if(allusers != null) {
			 * map.put(" sucess", allusers); }
			 */
		return ResponseEntity.ok(allusers);
		//return (ResponseEntity<?>) list;
	}
	
	
}
