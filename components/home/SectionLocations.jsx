import { Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import MuiNextLink from "@components/MuiNextLink";

const SectionLocations = ({ isMobile }) => {
  return (
    <Grid
      component="section"
      container
      sx={{
        position: "relative",
        width: "100vw",
      }}
    >
      <Container sx={{ mt: 6 }}>
        <Typography
          color="text"
          variant={isMobile ? "h3" : "h2"}
          align="center"
          sx={{ mb: 4 }}
        >
          Where we are Rollin’
        </Typography>

        <Grid container sx={{ mb: 1 }} spacing={2} align="center">

        <Grid container item xs={12} sm={6} justifyContent="center" direction="column">
            <Grid item>
              <Image
                src="/home_page/location-garland.jpg"
                alt="Location Garland"
                width="592"
                height="420"
              />
            </Grid>
            <Grid container item gap={1} sx={isMobile ? { mb: 2, mt: 2 } : { mb: 2, mt: 4 }} direction="row" justifyContent="center">
              <Grid item>
                  <Image src={"/icons/logo-circle.svg"} width={18} height={18} />
              </Grid>
              <Grid item alignSelf='left'>
                  <Typography color="text" variant={isMobile ? "h4" : "h5"}>
                    Sushi Rollin' Garland
                  </Typography>
              </Grid>
            </Grid>
            <Grid item >
              <Typography color="text" variant={isMobile ? "body2" : "body1"}>
              <MuiNextLink
                href="https://goo.gl/maps/JaVAgjRh7ZKrgMNC8"
                target="_blank"
              >
              6850 N Shiloh Rd, Garland, TX 75044
              </MuiNextLink>

              </Typography>
              <Typography color="text" variant={isMobile ? "body2" : "body1"} sx={{ mb: 2 }}>
                Opens Daily 11 a.m. - 9:30 p.m.
              </Typography>
              <Typography color="text" variant={isMobile ? "body2" : "body1"} sx={{ mb: 1 }}>
                (469) 798-7831
              </Typography>
            </Grid>
          </Grid>
          <Grid container item xs={12} sm={6} justifyContent="center" direction="column">
            <Grid item>
              <Image
                src="/home_page/location-lewisville.jpg"
                alt="Location Garland"
                width="592"
                height="420"
              />
            </Grid>
            <Grid container item gap={1} sx={isMobile ? { mb: 2, mt: 2 } : { mb: 2, mt: 4 }} direction="row" justifyContent="center">
              <Grid item>
                  <Image src={"/icons/logo-circle.svg"} width={18} height={18} />
              </Grid>
              <Grid item alignSelf='left'>
                  <Typography color="text" variant={isMobile ? "h4" : "h5"}>
                    Sushi Rollin' Lewisville
                  </Typography>
              </Grid>
            </Grid>
            <Grid item >
              <Typography color="text" variant={isMobile ? "body2" : "body1"}>
              <MuiNextLink
                href="https://goo.gl/maps/7s3axUUgB9FmVUfT8"
                target="_blank"
              >
              1288 W Main St #142, Lewisville, TX 75067
              </MuiNextLink>
              </Typography>
              <Typography color="text" variant={isMobile ? "body2" : "body1"} sx={{ mb: 2 }}>
                Opens Daily 11 a.m. - 9:00 p.m.
              </Typography>
              <Typography color="text" variant={isMobile ? "body2" : "body1"} sx={{ mb: 1 }}>
                (817) 320-3722
              </Typography>
            </Grid>
          </Grid>


        </Grid>

        <Grid align="center" pt={4} pb={2}>
          <MuiNextLink href="/locations" underline="none" sx={{ py: 2 }}>
            <Button>View More Store Pictures</Button>
          </MuiNextLink>
        </Grid>
      </Container>
    </Grid>
  );
};
export default SectionLocations;
