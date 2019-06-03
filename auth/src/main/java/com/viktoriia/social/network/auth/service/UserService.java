package com.viktoriia.social.network.auth.service;


import com.viktoriia.social.network.auth.model.User;
import reactor.core.publisher.Mono;

public interface UserService {
    Mono<User>findByUserName(String username);
}
