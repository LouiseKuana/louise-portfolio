import "../styles/global.css";
import { ChatCircleText } from "phosphor-react";

export default function EmailButton({ id }) {
  const email = "louisekuana@gmail.com";
  return (
    <>
      <button
        className="btn-3d text-[min(4vw,16px)]"
        id={id}
        onClick={() => (window.location = `mailto:${email}`)}
      >
        <span className="flex flex-inline">
          Click to send a tiny hello{" "}
          <ChatCircleText className=" mx-1 custom-size-button-icon" />
        </span>
      </button>
    </>
  );
}
