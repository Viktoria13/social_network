package com.viktoriia.social.network.profile.controllers;

import com.viktoriia.social.network.profile.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.*;

import javax.jws.soap.SOAPBinding;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/")
public class ProfileController {
    @Autowired
    private Environment env;

    private List<User> users = new ArrayList<>();

    @RequestMapping(value = "/users", method = RequestMethod.GET)
    public List<User> getUsers() {
        /*List<User> users = Arrays.asList(
                new User("Viktoriia", "Tarasova"),
                new User("Alexandr", "Strakhov"),
                new User("Eugen", "Parinov")
        );*/
        return users;
    }

    @RequestMapping(value = "/saveUser", method = RequestMethod.POST)
    public void saveUser(@RequestBody User user) {
        users.add(user);
    }
}
