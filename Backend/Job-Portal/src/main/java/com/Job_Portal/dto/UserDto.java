package com.Job_Portal.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
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
    @Email(message = "Email is invalid")
    private String email;

    @NotBlank(message = "password in null or blank")
    @Pattern(
            regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,15}$",
            message = "Password must contain 1 uppercase, 1 lowercase, 1 number, 1 special character and be 8-15 characters long"
    )
    private String password;


    private AccountType accountType;
}
