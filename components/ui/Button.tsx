import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-control px-6 py-3.5 font-sans text-[0.9375rem] font-semibold leading-none transition-[transform,box-shadow,background-color] duration-250 ease-out-soft hover:-translate-y-px active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0";

const variants = {
  primary:
    "bg-brand text-white shadow-brand hover:bg-brand-dark hover:shadow-[0_10px_24px_-8px_rgb(227_23_62/0.6)]",
  onDark:
    "bg-white text-night hover:bg-blush-50 focus-visible:outline-white",
  ghostDark:
    "bg-white/8 text-white shadow-[inset_0_0_0_1px_rgb(255_255_255/0.22)] backdrop-blur-md hover:bg-white/14 hover:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.4)] focus-visible:outline-white",
};

type CommonProps = {
  variant?: keyof typeof variants;
  className?: string;
  arrow?: boolean;
};

type ButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type LinkProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export default function Button(props: ButtonProps | LinkProps) {
  const { variant = "primary", className = "", arrow = false, children, ...rest } =
    props;
  const classes = `${base} ${variants[variant]} ${className}`;
  const content = (
    <>
      {children}
      {arrow && (
        <span
          aria-hidden
          className="transition-transform duration-250 ease-out-soft group-hover:translate-x-0.5"
        >
          →
        </span>
      )}
    </>
  );

  if ("href" in props && props.href) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a href={href} className={classes} {...anchorRest}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}
