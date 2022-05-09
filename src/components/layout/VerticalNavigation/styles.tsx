import { makeStyles } from "@material-ui/core";

import { HEADER_HEIGHT } from "lib/utils/layout";

const styles = makeStyles(() => ({
  container: {
    position: "fixed",
    top: HEADER_HEIGHT,
    zIndex: 1100,
  },
  root: {
    width: 300,
    height: `calc(100vh - ${HEADER_HEIGHT}px)`,
  },
}));

export default styles;
