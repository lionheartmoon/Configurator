import { EEventLimit } from "types/types";

export const handleLimit = (limit?: EEventLimit): number | undefined => {
  return !limit || limit === EEventLimit.ALL
    ? undefined
    : limit === EEventLimit.THIRTY
      ? 30
      : limit === EEventLimit.FIFTY
        ? 50
        : 100;
};
