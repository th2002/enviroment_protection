import Banner from "~/components/banner/Banner";
import Header from "~/components/header/Header";
import Sidebar from "~/components/sidebar/Sidebar";

function App() {
  return (
    <>
      <div className="flex min-h-screen flex-col justify-start overflow-hidden px-20 font-roboto">
        <Header />
        <Banner />
        <div className="mb-8 mt-8 flex">
          <Sidebar />
        </div>
      </div>
    </>
  );
}

export default App;
