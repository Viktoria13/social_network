package com.viktoriia.social.network.auth.config;

import com.viktoriia.social.network.auth.repository.UserRepositoryT;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppContext {

    @Bean
    public UserRepositoryT userRepository() {
        return new UserRepositoryT();
    }
}
