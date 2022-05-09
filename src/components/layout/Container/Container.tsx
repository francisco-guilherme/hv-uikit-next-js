import clsx from "clsx";
import { useRouter } from "next/router";
import { HvContainer } from "@hitachivantara/uikit-react-core";

import Loading, { LoadingProps } from "components/layout/Loading";
import { isTopLevelPage } from "lib/utils/navigation";
import useStyles from "./styles";

interface ContainerProps {
  fullScreen?: boolean;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
  children: NonNullable<React.ReactNode>;
  className?: string;
  loadingProps?: LoadingProps;
}

const Container: React.FC<ContainerProps> = ({
  fullScreen = false,
  maxWidth = false,
  children,
  className,
  loadingProps,
}) => {
  const classes = useStyles();
  const { pathname } = useRouter();
  const hasSecondLevel = !isTopLevelPage(pathname);

  return (
    <div className={clsx(className, classes.content)}>
      <HvContainer
        maxWidth={maxWidth}
        className={clsx(classes.container, {
          [classes.fullHeight]: fullScreen,
          [classes.hasSecondLevel]: hasSecondLevel,
        })}
        {...{ component: "main" }}
      >
        {children}
      </HvContainer>
    </div>
  );
};

export default Container;
