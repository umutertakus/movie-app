import Header from "../components/Header";
import Search from "../components/Search";
import ListMovie from "../components/ListMovie";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="container">
      <Header />
      <Search />
      <ListMovie />
      <Footer />
    </div>
  );
}

export default Home;
