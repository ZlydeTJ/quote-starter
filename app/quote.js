"use client";

import { useQuery } from "@tanstack/react-query";
import styles from "./page.module.css";

export default function Quote() {
  const { isLoading, error, data, refetch, isFetched, isFetching } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("http://localhost:3000/quote").then((res) => res.json()),
    enabled: false,
  });
  console.log({ isLoading, isFetched, isFetching });

  const quote = data?.quote;

  return (
    <div>
      {isLoading && isFetching && "Loading ..."}
      {error && "An error has occurred: " + error.message}
      {quote && (
        <div>
          <div className={styles.quote}>&quot;{quote.quote}&quot;</div>
          <div>{quote.author}</div>
        </div>
      )}
      <button type="button" onClick={refetch}>
        Get Quote
      </button>
    </div>
  );
}
