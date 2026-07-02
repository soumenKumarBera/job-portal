package com.Job_Portal.services;

import com.Job_Portal.dto.LoginDto;
import com.Job_Portal.dto.UserDto;
import com.Job_Portal.jobPortalException.JobPortalException;
import jakarta.validation.Valid;

public interface UserServices {
    public UserDto register(UserDto userDto) throws Exception;

    UserDto loginUser( LoginDto loginDto) throws JobPortalException;
}
