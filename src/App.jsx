/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-undef */
import Banner from "~/components/banner/Banner";
import Header from "~/components/header/Header";
import Sidebar from "~/components/sidebar/Sidebar";
import Content from "./components/content/Content";
import { Helmet } from "react-helmet";
import SidebarRight from "./components/sidebar_right/SidebarRight";
function App() {
  return (
    <>
      <Helmet>
        <script
          async
          defer
          crossOrigin="anonymous"
          src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v18.0"
          nonce="fyHes9kk"
        />
      </Helmet>
      <div id="fb-root"></div>
      <div className="flex min-h-screen flex-col justify-start overflow-hidden px-20 font-roboto">
        <Header />
        <Banner />
        <div className="mb-8 mt-8 flex">
          <Sidebar />
          <Content />
          <SidebarRight />
        </div>
      </div>
    </>
  );
}

export default App;
