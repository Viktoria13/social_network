package com.viktoriia.social.network.auth.repository;

import com.viktoriia.social.network.auth.model.User;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class UserRepository {

    private List<User> users = new ArrayList<>();


    public User findByUsername(String username) {
        for(User user : users) {
            if (user.getUsername().equals(username)) {
                return user;
            }
        }
        return null;
    }

    /*public boolean existsByUsername(String username) {
        for(User user : users) {
            if (user.getUsername().equals(username)) {
                return true;
            }
        }
        return false;
    }*/

    /*public boolean existsByEmail(String email) {
        for(User user : users) {
            if (user.getEmail().equals(email)) {
                return true;
            }
        }
        return false;
    }*/

    public void save(User user) {
        users.add(user);
    }

    public void deleteByUsername(String username) {

    }

}

