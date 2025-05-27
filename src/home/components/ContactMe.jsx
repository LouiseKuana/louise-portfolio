import { Sparkle, EnvelopeSimple, CheckCircle } from "phosphor-react";
import React, { useState } from "react";
import EmailButton from "./EmailButton";
import * as Tooltip from "@radix-ui/react-tooltip";
import "../Home.css";

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
      <div className="flex flex-col text-center justify-center items-center font-menlo w-[min(98vw,420px)] px-4">
        <h1 className="text-xl text-white mb-2 font-bold">
          Got something to say?
        </h1>
        <div className="flex flex-row items-center mb-2">
          <p className="text-[min(3vw,12px)] text-white">
            Whether it’s a kind word, a curious question, or just a little hello
            — your message is always welcome in my inbox
            <span className="inline-flex items-center align-middle ml-1">
              <Sparkle
                weight="fill"
                className="text-xanthous text-[min(4vw,16px)]"
              />
              <EnvelopeSimple
                weight="fill"
                className="text-xanthous text-[min(4vw,16px)] ml-[2px]"
              />
            </span>
          </p>
        </div>

        <img
          src="/src/assets/emailDuck.gif"
          alt="Duck with email icon"
          className="w-[min(50vw,230px)] mx-auto"
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
                    <span className="ml-2 text-orchid-pink font-semibold no-underline inline-flex">
                      Copy!
                      <CheckCircle
                        weight="fill"
                        className="text-orchid-pink text-[min(4vw,16px)] ml-[2px]"
                      />
                    </span>
                  )}
                </span>
              </Tooltip.Trigger>

              <Tooltip.Portal>
                <Tooltip.Content
                  className="bg-apple-green dark:bg-reseda-green text-lemon-chiffon text-xs rounded-xl px-3 py-2 shadow-lg font-menlo animate-fade-in z-50 border border-lemon-chiffon"
                  side="top"
                  align="center"
                  sideOffset={8}
                >
                  Click to copy email
                  <Tooltip.Arrow className="fill-lemon-chiffon" />
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
