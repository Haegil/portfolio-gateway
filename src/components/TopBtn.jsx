import topBtn from '../assets/images/icons/topBtn.svg';

export default function TopBtn() {
  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  return (
    <nav
      className={"fixed right-4 bottom-4 border-2 border-gray-700 rounded-lg hover:scale-110 duration-75 ease-in bg-gray-50"}
      onClick={scrollToTop}>
      <img src={topBtn} alt="topBtn" width={32}/>
    </nav>
  )
};