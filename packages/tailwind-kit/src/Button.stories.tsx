import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
  title: "Components/Button",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  render: () =>
    `<button class="px-4 py-2 bg-blue-500 text-white rounded">Click me</button>`,
};
