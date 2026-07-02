package com.Job_Portal.services;

import com.Job_Portal.dto.AccountType;
import com.Job_Portal.dto.LoginDto;
import com.Job_Portal.dto.UserDto;
import com.Job_Portal.entity.User;
import com.Job_Portal.jobPortalException.JobPortalException;
import com.Job_Portal.repositry.UserRepository;
import com.Job_Portal.utility.Utilities;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service(value = "userServices")
public class UserServiceImpl implements UserServices{

    @Autowired
    private UserRepository userRepository;

    @Autowired
     public PasswordEncoder passwordEncoder;

    @Override
    public UserDto register(UserDto userDto) throws Exception {

        Optional<User> optional = userRepository.findByEmail(userDto.getEmail());
        if (optional.isPresent()){
            throw  new JobPortalException("USER_FOUND");
        }

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

    @Override
    public UserDto loginUser(LoginDto loginDto) throws JobPortalException {
        User user = userRepository.findByEmail(loginDto.getEmail()).orElseThrow(() -> new JobPortalException("USER_NOT-FOUND"));

        if (!passwordEncoder.matches( loginDto.getPassword(), user.getPassword())){
            throw  new JobPortalException("INVALID_CREDENTIALS");
        }

        return UserDto.builder()
                .id(user.getId())
                .name(user.getName())
                .email(user.getEmail())
                .password(user.getPassword())
                .accountType(user.getAccountType())
                .build();
    }
}
