package com.Job_Portal.config;

import com.Job_Portal.jwt.JwtAuthenticationEntryPoint;
import com.Job_Portal.jwt.JwtAuthenticationFilter;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@AllArgsConstructor
@Configuration
public class AppConfig {

    @Autowired
    private final JwtAuthenticationFilter jwtAuthenticationFilter;

    @Autowired
    private final JwtAuthenticationEntryPoint authenticationEntryPoint;


    @Bean
   public SecurityFilterChain securityFilterChain(HttpSecurity http){
       http.csrf(AbstractHttpConfigurer::disable);
//        http.authorizeHttpRequests(req -> req
//                .requestMatchers("/**").permitAll()
//                .anyRequest().authenticated()
//
//
//
//        );

        http.authorizeHttpRequests(req->req

                .requestMatchers("/auth/login", "/users/**").permitAll()
                .anyRequest().authenticated()

        );


        http
                .exceptionHandling(ex -> ex.authenticationEntryPoint(authenticationEntryPoint))
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);




        return http.build();

   }

}
