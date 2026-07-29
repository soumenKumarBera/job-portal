package com.Job_Portal.services;

import com.Job_Portal.dto.ApplicantDTO;
import com.Job_Portal.dto.ApplicationStatus;
import com.Job_Portal.dto.JobDTO;
import com.Job_Portal.entity.Applicant;
import com.Job_Portal.entity.Job;
import com.Job_Portal.jobPortalException.JobPortalException;
import com.Job_Portal.repositry.JobRepository;
import com.Job_Portal.utility.Utilities;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
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

    @Override
    public void applyJob(Long id, ApplicantDTO applicantDTO) throws JobPortalException {
        Job job = jobRepository.findById(id).orElseThrow(()->new JobPortalException("JOB_NOT_FOUND"));

        List<Applicant> applicants = job.getApplicants();

        if(applicants == null) applicants = new ArrayList<>();

        if(applicants.stream().filter(x -> x.getApplicantId() == applicantDTO.getApplicantId()).toList().size() > 0) throw  new JobPortalException("JOB_APPLIED_ALREADY");

        applicantDTO.setApplicationStatus(ApplicationStatus.APPLIED);


        applicants.add(applicantDTO.toEntity());

        job.setApplicants(applicants);
        jobRepository.save(job);



    }
}
