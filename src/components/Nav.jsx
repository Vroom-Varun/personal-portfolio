import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import DoneAllSharpIcon from '@mui/icons-material/DoneAllSharp';
const pages = ["Me.", "Past Work."];
function Nav() {
  const scrollToElement = (page) => {
    const targetElement = document.getElementById(page);
    console.log(page);
    if(page === "Me."){
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }else{
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadResume = () => {
    const resumeFile = 'varun-sreepathy-CV.pdf';

    // Create a link element
    const link = document.createElement('a');
    // Set the href attribute to the file path
    link.href = `./docs/varun-sreepathy-CV.pdf`;
    // Set the download attribute with the file name
    link.download = resumeFile;

    // Append the link to the document
    document.body.appendChild(link);

    // Trigger a click on the link to start the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
  };

  return (
    <AppBar
      sx={{ boxShadow: "none", backgroundColor: "#0d1b2a" }}
      position="sticky"
    >
      <Container maxWidth="false">
        <Toolbar disableGutters>
          <DoneAllSharpIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "right",
            }}
          >
            {pages.map((page, i) => (
              <Button
                key={page}
                sx={{ my: 2, color: "#e0e1dd", display: "block" }}
                onClick={() => scrollToElement(page)}
              >
                <span key={i} style={{ color: '#cdd8f8'}}>{i + 1}. </span>
                {page}
              </Button>
            ))}
            <Button
              sx={{ my: 2, color: "#e0e1dd", display: "block" }}
              variant="outlined"
              onClick={() => downloadResume()}
            >
              {"RESUME."}
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Nav;
