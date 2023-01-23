import Link from "next/link";
import React from "react";
import {
  FirstCard,
  SecondCard,
  ThirdCard,
  FourthCard,
  FifthCard,
  SixthCard,
  SeventhCard,
  EighthCard,
  NinthCard,
  TenthCard,
  EleventhCard,
  TwelfthCard,
  ThirteenthCard,
  FourteenthCard,
  FifteenthCard,
  SixteenthCard,
  SeventeenthCard,
  EighteenthCard,
} from "@/components/cards";

type GenreicProsp = {
  title: string;
};

const FirstSection: React.FC<GenreicProsp> = (props) => {
  const { title } = props;

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-8">
        <Link
          href="/"
          className="text-2xl font-bold text-white hover:underline"
        >
          {title}
        </Link>
        <Link
          href="/"
          className="text-sm font-bold tracking-[2px] hover:underline"
        >
          MOSTRAR TUDO
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        <FirstCard />
        <SecondCard />
        <ThirdCard />
        <FourthCard />
      </div>
    </div>
  );
};

const SecondSection: React.FC<GenreicProsp> = (props) => {
  const { title } = props;

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-8">
        <Link
          href="/"
          className="text-2xl font-bold text-white hover:underline"
        >
          {title}
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        <FifthCard />
        <SixthCard />
      </div>
    </div>
  );
};

const ThirdSection: React.FC<GenreicProsp> = (props) => {
  const { title } = props;

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-8">
        <Link
          href="/"
          className="text-2xl font-bold text-white hover:underline"
        >
          {title}
        </Link>
        <Link
          href="/"
          className="text-sm font-bold tracking-[2px] hover:underline"
        >
          MOSTRAR TUDO
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        <SeventhCard />
        <EighthCard />
        <NinthCard />
        <TenthCard />
      </div>
    </div>
  );
};

const FourthSection: React.FC<GenreicProsp> = (props) => {
  const { title } = props;

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-8">
        <Link
          href="/"
          className="text-2xl font-bold text-white hover:underline"
        >
          {title}
        </Link>
        <Link
          href="/"
          className="text-sm font-bold tracking-[2px] hover:underline"
        >
          MOSTRAR TUDO
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        <EleventhCard />
        <TwelfthCard />
        <ThirteenthCard />
        <FourteenthCard />
      </div>
    </div>
  );
};

const FifthSection: React.FC<GenreicProsp> = (props) => {
  const { title } = props;

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-8">
        <Link
          href="/"
          className="text-2xl font-bold text-white hover:underline"
        >
          {title}
        </Link>
        <Link
          href="/"
          className="text-sm font-bold tracking-[2px] hover:underline"
        >
          MOSTRAR TUDO
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        <FifteenthCard />
        <SixteenthCard />
        <SeventeenthCard />
        <EighteenthCard />
      </div>
    </div>
  );
};

export {
  FirstSection,
  SecondSection,
  ThirdSection,
  FourthSection,
  FifthSection,
};