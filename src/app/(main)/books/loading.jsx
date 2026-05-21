export default function BooksLoading() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Header skeleton */}
      <div className="mb-8 space-y-2">
        <div className="h-8 w-48 animate-pulse rounded-lg bg-[#e8e0d4]" />
        <div className="h-4 w-32 animate-pulse rounded-lg bg-[#f0ebe2]" />
      </div>

      {/* Card skeletons */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col overflow-hidden rounded-2xl border border-[#e8e0d4] bg-white"
          >
            <div className="aspect-2/3 w-full animate-pulse bg-[#f0ebe2]" />
            <div className="flex flex-col gap-2 p-3">
              <div className="h-3 w-16 animate-pulse rounded-full bg-[#f0ebe2]" />
              <div className="h-4 w-full animate-pulse rounded-md bg-[#e8e0d4]" />
              <div className="h-4 w-3/4 animate-pulse rounded-md bg-[#e8e0d4]" />
              <div className="h-3 w-1/2 animate-pulse rounded-md bg-[#f0ebe2]" />
              <div className="h-3 w-20 animate-pulse rounded-full bg-[#f0ebe2]" />
              <div className="mt-2 h-7 w-full animate-pulse rounded-xl bg-[#e8e0d4]" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
