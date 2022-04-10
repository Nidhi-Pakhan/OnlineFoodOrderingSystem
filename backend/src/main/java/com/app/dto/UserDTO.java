package com.app.dto;

import com.app.pojos.Role;

public class UserDTO {

	private int id;
	
	private String password;
	private String firstName;
	private String lastName;
	private String email;
	private String phone;
	private Role role;
	
	public UserDTO() {
		System.out.println("in UserDTO ");
	}


	public UserDTO(int id , String password, String firstName, String lastName, String email, String phone, Role role) {
		super();
		this.id = id;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.phone = phone;
		this.role = role;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	
	
	
	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	@Override
	public String toString() {
		return "UserDTO [id=" + id + ", password=" + password + ", firstName=" + firstName + ", lastName=" + lastName
				+ ", email=" + email + ", phone=" + phone + ", role=" + role+  "]";
	}
	
	
}
