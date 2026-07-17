// Google Analytics tracking utilities

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}

// Track page views
export const pageview = (url: string) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "", {
      page_path: url,
    });
  }
};

// Track custom events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Common event tracking functions
export const trackButtonClick = (buttonName: string) => {
  event({
    action: "click",
    category: "Button",
    label: buttonName,
  });
};

export const trackFormSubmit = (formName: string) => {
  event({
    action: "submit",
    category: "Form",
    label: formName,
  });
};

export const trackLinkClick = (linkUrl: string) => {
  event({
    action: "click",
    category: "Link",
    label: linkUrl,
  });
};
