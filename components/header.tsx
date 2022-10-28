import Link from "next/link";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";
import { useState } from "react";

const Header = () => {
  const intl = useIntl();
  const router = useRouter();
  const { defaultLocale, isFallback, query, locales, locale } = router;
  const [open, setOpen] = useState(Boolean);
  const handleChangeLocale = (locale: string) => {
    router.push(router.asPath, router.asPath, {
      locale: locale as string,
      shallow: true,
    });
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="w-full text-slate-200 relative z-10">
      <div className="flex justify-between items-center px-10 py-4 relative">
        <div className="flex-1">
          <Link href={"/"}>
            <a>
              <div className="flex flex-col w-max">
                <div className="font-bold text-3xl">
                  <span className="text-green-400">weed</span>y
                </div>
                <div className="text-end -m-1">Cannabis</div>
              </div>
            </a>
          </Link>
        </div>
        <div className="shrink-0 hidden md:block">
          <div className="flex justify-center gap-4 text-xl rounded-lg backdrop-blur-md">
            <Link href="/shop">
              <a>
                <div className="p-3">
                  <FormattedMessage id="shop" />
                </div>
              </a>
            </Link>
            <Link href="/contacts">
              <a>
                <div className="p-3"><FormattedMessage id="contact" /></div>
              </a>
            </Link>
            <Link href="/about">
              <a>
                <div className="p-3"><FormattedMessage id="about" /></div>
              </a>
            </Link>
          </div>
        </div>
        <div className="flex gap-2 justify-end flex-1 items-center">
          <div className="p-2">
            <Link href="/cart">
              <a>
                <ShoppingBagOutlinedIcon />
              </a>
            </Link>
          </div>
          <div className="p-2">
            <div className="dropdown inline-block relative">
              <button
                className="bg-white text-slate-800 font-semibold p-2 rounded inline-flex items-center"
                onClick={handleOpen}
              >
                <span className="uppercase">{locale}</span>
              </button>
              <ul
                className={`dropdown-menu absolute ${
                  open ? "block" : "hidden"
                } font-semibold uppercase bg-white text-slate-800 w-full mt-1 rounded-lg`}
              >
                {locales?.map((item: any, key) => (
                  <li
                    key={item}
                    className={`relative z-50 p-2 ${key == 0 && "border-b"}`}
                    style={{ cursor: "pointer" }}
                    onClick={() => handleChangeLocale(item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
