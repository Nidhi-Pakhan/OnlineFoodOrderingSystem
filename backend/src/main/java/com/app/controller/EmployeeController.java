package com.app.controller;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.UserDTO;
import com.app.service.ICustomerService;
import com.app.service.IOrderService;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("/employee/home")
public class EmployeeController {

	@Autowired
	private IOrderService orderService;
	
	@Autowired
	private ICustomerService customerService;
	
	//display all order
	//display orders by date
	//change order status - pending /delivered
	public EmployeeController() {
		System.out.println("in EmployeeController " + getClass().getName());

	}
	@GetMapping("/order-list")
	public ResponseEntity<?> getAllOrdersList() {
		System.out.println("inside  Employee controller ");
		return new ResponseEntity<>(orderService.getAllOrders(), HttpStatus.OK);
	}

	@GetMapping("/order-list/{id}")
	public ResponseEntity<?> getAllOrdersList1(@PathVariable(value = "id") Integer customer_id) {
		return new ResponseEntity<>(orderService.getAllOrdersById(customer_id), HttpStatus.OK);
	}

	
	@PutMapping("/order-change-status/{id}")
	public ResponseEntity<?> changeOrderStatus(@PathVariable(value = "id") Integer orderId) {
		return new ResponseEntity<>(orderService.changeOrderStatus(orderId), HttpStatus.OK);
	}
	
	@PutMapping("/update-profile/{id}")
	public ResponseEntity<?> updateUserProfile(@PathVariable(value = "id") Integer userId, @RequestBody UserDTO userdto){
		System.out.println("inside EmployeeController  " + userdto);
		return new ResponseEntity<>(customerService.updateUserProfile(userId, userdto), HttpStatus.OK);	
	}
	
	@GetMapping("/order-list-by-date")
	public ResponseEntity<?> getAllOrdersByDate(){
		
		return new ResponseEntity<>(orderService.findPresentOrder(LocalDateTime.now()), HttpStatus.OK);
	}
	
//	@GetMapping("/order-list-by-todaydate")
//	public ResponseEntity<?> getAllOrdersByTodaysDate(){
//		
//		    LocalDateTime now = LocalDateTime.now();
//		System.out.println(now);
//		
//	        DateTimeFormatter df = DateTimeFormatter.ofPattern("yyyy-MM-dd");
//	        String date1 = now.format(df);
//System.out.println(date1);
//
//	        LocalDateTime  date = LocalDateTime.parse(date1, df);
//	        
//	        System.out.println(date);
//	        return null;
//		//return new ResponseEntity<>(orderService.findTodaysOrder(date), HttpStatus.OK);
//	}
	
}
