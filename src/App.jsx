import Banner from "~/components/banner/Banner";
import Header from "~/components/header/Header";

function App() {
  return (
    <>
      <div className="flex min-h-screen flex-col justify-start overflow-hidden px-20 font-roboto">
        <Header />
        <Banner />
      </div>
    </>
  );
}

export default App;
