import WelcomeBlock from "../../components/WelcomeBlock/WelcomeBlock";
import { Box } from "@mui/material";
import { styles } from "./HomePage.styles";
import NavBar from "../../components/NavBar/NavBar";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Box sx={styles.wrapper}>
        <WelcomeBlock />
      </Box>
    </>
  );
};

export default HomePage;
