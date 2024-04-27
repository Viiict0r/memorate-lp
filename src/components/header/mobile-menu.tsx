/* eslint-disable @next/next/no-img-element */
export const MobileMenu = () => {
  return (
    <button className="absolute transform -translate-y-1/2 top-1/2 right-0 w-fit h-fit hover:opacity-50 transition-opacity duration-300 cursor-pointer">
      <img
        src="/mobile-menu-icon.png"
        className="max-h-4 md:hidden"
        alt="Menu"
      />
    </button>
  );
};
