import { Sparkle, EnvelopeSimple, CheckCircle } from "phosphor-react";
import { useState } from "react";
import EmailButton from "../components/EmailButton";
import * as Tooltip from "@radix-ui/react-tooltip";
import "../styles/global.css";
import emailDuck from "@assets/emailDuck.gif";

export default function ContactMe() {
  const email = "louisekuana@gmail.com";
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // mensagem some após 2 segundos
    });
  };

  return (
    <>
      <div className="page-container w-[min(90vw,420px)]">
        <h2 className="page-heading mb-1">
          Got something to say?
        </h2>
        <div className="flex flex-row items-center mb-2">
          <p className="contact-paragraph ">
            Whether it’s a kind word, a curious question, or just a little hello
            — your message is always welcome in my inbox
            <span className="icon-inline-container">
              <Sparkle
                weight="fill"
                className="text-xanthous icon-inline"
              />
              <EnvelopeSimple
                weight="fill"
                className="text-xanthous icon-inline"
              />
            </span>
          </p>
        </div>
        <img
          src={emailDuck}
          alt="Duck with email icon"
          className="w-[min(45vw,230px)] mx-auto"
        ></img>

        <Tooltip.Provider delayDuration={200}>
          <div className="text-[min(3vw,12px)] text-white mb-2">
            <span className="inline-block mr-1">Send your message to:</span>

            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <span
                  onClick={copyToClipboard}
                  className="cursor-pointer inline-flex items-center"
                >
                  <span className="text-orchid-pink underline">{email}</span>
                  {copied && (
                    <span className="inline-flex ml-2 text-orchid-pink font-semibold no-underline">
                      Copy!
                      <CheckCircle
                        weight="fill"
                        className="text-orchid-pink icon-inline"
                      />
                    </span>
                  )}
                </span>
              </Tooltip.Trigger>

              <Tooltip.Portal>
                <Tooltip.Content
                  className="custom-button-title animate-fade-in"
                  side="top"
                  align="center"
                  sideOffset={8}
                >
                  Click to copy email
                  <Tooltip.Arrow className="custom-button-title-arrow" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </div>
        </Tooltip.Provider>

        <EmailButton/>
      </div>
    </>
  );
}
