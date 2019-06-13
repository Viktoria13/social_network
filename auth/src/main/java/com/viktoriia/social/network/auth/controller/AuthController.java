package com.viktoriia.social.network.auth.controller;

import com.viktoriia.social.network.auth.model.User;
import com.viktoriia.social.network.auth.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class AuthController {

    private final UserService userService;

    @Autowired
    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @RequestMapping(value="/signup", method = RequestMethod.POST)
    public Mono<User> saveUser(@RequestBody User user){
        return userService.save(user);
    }
}
