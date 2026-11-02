import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | 关于我",
  description: "我的自我介绍",
};

export default function Blog() {
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col gap-10 py-32 px-16 bg-white dark:bg-black">
        <header className="flex flex-col gap-3">
          <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
            你好，我是 Duan 👋
          </h1>
          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            一名热爱编程的开发者，喜欢用技术把想法变成现实。
          </p>
        </header>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-black dark:text-zinc-50">
            关于我
          </h2>
          <p className="leading-8 text-zinc-600 dark:text-zinc-400">
            我目前专注于 Web 开发，常用的技术栈包括 TypeScript、React、Next.js
            和 Node.js。我对构建简洁、高效的产品体验充满热情，平时也喜欢研究新的工具和框架。
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-black dark:text-zinc-50">
            技能
          </h2>
          <ul className="flex flex-wrap gap-2">
            {["TypeScript", "React", "Next.js", "Tailwind CSS", "Node.js"].map(
              (skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-black/[.08] px-4 py-1.5 text-sm font-medium text-zinc-700 dark:border-white/[.145] dark:text-zinc-300"
                >
                  {skill}
                </li>
              ),
            )}
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-black dark:text-zinc-50">
            联系我
          </h2>
          <p className="leading-8 text-zinc-600 dark:text-zinc-400">
            欢迎通过{" "}
            <a
              href="mailto:your-email@example.com"
              className="font-medium text-zinc-950 underline underline-offset-4 dark:text-zinc-50"
            >
              邮箱
            </a>{" "}
            或{" "}
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-zinc-950 underline underline-offset-4 dark:text-zinc-50"
            >
              GitHub
            </a>{" "}
            与我交流。
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-black dark:text-zinc-50">
            文章
          </h2>
          <div className="flex flex-col gap-4">
            <article className="flex flex-col gap-2 rounded-xl border border-black/[.08] p-6 transition-colors hover:bg-black/[.02] dark:border-white/[.145] dark:hover:bg-white/[.04]">
              <time className="text-sm text-zinc-500 dark:text-zinc-400">
                2026-11-01
              </time>
              <h3 className="text-lg font-medium text-black dark:text-zinc-50">
                我为什么选择 Next.js
              </h3>
              <p className="leading-7 text-zinc-600 dark:text-zinc-400">
                从 React 到 Next.js，我经历了从“只会写组件”到“能构建完整应用”的转变。App
                Router、服务端渲染和文件路由让开发体验变得前所未有的顺畅，这篇文章记录了我的学习路径和踩过的坑。
              </p>
            </article>
            <article className="flex flex-col gap-2 rounded-xl border border-black/[.08] p-6 transition-colors hover:bg-black/[.02] dark:border-white/[.145] dark:hover:bg-white/[.04]">
              <time className="text-sm text-zinc-500 dark:text-zinc-400">
                2026-10-25
              </time>
              <h3 className="text-lg font-medium text-black dark:text-zinc-50">
                Tailwind CSS 使用心得
              </h3>
              <p className="leading-7 text-zinc-600 dark:text-zinc-400">
                最初我对“原子化 CSS”是抗拒的，觉得类名太长难以维护。但真正上手后发现，它让我告别了命名烦恼，样式和结构放在一起反而更好维护了。分享几个我在实际项目中常用的技巧。
              </p>
            </article>
          </div>
        </section>

        <Link
          href="/"
          className="flex h-12 w-fit items-center justify-center rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
        >
          返回首页
        </Link>
      </main>
    </div>
  );
}
