package com.viktoriia.social.network.auth.config;

import com.viktoriia.social.network.auth.repository.UserRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppContext {

    @Bean
    public UserRepository userRepository() {
        return new UserRepository();
    }
}
