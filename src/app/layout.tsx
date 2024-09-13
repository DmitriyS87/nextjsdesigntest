import type { Metadata } from "next";
import React from "react";
import { Inter } from "next/font/google";

import AntdProvider from "shared/providers/ant/AntdProvider";
import { ConfigProvider } from "antd";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdProvider>
          <ConfigProvider
            tag={{ className: "encrease-specificity" }}
            input={{ className: "encrease-specificity" }}
            button={{ className: "encrease-specificity" }}
            switch={{ className: "encrease-specificity" }}
            table={{ className: "encrease-specificity" }}
            divider={{ className: "encrease-specificity" }}
            dropdown={{ className: "encrease-specificity" }}
            form={{ className: "encrease-specificity" }}
            modal={{ className: "encrease-specificity" }}
            theme={{
              token: {
                fontFamily: "inherit",
                colorPrimary: "#4e75ff",
                colorPrimaryHover: "#4665D2",
                colorPrimaryText: "#ffffff",
                colorPrimaryTextActive: "#ffffff",
                colorPrimaryTextHover: "#ffffff",
                colorText: "#36394A",
                borderRadiusLG: 8,
                controlItemBgActive: "#F7F7F7",
                boxShadowSecondary: "0px 16px 32px -12px rgba(14, 18, 27, 0.1)",
                controlItemBgActiveHover: "blue",
                controlItemBgHover: "#F7F7F7",
                colorBgElevated: "#ffffff",
              },
              components: {
                Table: {
                  headerSortActiveBg: "#F7F7F7",
                  headerSortHoverBg: "#F7F7F7",
                  rowHoverBg: "#ffffff",
                },
                Dropdown: {
                  paddingBlock: 14,
                },
              },
            }}
          >
            {children}
          </ConfigProvider>
        </AntdProvider>
      </body>
    </html>
  );
}
