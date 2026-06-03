import topBtn from '../assets/images/icons/topBtn.svg';

export default function TopBtn() {
  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  return (
    <nav
      className={"fixed right-4 bottom-4 border border-slate-500 rounded-sm hover:-translate-y-0.5 duration-75 ease-in bg-white shadow-sm"}
      onClick={scrollToTop}>
      <img src={topBtn} alt="topBtn" width={32}/>
    </nav>
  )
};
