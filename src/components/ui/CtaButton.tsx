import Link from "next/link";
import { ArrowRight } from "lucide-react";

type CtaButtonProps = {
  href: string;
  children: React.ReactNode;
  showArrow?: boolean;
  external?: boolean;
  className?: string;
  onClick?: () => void;
};

const primaryClasses =
  "group/btn relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#00DBFF] text-black font-bold uppercase tracking-wider rounded-none overflow-hidden transition-transform active:scale-95 text-sm md:text-base";

const secondaryClasses =
  "inline-flex items-center justify-center px-8 py-4 bg-transparent border border-neutral-600 text-white font-bold uppercase tracking-wider rounded-none hover:bg-white hover:text-black transition-all active:scale-95 text-sm md:text-base";

export function CtaPrimary({
  href,
  children,
  showArrow = false,
  external = false,
  className = "",
  onClick,
}: CtaButtonProps) {
  const classes = `${primaryClasses} ${className}`.trim();

  const content = (
    <>
      <span className="relative z-10 cta-primary-label">{children}</span>
      {showArrow && (
        <ArrowRight className="w-5 h-5 relative z-10 cta-primary-icon transition-transform group-hover/btn:translate-x-2" />
      )}
      <div
        aria-hidden
        className="cta-primary-sweep absolute inset-0 bg-white translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-500 ease-in-out"
      />
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} data-cta-primary onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} data-cta-primary onClick={onClick}>
      {content}
    </Link>
  );
}

export function CtaSecondary({
  href,
  children,
  external = false,
  className = "",
}: Omit<CtaButtonProps, "showArrow">) {
  const classes = `${secondaryClasses} ${className}`.trim();

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}