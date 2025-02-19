/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import { timeAgoFormatter } from "@/components/notification/time-formatter";
import { useIsDesktop } from "@/hooks/use-is-desktop";
import { useEffect, useRef, useState } from "react";

export function Notification() {
  const [canNotify, setCanNotify] = useState(() => {
    if (typeof window === "undefined") return false;

    const storedValue = localStorage.getItem("@memorate:🥚");

    if (storedValue) {
      const diffInMs = Math.abs(new Date().getTime() - Number(storedValue)); // Diferença em milissegundos
      const oneHourInMs = 60 * 60 * 1000; // 1 hora em milissegundos

      return diffInMs > oneHourInMs;
    }

    return true;
  });
  const [triggerTime, setTriggerTime] = useState<Date | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const fired = useRef(false);
  const isDesktop = useIsDesktop();

  useEffect(() => {
    function mouseMoveHandler(event: MouseEvent) {
      if (event.clientY < 10 && !fired.current && isDesktop && canNotify) {
        fired.current = true;
        setTriggerTime(new Date());

        const audio = new Audio("notification.mp3");
        audio.play();

        setCanNotify(false);
        localStorage.setItem("@memorate:🥚", new Date().getTime().toString());
      }
    }

    window.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, [isDesktop, canNotify]);

  useEffect(() => {
    if (!triggerTime) return;

    setTime(timeAgoFormatter(triggerTime));

    const interval = setInterval(() => {
      setTime(timeAgoFormatter(triggerTime));
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [triggerTime]);

  if (!fired.current || !triggerTime || !isDesktop) {
    return null;
  }

  return (
    <div className="absolute -top-20 -left-14 z-10 pointer-events-none fade-in-down">
      <div className="shadow-notification bg-[lightgray]/80 backdrop-blur-sm rounded-2xl p-3 max-w-[400px] grid grid-cols-1 gap-1">
        <div className="flex justify-between mb-1 items-center">
          <div className="flex items-center gap-2">
            <img src="/logo-icon.png" className="w-6 h-6 rounded-lg" />
            <span className="text-sm text-gray-500">MEMORATE</span>
          </div>
          <span className="text-xs text-gray-600">{time}</span>
        </div>
        <span className="font-semibold text-[#141414] text-sm">
          🥳 Surpresa especial!
        </span>
        <span className="text-xs text-gray-600 leading-4">
          Hoje é o aniversário de João, mostre que você está presente! Envie uma
          mensagem pelo app.
        </span>
      </div>
    </div>
  );
}
