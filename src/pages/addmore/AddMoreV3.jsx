// src/components/AddMoreV3.jsx
import React, { useEffect, useRef } from "react";
import { FaLightbulb, FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import porporImg from "../../assets/images/porpor.png";
import vanvanImg from "../../assets/images/vanvan.jpg";

// ⚡ Canvas lightning border
const CanvasLightningBorder = React.memo(() => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let w = (canvas.width = canvas.offsetWidth);
    let h = (canvas.height = canvas.offsetHeight);
    const colors = ["#00ffff", "#a855f7", "#ffffff", "#60a5fa"];
    const inset = 3;
    let t = 0;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.lineWidth = 2;
      ctx.shadowBlur = 20;
      t += 0.03;

      const drawEdge = (sx, sy, ex, ey, horizontal = true, phase = 0) => {
        ctx.beginPath();
        const segments = 60;
        for (let i = 0; i <= segments; i++) {
          const f = i / segments;
          const c = colors[Math.floor(Math.random() * colors.length)];
          ctx.strokeStyle = c;
          ctx.shadowColor = c;

          let x = horizontal ? sx + (ex - sx) * f : sx;
          let y = horizontal ? sy : sy + (ey - sy) * f;
          const amp = 2 + Math.random() * 2;
          const wave =
            Math.sin(f * 12 + t * 4 + phase) * amp + (Math.random() - 0.5) * 2;

          if (horizontal) y += wave;
          else x += wave;

          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      };

      // animate edges clockwise
      drawEdge(inset, inset, w - inset, inset, true, t);
      drawEdge(w - inset, inset, w - inset, h - inset, false, t + 1);
      drawEdge(w - inset, h - inset, inset, h - inset, true, t + 2);
      drawEdge(inset, h - inset, inset, inset, false, t + 3);

      requestAnimationFrame(draw);
    };
    draw();

    const handleResize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-[40]"
    />
  );
});

// ⚡ Main AddMoreV3
const AddMoreV3 = () => {
  const theme = useSelector((state) => state.theme?.mode || "light");
  const headerTextColor = theme === "dark" ? "text-gray-100" : "text-gray-900";
  const descriptionTextColor =
    theme === "dark" ? "text-gray-400" : "text-gray-600";

  return (
    <section className="relative py-20 overflow-hidden text-center">
      <div className="max-w-3xl mx-auto mb-14" data-aos="fade-down">
        <button
          className="px-5 py-2 mb-3 text-sm font-medium text-blue-800 transition transform bg-blue-100 rounded-full hover:bg-blue-200 hover:scale-105"
          data-aos="zoom-in"
        >
          👥 Meet the Founders
        </button>
        <h2
          className={`mb-4 text-3xl font-bold md:text-4xl ${headerTextColor}`}
          data-aos="fade-up"
        >
          Built by Two Friends with a Vision
        </h2>
        <p
          className={`leading-relaxed ${descriptionTextColor}`}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          StyleHub started as a simple idea over coffee between two friends who
          shared a passion for fashion and technology. What began as late-night
          coding sessions and endless design iterations has grown into a
          platform we’re incredibly proud of.
        </p>
      </div>

      {/* ⚡ Lightning Cards */}
      <div className="flex flex-col items-center justify-center gap-10 px-6 md:flex-row md:px-10">
        {[
          {
            img: porporImg,
            icon: <FaLightbulb className="text-lg text-blue-500" />,
            badge: "Co-Founder & Developer",
            title: "The Tech Visionary",
            desc: "Passionate about creating seamless user experiences and building scalable platforms. Brings the technical expertise that powers StyleHub’s innovative features.",
            aos: "flip-left",
          },
          {
            img: vanvanImg,
            icon: <FaHeart className="text-lg text-pink-500" />,
            badge: "Co-Founder & Designer",
            title: "The Creative Mind",
            desc: "With an eye for design and a passion for fashion, brings the aesthetic vision and curated collections that make StyleHub a destination for style enthusiasts.",
            aos: "flip-right",
          },
        ].map((card, idx) => (
          <div
            key={idx}
            className="relative w-full max-w-sm h-[460px] group cursor-pointer rounded-2xl overflow-hidden shadow-xl"
            data-aos={card.aos}
          >
            <CanvasLightningBorder />

            {/* Image */}
            <div
              className="absolute inset-0 z-10 transition-transform duration-700 bg-center bg-cover group-hover:scale-110"
              style={{ backgroundImage: `url(${card.img})` }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 z-20 transition-all duration-500 bg-gradient-to-t from-black/50 to-transparent group-hover:from-black/60" />

            {/* 💡 Icon Glow */}
            <div className="absolute z-30 p-2 rounded-full shadow top-4 right-4 bg-white/70 backdrop-blur-sm transition-all duration-500 group-hover:shadow-[0_0_20px_8px_rgba(255,255,255,0.8)] group-hover:scale-110">
              {card.icon}
            </div>

            {/* Bottom Info */}
            <div className="absolute bottom-0 z-30 w-full p-6 text-left text-white bg-gradient-to-t from-black/60 to-transparent">
              <span className="relative inline-block px-3 py-1 overflow-hidden text-xs font-semibold text-blue-600 uppercase rounded-full bg-white/80">
                {/* ⚡ Animated lightning border on hover */}
                <span className="absolute inset-0 border-2 border-transparent rounded-full group-hover:border-blue-400 animate-lightningGlow"></span>
                {card.badge}
              </span>
              <h3 className="mt-3 text-xl font-bold">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-200">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 👇 Team Message */}
      <section
        className="flex items-center justify-center py-20"
        data-aos="fade-up"
      >
        <div
          className={`max-w-4xl p-10 text-center border shadow-xl rounded-2xl backdrop-blur-md ${
            theme === "dark"
              ? "bg-gray-900 border-gray-700 text-gray-200"
              : "bg-white/90 border-gray-200 text-gray-800"
          }`}
        >
          <p className="mb-6 text-lg italic md:text-xl" data-aos="zoom-in-up">
            "We started <span className="font-semibold">StyleHub</span> because
            we believed online shopping could be more personal, more curated,
            and more enjoyable. Every day, we work to make that vision a
            reality. Thank you for being part of our journey."
          </p>
          <div
            className="flex items-center justify-center gap-2 font-semibold"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <span className="text-xl text-red-500">❤️</span> The StyleHub Team
          </div>
        </div>
      </section>

      {/* 🌟 Lightning Animation Keyframes */}
      <style>
        {`
          @keyframes lightningGlow {
            0%, 100% { box-shadow: 0 0 10px #00ffff, 0 0 20px #a855f7, 0 0 30px #ffffff; }
            50% { box-shadow: 0 0 15px #60a5fa, 0 0 30px #00ffff, 0 0 40px #a855f7; }
          }
          .animate-lightningGlow {
            animation: lightningGlow 1.2s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default AddMoreV3;
