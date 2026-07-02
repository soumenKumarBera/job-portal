package com.Job_Portal.services;

import com.Job_Portal.dto.UserDto;
import com.Job_Portal.jobPortalException.JobPortalException;

public interface UserServices {
    public UserDto register(UserDto userDto) throws Exception;
}
