import { Button, Container, Grid, Typography } from "@mui/material";
import { section1 } from "../../data/homemenu";
import MuiNextLink from "@components/MuiNextLink";
import SectionMenuImageList from "./SectionMenuImageList";

export default function SectionMenu(props) {
  return (
    <Grid
      component="section"
      container
      sx={{
        position: "relative",
        width: "100vw",
        bgcolor: "common.beige",
      }}
    >
      <Container sx={{ mt: props.isMobile ? 5 : 7 }}>
        <Typography
          color="text"
          variant={props.isMobile ? "h3" : "h2"}
          align="center"
          sx={{ pb: props.isMobile ? 3 : 3 }}
        >
          What we are Rollin’
        </Typography>

        <Grid align="center" >
        { props.isMobile ?
          <Typography color="text" variant="body2" align="center" mb={3}>
          Asian cuisine has surpassed all other categories for the last 15 years and it continues to grow. We have 60+ rolls & sushi items and 30+ flavorful dishes on the menu.
          </Typography>
        :
          <Typography color="text" variant="body1" align="center" mb={5}>
          Asian cuisine has surpassed all other categories for the last 15 years and it continues to grow.
          <br />We have 60+ rolls & sushi items and 30+ flavorful dishes on the menu.
          </Typography>
        }
        </Grid>

        <Grid align="center"  pb={props.isMobile ? 3 : 0}>
          <MuiNextLink href="/menu" underline="none" sx={{ py: 2 }}>
            <Button> View Our Menu</Button>
          </MuiNextLink>
        </Grid>

        <SectionMenuImageList
          imgData={section1}
          isHome={props.isHome}
          isMobile={props.isMobile}
        />
      </Container>
    </Grid>
  );
}
