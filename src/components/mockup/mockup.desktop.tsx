/* eslint-disable @next/next/no-img-element */
export function MockupDesktop() {
  return (
    <div>
      <img
        alt="app preview"
        src="/desk-iphone.png"
        className="object-contain w-full min-[1320px]:scale-[1.30] scale-[1.20] min-[1320px]:-ml-[90px] -ml-[60px] -mb-[400px] hidden min-[1150px]:block"
      />
      <img
        alt="app preview"
        src="/mobile-iphone.png"
        className="object-contain w-full block min-[1150px]:hidden max-w-[290px] mx-auto"
      />
    </div>
  );
}
