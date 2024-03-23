import backgroundVideo from "../assets/media/Elden-Ring-wallpaper.mp4";
import Header from "../components/Header";
import GithubLogo from "../assets/media/github-mark.png";
import linkedinLogo from "../assets/media/linkedin-logo.png";

export default function HomePage() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-transparent flex flex-col gap-16">
        <Header />
        <div className="w-full h-full flex md:flex-row flex-col items-center justify-between px-10 py-5">
            <div className="flex flex-col gap-5">
                <div className="p-5 text-center flex flex-col text-slate-950 gap-4 bg-gray-50 bg-opacity-25 backdrop-blur-sm rounded-md shadow-sm shadow-slate-600">
                    <h2 className="text-4xl font-bold font-serif">Mythic Games</h2>
                    <p className="text-lg font-mono">
                        It’s not a commercial project. You can’t buy any games here <br /> and
                        all of the prices are generated to imitate a real game shop. <br /> Enjoy 😊 !
                    </p>
                </div>
                <div className="flex justify-evenly items-center p-2 text-slate-950 gap-4 bg-gray-50 bg-opacity-25 backdrop-blur-sm rounded-md shadow-sm shadow-slate-600">
                    <a href="https://github.com/MohamedAbdel-Azeem" target="_blank" className="px-2 py-1 bg-slate-100 rounded-full flex justify-center items-center gap-3 hover:bg-slate-200">
                        <img src={GithubLogo} alt="Github Logo" className="w-10 h-10 hover:animate-spin" />
                        <span className="md:block hidden">MohamedAbdel-Azeem</span>
                    </a>
                    <a href="https://www.linkedin.com/in/mohamed-abdelazeem-098086244/" target="_blank" className="px-2 py-1 bg-slate-100 rounded-full flex justify-center items-center gap-3 hover:bg-slate-200">
                        <img src={linkedinLogo} alt="linkedin logo" className="w-10 h-10 hover:animate-spin rounded-full" />
                        <span className="md:block hidden">Mohamed Abdelazeem</span>
                    </a>
                </div>
            </div>
            <div className="w-10 h-10 bg-green-400"></div>
        </div>
      </div>
    </div>
  );
}
