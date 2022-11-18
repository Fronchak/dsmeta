package com.devsuperior.dsmeta.services;

import java.text.NumberFormat;
import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.devsuperior.dsmeta.entities.Sale;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

@Service
public class SmsService {
	
	@Autowired
	private SaleService service;

	@Value("${twilio.sid}")
	private String twilioSid;

	@Value("${twilio.key}")
	private String twilioKey;

	@Value("${twilio.phone.from}")
	private String twilioPhoneFrom;

	@Value("${twilio.phone.to}")
	private String twilioPhoneTo;

	public void sendSms(Long id) {

		Sale sale = service.findById(id);
		NumberFormat numberFormat = NumberFormat.getCurrencyInstance();
		LocalDate date = sale.getDate();
		String dateString = date.getDayOfMonth() + "/" + date.getMonthValue() + "/" + date.getYear();
		String msg = "Seller " + sale.getSellerName() + 
				" made a sell worth " + numberFormat.format(sale.getAmount()) +
				" at date " + dateString;
		
		Twilio.init(twilioSid, twilioKey);

		PhoneNumber to = new PhoneNumber(twilioPhoneTo);
		PhoneNumber from = new PhoneNumber(twilioPhoneFrom);

		Message message = Message.creator(to, from, msg).create();

		System.out.println(message.getSid());
	}
}
