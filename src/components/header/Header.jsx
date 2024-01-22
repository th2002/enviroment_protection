import { faBars, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <header className="fixed left-0 z-50 flex h-[60px] w-full cursor-pointer items-center justify-between bg-white px-20 md:justify-start xl:px-60">
      <h1 className="mr-32 text-2xl font-bold ">YoungCodersGenz</h1>
      <ul className="hidden items-center gap-10 *:cursor-pointer *:text-xs *:font-bold *:tracking-widest *:text-text_defautl md:flex 2xl:*:text-sm 3xl:*:text-base ">
        <li className="menu-items-hover hover:text-primary">Trang chủ</li>
        <li className="menu-items-hover hover:text-primary">
          Sự kiện <FontAwesomeIcon icon={faStar} fade color="#cf2e2e" />
        </li>
        <li className="menu-items-hover hover:text-primary">Bài viết</li>
      </ul>
      <FontAwesomeIcon
        className="transition-all duration-200 ease-linear hover:text-primary md:hidden"
        icon={faBars}
      />
    </header>
  );
}

export default Header;
