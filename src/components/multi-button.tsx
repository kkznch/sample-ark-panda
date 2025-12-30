import { ark } from "@ark-ui/react/factory";
import { multiButton } from "../../styled-system/recipes";
import { createStyleContext } from "./utils/create-style-context";
import type { PropsWithChildren } from "react";
import type { HTMLStyledProps } from "../../styled-system/types";

const { withProvider, withContext } = createStyleContext(multiButton);

export const MultiButton = withProvider<
	HTMLDivElement,
	PropsWithChildren<HTMLStyledProps<"div">>
>(ark.button, "button");

export const MultiButtonIcon = withContext<
	HTMLSpanElement,
	PropsWithChildren<HTMLStyledProps<"span">>
>(ark.button, "icon");
