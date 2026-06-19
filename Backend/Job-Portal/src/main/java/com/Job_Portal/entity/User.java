package com.Job_Portal.entity;

import com.Job_Portal.dto.AccountType;

import jakarta.validation.constraints.NotBlank;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;



@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "users")
public class User {

    @Id
    private String id;


    private String name;


    @Indexed(unique = true)
    private String email;


    private String password;


    private AccountType accountType;

}
