package com.viktoriia.social.network.auth.service;


import com.viktoriia.social.network.auth.model.User;

public interface UserService {

    //User save(UserDto user);
    //List<User> findAll();
    //void delete(long id);
    //void save(UserDto user);
    User findOne(String username);

    //User findById(Long id);
}
