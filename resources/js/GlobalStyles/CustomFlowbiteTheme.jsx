import { Flowbite } from "flowbite-react";

const customTheme = {
  input: {
    base: "bg-white",
    addon: "bg-white",
  },
};

function CustomFlowbiteTheme({ children }) {
  return <Flowbite theme={{ theme: customTheme }}>{children}</Flowbite>;
}

export default CustomFlowbiteTheme;
