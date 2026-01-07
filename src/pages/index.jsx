import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";
import Header from "@/components/Header";
export default function Home() {
  return (
    <div className="game-container">
      <Header />
      <p className="text-primary text-center p-10 md:px-96 text-base md:text-lg lg:text-xl flex flex-col justify-center items-center">
        QuizQuest is a fast-paced trivia game that tests your knowledge across
        fun and challenging categories. Earn points as you play, but be careful
        every wrong answer costs you one point! Think fast, stay sharp, and see
        how high you can climb!
      </p>
      <Link href="/game" className=" btn btn-primary">
        Start Quiz
      </Link>
    </div>
  );
}
