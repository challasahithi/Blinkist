import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Card from "../Card/Card";
import { styled, makeStyles } from "@mui/styles";
import api from "../../../api/api";
import { DataObject } from "../BookDescription/BookDescription";
import theme from '../../theme/theme';
import Entrepreneur from "../../../images/coverImages/beyondEntrepreneurship.svg";

const useStyles = makeStyles({
  root: {
    width: "304px",
    height: "39px",
    textTransform: "none",
  },
});

const CardStyled = styled("div")({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "flex-start",
  gap: "25px 19.9px",
  width: "912px",
  marginLeft: "-24px",
});

const LabTabs = () => {
  const [value, setValue] = useState<string>("1");
  const [finishCard, setFinishCard] = useState<DataObject[]>([
    {
      id: 1,
      title: "Beyond Entrepreneurship",
      author: "Jim Collins & Bill Lazier",
      time: "13-minute read",
      read: "1.9k reads",
      image: Entrepreneur,
      state: {
        isFinished: false,
        isTrending: false,
        justAdded: false,
        isFeatured: false,
      },
    },
  ]);

  useEffect(() => {
    const getData = async () => {
      const response = await api.get(`/library/`);
      const mydata = response.data;
      setFinishCard(mydata);
    };
    getData();
  }, [finishCard]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const style = useStyles();

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            typography: "body1",
            marginTop: "60px",
          }}
        >
          <TabContext value={value}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                textTransform: "lowercase",
              }}
            >
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                color="secondary"
              >
                <Tab
                  label="Currently Reading"
                  value="1"
                  className={style.root}
                />
                <Tab label="Finished" value="2" className={style.root} />
              </TabList>
            </Box>

            <TabPanel value="1">
              <CardStyled>
                {finishCard
                  .slice(0, 9)
                  .filter((item) => !item.state.isFinished)
                  .map((card, index) => {
                    return (
                      <Card
                      data-testid="card-2"
                        key={index}
                        title={card.title}
                        author={card.author}
                        time={card.time}
                        read={card.read}
                        image={card.image}
                        isFinished={!card.state.isFinished}
                        value={card.id}
                        onClick={() => console.log("Currently Reading")}
                      />
                    );
                  })}
              </CardStyled>
            </TabPanel>
            <TabPanel value="2">
              <CardStyled>
                {finishCard
                  .filter((item) => item.state.isFinished)
                  .map((card, index) => {
                    return (
                      <Card
                        key={index}
                        title={card.title}
                        author={card.author}
                        time={card.time}
                        read={card.read}
                        image={card.image}
                        readAgain={true}
                        value={card.id}
                        onClick={() => console.log("Finished")}
                      />
                    );
                  })}
              </CardStyled>
            </TabPanel>
          </TabContext>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default LabTabs;