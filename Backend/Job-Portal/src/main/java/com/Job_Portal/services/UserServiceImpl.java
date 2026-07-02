package com.Job_Portal.services;

import com.Job_Portal.dto.AccountType;
import com.Job_Portal.dto.UserDto;
import com.Job_Portal.entity.User;
import com.Job_Portal.jobPortalException.JobPortalException;
import com.Job_Portal.repositry.UserRepository;
import com.Job_Portal.utility.Utilities;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service(value = "userServices")
public class UserServiceImpl implements UserServices{

    @Autowired
    private UserRepository userRepository;

    @Autowired
     public PasswordEncoder passwordEncoder;

    @Override
    public UserDto register(UserDto userDto) throws Exception {

        userDto.setId(Utilities.getNextSequence("users"));


        User user = User.builder()
                .id(userDto.getId())
                .name(userDto.getName())
                .email(userDto.getEmail())
                .accountType( userDto.getAccountType() != null
                        ? userDto.getAccountType()
                        : AccountType.EMPLOYER)
                .password(passwordEncoder.encode(userDto.getPassword()))
                .build();
        //user save in database
        User userSave = userRepository.save(user);

        //user return
        return UserDto.builder()
                .id(userSave.getId())
                .name(userSave.getName())
                .password(userSave.getPassword())
                .accountType(userSave.getAccountType())
                .email(userSave.getEmail())
                .build();
    }
}
