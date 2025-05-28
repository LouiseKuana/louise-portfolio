import "../styles/global.css";
import { ChatCircleText } from "phosphor-react";

export default function EmailButton() {
  const email = "louisekuana@gmail.com";
  return (
    <>
      <button
        className="btn-3d text-[min(4vw,16px)]"
        id="btn-navbar"
        onClick={() => (window.location = `mailto:${email}`)}
      >
        <span className="flex flex-inline">
          Click to send a tiny hello{" "}
          <ChatCircleText className=" mx-[2px] w-6 h-6" />
        </span>
      </button>
    </>
  );
}
