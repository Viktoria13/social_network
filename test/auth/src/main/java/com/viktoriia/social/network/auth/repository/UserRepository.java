package com.viktoriia.social.network.auth.repository;

import com.viktoriia.social.network.auth.model.User;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;

import java.math.BigInteger;

@Repository
public interface UserRepository extends ReactiveCrudRepository<User, BigInteger> {
}
