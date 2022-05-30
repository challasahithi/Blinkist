import { ComponentMeta, ComponentStory } from "@storybook/react";
import { createTheme, ThemeProvider } from "@mui/material";
import Header from "./Header";

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        body1: {
          fontFamily: "Cera Pro",
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "16px",
          lineHeight: "20px",
          color: "#03314B",
        },
      },
    },
  },
});

export default {
  title: "Organisms/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => (
  <ThemeProvider theme={theme}>
    <Header />
  </ThemeProvider>
);

export const HeaderStory = Template.bind({});
