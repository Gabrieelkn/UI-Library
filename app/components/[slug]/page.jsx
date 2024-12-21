import { promises as fs } from "fs";
import path from "path";
import ComponentWrapper from "@/app/_components/componentWrapper";
import { componentMap } from "@/utils/componentsMap";

export default async function SingleComponent({ params }) {
  const { slug } = params;

  const componentInfo = componentMap[slug];

  if (!componentInfo) {
    return <div>Component not found</div>;
  }

  try {
    const codeFilePath = path.join(
      process.cwd(),
      "public",
      componentInfo.codePath
    );
    const code = await fs.readFile(codeFilePath, "utf8");

    let usage = "";
    if (componentInfo.usagePath) {
      const usageFilePath = path.join(
        process.cwd(),
        "public",
        componentInfo.usagePath
      );
      usage = await fs.readFile(usageFilePath, "utf8");
    }

    return (
      <ComponentWrapper
        component={componentInfo.component}
        code={code}
        usage={usage}
        title={componentInfo.title}
      />
    );
  } catch (error) {
    console.error("Error reading file:", error);
    return <div>Error loading component data</div>;
  }
}
