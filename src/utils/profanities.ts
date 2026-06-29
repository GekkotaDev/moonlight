import { Filter } from "bad-words";
import { cuss } from "cuss";

export const filter = new Filter({
  placeHolder: "█",
  list: Object.entries(cuss)
    .filter(([, severity]) => severity >= 2)
    .map(([word]) => word),
});
