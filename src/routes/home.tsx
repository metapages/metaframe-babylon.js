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
import { Box, Flex, HStack, Spacer, VStack } from "@chakra-ui/react";
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
    default: 300,
    type: "number",
  },
  {
    name: "theme",
    displayName: "Light/Dark theme",
    default: "light",
    type: "option",
    options: ["light", "vs-dark"],
  },
];

type OptionBlob = {
  canvasWidth: number;
  canvasHeight: number;
  theme: string;
};

export const Route: FunctionalComponent = () => {
  // metaframe configuration
  const [options] = useHashParamJson<OptionBlob>("options", {
    canvasWidth: 300,
    canvasHeight: 300,
    theme: "light",
  });
  const codeInStore = useStore((state) => state.code);
  const setCodeInStore = useStore((state) => state.setCode);
  const [runCode] = useExecuteCodeWithMetaframe();
  const [mode] = useHashParam("mode");
  //  const mode = useStore((state) => state.mode);

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

  // alignItems="flex-start"
  const menu = (
    <HStack spacing={2} >
      <ButtonRun />
      <ButtonOptionsMenu options={appOptions} />
      <ButtonHelp />
    </HStack>
  );

  return (
    <Box w="100%" p={2}>
      <VStack stretch spacing={2} alignItems="flex-start">
        {/* w="70%" */}
        <Box w="100%">
          {mode === "editing" ? (
            <Editor
              mode="javascript"
              theme={options?.theme || "light"}
              setValue={setCodeInStore}
              value={codeInStore}
            />
          ) : (
            <canvas
              style={{ width: "100%", minWidth:options?.canvasWidth || 300 }}
              width={options?.canvasWidth || 300}
              height={options?.canvasHeight || 300}
              id="renderCanvas"
            />
          )}

        </Box>

        {/* w="30%" */}
        <Box >{menu}</Box>
        <CodeResults />
      </VStack>
    </Box>
  );
};
