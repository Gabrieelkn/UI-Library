import { promises as fs } from "fs";
import ComponentWrapper from "@/app/_components/componentWrapper";
import { componentMap } from "@/utils/componentsMap";

export default async function SingleComponent({ params }) {
  const { slug } = params;

  // Retrieve the component information based on the slug
  const componentInfo = componentMap[slug];

  if (!componentInfo) {
    return <div>Component not found</div>;
  }

  try {
    const code = await fs.readFile(
      process.cwd() + componentInfo.codePath,
      "utf8"
    );

    // Read usage path only if it exists
    let usage = "";
    if (componentInfo.usagePath) {
      usage = await fs.readFile(
        process.cwd() + componentInfo.usagePath,
        "utf8"
      );
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
