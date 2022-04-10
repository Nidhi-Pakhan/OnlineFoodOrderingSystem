package com.app.dto;

public class AddressDTO {

	private String addressLine1;

	private String addressLine2;

	private String city;
	
	private String pinCode;
	
	private String state;
	
	private String country;
	
	private Integer userId;
	
	public AddressDTO() {
		// TODO Auto-generated constructor stub
	}
	
	
	public AddressDTO(String addressLine1, String addressLine2, String city, String pinCode, String state,
			String country, Integer selectedUser) {
		super();
		this.addressLine1 = addressLine1;
		this.addressLine2 = addressLine2;
		this.city = city;
		this.pinCode = pinCode;
		this.state = state;
		this.country = country;
		//this.selectedUser = selectedUser;
	}
	
	
	public String getAddressLine1() {
		return addressLine1;
	}
	
	public void setAddressLine1(String addressLine1) {
		this.addressLine1 = addressLine1;
	}
	
	public String getAddressLine2() {
		return addressLine2;
	}
	
	public void setAddressLine2(String addressLine2) {
		this.addressLine2 = addressLine2;
	}
	
	public String getCity() {
		return city;
	}
	
	public void setCity(String city) {
		this.city = city;
	}
	
	public String getPinCode() {
		return pinCode;
	}
	
	public void setPinCode(String pinCode) {
		this.pinCode = pinCode;
	}
	
	public String getState() {
		return state;
	}
	
	public void setState(String state) {
		this.state = state;
	}
	
	public String getCountry() {
		return country;
	}
	
	public void setCountry(String country) {
		this.country = country;
	}
	

	public Integer getUserId() {
		return userId;
	}


	public void setUserId(Integer userId) {
		this.userId = userId;
	}


	@Override
	public String toString() {
		return "Address [ addressLine1=" + addressLine1 + ", addressLine2=" + addressLine2 + ", city=" + city
				+ ", pinCode=" + pinCode + ", state=" + state + ", country=" + country + "]";
	}
	
}
