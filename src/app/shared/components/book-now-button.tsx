"use client";

import React from "react";
import { Button } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import { useBooking } from "../contexts/booking-context";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "hero"
  | "minimal"
  | "ghost"
  | "gradient"
  | "rounded"
  | "custom";

interface BookNowButtonProps {
  variant?: ButtonVariant;
  size?: "small" | "middle" | "large";
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  block?: boolean;
  disabled?: boolean;
  showIcon?: boolean;
  icon?: React.ReactNode;
}

const getVariantStyles = (variant: ButtonVariant) => {
  const styles = {
    primary: {
      style: {
        background: "linear-gradient(to right, #ec4899, #8b5cf6)",
        borderColor: "transparent",
        color: "white",
        fontWeight: "600",
        borderRadius: "8px",
        boxShadow: "0 4px 14px 0 rgba(236, 72, 153, 0.39)",
      },
      className: "hover:scale-105 transition-all duration-300",
      type: "primary" as const,
    },
    secondary: {
      style: {
        background: "white",
        borderColor: "#ec4899",
        color: "#ec4899",
        fontWeight: "600",
        borderRadius: "8px",
        borderWidth: "2px",
      },
      className:
        "hover:bg-pink-50 hover:border-pink-600 hover:text-pink-600 transition-all duration-300",
      type: "default" as const,
    },
    outline: {
      style: {
        background: "transparent",
        borderColor: "#ec4899",
        color: "#ec4899",
        fontWeight: "600",
        borderRadius: "8px",
        borderWidth: "2px",
      },
      className:
        "hover:bg-pink-500 hover:text-white hover:border-pink-500 transition-all duration-300",
      type: "default" as const,
    },
    hero: {
      style: {
        background: "linear-gradient(to right, #ec4899, #8b5cf6)",
        borderColor: "transparent",
        color: "white",
        fontWeight: "600",
        borderRadius: "9999px",
        padding: "12px 32px",
        height: "auto",
        fontSize: "16px",
        boxShadow:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      },
      className:
        "hover:scale-105 hover:shadow-xl transition-all duration-300 transform",
      type: "primary" as const,
    },
    minimal: {
      style: {
        background: "transparent",
        borderColor: "transparent",
        color: "#ec4899",
        fontWeight: "600",
        padding: "4px 8px",
      },
      className:
        "hover:bg-pink-50 hover:text-pink-600 transition-all duration-300",
      type: "text" as const,
    },
    ghost: {
      style: {
        background: "rgba(255, 255, 255, 0.1)",
        borderColor: "rgba(255, 255, 255, 0.3)",
        color: "white",
        fontWeight: "600",
        borderRadius: "8px",
        backdropFilter: "blur(10px)",
      },
      className:
        "hover:bg-white/20 hover:border-white/50 transition-all duration-300",
      type: "default" as const,
    },
    gradient: {
      style: {
        background:
          "linear-gradient(135deg, #ec4899 0%, #8b5cf6 50%, #3b82f6 100%)",
        borderColor: "transparent",
        color: "white",
        fontWeight: "700",
        borderRadius: "12px",
        boxShadow: "0 8px 32px rgba(236, 72, 153, 0.3)",
      },
      className:
        "hover:scale-105 hover:shadow-2xl transition-all duration-300 transform",
      type: "primary" as const,
    },
    rounded: {
      style: {
        background: "#ec4899",
        borderColor: "#ec4899",
        color: "white",
        fontWeight: "600",
        borderRadius: "50px",
        padding: "8px 24px",
      },
      className:
        "hover:bg-pink-600 hover:border-pink-600 hover:scale-105 transition-all duration-300",
      type: "primary" as const,
    },
    custom: {
      style: {},
      className: "",
      type: "default" as const,
    },
  };

  return styles[variant] || styles.primary;
};

export const BookNowButton: React.FC<BookNowButtonProps> = ({
  variant = "primary",
  size = "middle",
  children = "Book Now",
  className = "",
  style = {},
  block = false,
  disabled = false,
  showIcon = true,
  icon,
}) => {
  const { openBookingModal } = useBooking();
  const variantConfig = getVariantStyles(variant);

  // Merge custom styles with variant styles
  const finalStyle = { ...variantConfig.style, ...style };
  const finalClassName = `${variantConfig.className} ${className}`.trim();

  return (
    <Button
      type={variantConfig.type}
      size={size}
      icon={showIcon ? icon || <CalendarOutlined /> : undefined}
      onClick={openBookingModal}
      className={finalClassName}
      style={finalStyle}
      block={block}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

export default BookNowButton;
