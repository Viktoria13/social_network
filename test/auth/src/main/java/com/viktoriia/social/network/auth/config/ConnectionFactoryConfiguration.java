package com.viktoriia.social.network.auth.config;

import io.r2dbc.postgresql.PostgresqlConnectionConfiguration;
import io.r2dbc.postgresql.PostgresqlConnectionFactory;
import io.r2dbc.spi.ConnectionFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ConnectionFactoryConfiguration {

    @Value("${spring.data.postgres.host}") private String host;
    @Value("${spring.data.postgres.port}") private int port;
    @Value("${spring.data.postgres.database}") private String database;
    @Value("${spring.data.postgres.username}") private String username;
    @Value("${spring.data.postgres.password}") private String password;

    /*@Bean
    DatabaseClient databaseClient() {
        return DatabaseClient.create(connectionFactory());
    }*/

    @Bean
    ConnectionFactory connectionFactory() {
        PostgresqlConnectionConfiguration config = PostgresqlConnectionConfiguration
                .builder()
                .host(host)
                .port(port)
                .database(database)
                .username(username)
                .password(password)
                .build();
        return new PostgresqlConnectionFactory(config);
    }
}
