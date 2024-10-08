import { Flowbite } from "flowbite-react";

const customTheme = {
  textInput: {
    field: {
      input: {
        base: "block w-full h-full rounded-[12px] border border-primary-500 p-2 focus:border-primary-500 focus:ring-primary-500 !important", 
        colors: {
          gray: "border-gray-300 bg-white text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500",
          info: "border-primary-500 bg-primary-50 text-primary-900 placeholder-primary-700 focus:border-primary-500 focus:ring-primary-500 dark:border-primary-400 dark:bg-primary-100 dark:focus:border-primary-500 dark:focus:ring-primary-500",
          failure: "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
          warning: "border-warning-500 bg-warning-50 text-warning-900 placeholder-warning-700 focus:border-warning-500 focus:ring-warning-500 dark:border-warning-400 dark:bg-warning-100 dark:focus:border-warning-500 dark:focus:ring-warning-500",
          success: "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500"
        }
      },
    },
  },
};

function CustomFlowbiteTheme({ children }) {
  return <Flowbite theme={{ theme: customTheme }}>{children}</Flowbite>;
}

export default CustomFlowbiteTheme;
