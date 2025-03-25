"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import {
  Cloud,
  fetchSimpleIcons,
  ICloud,
  renderSimpleIcon,
  SimpleIcon,
} from "react-icon-cloud";
import * as simpleIcons from "simple-icons";

export const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "pointer",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.02,
    minSpeed: 0.01,
    // dragControl: false,
  },
};

export const renderCustomIcon = (icon: SimpleIcon) => {
  return renderSimpleIcon({
    icon,
    size: 42,
    fallbackHex: icon.hex, // 使用图标自身的颜色
    aProps: {
      onClick: (e) => {
        e.preventDefault();
        window.open(`https://simpleicons.org/?q=${icon.title}`);
      },
    },
  });
};

export type DynamicCloudProps = {
  iconSlugs: string[];
};

export default function IconCloud({ iconSlugs }: DynamicCloudProps) {
  const { theme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const renderedIcons = useMemo(() => {
    // 过滤有效的图标
    const validIcons = iconSlugs
      .map(slug => {
        // 处理形如 "nodedotjs" 的slug
        const cleanSlug = slug.toLowerCase();
        
        // 在simpleIcons中查找匹配的图标
        for (const key in simpleIcons) {
          const icon = (simpleIcons as any)[key];
          if (icon && icon.slug === cleanSlug) {
            return icon;
          }
        }
        return null;
      })
      .filter(icon => icon !== null) as SimpleIcon[];

    if (validIcons.length > 0) {
      console.log('找到有效图标:', validIcons.length);
    }
    
    // 使用确定性排序替代随机排序
    // 方法1: 按照图标名称排序
    return validIcons
      .sort((a, b) => a.title.localeCompare(b.title))
      .map(icon => renderCustomIcon(icon));
  }, [iconSlugs]);

  if (!isClient) {
    // 服务端渲染时返回一个占位符
    return <div className="w-full h-full"></div>;
  }

  return (
    <div className="w-full h-full">
      {/* @ts-ignore */}
      <Cloud {...cloudProps}>
        <>{renderedIcons}</>
      </Cloud>
    </div>
  );
}
