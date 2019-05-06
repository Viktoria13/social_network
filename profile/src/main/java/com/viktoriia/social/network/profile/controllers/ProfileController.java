package com.viktoriia.social.network.profile.controllers;

import com.viktoriia.social.network.profile.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/")
public class ProfileController {
    @Autowired
    private Environment env;

    @RequestMapping("/users")
    public List<User> getUsers() {
        List<User> users = Arrays.asList(
                new User("Viktoriia", "Tarasova"),
                new User("Alexandr", "Strakhov"),
                new User("Eugen", "Parinov")
        );
        return users;
    }
}
