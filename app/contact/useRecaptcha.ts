"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface RecaptchaRenderOptions {
  sitekey: string;
  size: "normal" | "compact";
  callback: (token: string) => void;
  "expired-callback": () => void;
  "error-callback": () => void;
}

interface RecaptchaApi {
  ready: (callback: () => void) => void;
  render: (
    container: HTMLElement,
    options: RecaptchaRenderOptions,
  ) => number;
  reset: (widgetId?: number) => void;
}

declare global {
  interface Window {
    grecaptcha?: RecaptchaApi;
  }
}

const RECAPTCHA_SCRIPT_ID = "google-recaptcha-script";

export function useRecaptcha() {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  const recaptchaContainerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);
  const [isRecaptchaReady, setIsRecaptchaReady] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState("");

  const renderRecaptcha = useCallback(() => {
    const recaptcha = window.grecaptcha;
    const container = recaptchaContainerRef.current;

    if (!siteKey || !recaptcha || !container || widgetIdRef.current !== null) {
      return;
    }

    recaptcha.ready(() => {
      const currentContainer = recaptchaContainerRef.current;

      if (!currentContainer || widgetIdRef.current !== null) {
        return;
      }

      widgetIdRef.current = recaptcha.render(currentContainer, {
        sitekey: siteKey,
        size: window.matchMedia("(max-width: 450px)").matches
          ? "compact"
          : "normal",
        callback: (token) => setRecaptchaToken(token),
        "expired-callback": () => setRecaptchaToken(""),
        "error-callback": () => setRecaptchaToken(""),
      });
      setIsRecaptchaReady(true);
    });
  }, [siteKey]);

  useEffect(() => {
    if (!siteKey) {
      setIsRecaptchaReady(false);
      return;
    }

    const handleLoad = () => {
      renderRecaptcha();
    };

    const handleError = () => {
      setIsRecaptchaReady(false);
    };

    if (window.grecaptcha) {
      renderRecaptcha();
      return;
    }

    let script = document.getElementById(
      RECAPTCHA_SCRIPT_ID,
    ) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement("script");
      script.id = RECAPTCHA_SCRIPT_ID;
      script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
      script.async = true;
      script.defer = true;
    }

    script.addEventListener("load", handleLoad);
    script.addEventListener("error", handleError);

    if (!script.isConnected) {
      document.head.appendChild(script);
    }

    return () => {
      script?.removeEventListener("load", handleLoad);
      script?.removeEventListener("error", handleError);
    };
  }, [renderRecaptcha, siteKey]);

  const resetRecaptcha = useCallback(() => {
    setRecaptchaToken("");

    if (window.grecaptcha && widgetIdRef.current !== null) {
      window.grecaptcha.reset(widgetIdRef.current);
    }
  }, []);

  return {
    isRecaptchaConfigured: Boolean(siteKey),
    isRecaptchaReady,
    recaptchaContainerRef,
    recaptchaToken,
    resetRecaptcha,
  };
}
