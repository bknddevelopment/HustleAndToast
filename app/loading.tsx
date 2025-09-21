export default function Loading() {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block">
          <div className="w-16 h-16 border-2 border-luxe-gold border-t-transparent rounded-full animate-spin" />
        </div>
        <p className="mt-4 text-luxe-gray-400">Loading...</p>
      </div>
    </div>
  )
}