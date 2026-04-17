import { useEffect, useRef, useState, type ReactNode, type CSSProperties, type ElementType } from "react";

type RevealDirection = "up" | "down" | "left" | "right" | "zoom";

type RevealProps = {
  children: ReactNode;
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  as?: ElementType;
  className?: string;
  once?: boolean;
  threshold?: number;
};

const DIRECTION_CLASS: Record<RevealDirection, string> = {
  up: "",
  down: "from-down",
  left: "from-left",
  right: "from-right",
  zoom: "zoom",
};

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration,
  as,
  className = "",
  once = true,
  threshold = 0.15,
}: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once, threshold]);

  const style: CSSProperties = {
    transitionDelay: delay ? `${delay}ms` : undefined,
    transitionDuration: duration ? `${duration}ms` : undefined,
  };

  return (
    <Tag
      ref={ref}
      style={style}
      className={`reveal ${DIRECTION_CLASS[direction]} ${visible ? "is-visible" : ""} ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}
