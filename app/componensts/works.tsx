import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Works({ work }: any) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {/* Main Project Card */}
      <motion.a
        href={work.link}
        target="_blank"
        whileHover={{ y: -5 }}
        className="md:col-span-3 h-[400px] bg-slate-900 rounded-3xl p-8 text-white flex flex-col justify-end relative overflow-hidden group"
        style={{
          backgroundImage: `url(${work.bg})`,
          backgroundPosition: "center",
        }}
      >
        <div className="absolute top-8 right-8 bg-white/10 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
          <ExternalLink size={20} />
        </div>
        <span className="text-blue-400 font-mono text-sm mb-2 uppercase">
          {work.project}
        </span>
        <h3 className="text-3xl font-bold mb-4">{work.title}</h3>
        <p className="text-slate-400 max-w-md">{work.desc}</p>
      </motion.a>

      {/* Skill Box */}
      <div className="md:col-span-1 bg-blue-600 rounded-3xl p-8 text-white flex flex-col justify-center items-center text-center">
        <h4 className="font-bold text-lg mb-4">Tech Stack</h4>
        <div className="flex flex-wrap justify-center gap-2">
          {work.stacks.map((tag: string) => (
            <span
              key={tag}
              className="bg-white/20 px-3 py-1 rounded-lg text-xs font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* About Box */}
      <div className="md:col-span-2 bg-white border border-slate-200 rounded-3xl p-8">
        <h4 className="font-bold text-xl mb-4 italic">
          "Simplicity is the ultimate sophistication."
        </h4>
        <p className="text-slate-500">
          I believe in writing code that is as beautiful as the UI it powers.
        </p>
      </div>

      {/* Secondary Project */}
      <div className="md:col-span-2 bg-slate-200 rounded-3xl p-8 flex items-end">
        <div>
          <h3 className="text-xl font-bold">VibeCheck App</h3>
          <p className="text-slate-600">
            A social experiment in community building.
          </p>
        </div>
      </div>
    </div>
  );
}
