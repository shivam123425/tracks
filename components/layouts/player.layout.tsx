import { Box } from "@chakra-ui/layout";
import { ReactNode } from "react";
import Playerbar from "../playerBar";
import Sidebar from "../sidebar";

interface Props {
  children: ReactNode;
}

const PlayerLayout = ({ children }: Props) => {
  return (
    <Box width="100vw" height="100vh">
      <Box position="absolute" top="0" width="250px" left="0">
        <Sidebar />
      </Box>
      <Box marginLeft="250px" marginBottom="100px">
        <Box height="calc(100vh - 100px)">{children}</Box>
      </Box>
      <Box position="absolute" left="0" bottom="0" height="100px">
        <Playerbar />
      </Box>
    </Box>
  );
};

export default PlayerLayout;
