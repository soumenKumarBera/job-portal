package com.Job_Portal.api;

import com.Job_Portal.entity.Notification;
import com.Job_Portal.services.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/notification")
public class NotificationApi {

    @Autowired
    private NotificationService notificationService;

    @GetMapping("/get/{userId}")
    public ResponseEntity<List<Notification>> getNotification(@PathVariable Long userId){

        return  new ResponseEntity<>(notificationService.grtUserIdNotification(userId), HttpStatus.OK);

    }
}
