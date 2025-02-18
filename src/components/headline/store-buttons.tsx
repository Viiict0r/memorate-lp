/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const DOWNLOAD_APP_STORE_LINK =
  "https://apps.apple.com/br/app/memorate/id6478419879";
const DOWNLOAD_APP_PLAY_STORE_LINK =
  "https://play.google.com/store/apps/details?id=com.viensoft.memorate.app";

export function StoreButtons() {
  return (
    <div className="grid grid-cols-2 gap-4 w-fit">
      <Link href={DOWNLOAD_APP_STORE_LINK}>
        <img
          src="app-store.png"
          className="download-btn"
          alt="Baixe na App Store"
        />
      </Link>
      <Link href={DOWNLOAD_APP_PLAY_STORE_LINK}>
        <img
          src="google-play.png"
          className="download-btn"
          alt="Baixe na Play Store"
        />
      </Link>
    </div>
  );
}
