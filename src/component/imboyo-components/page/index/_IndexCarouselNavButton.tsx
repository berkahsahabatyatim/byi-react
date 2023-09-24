import { IconButton, SxProps } from "@mui/material";
import * as React from "react";

interface PropsType {
  onClick: () => void;
  icon: React.ReactNode;
  size?: "small" | "medium" | "large";
  sx?: SxProps;
  disabled?: boolean;
}

export default function _IndexCarouselNavButton({
  onClick,
  size = "medium",
  sx,
  icon,
  disabled = false,
}: PropsType) {
  return (
    <IconButton
      onClick={onClick}
      disabled={disabled}
      size={size}
      sx={{
        ...sx,
        position: "absolute",
        transform: "translateY(-50%)",
        backgroundColor: "#FFFFFF",
        top: "50%",
        zIndex: 1,

        "&:hover": {
          backgroundColor: "#eaeaea",
        },
      }}
    >
      {icon}
    </IconButton>
  );
}
