import { BlockUI } from "components/BlockUI/BlockUI";
import { useDeviceInfoStyles } from "./DeviceInfo.styles";
import { Box, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useDeviceContext } from "contexts/devicesContext";
import { ProtocolChip } from "components/ProtocolChip/ProtocolChip";
import { OnlineChip } from "components/OnlineChip/OnlineChip";
import Empty from "components/Empty/Empty";
import { appTexts } from "appTexts/appTexts";

export const DeviceInfo = observer(() => {
  const { isFetch, device } = useDeviceContext();

  const handleValue = (label: string, value: any) => {
    switch (label) {
      case "running":
        return <OnlineChip online={value} />;
      case "protocol":
        return <ProtocolChip protocol={value} />;

      default:
        return <Typography className={classes.infoValue}>{value}</Typography>;
    }
  };

  const { classes } = useDeviceInfoStyles();
  return (
    <>
      <BlockUI paddingNull>
        <Box className={classes.container}>
          <Typography className={classes.title}>Информация об устройстве</Typography>

          {isFetch || !device ? (
            <Box className={classes.empty}>
              <Empty />
            </Box>
          ) : (
            <Box className={classes.info}>
              {device &&
                Object.entries(device).map((item) => {
                  const label = item[0];
                  const value = item[1];

                  return (
                    <Box className={classes.infoRow}>
                      <Typography className={classes.infoTitle}>
                        {
                          appTexts.devicePage.labels[
                            label as keyof typeof appTexts.devicePage.labels
                          ]
                        }
                        :
                      </Typography>
                      {handleValue(label, value)}
                    </Box>
                  );
                })}
            </Box>
          )}
        </Box>
      </BlockUI>
    </>
  );
});
