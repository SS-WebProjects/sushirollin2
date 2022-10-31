import { Button, Grid, Typography } from "@mui/material";
import ContactUsButton from "./ContactUsButton";

const ContactUsBanner = (props) => {
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
                    Sounds Like A Good Opportunity?
                </Typography>
            </Grid>
            <Grid item xs={12} >
                {props.isMobile ?
                    <Typography
                        color='text'
                        variant={props.isMobile ? 'body2' : 'body1'}
                        align='center'
                    >
                        If you want to learn more about the numbers, the operation, and the process,
                        send us an email or call us. You can also visit one of our locations.
                        Open to anyone who is passionate and is ready to get this rollin’.
                        <br />Join us today!
                    </Typography>
                    :
                    <Typography
                        color='text'
                        variant={props.isMobile ? 'body2' : 'body1'}
                        align='center'
                    >
                        If you want to learn more about the numbers, the operation, and the process,
                        <br />send us an email or call us. You can also visit one of our locations.
                        <br />Open to anyone who is passionate and is ready to get this rollin’.
                        <br />Join us today!
                    </Typography> }
            </Grid>
      <Grid item xs={12} align='center'>
        <ContactUsButton isNavbar={false} />
        {/* <Button
            rel='noopener noreferrer'
            href={`mailto:sushirollin.us@gmail.com`}
        >
            Contact Us
        </Button> */}
      </Grid>
    </Grid>
    );
}

export default ContactUsBanner;