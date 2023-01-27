import { ADSENSE_ID } from "../lib/constants";

export default function Banner({
  className = ``,
  style = { display: `block`, marginLeft: `auto`, marginRight: `auto` },
  client = ADSENSE_ID,
  slot,
  layout = ``,
  layoutKey = ``,
  format = `auto`,
  responsive = `true`,
  test,
  children,
}) {
  return (
    <>
      <ins
        className={`adsbygoogle ${className}`}
        style={style}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-layout={layout}
        data-ad-layout-key={layoutKey}
        data-ad-format={format}
        data-full-width-responsive={responsive}
        data-adtest={test}
      >
        {children}
      </ins>
    </>
  );
}
