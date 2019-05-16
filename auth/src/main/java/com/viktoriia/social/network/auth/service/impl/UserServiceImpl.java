package com.viktoriia.social.network.auth.service.impl;

import com.viktoriia.social.network.auth.model.User;
import com.viktoriia.social.network.auth.repository.UserRepository;
import com.viktoriia.social.network.auth.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;


@Service(value = "userService")
public class UserServiceImpl /*implements UserService*/ {
	
	/*@Autowired
	private UserDao userDao;*/

	//private UserRepository userDao = new UserRepository();

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private BCryptPasswordEncoder bcryptEncoder;

	/*public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = userRepository.findByUsername(username);
		if(user == null){
			throw new UsernameNotFoundException("Invalid username or password.");
		}
		return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), getAuthority(user));
	}

	private Set<SimpleGrantedAuthority> getAuthority(User user) {
        Set<SimpleGrantedAuthority> authorities = new HashSet<>();
		user.getRoles().forEach(role -> {
			//authorities.add(new SimpleGrantedAuthority(role.getName()));
            authorities.add(new SimpleGrantedAuthority("ROLE_" + role.getName()));
		});
		return authorities;
		//return Arrays.asList(new SimpleGrantedAuthority("ROLE_ADMIN"));
	}*/

	//@Override
	public User findOne(String username) {
		return userRepository.findByUsername(username);
	}

	/*public List<User> findAll() {
		List<User> list = new ArrayList<>();
		userDao.findAll().iterator().forEachRemaining(list::add);
		return list;
	}*/

	/*@Override
	public void delete(long id) {
		userDao.deleteById(id);
	}



	@Override
	public User findById(Long id) {
		return userDao.findById(id).get();
	}*/

	/*@Override
    public User save(UserDto user) {
	    User newUser = new User();
	    newUser.setUsername(user.getUsername());
	    newUser.setPassword(bcryptEncoder.encode(user.getPassword()));
		newUser.setAge(user.getAge());
		newUser.setSalary(user.getSalary());
        return userDao.save(newUser);
    }*/

	/*@Override
	public void save(UserDto user) {
		User newUser = new User();
		newUser.setUsername(user.getUsername());
		newUser.setPassword(bcryptEncoder.encode(user.getPassword()));
		newUser.setName(user.getName());
		newUser.setEmail(user.getEmail());
		userRepository.save(newUser);
	}*/
}
