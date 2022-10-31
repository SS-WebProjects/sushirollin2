import { Grid, Typography } from "@mui/material";
import ContactUsButton from "./ContactUsButton";

const ContactUsBannerMain = (props) => {
    return (
        <Grid
            component='section'
            container
            justifyContent='center'
            alignItems='center'
            padding={props.isMobile ? 4: 3}
            gap={props.isMobile ? 3: 4}

            sx={props.isMobile ? {
                mt:4, mb: 5,
              } : {
                mt:6, mb: 6,
              }
            }
        >
            <Grid item xs={12}>
                <Typography
                    color='text'
                    variant={props.isMobile ? 'h3' : 'h2'}
                    align='center'
                >
                    Interested in Sushi Rollin’?
                </Typography>
            </Grid>
            <Grid item xs={12} >
                {props.isMobile ?
                    <Typography
                        color='text'
                        variant={props.isMobile ? 'body2' : 'body1'}
                        align='center'
                    >
                        Contact us via Email or call us. <br />You can also visit one of our locations.
                        <br /><br />Open to anyone who is passionate <br />and is ready to get this rollin’.
                        <br /><br />Join us today!
                    </Typography>
                    :
                    <Typography
                        color='text'
                        variant={props.isMobile ? 'body2' : 'body1'}
                        align='center'
                    >
                        Contact us via Email or call us. You can also visit one of our locations.
                        <br />Open to anyone who is passionate and is ready to get this rollin’.
                        <br />Join us today!
                    </Typography> }
            </Grid>
      <Grid item xs={12} align='center'>
        <ContactUsButton isNavbar={false} />
      </Grid>
    </Grid>
    );
}

export default ContactUsBannerMain;