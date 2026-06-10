import { Box } from "@mui/material";
import { useDashboardFormsStyles } from "./DashboardForms.styles";
import { DashboardTime } from "../DashboardTime/DashboardTime";
import { DashboardServer } from "../DashboardServer/DashboardServer";
import { StatsCard } from "components/StatsCard/StatsCard";
import { appTexts } from "appTexts/appTexts";
import { CircleCheck, CirclePause } from "lucide-react";
import { EStatsColor } from "types/types";
import { useDashboardContext } from "contexts/dashboardContext";
import { observer } from "mobx-react-lite";
import { BlockSkeleton } from "components/BlockSkeleton/BlockSkeleton";

export const DashboardForms = observer(() => {
  const { isFetch, dashboard } = useDashboardContext();

  const color =
    dashboard?.serverStatus === "online" ? EStatsColor.SUCCESS : EStatsColor.ERROR;

  const icon = dashboard?.serverStatus === "online" ? <CircleCheck /> : <CirclePause />;

  const { classes } = useDashboardFormsStyles();
  return (
    <Box className={classes.container}>
      {isFetch && !dashboard ? (
        <>
          {Array.from({ length: 3 }).map((_, index) => (
            <BlockSkeleton key={index} width="32%" height={145} />
          ))}
        </>
      ) : (
        <>
          <DashboardTime />
          <DashboardServer />
          <StatsCard
            height={120}
            title={appTexts.dashboard.stats.server}
            icon={icon}
            color={color}
            value={dashboard?.serverStatus || "Нет данных"}
          />
        </>
      )}
    </Box>
  );
});
