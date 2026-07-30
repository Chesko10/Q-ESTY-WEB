import Image from "next/image";

type Message = {
  from: "guest" | "bot";
  text: string;
  confirm?: boolean;
};

type ChatMockupProps = {
  messages: Message[];
  animated?: boolean;
  floatLabel?: string;
  showTyping?: boolean;
  className?: string;
};

export default function ChatMockup({
  messages,
  animated = false,
  floatLabel,
  showTyping = false,
  className = "",
}: ChatMockupProps) {
  const floatClass = animated ? "animate-[float_5s_ease-in-out_infinite]" : "";

  return (
    <div className={`relative mx-auto max-w-[480px] ${className}`}>
      {floatLabel && (
        <span
          className={`absolute -top-4 right-0 z-10 inline-flex items-center gap-1.5 rounded-full border border-brown/10 bg-cream px-3.5 py-2 text-xs font-bold text-brown-dark shadow-md ${floatClass}`}
          style={{ animationDelay: "0.3s" }}
        >
          <span className="text-terracotta">⚡</span>
          {floatLabel}
        </span>
      )}

      <div
        className={`overflow-hidden rounded-[20px] border border-sand bg-white text-left shadow-[0_24px_60px_-20px_rgba(58,27,18,0.35)] ${floatClass}`}
      >
        <div className="flex items-center gap-2.5 border-b border-sand px-4.5 py-3.5">
          <Image
            src="/questy_icon_transparent.png"
            alt="Güesty"
            width={32}
            height={32}
          />
          <div>
            <div className="text-sm font-bold text-brown-dark">
              Güesty · Hotel demo
            </div>
            <div className="flex items-center gap-1.5 text-xs text-brown">
              <span className="h-[7px] w-[7px] rounded-full bg-confirm" />
              Siempre despierto
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2.5 bg-cream-dark p-4.5">
          {messages.map((message, index) =>
            message.confirm ? (
              <div
                key={index}
                className="flex max-w-[82%] items-center gap-2 self-start rounded-2xl rounded-bl-md border border-confirm/40 bg-confirm/10 px-3.5 py-2.5 text-sm font-semibold text-brown-dark"
              >
                <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-confirm text-[10px] text-white">
                  ✓
                </span>
                {message.text}
              </div>
            ) : (
              <div
                key={index}
                className={
                  message.from === "guest"
                    ? "max-w-[82%] self-end rounded-2xl rounded-br-md bg-brown-dark px-3.5 py-2.5 text-sm leading-snug text-cream"
                    : "max-w-[82%] self-start rounded-2xl rounded-bl-md border border-sand bg-white px-3.5 py-2.5 text-sm leading-snug text-brown-dark"
                }
              >
                {message.text}
              </div>
            )
          )}

          {showTyping && (
            <div className="flex w-fit items-center gap-1 self-start rounded-2xl rounded-bl-md border border-sand bg-white px-4 py-3">
              {[0, 1, 2].map((dot) => (
                <span
                  key={dot}
                  className="h-1.5 w-1.5 rounded-full bg-brown animate-[typing-bounce_1.2s_infinite_ease-in-out]"
                  style={{ animationDelay: `${dot * 0.15}s` }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
