package com.Job_Portal.api;

import com.Job_Portal.entity.User;
import com.Job_Portal.repositry.UserReposertory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserApi {
    @Autowired
    UserReposertory userReposertory;

    @PostMapping("/add")
    public ResponseEntity<?> add(@RequestBody User user){

        User us = userReposertory.save(user);

        return ResponseEntity.ok(us);



    }
}
