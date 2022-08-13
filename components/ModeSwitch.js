import { Button, useColorMode } from "@chakra-ui/react";
import {  MoonIcon, SunIcon } from "@chakra-ui/icons";
import React from "react";
import dynamic from "next/dynamic";

// const { SunIcon, MoonIcon } = dynamic(() => import("@chakra-ui/icon"), { ssr: false });

const ToggleMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  console.log(colorMode);
  return (
    <div>
      <Button onClick={toggleColorMode}>
         {colorMode === "light"? <MoonIcon /> : <SunIcon />}
      </Button>
    </div>
  );
};

export default ToggleMode;
