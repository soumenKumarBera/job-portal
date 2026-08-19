import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import FindJobsPage from "./FindJobsPage";
import FindTalentPage from "./FindTalentPage";
import JobdescPage from "./jobDescPage";
import TalentPrifilePage from "./TalentProfilePage";
import ApplyJobPage from "./ApplyJobPage";
import PostJobPage from "./PostJobPage";
import CompanyPage from "./CompannyPage";
import PostedJobPage from "./PostedJobPage";
import JobHistoryPage from "./JobHistoryPage";
import ProfilePage from "./ProfilePage";
import SignUpPage from "./SignUpPage";
import HomePage from "./HomePage";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";
import { useEffect } from "react";






const AppRoutes = () => {

  

      const user = useSelector((state:any) => state.user);

  return  <BrowserRouter>
  
     
          <div className=" relative">
            <Header />
            <Routes>
              <Route path="/find-jobs" element={<FindJobsPage />} />
              <Route path="/find-talent" element={<FindTalentPage />} />
              <Route path="/jobs/:id" element={<JobdescPage />} />

              <Route path="/talent-profile/:id" element={<TalentPrifilePage />} />
              <Route path="/post-job/:id" element={<PostJobPage />} />
              <Route path="/apply-job/:id" element={<ApplyJobPage />} />
              <Route path="/company/:name" element={<CompanyPage />} />
              <Route path="/posted-job/:id" element={<PostedJobPage />} />
              <Route path="/job-history" element={<JobHistoryPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/login" element={<SignUpPage />} />
              <Route path="/signup" element={<SignUpPage />} />

              <Route path="/*" element={<HomePage />} />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>


}

export default AppRoutes;