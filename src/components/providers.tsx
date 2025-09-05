// app/providers.tsx
"use client";
import { ReactNode, createContext, useState } from "react";

export const ThemeContext = createContext({ dark:false, toggle: ()=>{} });

export function Providers({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(false);
  return (
    <ThemeContext.Provider value={{ dark, toggle:()=>setDark(!dark) }}>
      {children}
    </ThemeContext.Provider>
  );
}
