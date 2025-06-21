import Image from "next/image";
import { Mail, Twitter, Instagram } from "lucide-react";

const randomStatements = [
  "Good corporate gifts are coming your way!",
  "We are cooking some fresh gifts for you!",
  "Asking Santa to mentor us for picking gifts.",
  "/imagine an ideal corporate gifting experience.",
  "Hold on tight. We are almost done picking gift options.",
  "Just click the button below. We'll ping when the gifts are on the racks.",
  "Good gifts come to those who wait.",
];

function getRandomStatement() {
  const randomIndex = Math.floor(Math.random() * randomStatements.length);
  return randomStatements[randomIndex];
}

export default function Home() {
  const randomStatement = getRandomStatement();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 sm:p-20 text-center gap-8">
      <span className="text-4xl">
        <Image
          src="/KW_Logo.webp"
          alt="Description"
          width={200}
          height={160}
          quality={100}
          style={{ margin: "auto", marginBottom: "20px" }}
        />
        <p className="texxt-2xl font-semibold mt-10">COMING SOON!</p>
        <p className="text-lg font-light">{randomStatement}</p>
      </span>

      <a
        className="relative w-32 h-32 hover:bg-amber-400 rounded-full flex items-center justify-center transition-colors duration-300 group"
        href="https://form.typeform.com/to/DI3MFjhb"
      >
        {/* Rotating text around the circle */}
        <svg
          className="absolute inset-0 w-full h-full rotate-text"
          viewBox="0 0 128 128"
        >
          <defs>
            <path
              id="circle-path"
              d="M 64 64 m -48 0 a 48 48 0 1 1 96 0 a 48 48 0 1 1 -96 0"
              fill="none"
            />
          </defs>
          <text className="text-xs font-semibold fill-current transition-colors duration-300">
            <textPath href="#circle-path" startOffset="0%">
              NOTIFY ME • NOTIFY ME • NOTIFY ME • NOTIFY ME •
            </textPath>
          </text>
        </svg>

        {/* Center mail icon */}
        <Mail className="w-8 h-8 text-black transition-colors duration-300" />
      </a>

      {/* Social Media Section */}
      <div className="flex items-center gap-8 mt-8">
        <a
          href="https://twitter.com/kingswellindia"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-2 text-gray-600 hover:text-amber-400 transition-colors duration-300"
        >
          <Twitter className="w-6 h-6" />
        </a>

        <a
          href="https://instagram.com/kingswellindia"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-2 text-gray-600 hover:text-amber-400 transition-colors duration-300"
        >
          <Instagram className="w-6 h-6" />
        </a>

        <a
          href="mailto:kingswellgifting@outlook.com?subject=Pre-Release%20Enquiry%20-%20Kingswell%3F"
          className="flex flex-col items-center gap-2 text-gray-600 hover:text-amber-400 transition-colors duration-300"
        >
          <Mail className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}
