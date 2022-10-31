import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import FranchiseTimelineItem from "./FranchiseTimelineItem";
import { timelineData } from "data/timeline";
import Image from 'next/image';
import { Container, Grid } from '@mui/material';

const FranchiseTimeline = ({isMobile}) => {
  return (
    <React.Fragment>
      {isMobile && (
        <Container
          sx={{
            paddingTop: "48px"
          }}
          >
          <Grid align="center" justifyContent="center">
          <Image
              src="/aboutpage/aboutimg.jpg"
              alt="Cooking"
              width="376px"
              height="268px"
          />
          </Grid>
        </Container>
      )}
      <Timeline
        sx={{
          position: "relative",
          marginTop: isMobile? "48px" : "60px",
          backgroundColor: isMobile ? "common.beige" : "transparent",
          paddingTop: "24px",
          paddingBottom: "24px",
          "&::after": {
            content: "''",
            top: "25px",
            left: "38%",
            position: "absolute",
            width: {xs: "0", md: "400px"},
            height: {xs: "0", md: "400px"},
            backgroundColor: 'common.beige',
            transform: "rotate(-45deg)",
            zIndex: "-2"
          },
        }}
      >
        {timelineData.map((item, idx) => (
          <FranchiseTimelineItem data={item} isMobile={isMobile} key={idx} />
        ))}
        <Container
          sx={{
            display: { xs: "none", md: "block",
            position: "absolute",
            bottom: "-48px",
            left: "0",
            width: isMobile ? "200px" : "376px",
            height: isMobile ? "100px" : "268px",
            zIndex: "-1"
          }}}
          >
          <Image
              src="/aboutpage/aboutimg.jpg"
              alt="Cooking"
              width={isMobile ? '343' : '592'}
              height={isMobile ? '266' : '420'}
          />
        </Container>
      </Timeline>
    </React.Fragment>
  );
};

export default FranchiseTimeline;
