import { Flowbite } from "flowbite-react";

const customTheme = {
  textInput: {
    field: {
      base: "relative w-300px", 
      input: {
        base: "block w-full overflow-hidden rounded-[4px] border-[1px] border-gray-100 bg-white disabled:cursor-not-allowed disabled:opacity-50", // Tùy chỉnh nền, border và hiệu ứng focus
        sizes: {
          sm: "text-sm py-2 px-3", // Tùy chỉnh kích thước nhỏ
          md: "text-base py-2 px-4", // Kích thước trung bình
          lg: "text-lg py-3 px-5", // Kích thước lớn
        },
        colors: {
          gray: "bg-white text-gray-500 focus:border-primary-500 focus:ring-primary-200",
        },
      },
    },
  },
};

function CustomFlowbiteTheme({ children }) {
  return <Flowbite theme={{ theme: customTheme }}>{children}</Flowbite>;
}

export default CustomFlowbiteTheme;
