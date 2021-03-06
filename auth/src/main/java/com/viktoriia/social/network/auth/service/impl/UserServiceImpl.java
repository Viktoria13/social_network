package com.viktoriia.social.network.auth.service.impl;

import com.viktoriia.social.network.auth.model.User;
import com.viktoriia.social.network.auth.repository.UserRepository;
import com.viktoriia.social.network.auth.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;


@Service
public class UserServiceImpl implements UserService {

	private final UserRepository userRepository;

	@Autowired
	public UserServiceImpl(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	@Override
	public Mono<User> findByUserName(String username) {
		return this.userRepository.findByUsername(username);
	}

	@Override
	public Mono<User> save(User user) {
		return this.userRepository.save(user);
	}


}

