package com.viktoriia.social.network.auth.controller;

import com.viktoriia.social.network.auth.model.LoginUser;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class AuthController {

    /*@RequestMapping(value = "/login", method = RequestMethod.POST)
    public boolean login(@RequestBody LoginUser user) {
        return user.getUsername().equals("user") && user.getPassword().equals("password");
    }*/

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public boolean login(@RequestBody LoginUser user) {
        return user.getUsername().equals("user") && user.getPassword().equals("password");
    }


}
