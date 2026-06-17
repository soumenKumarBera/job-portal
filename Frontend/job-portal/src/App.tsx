import { createTheme, MantineProvider } from "@mantine/core";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
// @ts-ignore: side-effect CSS import has no type declarations
import "@mantine/core/styles.css";
// @ts-ignore: side-effect CSS import has no type declarations
import "@mantine/carousel/styles.css";
// @ts-ignore: side-effect CSS import has no type declarations
import "@mantine/tiptap/styles.css";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FindJobsPage from "./Pages/FindJobsPage";
import FindTalentPage from "./Pages/FindTalentPage";
import TalentPrifilePage from "./Pages/TalentProfilePage";
import PostJobPage from "./Pages/PostJobPage";
import JobdescPage from "./Pages/jobDescPage";
import ApplyJobPage from "./Pages/ApplyJobPage";

// import { IconArrowLeft, IconSettings } from '@tabler/icons-react';

function App() {
  const theme = createTheme({
    focusRing: "never",
    fontFamilyMonospace: "poppins, sans-serif",
    primaryColor: "bright-sun",
    primaryShade: 4,
    colors: {
      "mine-shaft": [
        "#212121",
        "#1e1e1e",
        "#1b1b1b",
        "#181818",
        "#151515",
        "#121212",
        "#0f0f0f",
        "#0c0c0c",
        "#090909",
        "#060606",
      ],
      "bright-sun": [
        "#ffcc00",
        "#ffbf00",
        "#ffb300",
        "#ffa600",
        "#ff9900",
        "#ff8d00",
        "#ff8000",
        "#ff7300",
        "#ff6600",
        "#ff5a00",
      ],
    },
    fontFamily: "Poppins, sans-serif",
  });

  return (
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/find-jobs" element={<FindJobsPage />} />
          <Route path="/find-talent" element={<FindTalentPage />} />
           <Route path="/jobs" element={<JobdescPage />} />

          <Route path="/talent-profile" element={<TalentPrifilePage />} />
          <Route path="/post-job" element={<PostJobPage />} />
          <Route path="/apply-job" element={<ApplyJobPage/>} />

          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
