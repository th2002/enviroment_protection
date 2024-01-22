function Sidebar() {
  return (
    <div className="flex h-[680px] flex-col gap-6 overflow-auto scroll-smooth border-r-[1px] border-gray-300 pr-20 2xl:h-[754px] 3xl:h-auto">
      <h2 className="font-semibold tracking-widest">Cuộc thi</h2>
      <ul className="*:border-l-2 *:border-gray-400 *:py-3 *:pl-5 *:text-sm *:font-medium *:text-gray-500 *:transition-all *:duration-300 *:ease-linear">
        <li className="hover:border-primary hover:text-primary">
          <a href="#why">Lý do</a>
        </li>
        <li className="hover:border-primary hover:text-primary">
          <a href="#participate">Hình thức tham gia</a>
        </li>
        <li className="hover:border-primary hover:text-primary">
          <a href="#rule">Quy tắc</a>
        </li>
        <li className="hover:border-primary hover:text-primary">
          <a href="#schedule">Lịch trình</a>
        </li>
      </ul>

      <h2 className="font-semibold tracking-widest">Giám khảo</h2>
      <ul className="*:border-l-2 *:border-gray-400 *:py-3 *:pl-5 *:text-sm *:font-medium *:text-gray-500 *:transition-all *:duration-300 *:ease-linear">
        <li className="hover:border-primary hover:text-primary">
          <a href="#examiner">Danh sách giám khảo</a>
        </li>
        <li className="hover:border-primary hover:text-primary">
          <a href="#criteria">Tiêu chí đánh giá</a>
        </li>
      </ul>

      <h2 className="font-semibold tracking-widest">Giải thưởng</h2>
      <ul className="*:border-l-2 *:border-gray-400 *:py-3 *:pl-5 *:text-sm *:font-medium *:text-gray-500 *:transition-all *:duration-300 *:ease-linear">
        <li className="hover:border-primary hover:text-primary">
          <a href="#prize">Danh sách giải thưởng</a>
        </li>
        <li className="hover:border-primary hover:text-primary">
          <a href="#procedure">Quy trình trao giải</a>
        </li>
      </ul>

      <h2 className="font-semibold tracking-widest">Bảo vệ môi trường</h2>
      <ul className="*:border-l-2 *:border-gray-400 *:py-3 *:pl-5 *:text-sm *:font-medium *:text-gray-500 *:transition-all *:duration-300 *:ease-linear">
        <li className="hover:border-primary hover:text-primary">
          <a href="#posts">Bài Viết</a>
        </li>
        <li className="hover:border-primary hover:text-primary">
          <a href="#info">Thông Tin</a>
        </li>
      </ul>

      <h2 className="font-semibold tracking-widest">Liên hệ</h2>
      <ul className="*:border-l-2 *:border-gray-400 *:py-3 *:pl-5 *:text-sm *:font-medium *:text-gray-500 *:transition-all *:duration-300 *:ease-linear">
        <li className="hover:border-primary hover:text-primary">
          <a href="#fanpage">Fanpage</a>
        </li>
        <li className="hover:border-primary hover:text-primary">
          <a href="#contact">Email</a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
