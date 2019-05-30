package com.viktoriia.social.network.auth.controller;
import com.viktoriia.social.network.auth.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class UserController {



    /*@Autowired
    private UserService userService;*/

    //@Secured({"ROLE_ADMIN", "ROLE_USER"})
    /*@PreAuthorize("hasRole('ADMIN')")
    @RequestMapping(value="/users", method = RequestMethod.GET)
    public List<User> listUser(){
        return userService.findAll();
    }*/

    //@Secured("ROLE_USER")
    /*@PreAuthorize("hasRole('USER')")
    ////@PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    @RequestMapping(value = "/users/{id}", method = RequestMethod.GET)
    public User getOne(@PathVariable(value = "id") Long id){
        return userService.findById(id);
    }*/


    /*@RequestMapping(value="/signup", method = RequestMethod.POST)
    public User saveUser(@RequestBody UserDto user){
        return userService.save(user);
    }*/

    /*@RequestMapping(value="/signup", method = RequestMethod.POST)
    public void saveUser(@RequestBody UserDto user){
        userService.save(user);
    }*/

    /*@RequestMapping(value = "/getInfo", method = RequestMethod.GET)
    public String getInfo() {
        return "Secure info";
    }*/

}
