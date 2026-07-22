package com.Job_Portal.services;

import com.Job_Portal.dto.JobDTO;
import com.Job_Portal.jobPortalException.JobPortalException;
import com.Job_Portal.repositry.JobRepository;
import com.Job_Portal.utility.Utilities;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service("jobService")
public class JobServiceImp implements  JobServices{

    @Autowired
    private JobRepository jobRepository;


    @Override
    public JobDTO postJob(JobDTO jobDTO) throws Exception {

        jobDTO.setId(Utilities.getNextSequence("jobs"));
        jobDTO.setPostTime(LocalDateTime.now());

        return jobRepository.save(jobDTO.toEntity()).toDto();
    }

    @Override
    public List<JobDTO> getAllJobs() {


        return jobRepository.findAll().stream().map(x -> x.toDto()).toList();
    }

    @Override
    public JobDTO getJob(Long id) throws JobPortalException {

        return jobRepository.findById(id).orElseThrow(() -> new JobPortalException("JOB_NOT_FOUND")).toDto();

    }
}
