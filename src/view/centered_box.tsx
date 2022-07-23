import Box from "@mui/material/Box";
import { ReactNode } from "react";

export default function CenteredBox(props: { children?: ReactNode }) {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      {props.children}
    </Box>
  );
}
