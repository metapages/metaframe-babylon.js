import { FunctionalComponent } from "preact";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { useStore, Mode } from "../store";
import { BeatLoader } from "react-spinners";
import { useHashParamBoolean } from "@metapages/metaframe-hook";

export const CodeResults: FunctionalComponent = () => {
  const mode = useStore((state) => state.mode);
  const result = useStore((state) => state.result);
  // presentation mode means hide all the editing stuff
  const [isPresentationMode] = useHashParamBoolean("presentation");

  if (Mode.Running === mode) {
    return <BeatLoader size={8} color="blue" />;
  }
  if (!result || isPresentationMode) {
    return null;
  }

  if (result.failure) {
    return (
      <>
        <Alert status="error">
          <AlertIcon />
          <AlertTitle mr={2}>
            Error
            {result?.failure?.phase ? " in phase " + result.failure.phase : ""}
          </AlertTitle>
        </Alert>
        <Alert status="error">
          <AlertIcon />
          <AlertDescription>{`${result.failure?.error}`}</AlertDescription>
        </Alert>
      </>
    );
  } else {
    return (
      <Alert status="success">
        <AlertIcon />
      </Alert>
    );
  }
};
