import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWdiget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>

        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/EY.jpeg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Ernst & Young</Typography>
        <Typography color={medium}>ey.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        A multinational professional service company, Ernst & Young (EY) is
        hiring Freshers Graduates for various profiles.
      </Typography>
    <Typography>-----------------------------------------</Typography>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/NZ.jpeg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>NET ZERO PRO</Typography>
        <Typography color={medium}></Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Net Zero Pro is a software & consulting platform that helps corporates &
        investors measure, report & act on their Carbon footprint & ESG
        performance. The company was founded by a team of climate, finance &
        legal experts passionate about the transition to a Net Zero emissions
        future and the need to factor ESG into every investment, action &
        decision.
      </Typography>
      <Typography>-----------------------------------------</Typography>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/GOV.jpeg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>DPIIT Internship Program</Typography>
        <Typography color={medium}></Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        The Department for Promotion of Industry and Internal Trade (DPIIT)
        comes under the Ministry of Commerce & Industry. It is the
        responsibility of this department to being about growth in the
        industrial sector by formulating and implementing developmental as well
        as promotional measures. They do this in keeping with the nation's
        socio-economic objectives and national priorities. And you too can be a
        part of this journey to achieve its goals, with the DPIIT internship
        2023 program.
      </Typography>
    </WidgetWrapper>
  );
};
export default AdvertWdiget;
