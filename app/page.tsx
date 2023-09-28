import Link from "next/link";

export default function Home() {
  return (
    <main className="lg:px-16 lg:py-4 flex items-center justify-center text-center">
      <Link className="p-10 bg-slate-500 " href={"/calender"}>
        Calender
      </Link>
    </main>
  );
}
