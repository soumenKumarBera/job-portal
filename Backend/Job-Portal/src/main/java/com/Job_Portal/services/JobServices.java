package com.Job_Portal.services;

import com.Job_Portal.dto.JobDTO;
import com.Job_Portal.jobPortalException.JobPortalException;
import jakarta.validation.Valid;

import java.util.List;

public interface JobServices {
   public JobDTO postJob( JobDTO jobDTO) throws Exception;

  public  List<JobDTO> getAllJobs();

  public JobDTO getJob(Long id) throws JobPortalException;
}
