import "../Home.css";
import * as Tooltip from "@radix-ui/react-tooltip";

export default function NavbarButton({ title, icon: Icon, onClick }) {
  return (
    <>
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <button
              className="btn-3d"
              id="btn-navbar"
              onClick={onClick}
            >
              <Icon className="w-6 h-6 " />
            </button>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              side="top"
              className="bg-apple-green dark:bg-reseda-green text-lemon-chiffon text-xs rounded-xl px-3 py-2 shadow-lg font-menlo animate-fade-in z-50 border border-lemon-chiffon"
              sideOffset={8}
            >
              {title}
              <Tooltip.Arrow className="fill-lemon-chiffon" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    </>
  );
}
