package com.viktoriia.social.network.auth.service.impl;

import com.viktoriia.social.network.auth.model.User;
import com.viktoriia.social.network.auth.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

import java.util.*;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {


    @Autowired
    private BCryptPasswordEncoder encoder;

    private final UserService userService;

    @Autowired
    public UserDetailsServiceImpl(UserService userService) {
        this.userService = userService;
    }


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        User user = userService.findByUserName(username)
                .switchIfEmpty(Mono.error(new UsernameNotFoundException("Username: " + username + " not found")))
                .block();
        /*User user = userRepository.findByUsername(username)
                .switchIfEmpty(Mono.error(new UsernameNotFoundException("Username: " + username + " not found")))
                .block();*/

        List<GrantedAuthority> grantedAuthorities = AuthorityUtils
                .commaSeparatedStringToAuthorityList("ROLE_" + user.getRole());

        return new org.springframework.security.core.userdetails.User(user.getUsername(), Objects.requireNonNull(user.getPassword()), grantedAuthorities);

    }

}
