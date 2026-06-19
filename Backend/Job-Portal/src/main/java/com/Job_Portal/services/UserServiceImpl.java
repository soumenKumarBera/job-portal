package com.Job_Portal.services;

import com.Job_Portal.dto.AccountType;
import com.Job_Portal.dto.UserDto;
import com.Job_Portal.entity.User;
import com.Job_Portal.repositry.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service(value = "userServices")
public class UserServiceImpl implements UserServices{

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDto register(UserDto userDto) {

        User user = User.builder()
                .name(userDto.getName())
                .email(userDto.getEmail())
                .accountType( userDto.getAccountType() != null
                        ? userDto.getAccountType()
                        : AccountType.EMPLOYER)
                .password(userDto.getPassword())
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
