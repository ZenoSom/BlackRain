export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white">

      {/* ================= BACKGROUND VIDEO ================= */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="
          absolute top-0 left-0
          w-full h-[85vh]
          object-cover
          brightness-110
          contrast-110
        "
      >
        <source src="/drone-background.mp4" type="video/mp4" />
      </video>

      {/* ================= LIGHT OVERLAY ================= */}
      <div className="absolute inset-0 bg-white/10"></div>

      {/* ================= BRAND LOGO (TOP CENTER FIXED) ================= */}
      <div className="absolute left-1/2 -translate-x-1/2 z-20 top-8 sm:top-4">
        <img
          src="/blackrain-logo.png"
          alt="BLACKRAIN"
          className="w-[320px] sm:w-[400px] md:w-[450px] lg:w-[500px] xl:w-[520px]"
        />
      </div>

      {/* ================= CENTER CONTENT ================= */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 pt-[45vh] sm:pt-[55vh] md:pt-[50vh]">

        {/* ================= HEADLINE & SUBTITLE ================= */}
        <div className="flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-4">
          <h1
            className="text-[20px] sm:text-[44px] md:text-[56px] lg:text-[72px] xl:text-[80px] font-semibold tracking-[4px] sm:tracking-[6px] md:tracking-[8px] text-black leading-none"
          >
            COMING SOON
          </h1>
          <span className="text-[13px] sm:text-lg md:text-xl lg:text-2xl text-gray-900 whitespace-normal lg:whitespace-nowrap">
            The Future of Aerial Innovation Is Arriving.
          </span>
        </div>

      </div>

    </div>
  );
}