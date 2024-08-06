import { BannerImg } from "../assets/images";

export default function Header() {
  return (
    <header className="w-screen -z-10">
      <img src={BannerImg} className="min-w-full h-[18.5rem] object-cover" />
    </header>
  )
}