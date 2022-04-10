package com.app.pojos;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;



@Entity					// Notify SC to manage the life-cycle of following type
@Table(name = "users")
public class User1 extends BaseEntity{	
	
	@Column(name = "first_name",length = 30)
	private String firstName;
	
	@Column(name = "last_name",length = 30)
	private String lastName;
	
	@Column(length = 30,unique = true)
	private String email;
	
	@Column(length = 200,nullable = false)
	private String password;
	
	@Column(length = 11)
	private String phone;
	
	@Enumerated(EnumType.STRING)		// Specifies the Role as String data-type in database 
	private Role role;
	
  public User1() {
	  
  }
		
	public User1(String firstName, String lastName, String email, String password, String phone) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.phone = phone;
	}

	public User1(String firstName, String lastName, String email, String password, String phone,Role role) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
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
	
	public Role getRole() {
		return role;
	}
	
	public void setRole(Role role) {
		this.role = role;
		
	}

	@Override
	public String toString() {
		return "User [firstName=" + firstName + ", lastName=" + lastName + ", email=" + email + ", password=" + password
				+ ", phone=" + phone + ", role=" + role + "]";
	}
	
	
}
