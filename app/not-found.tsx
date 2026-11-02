import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col items-center gap-6 py-32 px-16 text-center">
        <h1 className="text-6xl font-semibold tracking-tight text-black dark:text-zinc-50">
          404
        </h1>
        <h2 className="text-2xl font-medium text-black dark:text-zinc-50">
          页面不存在
        </h2>
        <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          你访问的页面不存在或已被移动。
        </p>
        <Link
          href="/"
          className="flex h-12 items-center justify-center rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
        >
          返回首页
        </Link>
      </main>
    </div>
  );
}
