"use client";

import { motion } from "framer-motion";
import Illustration from "@/demo/illustration";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export default function AnimatedPage() {
  return (
    <>
      <Illustration />
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <main>
          <div className="px-4 sm:px-6">
            <div className="mx-auto w-full max-w-3xl">
              <motion.div
                className="mb-4"
                variants={itemVariants}
                transition={{ delay: 0.1 }}
              >
                <p className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-background px-3 py-1 text-sm font-medium text-foreground shadow-sm shadow-black/[.12] dark:bg-accent mt-16">
                  <span className="mr-2 flex shrink-0 border-r border-border pr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      fill="none"
                    >
                      <path
                        className="fill-zinc-500"
                        d="M6.958.713a1 1 0 0 0-1.916 0l-.999 3.33-3.33 1a1 1 0 0 0 0 1.915l3.33.999 1 3.33a1 1 0 0 0 1.915 0l.999-3.33 3.33-1a1 1 0 0 0 0-1.915l-3.33-.999-1-3.33Z"
                      />
                    </svg>
                  </span>
                  ReactRizz Docs
                </p>
              </motion.div>

              <motion.div
                className="mb-16"
                variants={itemVariants}
                transition={{ delay: 0.2 }}
              >
                <h1 className="mx-auto mb-4 max-w-3xl text-4xl/[1.1] font-extrabold tracking-tight text-foreground md:text-5xl/[1.1]">
                Effortlessly build stunning documentation sites with Next.js and
                  Framer Motion.
                </h1>
                <p className="text-lg text-muted-foreground">
                This feature-packed documentation template, built with Next.js, offers a sleek and responsive design, perfect for all your project documentation needs.
                </p>
              </motion.div>

              <motion.div
                className="mb-12"
                variants={itemVariants}
                transition={{ delay: 0.3 }}
              >
                <h2 className="mb-5 text-muted-foreground">Getting Started</h2>
                <nav>
                  <motion.ul
                    className="flex flex-col gap-2"
                    variants={itemVariants}
                    transition={{ delay: 0.4 }}
                  >
                    <motion.li variants={itemVariants}>
                      <Link
                        href="docs/getting-started/introduction"
                        className="inline-flex w-full items-center justify-between whitespace-nowrap rounded-lg border border-border bg-background p-4 font-bold shadow-sm shadow-black/5 ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 sm:h-14"
                      >
                        <span className="truncate">Introduction</span>
                        <ArrowRight
                          size={16}
                          strokeWidth={2}
                          className="-mr-1 ml-2 shrink-0 opacity-60"
                        />
                      </Link>
                    </motion.li>
                    <motion.li variants={itemVariants}>
                      <Link
                        href="docs/getting-started/installation"
                        className="inline-flex w-full items-center justify-between whitespace-nowrap rounded-lg border border-border bg-background p-4 font-bold shadow-sm shadow-black/5 ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 sm:h-14"
                      >
                        <span className="truncate">Installation</span>
                        <ArrowRight
                          size={16}
                          strokeWidth={2}
                          className="-mr-1 ml-2 shrink-0 opacity-60"
                        />
                      </Link>
                    </motion.li>
                    {/* Add animation to other list items */}
                  </motion.ul>
                </nav>
              </motion.div>


              <motion.div
                className="mb-12"
                variants={itemVariants}
                transition={{ delay: 0.3 }}
              >
                <h2 className="mb-5 text-muted-foreground">Components</h2>
                <nav>
                  <motion.ul
                    className="flex flex-col gap-2"
                    variants={itemVariants}
                    transition={{ delay: 0.4 }}
                  >
                    <motion.li variants={itemVariants}>
                      <Link
                        href="/docs/getting-started/model/signin"
                        className="inline-flex w-full items-center justify-between whitespace-nowrap rounded-lg border border-border bg-background p-4 font-bold shadow-sm shadow-black/5 ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 sm:h-14"
                      >
                        <span className="truncate">SignIn</span>
                        <ArrowRight
                          size={16}
                          strokeWidth={2}
                          className="-mr-1 ml-2 shrink-0 opacity-60"
                        />
                      </Link>
                    </motion.li>
                    <motion.li variants={itemVariants}>
                      <Link
                        href="/docs/getting-started/model/logout"
                        className="inline-flex w-full items-center justify-between whitespace-nowrap rounded-lg border border-border bg-background p-4 font-bold shadow-sm shadow-black/5 ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 sm:h-14"
                      >
                        <span className="truncate">Logout</span>
                        <ArrowRight
                          size={16}
                          strokeWidth={2}
                          className="-mr-1 ml-2 shrink-0 opacity-60"
                        />
                      </Link>
                    </motion.li>
                    {/* Add animation to other list items */}
                  </motion.ul>
                </nav>
              </motion.div>

            </div>
          </div>
        </main>
      </motion.div>
    </>
  );
}
