import ComponentsNavMenu from "../_components/componentsNavMenu";
import PrevNextButtons from "../_components/prevNextButtons";

export default async function Components({ children }) {
  return (
    <div className="mt-10 container flex flex-col md:flex-row">
      <div className="hidden md:block md:w-[30%]">
        <ComponentsNavMenu />
      </div>
      <div className="md:w-[60%]">{children}</div>
      <PrevNextButtons />
    </div>
  );
}
