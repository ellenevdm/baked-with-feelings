import type { Product } from "../../data/products";

type ProductIllustrationProps = {
  product: Product;
};

export function ProductIllustration({ product }: ProductIllustrationProps) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-cinnamon-100/40 px-8 text-cocoa-600">
      <svg
        aria-label={`${product.name} illustration`}
        className="h-32 w-32 sm:h-40 sm:w-40"
        fill="none"
        role="img"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.4"
        viewBox="0 0 160 160"
      >
        <title>{product.name}</title>
        {renderProductDrawing(product)}
      </svg>
    </div>
  );
}

function renderProductDrawing(product: Product) {
  switch (product.id) {
    case "snickerdoodle-cookies":
      return <CookieDrawing accent="swirl" />;
    case "chocolate-chip-cookies":
      return <CookieDrawing accent="chips" />;
    case "peanut-butter-oatmeal-cookies":
      return <CookieDrawing accent="oats" />;
    case "shortbread-cookies":
      return <ShortbreadDrawing />;
    case "oatmeal-crunchies":
      return <CrunchiesDrawing />;
    case "classic-brownies":
      return <BrownieDrawing />;
    case "classic-fudge":
      return <FudgeDrawing />;
    case "scones":
      return <SconeDrawing />;
    case "malva-pudding":
      return <PuddingDrawing />;
    case "milk-tart":
    case "lemon-meringue-tart":
      return <TartDrawing peaked={product.id === "lemon-meringue-tart"} />;
    case "cinnamon-rolls":
      return <CinnamonRollDrawing />;
    case "liver-training-treats":
      return <PetTreatDrawing />;
    case "pup-cake-classic":
    case "pup-cake-savoury":
      return <PupCakeDrawing />;
    case "fresh-fried-donuts":
    case "baked-mini-donuts":
      return <DonutDrawing mini={product.id === "baked-mini-donuts"} />;
    case "homemade-custard":
      return <CustardDrawing />;
    default:
      return product.audience === "pet" ? <PetTreatDrawing /> : <CookieDrawing />;
  }
}

function Plate() {
  return (
    <>
      <ellipse cx="80" cy="125" rx="54" ry="12" />
      <path d="M42 124c8 8 68 8 76 0" />
    </>
  );
}

function CookieDrawing({ accent }: { accent?: "chips" | "oats" | "swirl" }) {
  return (
    <>
      <Plate />
      <circle cx="66" cy="80" r="28" />
      <circle cx="96" cy="82" r="30" />
      {accent === "chips" && (
        <>
          <circle cx="57" cy="73" r="2" />
          <circle cx="72" cy="88" r="2" />
          <circle cx="91" cy="70" r="2" />
          <circle cx="105" cy="90" r="2" />
          <circle cx="98" cy="82" r="2" />
        </>
      )}
      {accent === "oats" && (
        <>
          <path d="M55 75c6-4 10-4 15 0" />
          <path d="M62 91c5-3 10-3 15 1" />
          <path d="M89 73c7-3 12-3 17 2" />
          <path d="M92 95c6-4 11-4 16 0" />
        </>
      )}
      {accent === "swirl" && (
        <>
          <path d="M56 81c7-12 23-12 26 0 2 9-9 16-17 10" />
          <path d="M88 82c8-13 25-12 29 1 2 10-11 17-20 10" />
        </>
      )}
    </>
  );
}

function ShortbreadDrawing() {
  return (
    <>
      <Plate />
      <rect height="44" rx="6" width="34" x="51" y="62" />
      <rect height="44" rx="6" width="34" x="82" y="62" />
      <path d="M60 73h16M60 84h16M60 95h16M91 73h16M91 84h16M91 95h16" />
    </>
  );
}

function CrunchiesDrawing() {
  return (
    <>
      <Plate />
      <rect height="34" rx="5" width="70" x="45" y="71" />
      <path d="M51 82h58M51 94h58" />
      <path d="M62 72v32M80 72v32M98 72v32" />
    </>
  );
}

function BrownieDrawing() {
  return (
    <>
      <Plate />
      <path d="M43 94 63 61h61l-20 42H46z" />
      <path d="M63 61 46 103M84 61 67 103M105 61 87 103" />
      <path d="M54 81h59" />
    </>
  );
}

function FudgeDrawing() {
  return (
    <>
      <Plate />
      <rect height="26" rx="4" width="34" x="45" y="78" />
      <rect height="26" rx="4" width="34" x="81" y="78" />
      <rect height="24" rx="4" width="32" x="63" y="56" />
      <path d="M51 88h21M87 88h21M69 66h20" />
    </>
  );
}

function SconeDrawing() {
  return (
    <>
      <Plate />
      <path d="M45 98c4-25 18-40 35-40s31 15 35 40Z" />
      <path d="M55 88c18 8 34 8 50 0" />
      <path d="M66 72h2M80 68h2M95 75h2" />
    </>
  );
}

function PuddingDrawing() {
  return (
    <>
      <Plate />
      <path d="M47 80h66l-8 31H55z" />
      <path d="M55 80c3-16 17-26 31-23 12 2 22 11 27 23" />
      <path d="M62 67c11 10 26 10 38 0" />
      <path d="M72 53c4-8 15-8 19 0" />
    </>
  );
}

function TartDrawing({ peaked = false }: { peaked?: boolean }) {
  return (
    <>
      <Plate />
      <path d="M38 92h84l-10 22H48z" />
      <path d="M47 92c7-21 22-33 43-33 18 0 31 12 38 33" />
      {peaked ? (
        <path d="M56 87 68 69l12 18 12-20 12 20 11-17 9 17" />
      ) : (
        <path d="M55 81c18 10 39 10 58 0" />
      )}
    </>
  );
}

function CinnamonRollDrawing() {
  return (
    <>
      <Plate />
      <circle cx="80" cy="83" r="36" />
      <path d="M81 83c14-7 10-24-4-24-18 0-28 24-12 39 17 16 45 4 45-17" />
      <path d="M58 105c13 9 31 10 45 0" />
    </>
  );
}

function PetTreatDrawing() {
  return (
    <>
      <Plate />
      <path d="M57 83c-9-8-3-22 10-17 4-12 21-12 25 0 13-5 19 9 10 17 12 5 10 21-4 22H61c-14-1-16-17-4-22Z" />
      <circle cx="62" cy="58" r="7" />
      <circle cx="98" cy="58" r="7" />
      <circle cx="52" cy="74" r="7" />
      <circle cx="108" cy="74" r="7" />
    </>
  );
}

function PupCakeDrawing() {
  return (
    <>
      <Plate />
      <path d="M55 80h50l-7 35H62z" />
      <path d="M58 80c2-16 15-25 29-21 9 2 16 9 18 21" />
      <path d="M67 64c3-13 22-13 25 0" />
      <path d="M73 47h14" />
      <path d="M80 40v14" />
    </>
  );
}

function DonutDrawing({ mini = false }: { mini?: boolean }) {
  return (
    <>
      <Plate />
      <circle cx={mini ? 65 : 80} cy="82" r={mini ? 21 : 34} />
      <circle cx={mini ? 65 : 80} cy="82" r={mini ? 8 : 13} />
      {mini && (
        <>
          <circle cx="101" cy="88" r="19" />
          <circle cx="101" cy="88" r="7" />
        </>
      )}
      <path d="M58 66h4M94 63h4M102 91h4M70 104h4" />
    </>
  );
}

function CustardDrawing() {
  return (
    <>
      <Plate />
      <path d="M58 58h44l-5 57H63z" />
      <path d="M55 58c4-8 46-8 50 0" />
      <path d="M64 74c12 6 24 6 36 0" />
      <path d="M68 92c9 4 18 4 27 0" />
    </>
  );
}
