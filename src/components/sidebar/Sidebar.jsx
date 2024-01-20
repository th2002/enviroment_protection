function Sidebar() {
  return (
    <div className="flex flex-col gap-6 border-r-[1px] border-gray-300 pr-20">
      <h2 className="font-semibold tracking-widest">Cuộc thi</h2>
      <ul className="*:border-l-2 *:border-gray-400 *:py-3 *:pl-5 *:text-sm *:font-medium *:text-gray-500 *:transition-all *:duration-300 *:ease-linear">
        <li className="hover:border-gray-900 hover:text-gray-900">
          <a href="#">Lý do</a>
        </li>
        <li className="hover:border-gray-900 hover:text-gray-900">
          <a href="#">Hình thức tham gia</a>
        </li>
        <li className="hover:border-gray-900 hover:text-gray-900">
          <a href="#">Quy tắc</a>
        </li>
        <li className="hover:border-gray-900 hover:text-gray-900">
          <a href="#">Lịch trình</a>
        </li>
      </ul>

      <h2 className="font-semibold tracking-widest">Giám khảo</h2>
      <ul className="*:border-l-2 *:border-gray-400 *:py-3 *:pl-5 *:text-sm *:font-medium *:text-gray-500 *:transition-all *:duration-300 *:ease-linear">
        <li>
          <a href="#">Danh sách giám khảo</a>
        </li>
        <li>
          <a href="#">Tiêu chí đánh giá</a>
        </li>
      </ul>

      <h2 className="font-semibold tracking-widest">Giải thưởng</h2>
      <ul className="*:border-l-2 *:border-gray-400 *:py-3 *:pl-5 *:text-sm *:font-medium *:text-gray-500 *:transition-all *:duration-300 *:ease-linear">
        <li>
          <a href="#">Danh sách giải thưởng</a>
        </li>
        <li>
          <a href="#">Quy trình trao giải</a>
        </li>
      </ul>

      <h2 className="font-semibold tracking-widest">Bảo vệ môi trường</h2>
      <ul className="*:border-l-2 *:border-gray-400 *:py-3 *:pl-5 *:text-sm *:font-medium *:text-gray-500 *:transition-all *:duration-300 *:ease-linear">
        <li>
          <a href="#">Bài Viết</a>
        </li>
        <li>
          <a href="#">Thông Tin</a>
        </li>
      </ul>

      <h2 className="font-semibold tracking-widest">Liên hệ</h2>
      <ul className="*:border-l-2 *:border-gray-400 *:py-3 *:pl-5 *:text-sm *:font-medium *:text-gray-500 *:transition-all *:duration-300 *:ease-linear">
        <li>
          <a href="#">Fanpage</a>
        </li>
        <li>
          <a href="#">Email</a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
