import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import "../../app/globals.css";

export function ThemeProvider({ children, ...props }) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
