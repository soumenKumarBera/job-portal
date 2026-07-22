package com.Job_Portal.repositry;

import com.Job_Portal.entity.Job;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface JobRepository extends MongoRepository<Job, Long> {

}
