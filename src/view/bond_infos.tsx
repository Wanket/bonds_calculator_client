import BondInfo from "@/api/type/bond_info";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import React from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { getBondCurrentPrice } from "@/api/type/bond";
import { calculateDateBetween } from "@/utils/date";

export function BondsInfos(props: { bonds: BondInfo[] }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {props.bonds.length === 0 ? (
        <Box>No Results</Box>
      ) : (
        props.bonds.map((info) => (
          <CardWithSpace key={info.Bond.Id} variant="outlined">
            <CardActionArea>
              <CardContent>
                <Grid container spacing={1}>
                  <Grid item sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" component="div">
                      {info.Bond.ShortName}
                    </Typography>
                    <Typography color="text.secondary">
                      {info.Bond.Id}
                    </Typography>
                    <Typography color="text.secondary">
                      {calculateDateBetween(
                        new Date(Date.now()),
                        new Date(info.Bond.EndDate)
                      )}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h5" component="div" align="right">
                      {getBondCurrentPrice(info.Bond)} {info.Bond.Currency}
                    </Typography>
                    <ColoredPercent
                      name="Current income percent"
                      percent={info.CurrentIncome}
                    />
                    <ColoredPercent
                      name="Maturity income percent"
                      percent={info.MaturityIncome}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </CardActionArea>
          </CardWithSpace>
        ))
      )}
    </Box>
  );
}

export function BondInfosLoading() {
  return <Box>Not Loaded</Box>;
}

function ColoredPercent(props: { percent: number | null; name: string }) {
  let color: string;

  if (props.percent === null) {
    color = "text.primary";
  } else if (props.percent < 0.08) {
    color = "error.main";
  } else if (props.percent < 0.12) {
    color = "warning.main";
  } else {
    color = "success.main";
  }

  const percentText =
    props.percent === null ? "N/A" : `${(props.percent * 100).toFixed(2)}%`;

  return (
    <Grid container spacing={1} justifyContent="flex-end">
      <Grid item>
        <Typography color="text.secondary">{`${props.name}: `}</Typography>
      </Grid>
      <Grid item>
        <Typography sx={{ color: color }}>{percentText}</Typography>
      </Grid>
    </Grid>
  );
}

const CardWithSpace = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));
