import Image from "next/image";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 text-center">
      <span>
        <Image
          src="/KW_Logo.webp"
          alt="Description"
          width={100}
          height={80}
          quality={80}
          style={{ margin: "auto", marginBottom: "20px" }}
        />
        WE ARE KINGSWELL! <br />
        COMING SOON!
      </span>
      <br />
      <a
        className="bg-amber-400 p-8 hover:bg-amber-700 hover:text-white"
        href="https://bio.site/kingswell"
      >
        Stay Updated
      </a>
    </div>
  );
}
