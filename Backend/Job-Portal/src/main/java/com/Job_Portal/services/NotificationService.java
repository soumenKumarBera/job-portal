package com.Job_Portal.services;

import com.Job_Portal.dto.NotificationDto;
import com.Job_Portal.entity.Notification;

import java.util.List;

public interface NotificationService {

    public void sendNotification (NotificationDto notificationDto) throws Exception;

    public List<Notification> grtUserIdNotification(Long userId);
}
