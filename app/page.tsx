import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  const [isProject, setisProject] = useState(false);

  const refs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  useEffect(() => {
    const moveRandomly = (el: any) => {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      const duration = Math.random() * 2 + 6; // 6s – 14s
      const scale = Math.random() * 1.4 + 0.5; // scale 0.5 → 1.9

      el.style.transition = `transform ${duration}s cubic-bezier(0.4,0,0.2,1)`;
      el.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
    };

    const intervals = refs.map((ref) => {
      const el = ref.current;
      if (!el) return null;
      moveRandomly(el);
      return setInterval(() => moveRandomly(el), 7000); // every 7s
    });

    return () => intervals.forEach((i) => i && clearInterval(i));
  }, []);

  return (
    <div className="fixed right-0 top-0 left-0 bottom-0 bg-[#0F111A]">
      <div
        className="absolute w-10 h-10 rounded-full shadow-[inset_0_0_12px_rgba(125,183,102,0.05)]"
        ref={refs[0]}
      />
      <div
        className="absolute w-16 h-16 rounded-full shadow-[inset_0_0_18px_rgba(99,102,241,0.1)]"
        ref={refs[1]}
      />
      <div
        className="absolute w-20 h-20 rounded-full shadow-[inset_0_0_18px_rgba(125,183,102,0.04)]"
        ref={refs[2]}
      />
      <div
        className="absolute w-16 h-16 rounded-full shadow-[inset_0_0_18px_rgba(99,102,241,0.2)]"
        ref={refs[3]}
      />
      <div
        className="absolute w-20 h-20 rounded-full shadow-[inset_0_0_18px_rgba(99,102,241,0.2)]"
        ref={refs[4]}
      />
      <div
        className="absolute w-10 h-10 rounded-full shadow-[inset_0_0_12px_rgba(125,183,102,0.1)]"
        ref={refs[5]}
      />
      <div
        className="absolute w-16 h-16 rounded-full shadow-[inset_0_0_18px_rgba(99,102,241,0.15)]"
        ref={refs[6]}
      />
      <div
        className="absolute w-20 h-20 rounded-full shadow-[inset_0_0_18px_rgba(125,183,102,0.12)]"
        ref={refs[7]}
      />
      <div
        className="absolute w-16 h-16 rounded-full shadow-[inset_0_0_18px_rgba(99,102,241,0.12)]"
        ref={refs[8]}
      />
      <div
        className="absolute w-20 h-20 rounded-full shadow-[inset_0_0_18px_rgba(99,102,241,0.12)]"
        ref={refs[9]}
      />
      <div className="m-[5%_12%] font-mono">
        <div className="font-bold text-xl text-[#EC4899]">Jaseel.Dev</div>
        <br /> <br />
        <div className="flex gap-10">
          <div className="w-[50%] text-sm/sm">
            <div className="text-[#FACC15] ">
              <span className="text-[#60A5FA]">const</span>{" "}
              <span className="text-[#F472B6]">about_me</span> = "I’m a
              Full-Stack Developer with 6+ years of experience building web,
              mobile, and Web3 applications. I have hands-on experience with
              React, Next.js, Node/NestJS, and blockchain integrations using
              Ethers.js and Web3.js across EVM networks. I’ve worked on dApps,
              wallet integrations, and scalable backend APIs, and I enjoy owning
              features end-to-end from frontend UX to backend logic and
              smart-contract interactions. I’m particularly interested in roles
              where I can contribute to real-world Web3 products while
              continuing to grow in blockchain and decentralized technologies."
              <span className="text-white">;</span>
            </div>
            <br />
            <div className="text-[#10B981]">{`{/* 🛠️ TOOLS I USE */}`}</div>
            <br />
            <div className="text-[#10B981]">
              {`{/* ReactJs, NextJs, NodeJS, ExpressJs, NestJs */}`}
            </div>
            <br />
            <div className="text-[#10B981]">
              {`{/* Git, GitHub, CI/CD, AWS */}`}
            </div>
            <br />
            <span className="text-[#F472B6]">return</span>{" "}
            <span className="text-white">;</span>
          </div>
          <div className="w-[50%] border border-[#666] rounded px-6 py-4 flex flex-col">
            <div className="text-[#9CA3AF] flex justify-between">
              Output
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
            </div>
            <br />
            <div>muhammedjaseel@Jaseels-MacBook-Air ~ %</div>
            <br /> <br />
            <div className="text-4xl font-bold text-center">
              Muhammed Jaseel.💖
            </div>
            <div className="font-bold text-center">👔 Full stack Developer</div>
            <br />
            <div className="flex gap-2 justify-center text-sm">
              <a href="mailto:jaseelmanamulli@gmail.com">
                <div className="border border-dashed p-2 w-40 text-center cursor-pointer">
                  💌 Contact Me
                </div>
              </a>

              <div
                className="border border-dashed p-2 w-40 text-center cursor-pointer"
                onClick={() => setisProject(true)}
              >
                🗂️ View Projects
              </div>
            </div>
            <div className="flex gap-2 justify-center text-sm"></div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full p-[2%_12%] flex justify-between">
        <p className="text-slate-400 text-sm">
          © 2026 Muhammed Jaseel. Built with Love and Coffee.
        </p>
        <div className="flex gap-6">
          <a href="https://github.com/MuhammedJaseel" target="_blank">
            <Github className="text-slate-400 hover:text-slate-900 cursor-pointer transition-colors" />
          </a>
          <a href="https://www.linkedin.com/in/jaseel-muhammed-7609251b3/">
            <Linkedin className="text-slate-400 hover:text-slate-900 cursor-pointer transition-colors" />
          </a>
          <a href="mailto:jaseelmanamulli@gmail.com">
            <Mail className="text-slate-400 hover:text-slate-900 cursor-pointer transition-colors" />
          </a>
        </div>
      </div>
      {isProject && (
        <div
          className="fixed left-0 right-0 bottom-0 top-0 bg-[#ffffff11] flex justify-center items-center"
          onClick={() => setisProject(false)}
        >
          <div
            className="w-[50%] border border-[#666] rounded px-6 py-4 flex flex-col bg-[#0F111A] h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-[#9CA3AF] flex justify-between">
              Output
              <div className="flex gap-2">
                <div
                  className="w-3 h-3 rounded-full bg-red-500 cursor-pointer"
                  onClick={() => setisProject(false)}
                />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
            </div>
            <br />
            <div>root@srv1281222:/opt/ano# vi projects.env</div>

            <br />
            <div className="text-[#32F4F1] font-bold">
              # A static web site developer in core html css
            </div>
            <div className="text-[#32F4F1]"># html, Js, tailwint</div>
            <div>
              URL
              <span className="text-[#EBEF18]"> = "</span>
              <a href="https://anolabs.site">
                <span className="text-[#F472B6]">https://anolabs.site</span>
              </a>
              <span className="text-[#10B981]">" </span>
            </div>

            <br />
            <div className="text-[#32F4F1] font-bold">
              # A blockchain website in NextJs, with dome live response
            </div>
            <div className="text-[#32F4F1]">
              # next.js express.js, tailwint, websocket, rest-api
            </div>
            <div>
              URL
              <span className="text-[#EBEF18]"> = "</span>
              <a href="https://m.anolabs.site">
                <span className="text-[#F472B6]">https://m.anolabs.site</span>
              </a>
              <span className="text-[#10B981]">" </span>
            </div>

            <br />
            <div className="text-[#32F4F1] font-bold">
              # Block explorer URL for a EVM chain
            </div>
            <div className="text-[#32F4F1]">
              # vite+react nest.js, tailwint, websocket, rest-api
            </div>
            <div>
              URL
              <span className="text-[#EBEF18]"> = "</span>
              <a href="https://scanm.anolabs.site">
                <span className="text-[#F472B6]">
                  https://scanm.anolabs.site
                </span>
              </a>
              <span className="text-[#10B981]">" </span>
            </div>

            <br />
            <div className="text-[#32F4F1] font-bold">
              # DApp developer in vite+react
            </div>
            <div className="text-[#32F4F1]">
              # vite+react nest.js, tailwint, websocket, rest-api, metamask
            </div>
            <div>
              URL
              <span className="text-[#EBEF18]"> = "</span>
              <a href="https://dapp.anolabs.site">
                <span className="text-[#F472B6]">
                  https://dapp.anolabs.site
                </span>
              </a>
              <span className="text-[#10B981]">" </span>
            </div>

            <div>
              <div className="text-[#F472B6]">
                ~<br /> ~<br />~<br />~<br />~<br />~<br />~<br />~<br />~<br />
              </div>
              "projects.env" 15L, 390B
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
