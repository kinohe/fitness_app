import { Box, Button, Typography } from "@mui/material";
import Banner from "../assets/images/banner.png";
import { css } from "@mui/system";
function Hero() {
  return (
    <Box
      sx={{
        display: "flex",
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Box>
        <Typography
          sx={{
            color: "#FF2625",
            fontSize: "26px",
            fontWeight: "600",
            display: "block",
          }}
        >
          Fitness Club
        </Typography>
        <Typography
          sx={{ fontSize: { lg: "44px", xs: "40px" }, fontWeight: "700" }}
          mt="23px"
          mb="30px"
          fontWeight={700}
        >
          Sweat, Smile <br /> And Repeat
        </Typography>
        <Typography fontSize="22px" lineHeight="35px" mb={4}>
          Checkout the most effective exercise
        </Typography>
        <Button
          variant="contained"
          color="error"
          href="#exercises"
          sx={{ backgroundColor: "#ff2625", padding: "10px" }}
        >
          Explore Exercises
        </Button>
        <Typography
          sx={{
            opacity: 0.1,
            fontSize: 212,

            display: { lg: "block", xs: "none" },
          }}
          color="#ff2625"
          fontWeight={600}
        >
          Exercise
        </Typography>
      </Box>

      <img src={Banner} alt="Banner image" className="hero-banner-img" />
    </Box>
  );
}

export default Hero;
