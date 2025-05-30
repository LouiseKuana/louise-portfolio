import "../styles/global.css";
import * as Tooltip from "@radix-ui/react-tooltip";

export default function RefButton({ id, title, icon: Icon, onClick }) {
  return (
    <>
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <button
              className="btn-ref"
              id={id}
              onClick={onClick}
            >
              <Icon className="custom-size-button-icon" />
            </button>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              side="top"
              className="custom-button-title animate-fade-in"
              sideOffset={8}
            >
              {title}
              <Tooltip.Arrow className="custom-button-title-arrow" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    </>
  );
}
