"use client";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";

function transformPath(path) {
  // Split the path into segments, filter out any empty segments
  let segments = path.split("/").filter(Boolean);

  // Transform each segment
  return segments.map((segment) => {
    return segment.charAt(0).toUpperCase() + segment.slice(1);
  });
}

export default function Breadcrumbs() {
  const pathname = usePathname();
  const transformedPaths = transformPath(pathname);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        {transformedPaths.map((segment, index) => (
          <React.Fragment key={index}>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink
                href={pathname
                  .split("/")
                  .slice(0, index + 2)
                  .join("/")}
              >
                {segment}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
