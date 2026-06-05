import { createTheme, MantineProvider } from "@mantine/core";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import "@mantine/core/styles.css";
import '@mantine/carousel/styles.css';
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FindJobsPage from "./Pages/FindJobsPage";

// import { IconArrowLeft, IconSettings } from '@tabler/icons-react';

function App() {
  const theme = createTheme({
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
  });

  return (
    <MantineProvider theme={theme}>
       <BrowserRouter>
       <Header />
        <Routes>
          <Route path="/find-jobs" element={<FindJobsPage />} />
         <Route path="*" element={<HomePage />} />
         </Routes>
         <Footer />
       </BrowserRouter>
      
    
      
      
    </MantineProvider>
  );
}

export default App;