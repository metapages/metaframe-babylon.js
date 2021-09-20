import { FunctionalComponent } from "preact";
import { useCallback, useEffect } from "preact/hooks";
import { IconButton } from "@chakra-ui/react";
import { CheckIcon, EditIcon } from "@chakra-ui/icons";
import { useHashParam, useHashParamBase64 } from "@metapages/metaframe-hook";
import { useStore } from "../store";
import { useExecuteCodeWithMetaframe } from "../hooks/useExecuteCodeWithMetaframe";

export const ButtonRun: FunctionalComponent = () => {
  const [ mode, setMode ] = useHashParam("mode");
  // const setMode = useStore((state) => state.setMode);
  const isRunning = useStore((state) => state.running);
  const codeInStore = useStore((state) => state.code);
  const [runCode] = useExecuteCodeWithMetaframe();

  // Split these next two otherwise editing is too slow as it copies to/from the URL
  const [valueHashParam, setValueHashParam] = useHashParamBase64(
    "text",
    undefined
  );

  const onClick = useCallback(() => {
    // If the values are different, update, this will trigger a new execution
    if (valueHashParam !== codeInStore) {
      setValueHashParam(codeInStore);
    }
    setMode(mode === "editing" ? "running" : "editing");
  }, [mode, setMode, codeInStore, valueHashParam, setValueHashParam]);

  useEffect(() => {
    // The code values are the same, but the user clicked the button, so execute
    if (mode === "running" && codeInStore && runCode) {
      runCode(codeInStore);
    }
  }, [mode, codeInStore, runCode]);

  return (
    <IconButton
      aria-label="edit/run"
      colorScheme={mode === "editing" ? "green" : "blue"}
      onClick={onClick}
      icon={mode === "editing" ? <CheckIcon /> : <EditIcon /> }
      size="md"
    />
  );
};
