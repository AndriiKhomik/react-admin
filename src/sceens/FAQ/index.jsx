import React from "react";
import { useTheme } from "@emotion/react";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Qustion Page" />
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur eligendi numquam accusamus itaque illo sunt quis
            nostrum repellat nesciunt eum? Inventore voluptatibus quod maiores
            qui libero veniam officia a nostrum. Molestias illum harum mollitia
            dolores suscipit sit voluptates eos quia distinctio animi voluptas,
            eligendi assumenda nihil vero, magni natus! Distinctio, nobis
            commodi? Temporibus necessitatibus modi consequatur non! Adipisci,
            cupiditate officia.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Another important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur eligendi numquam accusamus itaque illo sunt quis
            nostrum repellat nesciunt eum? Inventore voluptatibus quod maiores
            qui libero veniam officia a nostrum. Molestias illum harum mollitia
            dolores suscipit sit voluptates eos quia distinctio animi voluptas,
            eligendi assumenda nihil vero, magni natus! Distinctio, nobis
            commodi? Temporibus necessitatibus modi consequatur non! Adipisci,
            cupiditate officia.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Your favorite question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur eligendi numquam accusamus itaque illo sunt quis
            nostrum repellat nesciunt eum? Inventore voluptatibus quod maiores
            qui libero veniam officia a nostrum. Molestias illum harum mollitia
            dolores suscipit sit voluptates eos quia distinctio animi voluptas,
            eligendi assumenda nihil vero, magni natus! Distinctio, nobis
            commodi? Temporibus necessitatibus modi consequatur non! Adipisci,
            cupiditate officia.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Final question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur eligendi numquam accusamus itaque illo sunt quis
            nostrum repellat nesciunt eum? Inventore voluptatibus quod maiores
            qui libero veniam officia a nostrum. Molestias illum harum mollitia
            dolores suscipit sit voluptates eos quia distinctio animi voluptas,
            eligendi assumenda nihil vero, magni natus! Distinctio, nobis
            commodi? Temporibus necessitatibus modi consequatur non! Adipisci,
            cupiditate officia.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
