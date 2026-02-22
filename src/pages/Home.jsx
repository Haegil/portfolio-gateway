import Header from "../components/Header.jsx";
import Main from "../components/Main.jsx";
import Footer from "../components/Footer.jsx";
import TopBtn from "../components/TopBtn.jsx";

export default function Home() {
  return (
    <div className={"w-full bg-slate-50"}>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
      <TopBtn></TopBtn>
    </div>
  )
}