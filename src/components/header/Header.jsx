import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <header className="fixed left-0 flex h-[60px] w-full cursor-pointer items-center px-60 ">
      <h1 className="mr-32 text-2xl font-bold ">YoungCodersGenz</h1>
      <ul className="flex items-center gap-10 *:cursor-pointer *:font-bold *:tracking-widest *:text-text_defautl ">
        <li className="menu-items-hover hover:text-primary">Trang chủ</li>
        <li className="menu-items-hover hover:text-primary">
          Sự kiện <FontAwesomeIcon icon={faStar} fade color="#cf2e2e" />
        </li>
        <li className="menu-items-hover hover:text-primary">Bài viết</li>
      </ul>
    </header>
  );
}

export default Header;
