package com.app.service;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.PaymentRepository;
import com.app.dao.UserRepository;
import com.app.dto.PaymentDTO;
import com.app.pojos.Payment;
import com.app.pojos.User1;

@Service
@Transactional
public class PaymentServiceImpl implements IPaymentService {

	@Autowired
	PaymentRepository paymentRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Override
	public String addPayment(PaymentDTO paymentdto) {
		if(paymentdto!=null) {
			System.out.println("product " +paymentdto);
			User1 user =userRepository.findById(paymentdto.getUserId()).orElseThrow();
			
			Payment payment = new Payment(paymentdto.getAmount(), paymentdto.getStatus(), paymentdto.getPaymentType(),user );
			
			System.out.println("inside paymentservice: "+payment);
			
			paymentRepository.save(payment);
			
			return "Payment is Completed";
			}
	      	else {
			return "Payment is not completed.";
			}
		
	
	}

}
