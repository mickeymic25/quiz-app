import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

export default function Home() {
  return (
    <div className="game-container">
      <Link href="/game" className=" btn btn-primary">
        Start Quiz
      </Link>
    </div>
  );
}
