"use client";
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

const button = cva(
  [
    "text-white",
    "mr-2",
    "mb-2",
    "focus:ring-4",
    "font-medium",
    "rounded-lg",
    "focus:outline-none",
    "transition-all",
    "duration-200",
  ],
  {
    variants: {
      intent: {
        defualt: [
          "bg-blue-700",
          "hover:bg-blue-800",
          "focus:ring-blue-300",
          "focus:outline-none",
          "dark:bg-blue-600",
          "dark:hover:bg-blue-700",
          "dark:focus:ring-blue-800",
        ],
        alternative: [
          "text-gray-900",
          "bg-white",
          "border",
          "border-gray-200",
          "hover:bg-gray-100",
          "hover:text-blue-700",
          "focus:z-10",
          "focus:ring-gray-200",
          "dark:focus:ring-gray-700",
          "dark:bg-gray-800",
          "dark:text-gray-400",
          "dark:border-gray-600",
          "dark:hover:text-white",
          "dark:hover:bg-gray-700",
        ],
        dark: [
          "bg-gray-800",
          "hover:bg-gray-900",
          "focus:ring-gray-300",
          "dark:bg-gray-800",
          "dark:hover:bg-gray-700",
          "dark:focus:ring-gray-700",
          "dark:border-gray-700",
        ],
        light: [
          "text-gray-900",
          "bg-white",
          "border",
          "border-gray-300",
          "hover:bg-gray-100",
          "focus:ring-gray-200",
          "dark:bg-gray-800",
          "dark:text-white",
          "dark:border-gray-600",
          "dark:hover:bg-gray-700",
          "dark:hover:border-gray-600",
          "dark:focus:ring-gray-700",
        ],
        green: [
          "bg-green-700",
          "hover:bg-green-800",
          "focus:ring-green-300",
          "dark:bg-green-600",
          "dark:hover:bg-green-700",
          "dark:focus:ring-green-800",
        ],
        red: [
          "bg-red-700",
          "hover:bg-red-800",
          "focus:ring-red-300",
          "dark:bg-red-600",
          "dark:hover:bg-red-700",
          "dark:focus:ring-red-900",
        ],
        yellow: [
          "bg-yellow-400",
          "hover:bg-yellow-500",
          "focus:ring-yellow-300",
          "dark:focus:ring-yellow-900",
        ],
        purple: [
          "bg-purple-700",
          "hover:bg-purple-800",
          "focus:ring-purple-300",
          "dark:bg-purple-600",
          "dark:hover:bg-purple-700",
          "dark:focus:ring-purple-900",
        ],
      },
      size: {
        xs: ["text-xs", "py-2", "px-3"],
        small: ["text-sm", "py-2", "px-3"],
        medium: ["text-sm", "py-2.5", "px-5"],
        large: ["text-base", "py-3", "px-5"],
        xl: ["text-base", "py-3.5", "px-6"],
      },
    },

    defaultVariants: {
      intent: "defualt",
      size: "medium",
    },
  }
);

const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  ...props
}) => <button className={button({ intent, size, className })} {...props} />;

export default Button;
