package com.Job_Portal.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.index.Indexed;


@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {

    private String id;
    @NotBlank(message ="Name in null or blank")
    private String name;

    @NotBlank(message ="Email in null or blank")
    private String email;

    @NotBlank(message = "password in null or blank")
    private String password;


    private AccountType accountType;
}
