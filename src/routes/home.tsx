/**
 * Simple:
 *  - any input sets
 *    - the content to the editor
 *    - the name to the input name
 *    - the save button is deactivated
 *  The save button sends the editor content to the same input name
 */

import { FunctionalComponent } from "preact";
import { useEffect } from "preact/hooks";
import { Box, HStack, VStack } from "@chakra-ui/react";
import {
  useHashParam,
  useHashParamJson,
  useHashParamBase64,
} from "@metapages/metaframe-hook";
import { Editor } from "/@/components/Editor";
import { Option, ButtonOptionsMenu } from "/@/components/ButtonOptionsMenu";
import { CodeResults } from "/@/components/CodeResults";
import { useStore } from "/@/store";
import { useExecuteCodeWithMetaframe } from "/@/hooks/useExecuteCodeWithMetaframe";
import { ButtonRun } from "/@/components/ButtonRun";
import { ButtonHelp } from "/@/components/ButtonHelp";

const appOptions: Option[] = [
  {
    name: "canvasWidth",
    displayName: "Canvas width",
    default: 300,
    type: "number",
  },
  {
    name: "canvasHeight",
    displayName: "Canvas height",
    default: 100,
    type: "number",
  },
  {
    name: "theme",
    displayName: "Light/Dark theme",
    default: "light",
    type: "option",
    options: ["light", "vs-dark"],
  },
  {
    name: "stretch",
    displayName: "Stretch to fill container",
    default: false,
    type: "boolean",
  },
];

type OptionBlob = {
  canvasWidth: number;
  canvasHeight: number;
  theme: string;
  stretch: boolean;
};

export const Route: FunctionalComponent = () => {
  // metaframe configuration
  const [options] = useHashParamJson<OptionBlob>("options", {
    canvasWidth: 300,
    canvasHeight: 100,
    theme: "light",
    stretch: false,
  });
  const codeInStore = useStore((state) => state.code);
  const setCodeInStore = useStore((state) => state.setCode);
  const [runCode] = useExecuteCodeWithMetaframe();
  const [mode] = useHashParam("mode");

  // Split these next two otherwise editing is too slow as it copies to/from the URL
  const [valueHashParam, setValueHashParam] = useHashParamBase64(
    "text",
    undefined
  );

  // source of truth: the URL param #?text=<HashParamBase64>
  // if that changes, set the local value
  // the local value changes fast from editing
  useEffect(() => {
    setCodeInStore(valueHashParam);
    if (runCode) {
      runCode(valueHashParam);
    }
  }, [valueHashParam, setCodeInStore, runCode]);

  const menu = (
    <HStack spacing={2}>
      <ButtonRun />
      <ButtonOptionsMenu options={appOptions} />
      <ButtonHelp />
    </HStack>
  );

  const content = (
    <Box w="100%">
      {mode === "editing" ? (
        <Editor
          mode="javascript"
          theme={options?.theme || "light"}
          setValue={setCodeInStore}
          value={codeInStore}
        />
      ) : codeInStore && codeInStore.length > 0 ? (
        <canvas
          style={
            options?.stretch
              ? { width: "100%", minWidth: options?.canvasWidth || 300 }
              : undefined
          }
          width={options?.canvasWidth || 300}
          height={options?.canvasHeight || 100}
          id="renderCanvas"
        />
      ) : null}
    </Box>
  );

  return (
    <Box w="100%" p={2}>
      <VStack stretch spacing={2} alignItems="flex-start">
        {content}
        <Box>{menu}</Box>
        <CodeResults />
      </VStack>
    </Box>
  );
};
