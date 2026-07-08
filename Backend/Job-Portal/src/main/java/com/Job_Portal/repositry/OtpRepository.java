package com.Job_Portal.repositry;

import com.Job_Portal.entity.OTP;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface OtpRepository extends MongoRepository<OTP, String> {

}
