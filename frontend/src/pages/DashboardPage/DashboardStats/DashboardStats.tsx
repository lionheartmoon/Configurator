import { Box } from "@mui/material";
import { useDashboardStatsStyles } from "./DashboardStats.styles";
import { StatsCard } from "components/StatsCard/StatsCard";
import { appTexts } from "appTexts/appTexts";
import { EStatsColor } from "types/types";
import { CircleCheck, Files, Layers, TriangleAlert } from "lucide-react";
import { useDashboardContext } from "contexts/dashboardContext";
import { observer } from "mobx-react-lite";
import { BlockSkeleton } from "components/BlockSkeleton/BlockSkeleton";

export const DashboardStats = observer(() => {
  const { isFetch, dashboard } = useDashboardContext();

  const { classes } = useDashboardStatsStyles();
  return (
    <Box className={classes.container}>
      {isFetch && !dashboard ? (
        <>
          {Array.from({ length: 4 }).map((_, index) => (
            <BlockSkeleton key={index} width={`24%`} height={145} />
          ))}
        </>
      ) : (
        <>
          <StatsCard
            title={appTexts.dashboard.stats.all}
            icon={<Layers />}
            color={EStatsColor.INFO}
            value={dashboard?.devices || 0}
          />
          <StatsCard
            title={appTexts.dashboard.stats.active}
            icon={<CircleCheck />}
            color={EStatsColor.SUCCESS}
            value={dashboard?.active || 0}
          />
          <StatsCard
            title={appTexts.dashboard.stats.unactive}
            icon={<TriangleAlert />}
            color={EStatsColor.ERROR}
            value={dashboard?.unactive || 0}
          />
          <StatsCard
            title={appTexts.dashboard.stats.waiting}
            icon={<Files />}
            color={EStatsColor.WAITING}
            value={dashboard?.packages || 0}
          />
        </>
      )}
    </Box>
  );
});
