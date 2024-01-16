import * as React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import "./Experiences.css"

const cardsData = [
  {
    id: "1",
    title: "Okta",
    position: "Software Engineer",
    description:
      "Okta, Inc. is an American identity and access management company based in San Francisco. It provides cloud software that helps companies manage and secure user authentication into applications, and for developers to build identity controls into applications, website web services and devices.",
  },
  {
    id: "2",
    title: "ServiceNow",
    position: "UX Engineer",
    description:
      "ServiceNow, Inc. is an American software company based in Santa Clara, California that develops a cloud computing platform to help companies manage digital workflows for enterprise operations.",
  },
  {
    id: "3",
    title: "ZF",
    position: "IOT Software Engineer",
    description:
      "ZF Friedrichshafen AG, also known as ZF Group, originally Zahnradfabrik Friedrichshafen, and commonly abbreviated to ZF, is a global technology company that supplies systems for passenger cars, commercial vehicles and industrial technology.",
  },
  {
    id: "4",
    title: "Seattle University",
    position: "Bachelors of Science in Computer Science",
    description:
      "4 year university in Seattle",
  },
];
export default function Experiences() {
  return (
    <Box sx={{ width: "100%", marginBottom: "5%", textAlign: "flex-start" }}>
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction="row"
        useFlexGap
        divider={
          <Divider
            sx={{
              borderColor: 'rgb(255,255,255, 0.18)',
            }}
            orientation="vertical"
            flexItem
          />
        }
        flexWrap="wrap" style={{ justifyContent: "center" }}

      >
        {cardsData.map((item, i) => (
          <span key={i} style={{ maxWidth: "25%" }}>
            <p key={item.title}>{item.title}</p>
            <p key={item.position}>{item.position}</p>
            <p key={item.description}>{item.description}</p>
          </span>
        ))}
      </Stack>
    </Box>
  );
}
