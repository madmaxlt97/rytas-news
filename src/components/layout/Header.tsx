"use client";

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-black/5 backdrop-blur-md">
      <div className="flex items-center justify-between py-2 px-4">
        <div className="text-xl font-bold tracking-tight text-white">
          Rytas<span className="text-red-600">.News</span>
        </div>
        <div className="flex gap-5">
          <p>Naujienos</p>
          <p>Komanda</p>
          <p>Substack</p>
        </div>
      </div>
    </nav>
  );
}
