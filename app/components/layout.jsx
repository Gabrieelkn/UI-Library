import ComponentsNavMenu from "../_components/componentsNavMenu";

export default async function Components({ children }) {
  return (
    <div className="mt-10 container flex flex-col lg:flex-row">
      <div className="lg:w-[30%]">
        <ComponentsNavMenu />
      </div>
      <div className="lg:w-[60%]">{children}</div>
    </div>
  );
}
