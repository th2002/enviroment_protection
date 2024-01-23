import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faEnvelope, faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Reveal from "~/Reveal";

function Content() {
  return (
    <div className="scrollbar-hide 3xl:h[800px] h-[680px] w-[800px] overflow-y-auto scroll-smooth px-10 2xl:h-[774px] 2xl:w-[1020px] 3xl:h-[850px] 3xl:w-[1500px]">
      <div className="text-justify">
        <div className="flex gap-5 border-[4px] border-l-primary bg-primary bg-opacity-15 px-8 py-6 font-medium">
          <FontAwesomeIcon
            className="font-bold text-primary"
            icon={faStar}
            bounce
          />
          <h1 className="tracking-wide text-gray-600">
            Chào mừng các bạn đến với cuộc thi &quot;Bảo Vệ Môi Trường - Hành
            Trình Phát Triển Cá Nhân&quot;! Tại đây, nhóm chúng mình tự hào giới
            thiệu đến bạn một hành trình đặc biệt, nơi mà sự sáng tạo và kĩ năng
            code của các bạn sẽ góp phần lan tỏa thông điệp bảo vệ môi trường và
            kích thích sự phát triển cá nhân.
          </h1>
        </div>
      </div>

      <div className="my-10">
        <Reveal>
          <h1
            id="why"
            className="mb-4 text-2xl font-semibold tracking-widest text-[#176B87]"
          >
            Form nộp bài dự thi
          </h1>
        </Reveal>

        <Reveal>
          <a
            href="https://forms.gle/mUYp4HANh9BFuKwm6"
            className="text-sm font-semibold leading-8 tracking-wide text-primary"
          >
            https://forms.gle/mUYp4HANh9BFuKwm6
          </a>
        </Reveal>
      </div>

      <div className="relative mt-10 flex h-[200px] w-full items-center justify-center rounded-xl px-10">
        <h1 className="absolute z-20 text-5xl font-bold uppercase tracking-widest text-white">
          Cuộc thi
        </h1>
        <img
          className="absolute bottom-0 left-0 right-0 top-0 h-[200px] w-full object-cover"
          src="assets/images/banner_contest.jpg"
          alt="background"
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-black bg-opacity-20"></div>
      </div>

      <div className="mt-10">
        <Reveal>
          <h1
            id="why"
            className="mb-4 text-2xl font-semibold tracking-widest text-[#176B87]"
          >
            Vì sao có cuộc thi này ?
          </h1>
        </Reveal>

        <Reveal>
          <p className="text-sm leading-10 tracking-wide">
            Chào các ong vàng chăm chỉ của{" "}
            <span className="text-base font-semibold text-orange-400">
              FPT Polytechnic
            </span>{" "}
            ! 🐝 💛 <br /> 🌱{" "}
            <span className="text-base font-semibold text-green-500">
              MÔI TRƯỜNG LÀ NGÔI NHÀ CHUNG CỦA CHÚNG TA
            </span>{" "}
            🌿 <br /> Chúng ta đều đồng lòng rằng bảo vệ thiên nhiên và môi
            trường không chỉ là trách nhiệm, mà còn là sự cam kết sống bền vững
            để giữ cho hành tinh của chúng ta tồn tại và phát triển. <br /> 🌏💙
            Để đề xuất một cách sáng tạo nhằm kêu gọi sự quan tâm và hành động
            từ cộng đồng, nhóm chúng mình tổ chức{" "}
            <span className="text-base font-semibold text-[#176B87]">
              CUỘC THI CODE LANDING PAGE VỀ CHỦ ĐỀ BẢO VỆ MÔI TRƯỜNG!
            </span>{" "}
            🚀🌳
          </p>
        </Reveal>

        <img
          className="mx-auto mb-10 mt-8 w-[400px] object-cover"
          src="assets/images/poster.png"
          alt="Poster"
        />

        <Reveal>
          <h1
            id="participate"
            className="mb-4 text-2xl font-semibold tracking-widest text-[#176B87]"
          >
            Hình thức tham gia
          </h1>
        </Reveal>
        <Reveal>
          <p className="text-sm leading-8 tracking-wide">
            <span className="mr-4">1️⃣</span> Hiểu rõ về các vấn đề môi trường
            hiện nay.
            <br /> <span className="mr-4">2️⃣</span> Sáng tạo và thiết kế một
            trang landing page thú vị và ấn tượng.
            <br /> <span className="mr-4">3️⃣</span> Chia sẻ thông điệp của bạn
            về bảo vệ môi trường thông qua nội dung của trang web.
            <br /> <span className="mr-4">4️⃣</span> Like fanpage và share bài
            viết tổ chức cuộc thi trên fanpage
            <br /> <span className="mr-4">5️⃣</span> Điền thông tin và nộp link
            demo sản phẩm theo form này
          </p>
        </Reveal>

        <Reveal>
          <h1
            id="rule"
            className="mb-4 mt-10 text-2xl font-semibold tracking-widest text-[#176B87]"
          >
            Quy tắc
          </h1>
        </Reveal>
        <Reveal>
          <p className="text-sm leading-8 tracking-wide">
            <span className="mr-4">1️⃣</span> Có thể sử dụng HTML, CSS, SCSS, JS
            <br /> <span className="mr-4">2️⃣</span>
            <span className="font-semibold text-red-500">Không</span> sử dụng
            các CMS platform như: Wordpress, Shopify... <br />
            <span className="mr-4">3️⃣</span>
            <span className="font-semibold text-red-500">Không</span> sử dụng
            các library CSS và JS <br /> <span className="mr-4">4️⃣</span>Quản lí
            source code bằng github <br /> <span className="mr-4">5️⃣</span>
            <span className="font-semibold text-red-500">Không</span> nhờ người
            code hộ ! BTC sẽ tiến hành kiểm tra lại trước khi trao giải
          </p>
        </Reveal>

        <Reveal>
          <h1
            id="schedule"
            className="mb-4 mt-10 text-2xl font-semibold tracking-widest text-[#176B87]"
          >
            Lịch trình <FontAwesomeIcon icon={faCalendar} />
          </h1>
        </Reveal>
        <Reveal>
          <p className="text-sm leading-8 tracking-wide">
            từ ngày <span className="font-semibold">22/01/2024</span> đến hết
            ngày <span className="font-semibold">28/01/2024</span>
          </p>
        </Reveal>

        <div className="relative mt-10 flex h-[200px] w-full items-center justify-center rounded-xl px-10">
          <h1 className="absolute z-20 text-5xl font-bold uppercase tracking-widest text-white">
            Giám khảo
          </h1>
          <img
            className="absolute bottom-0 left-0 right-0 top-0 h-[200px] w-full object-cover"
            src="assets/images/banner_examiner.jpg"
            alt="background"
          />
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-black bg-opacity-20"></div>
        </div>

        <Reveal>
          <h1
            id="examiner"
            className="mb-4 mt-10 text-2xl font-semibold tracking-widest text-[#176B87]"
          >
            Danh sách giám khảo
          </h1>
        </Reveal>
        <Reveal>
          <p className="text-sm leading-8 tracking-wide">
            <FontAwesomeIcon className="mr-2 text-red-600" icon={faFire} beat />{" "}
            cô <span className="font-semibold">Nguyễn Thị Nam</span> - BM CNTT
          </p>
        </Reveal>

        <Reveal>
          <h1
            id="criteria"
            className="mb-4 mt-10 text-2xl font-semibold tracking-widest text-[#176B87]"
          >
            Tiêu chí đánh giá
          </h1>
        </Reveal>
        <Reveal>
          <p className="text-sm leading-8 tracking-wide">
            <span className="mr-4">1️⃣</span>Giao diện
            <br /> <span className="mr-4">2️⃣</span>
            Sáng tạo <br />
            <span className="mr-4">3️⃣</span>
            Thông điệp ý nghĩa
          </p>
        </Reveal>

        <div className="relative mt-10 flex h-[200px] w-full items-center justify-center rounded-xl px-10">
          <h1 className="absolute z-20 text-5xl font-bold uppercase tracking-widest text-white">
            Giải thưởng
          </h1>
          <img
            className="absolute bottom-0 left-0 right-0 top-0 h-[200px] w-full object-cover"
            src="assets/images/banner_prize.jpg"
            alt="background"
          />
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-black bg-opacity-20"></div>
        </div>

        <Reveal>
          <h1
            id="prize"
            className="mb-4 mt-10 text-2xl font-semibold tracking-widest text-[#176B87]"
          >
            🏆 NHỮNG PHẦN THƯỞNG HẤP DẪN ĐANG CHỜ ĐÓN
          </h1>
        </Reveal>
        <Reveal>
          <p className="text-sm leading-8 tracking-wide">
            🥇 Giải Nhất:{" "}
            <span className="text-lg font-semibold text-yellow-500">
              500.000 VND
            </span>{" "}
            <br />
            🥈 Giải Nhì:{" "}
            <span className="text-lg font-semibold text-gray-500">
              300.000 VND
            </span>{" "}
            <br />
            🥉 Giải Ba:{" "}
            <span className="text-lg font-semibold text-orange-500">
              200.000 VND
            </span>{" "}
            <br />
            🎖 Giả khuyến khích:{" "}
            <span className="text-lg font-semibold text-gray-700">
              100.000 VND
            </span>{" "}
          </p>
        </Reveal>

        <Reveal>
          <h1
            id="procedure"
            className="mb-4 mt-10 text-2xl font-semibold tracking-widest text-[#176B87]"
          >
            Quy trình trao giải
          </h1>
        </Reveal>
        <Reveal>
          <p className="text-sm leading-8 tracking-wide">
            Mọi người nhắn tin fanpage để cung cấp một trong các thông tin chứng
            minh dưới đây, sau khi xác nhận xong ban tổ chức sẽ liên hệ để trao
            giải <br />
            <span className="mr-4">1️⃣</span>Thẻ sinh viên
            <br /> <span className="mr-4">2️⃣</span>
            Hình ảnh liên quan khác nếu mất thẻ <br />
            <span className="mr-4">3️⃣</span>Số điện thoại
          </p>
        </Reveal>

        <div className="relative mt-10 flex h-[200px] w-full items-center justify-center rounded-xl px-10">
          <h1 className="absolute z-20 text-5xl font-bold uppercase tracking-widest text-white">
            Bảo vệ môi trường
          </h1>
          <img
            className="absolute bottom-0 left-0 right-0 top-0 h-[200px] w-full object-cover"
            src="assets/images/banner_env.jpg"
            alt="background"
          />
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-black bg-opacity-20"></div>
        </div>

        <h1
          id="posts"
          className="mb-4 mt-10 text-2xl font-semibold tracking-widest text-[#176B87]"
        >
          Bài viết
        </h1>
        <div className="flex flex-wrap justify-between gap-8">
          <div className="w-[330px] 2xl:w-[450px] 3xl:w-[550px]">
            <img
              className="mb-4 size-[330px] object-cover 2xl:w-[450px] 3xl:w-[550px]"
              src="https://btnmt.1cdn.vn/2024/01/18/a-can-tho.jpg"
              alt="Hình ảnh minh họa"
            />
            <a
              className="font-semibold"
              href="https://baotainguyenmoitruong.vn/can-tho-kien-quyet-khong-de-rac-thai-u-dong-trong-dip-tet-nguyen-dan-2024-369150.html"
            >
              Cần Thơ: Kiên quyết không để rác thải ứ đọng trong dịp Tết Nguyên
              đán 2024
            </a>
          </div>
          <div className="w-[330px] 2xl:w-[450px] 3xl:w-[550px]">
            <img
              className="mb-4 size-[330px] object-cover 2xl:w-[450px] 3xl:w-[550px]"
              src="https://btnmt.1cdn.vn/2024/01/19/img_9772.jpg"
              alt="Hình ảnh minh họa"
            />
            <a
              className="font-semibold"
              href="https://baotainguyenmoitruong.vn/cay-choi-vang-lan-thu-4-ton-vinh-40-cong-nhan-ve-sinh-moi-truong-toan-quoc-369216.html"
            >
              “Cây chổi vàng” lần thứ 4 tôn vinh 40 công nhân vệ sinh môi trường
              toàn quốc
            </a>
          </div>
          <div className="w-[330px] 2xl:w-[450px] 3xl:w-[550px]">
            <img
              className="mb-4 size-[330px] object-cover 2xl:w-[450px] 3xl:w-[550px]"
              src="https://btnmt.1cdn.vn/2023/09/07/dsc_1251.jpg"
              alt="Hình ảnh minh họa"
            />
            <a
              className="font-semibold"
              href="https://baotainguyenmoitruong.vn/1-000-tan-rac-vi-mot-viet-nam-xanh-362891.html"
            >
              1.000 tấn rác vì một Việt Nam xanh
            </a>
          </div>
          <div className="w-[330px] 2xl:w-[450px] 3xl:w-[550px]">
            <img
              className="mb-4 size-[330px] object-cover 2xl:w-[450px] 3xl:w-[550px]"
              src="https://btnmt.1cdn.vn/2023/09/24/img_4165.jpg"
              alt="Hình ảnh minh họa"
            />
            <a
              className="font-semibold"
              href="https://baotainguyenmoitruong.vn/nang-cao-nhan-thuc-trong-bao-ve-moi-truong-thong-qua-du-an-vi-tuong-lai-xanh-363556.html"
            >
              Nâng cao nhận thức trong bảo vệ môi trường thông qua Dự án “Vì
              tương lai xanh”
            </a>
          </div>
          <div className="w-full text-start">
            <a
              href="https://baotainguyenmoitruong.vn/moi-truong"
              className="text-sm"
            >
              Xem thêm &gt;&gt;
            </a>
          </div>
        </div>

        <h1
          id="info"
          className="mb-4 mt-10 text-2xl font-semibold tracking-widest text-[#176B87]"
        >
          Thông tin
        </h1>
        <div className="flex flex-wrap justify-between gap-8">
          <div className="w-[330px] 2xl:w-[450px] 3xl:w-[550px]">
            <img
              className="mb-4 size-[330px] object-cover 2xl:w-[450px] 3xl:w-[550px]"
              src="https://jes.edu.vn/wp-content/uploads/2020/09/Moi-truong-la-gi-1-768x432.png"
              alt="Hình ảnh minh họa"
            />
            <a
              className="font-semibold"
              href="https://jes.edu.vn/moi-truong-la-gi-hieu-dung-ve-khai-niem-moi-truong#:~:text=M%C3%B4i%20tr%C6%B0%E1%BB%9Dng%20l%C3%A0%20g%C3%AC%3F%20%C4%90%C6%B0%E1%BB%A3c%20bi%E1%BA%BFt%20m%C3%B4i%20tr%C6%B0%E1%BB%9Dng,t%E1%BA%A1i%2C%20ph%C3%A1t%20tri%E1%BB%83n%20c%E1%BB%A7a%20con%20ng%C6%B0%E1%BB%9Di%2C%20thi%C3%AAn%20nhi%C3%AAn."
            >
              Môi trường là gì? Hiểu đúng về khái niệm môi trường
            </a>
          </div>
          <div className="w-[330px] 2xl:w-[450px] 3xl:w-[550px]">
            <img
              className="mb-4 size-[330px] object-cover 2xl:w-[450px] 3xl:w-[550px]"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Horsk%C3%A1_Kvilda_St%C5%99edisko_envir._v%C3%BDchovy_03.jpg/1280px-Horsk%C3%A1_Kvilda_St%C5%99edisko_envir._v%C3%BDchovy_03.jpg"
              alt="Hình ảnh minh họa"
            />
            <a
              className="font-semibold"
              href="https://en.wikipedia.org/wiki/Environmental_protection"
            >
              Environmental protection - Wikipedia
            </a>
          </div>
        </div>

        <h1
          id="contact"
          className="mb-4 mt-10 text-2xl font-semibold tracking-widest text-[#176B87]"
        >
          Liên hệ
        </h1>
        <address className="text-sm">
          <FontAwesomeIcon className="mr-4" icon={faEnvelope} />{" "}
          dinhletrunghieu0207@gmail.com
        </address>
        <div
          id="fanpage"
          className="fb-page mt-4 cursor-pointer"
          data-href="https://www.facebook.com/profile.php?id=61555635183825"
          data-tabs="timeline"
          data-width="800"
          data-height="300"
          data-small-header="true"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true"
        >
          <blockquote
            cite="https://www.facebook.com/profile.php?id=61555635183825"
            className="fb-xfbml-parse-ignore"
          >
            <a href="https://www.facebook.com/profile.php?id=61555635183825">
              Young Coders Genz
            </a>
          </blockquote>
        </div>
      </div>
    </div>
  );
}

export default Content;
