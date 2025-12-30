import { defineSlotRecipe } from "@pandacss/dev";

export const multiButton = defineSlotRecipe({
	className: "multi-button",
	slots: ["button", "icon"],
	base: {
		button: {
			height: "auto",
			width: "320px",
			backgroundColor: "red",
		},
		icon: {
			height: "60px",
			width: "40px",
			backgroundColor: "blue",
		},
	},
});
