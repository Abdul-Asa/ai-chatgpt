export default function Sidebar({ open }: any) {
  return (
    <aside
      className={`fixed top-0 left-0 z-40 w-full md:w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 ${
        open ? "translate-x-0" : "-translate-x-full"
      } dark:bg-gray-800 dark:border-gray-700 `}
      aria-label="Sidenav"
      id="drawer-navigation"
    >
      <div className="h-full flex flex-col justify-between gap-8 p-10">
        <div className="h-full bg-red-400"></div>
        <div className="h-1/3 bg-blue-400"></div>
      </div>
    </aside>
  );
}
