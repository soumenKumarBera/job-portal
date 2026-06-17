package com.Job_Portal.repositry;

import com.Job_Portal.entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserReposertory extends MongoRepository<User, String> {

}
