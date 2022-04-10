package com.app.controller;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.AddressRepository;
import com.app.dao.ProductRepository;
import com.app.dao.UserRepository;
import com.app.dto.CartDTO;
import com.app.dto.PaymentDTO;
import com.app.pojos.Address;
import com.app.pojos.Product;
import com.app.pojos.User1;
import com.app.service.ICartService;
import com.app.service.IOrderService;
import com.app.service.IPaymentService;
import com.app.service.IProductService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/customer")
public class CustomerController {

	@Autowired
	private ICartService cartService;
	
	@Autowired
	private IPaymentService paymentService;
	
	@Autowired
	private IOrderService orderService;
	
	@Autowired
	private IProductService productService;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private ProductRepository productRepository;
	
	@Autowired
	private AddressRepository addressRepository;
	
	public CustomerController() {
		System.out.println("in CustomerController " + getClass().getName());

	}
	@PostMapping("/add-to-cart")
	public ResponseEntity<?> addToCart(@RequestBody CartDTO cartdto){
		return new ResponseEntity<>(cartService.addItemToCart(cartdto), HttpStatus.OK);
	}
	
//	@DeleteMapping("/cart-delete/{userId}")
	@DeleteMapping("/cart-delete/{userId}/{productId}")
	public ResponseEntity<?> deleteItemFromCart(@PathVariable Integer userId , @PathVariable Integer productId){
		System.out.println("inside cart-delete CustomerController "+userId);
		System.out.println(productId);
		//return new ResponseEntity<>(cartService.deleteByUserId(userId), HttpStatus.OK);
		return new ResponseEntity<>(cartService.deleteCartItem(userId,productId), HttpStatus.OK);
	}
	
	
	@PostMapping("/place-order/{userId}")
	public ResponseEntity<?> placeOrderFromCart(@PathVariable Integer userId) {
		System.out.println("inside place-order inside cust controller "+userId);
		return new ResponseEntity<>(orderService.placeOrderForUser(userId), HttpStatus.ACCEPTED);
	}
	
	
    
	@GetMapping("/cart/{userId}")
	public ResponseEntity<?> getCartContents(@PathVariable Integer userId) {
		System.out.println("inside cart");
		return new ResponseEntity<>(productService.displayCart(userId),HttpStatus.OK);
	}
	
	
	@PostMapping("/add-payment")
	public ResponseEntity<?>  AddToPayment(@RequestBody PaymentDTO paymentdto){
		System.out.println("inside customer controller : "+paymentdto);
		return new ResponseEntity<>(paymentService.addPayment(paymentdto), HttpStatus.OK);		
	}

	@GetMapping("/cart/total-amt/{userId}")
	public ResponseEntity<?> getCartTotalAmount(@PathVariable Integer userId) {
		System.out.println("in getCartTotalAmount: " + userId);
		return new ResponseEntity<>(cartService.getCartTotalAmt(userId), HttpStatus.OK);
	}
	
	@GetMapping("/checkAddress/{userId}")
	public ResponseEntity<?> checkAddress(@PathVariable User1 userId){
		System.out.println("in checkAddress : " + userId);
		Address  addr =addressRepository.findBySelectedUser(userId);
		HashMap<String, Object> map = new HashMap<>();
		System.out.println("====="+addr);
		if(addr !=null ) {
			map.put("status", "success"); 
			map.put("data", addr);
			return ResponseEntity.ok(map);
		}		
		else {
			map.put("status", "error");
			map.put("data", "");
			ResponseEntity.status(HttpStatus.NOT_MODIFIED).build();
			return ResponseEntity.ok(map);
		}
	}
	
	@GetMapping("/getAddress/{userId}")
    public ResponseEntity<?> getAddress(@PathVariable int userId){
		System.out.println("inside getaddress");
		return new ResponseEntity<>(addressRepository.getAddressByUserId(userId), HttpStatus.OK);
	}
	
	@GetMapping("/displayorder/{orderId}")
	  public ResponseEntity<?> displayOrderProducts(@PathVariable int orderId){
		System.out.println("inside displayOrderProducts");
		List<Product> product = orderService.getOrderProducts(orderId);
		System.out.println(product);
		return ResponseEntity.ok(product);
	}
	
	
}
