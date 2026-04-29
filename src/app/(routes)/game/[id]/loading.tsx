export default function GameDetailLoading() {
  return (
    <div className="container py-6">
      {/* 1. Game Header Skeleton */}
      <div className="mb-6 flex flex-col items-center justify-between gap-6 rounded-[32px] border-4 border-white bg-white/40 p-6 shadow-xl backdrop-blur-md md:flex-row md:px-8">
        <div className="flex flex-col items-center gap-4 md:flex-row">
          <div className="skeleton h-20 w-20 rounded-2xl md:h-16 md:w-16" />
          <div className="flex flex-col items-center gap-2 md:items-start">
            <div className="skeleton h-8 w-48 rounded-lg" />
            <div className="skeleton h-4 w-24 rounded-md" />
          </div>
        </div>
        <div className="flex gap-3">
          <div className="skeleton h-12 w-32 rounded-xl" />
          <div className="skeleton h-12 w-12 rounded-xl" />
          <div className="skeleton h-12 w-12 rounded-xl" />
        </div>
      </div>

      {/* 2. Game Player Skeleton */}
      <div className="relative mb-10 aspect-video w-full overflow-hidden rounded-[40px] border-8 border-white bg-white/40 shadow-2xl backdrop-blur-md">
        <div className="skeleton h-full w-full" />
      </div>

      {/* 3. Stats Grid Skeleton */}
      <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="skeleton h-24 w-full rounded-[24px] border-4 border-white shadow-lg"
          />
        ))}
      </div>

      {/* 4. About Section Skeleton */}
      <div className="grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="skeleton mb-6 h-10 w-64 rounded-xl" />
          <div className="space-y-4">
            <div className="skeleton h-4 w-full rounded-md" />
            <div className="skeleton h-4 w-11/12 rounded-md" />
            <div className="skeleton h-4 w-10/12 rounded-md" />
            <div className="skeleton mt-8 h-4 w-1/2 rounded-md" />
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="skeleton aspect-square w-full max-w-[300px] rounded-[32px] border-8 border-white shadow-xl" />
        </div>
      </div>
    </div>
  );
}
