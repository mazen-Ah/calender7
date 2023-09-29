import Link from "next/link";

export default function Home() {
  return (
    <main className="lg:px-16 lg:py-4 flex items-center justify-center text-center">
      <Link
        className="p-10 bg-[#4F45E4] text-white font-semibold rounded-lg"
        href={"/calender"}
      >
        Calender
      </Link>
      <div className="bg-slate-500 text-cyan-500 font-bold">ssss</div>
    </main>
  );
}
