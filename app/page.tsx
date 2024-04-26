function Home() 
{
  return (
    <div className="block">      
      <div className="min-h-screen flex flex-col justify-center brah">
    <nav className="fixed top-0 z-10 sm:z-[1] h-14 w-full flex justify-between transition duration-500 ease-in-out" :className="{'max-[640px]:h-full': open, 'bg-nav': open }" x-data="{ open: false }">
      <div className="w-12 h-12 bg-[url('./logo2.png')] bg-no-repeat bg-contain ml-4 mt-1"></div>
      <ul className="flex sm:flex-row-reverse max-[640px]:flex-col justify-center items-center transition duration-500 ease-in-out" :className="{'max-[640px]:hidden': !open }">
        <li>
          <h1 className="text-color-two max-[640px]:mx-auto sm:mr-8 text-center max-[330px]:text-4xl max-[640px]:text-6xl font-bold max-[640px]:mb-20 transition duration-500" :className="{'nav-ani': open }">>About</h1>
        </li>
        <li className="text-color-two sm:mr-8 transition duration-500" :className="{'nav-ani': open }">Social: TW GH LI</li>
        <li className="text-color-two sm:mr-8 transition duration-500" :className="{'nav-ani': open }">Available For Exigent +62 85156207150</li>
      </ul>
      <button className="w-14 h-14 focus:outline-none rounded sm:hidden" @click="open = !open">
        <div className="block w-5">
          <span className="block absolute h-0.5 w-7 bg-color-one transform transition duration-500 ease-in-out" :className="{'rotate-45': open, '-translate-y-1.5': !open }"></span>
          <span className="block absolute  h-0.5 w-5 bg-color-one transform transition duration-500 ease-in-out" :className="{'opacity-0': open } "></span>
          <span className="block absolute  h-0.5 w-7 bg-color-one transform transition duration-500 ease-in-out" :className="{'-rotate-45': open, 'translate-y-1.5': !open}"></span>
        </div>
      </button>
    </nav>
    <main>
      <section className="h-screen flex flex-col justify-center items-center state">
        <div className="fixed title mx-auto text-center text-8xl sm:text-9xl font-bold cus-frame max-w-max text-color-one loading-text" id="anime">
          <h1 className="mb-[-0.65rem] text-ani" id="animated">Med</h1>
          <h1 className="text-ani" id="animated">Box</h1>
        </div>
      </section>
      <section className="h-screen flex flex-col justify-center state">
        <img src="./medic1.png" alt="photo" className="w-56 h-56 sm:w-96 sm:h-96 object-contain mx-auto scroll">
        <h1 className="font-bold text-6xl sm:text-8xl ml-auto mr-20 max-[500px]:mr-9 sm:mr-auto -mb-10 sm:-mb-20 text-color-one scroll pos">
          PR.01</h1>
        <b className="ml-10 mr-5 sm:ml-auto sm:mr-auto text-left text-color-three scroll">Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
          Incidunt<br>laudantium cupiditate eaque iste?.</b>
      </section>
      <section className="h-screen flex flex-col justify-center state">
        <img src="./medic1.png" alt="photo" className="w-56 h-56 sm:w-96 sm:h-96 object-contain mx-auto scroll2">
        <h1 className="font-bold text-6xl sm:text-8xl ml-auto mr-20 max-[500px]:mr-9 sm:mr-auto -mb-10 sm:-mb-20 text-color-one scroll2 pos">
          PR.02</h1>
        <b className="ml-10 mr-5 sm:ml-auto sm:mr-auto text-left text-color-three scroll2">Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
          Incidunt<br>laudantium cupiditate eaque iste?.</b>
      </section>
      <section className="h-screen flex flex-col justify-center state">
        <img src="./medic1.png" alt="photo" className="w-56 h-56 sm:w-96 sm:h-96 object-contain mx-auto scroll3">
        <h1 className="font-bold text-6xl sm:text-8xl ml-auto mr-20 max-[500px]:mr-9 sm:mr-auto -mb-10 sm:-mb-20 text-color-one scroll3 pos">
          PR.03</h1>
        <b className="ml-10 mr-5 sm:ml-auto sm:mr-auto text-left text-color-three scroll3">Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
          Incidunt<br>laudantium cupiditate eaque iste?.</b>
      </section>
      <section className="h-screen flex flex-col justify-center state">
        <img src="./medic1.png" alt="photo" className="w-56 h-56 sm:w-96 sm:h-96 object-contain mx-auto scroll4">
        <h1 className="font-bold text-6xl sm:text-8xl ml-auto mr-20 max-[500px]:mr-9 sm:mr-auto -mb-10 sm:-mb-20 text-color-one scroll4 pos">
          PR.04</h1>
        <b className="ml-10 mr-5 sm:ml-auto sm:mr-auto text-left text-color-three scroll4">Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
          Incidunt<br>laudantium cupiditate eaque iste?.</b>
      </section>
      <section className="h-screen flex flex-col justify-center state">
        <img src="./medic1.png" alt="photo" className="w-56 h-56 sm:w-96 sm:h-96 object-contain mx-auto scroll5">
        <h1 className="font-bold text-6xl sm:text-8xl ml-auto mr-20 max-[500px]:mr-9 sm:mr-auto -mb-10 sm:-mb-20 text-color-one scroll5 pos">
          PR.05</h1>
        <b className="ml-10 mr-5 sm:ml-auto sm:mr-auto text-left text-color-three scroll5">Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
          Incidunt<br>laudantium cupiditate eaque iste?.</b>
      </section>
      <section className="h-screen flex flex-col justify-center state">
        <img src="./medic1.png" alt="photo" className="w-56 h-56 sm:w-96 sm:h-96 object-contain mx-auto scroll6">
        <h1 className="font-bold text-6xl sm:text-8xl ml-auto mr-20 max-[500px]:mr-9 sm:mr-auto -mb-10 sm:-mb-20 text-color-one scroll6 pos">
          PR.06</h1>
        <b className="ml-10 mr-5 sm:ml-auto sm:mr-auto text-left text-color-three scroll6">Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
          Incidunt<br>laudantium cupiditate eaque iste?.</b>
      </section>
      <section className="h-screen flex flex-col justify-center state">
        <img src="./medic1.png" alt="photo" className="w-56 h-56 sm:w-96 sm:h-96 object-contain mx-auto scroll7">
        <h1 className="font-bold text-6xl sm:text-8xl ml-auto mr-20 max-[500px]:mr-9 sm:mr-auto -mb-10 sm:-mb-20 text-color-one scroll7 pos">
          PR.07</h1>
        <b className="ml-10 mr-5 sm:ml-auto sm:mr-auto text-left text-color-three scroll7">Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
          Incidunt<br>laudantium cupiditate eaque iste?.</b>
      </section>
    </main>
  </div>
  <script>
    window.onload = () => {
      const animatedElement = document.getElementById("animated");
      const anima = document.getElementById("anime");

      animatedElement.addEventListener("animationend", () => {
        animatedElement.removeAttribute("id");
        anima.removeAttribute("id");
      });

      window.addEventListener("scroll", setScrollVar);
      window.addEventListener("resize", setScrollVar);

      function setScrollVar() {
        const htmlElement = document.body;
        const percentOfScreenHeightScrolled = htmlElement.scrollTop / htmlElement.clientHeight;
        const au = percentOfScreenHeightScrolled * 100;
        console.log("hasil: " + au);
        // console.log(1 - (1 / 100) * Number(Math.min(au, 30)) * 100 / 30);
        // console.log("jika berada di bawah: " + (1 / 100) * (Math.max(au, 25) - 25) * 100 / 75);
        htmlElement.style.setProperty(
          "--scroll",
          au
        );
      }

      setScrollVar()
    }
  </script>
      </div>
    )
}

export default Home
