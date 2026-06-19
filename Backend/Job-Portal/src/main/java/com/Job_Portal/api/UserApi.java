package com.Job_Portal.api;

import com.Job_Portal.dto.UserDto;
import com.Job_Portal.entity.User;
import com.Job_Portal.repositry.UserRepository;
import com.Job_Portal.services.UserServiceImpl;
import com.Job_Portal.services.UserServices;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Validated
@RestController
@CrossOrigin
@RequestMapping("/users")
public class UserApi {

    @Autowired
    private UserServices userServices;

    @PostMapping("/register")
    public ResponseEntity<UserDto> registerUser(@RequestBody @Valid UserDto userDto){

        userDto = userServices.register(userDto);



        return new ResponseEntity<>(userDto, HttpStatus.CREATED);



    }
}
