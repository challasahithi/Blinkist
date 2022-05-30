import React from "react";
import {
  Container,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { styled } from "@mui/styles";
import banner from "../../../images/banner.svg";
import Constants from "../../../data/Constants";
import theme from "../../theme/theme";

interface Props {
  className?: string;
  style?: React.CSSProperties;
  childrens?: React.ReactNode;
}

const BannerContainer = styled("div")({
  width: "912px",
  height: "264px",
  backgroundColor: "#F1F6F4",
  display: "flex",
  gap: "112px",
  margin: "0 auto",
  // position: "relative",
});

const LeftBannerContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  position: "relative",
  gap: "15px",
  top: "45px",
  bottom: "45px",
  left: "45px",
});

const LeftBannerTopContainer = styled("div")({
  width: "319px",
  height: "90px",
});

const LeftBannerBottomContainer = styled("div")({
  width: "461px",
  height: "69px",
});

const RightContainer = styled("div")({});

const Banner = (props: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <Container className={props.className}>
        <BannerContainer>
          <LeftBannerContainer>
            <LeftBannerTopContainer>
              <Typography variant="h4" fontWeight={700}>{Constants.banner.heading}</Typography>
            </LeftBannerTopContainer>
            <LeftBannerBottomContainer>
              <Typography variant="subtitle2" color="#6D787E"  fontSize="18px" lineHeight={"22.63px"} height="69px" fontFamily={"Cera Pro"} fontWeight="400">
                {Constants.banner.description}
              </Typography>
            </LeftBannerBottomContainer>
          </LeftBannerContainer>
          <RightContainer>
            <img src={banner} alt="" />
          </RightContainer>
        </BannerContainer>
      </Container>
    </ThemeProvider>
  );
};

export default Banner;
