"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Breadcrumbs from "./breadcrumb";
import CopyButton from "./copyButton";
import { HighlightCode } from "@/lib/highlight";
import { useUser } from "@/lib/currentUserProvider";
import Link from "next/link";

export default function ComponentWrapper({ component, code, usage, title }) {
  const { user } = useUser();
  console.log(user);

  return (
    <>
      <Breadcrumbs />
      <h3 className="h3 mb-5 mt-10">{title}</h3>
      <Tabs defaultValue="component" className="m-auto">
        <TabsList className="mb-4">
          <TabsTrigger value="component">Component</TabsTrigger>
          {user && user.email === "gabi8878@gmail.com" ? (
            <Link
              href="/all-access"
              className="inline-flex w-6/12 md:w-[45%] mb-5 items-center justify-center whitespace-nowrap px-3 py-3 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:border-b-[1px] border-slate-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={25}
                height={25}
                viewBox="0 0 50 50"
                enable-background="new 0 0 50 50"
              >
                <path d="M34 23h-2v-4c0-3.9-3.1-7-7-7s-7 3.1-7 7v4h-2v-4c0-5 4-9 9-9s9 4 9 9v4z" />
                <path d="M33 40H17c-1.7 0-3-1.3-3-3V25c0-1.7 1.3-3 3-3h16c1.7 0 3 1.3 3 3v12c0 1.7-1.3 3-3 3zM17 24c-.6 0-1 .4-1 1v12c0 .6.4 1 1 1h16c.6 0 1-.4 1-1V25c0-.6-.4-1-1-1H17z" />
                <circle cx="25" cy="28" r="2" />
                <path d="M25.5 28h-1l-1 6h3z" />
              </svg>{" "}
              Get code
            </Link>
          ) : (
            <TabsTrigger value="code">Code</TabsTrigger>
          )}
        </TabsList>
        <TabsContent value="component">{component}</TabsContent>
        <TabsContent value="code">
          <CopyButton code={code} />
          <HighlightCode language="javascript" content={code} />
        </TabsContent>
      </Tabs>
      {usage && (
        <>
          <h3 className="h3 mb-5 mt-10">Usage</h3>
          <HighlightCode language="javascript" content={usage} />
        </>
      )}
    </>
  );
}
