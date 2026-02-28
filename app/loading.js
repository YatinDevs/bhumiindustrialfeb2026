// app/loading.js
export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="animate-pulse space-y-8 w-full max-w-4xl px-4">
        {/* Navbar skeleton */}
        <div className="h-16 bg-gray-200 rounded-lg w-full"></div>

        {/* Hero skeleton */}
        <div className="h-[600px] lg:h-[700px] bg-gray-200 rounded-xl w-full"></div>

        {/* Content skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="h-48 bg-gray-200 rounded-lg"></div>
          <div className="h-48 bg-gray-200 rounded-lg"></div>
          <div className="h-48 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}
