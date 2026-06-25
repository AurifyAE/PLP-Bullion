import React from "react";
import { Box, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";

const NewsTicker = ({ newsItems = [] }) => {
  const items =
    newsItems.length > 0
      ? newsItems
      : [{ description: "Welcome to PLP Gold Updates" }];

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: {
          xs: "38px",
          lg: "2.7vw",
        },
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        backdropFilter: "blur(0.6vw)",
        background: `
          linear-gradient(
            90deg,
            rgba(25,12,6,0.82) 0%,
            rgba(48,22,10,0.72) 40%,
            rgba(20,8,2,0.85) 100%
          )
        `,
        borderTop: "0.05vw solid rgba(255,220,180,0.12)",
        borderBottom: "0.05vw solid rgba(255,220,180,0.08)",
        boxShadow: `
          inset 0 0 1vw rgba(255,180,120,0.03),
          0 0 1vw rgba(0,0,0,0.18)
        `,
      }}
    >
      {/* LEFT BRAND */}
      <Typography
        sx={{


          color: "#FFC983",
          background:
            "linear-gradient(321deg, rgba(79, 17, 17, 0.45), rgb(171, 1, 43), rgba(79, 17, 17, 0.45))",
          fontSize: {
            xs: "12px",
            lg: "1.2vw",
          },
          fontWeight: 700,
          whiteSpace: "nowrap",
          padding: "0 3.5vw",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        PLP Gold
      </Typography>

      {/* NEWS TICKER */}
      <Box
        sx={{
          flex: 1,
          overflow: "hidden",
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Marquee
          speed={40}          // Lower = slower
          gradient={false}
          autoFill={true}
          loop={0}
          direction="left"       // Infinite
        >
          {items.map((item, index) => (
            <Typography
              key={index}
              component="span"
              sx={{

                textTransform: "lowercase",
                color: "#fff",
                fontSize: {
                  xs: "12px",
                  lg: "1.3vw",
                },
                fontWeight: 500,
                whiteSpace: "nowrap",
                mx: "1vw",
                flexShrink: 0,
              }}
            >
              {item?.description || ""}
            </Typography>
          ))}
        </Marquee>
      </Box>
    </Box>
  );
};

export default NewsTicker;