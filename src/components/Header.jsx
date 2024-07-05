import { Link, Stack, Toolbar } from "@mui/material";
import Logo from "../assets/logo/Logo.png";
function Header() {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        justifyContent: "none",
        mt: { sm: "32px", xs: "20px" },
      }}
      px="20px"
    >
      <Link href="#">
        <img src={Logo} />
      </Link>
      <Stack direction="row">
        <Toolbar>
          <Link
            href="#"
            style={{
              textDecoration: "none",
              color: "black",
              cursor: "pointer",
              gap: "42px",
              fontSize: "24px",
              borderBottom: "solid 3px red ",
            }}
          >
            Home
          </Link>
        </Toolbar>
        <Toolbar>
          <Link
            href="#"
            style={{
              textDecoration: "none",
              color: "black",
              cursor: "pointer",
              gap: "42px",
              fontSize: "24px",
            }}
          >
            Exercise
          </Link>
        </Toolbar>
      </Stack>
    </Stack>
  );
}

export default Header;
