package com.viktoriia.social.network.auth.repository;

import com.viktoriia.social.network.auth.model.User;
import org.springframework.data.r2dbc.repository.query.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.math.BigInteger;

@Repository
public interface UserRepository extends ReactiveCrudRepository<User, String> {

    //@Query("SELECT * FROM USERS WHERE username = $1")
    @Query("SELECT * FROM \"users\" WHERE \"username\" = $1")
    Mono<User>findByUsername(String username);

    @Override
    <S extends User> Mono<S> save(S s);

    /*@Override
    <S extends User> Mono<S> save(S s);*/
}
