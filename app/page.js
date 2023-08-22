"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

import styles from "./page.module.css";

import Quote from "./quote";

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className={styles.main}>
        <Quote />
      </main>
    </QueryClientProvider>
  );
}
