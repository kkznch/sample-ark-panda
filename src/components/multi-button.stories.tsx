import type { Meta, StoryObj } from "@storybook/react";
import { MultiButton, MultiButtonIcon } from "./multi-button";

const Button = () => {
	return (
		<MultiButton>
			<MultiButtonIcon />
			ボタン
		</MultiButton>
	);
};

const meta: Meta<typeof Button> = {
	component: Button,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
	args: {
		children: "ボタン",
	},
};
