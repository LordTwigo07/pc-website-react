import Link from 'next/link';

// This page demonstrates Static Site Generation (SSG)
export default function StaticPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-8">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 dark:text-white">
          Static Page Example (SSG)
        </h1>
        <p className="dark:text-white mb-4">
          This page is statically generated at build time.
        </p>
        <Link href="/" className="text-blue-600 hover:text-blue-800">
          Back to Home
        </Link>
      </main>
    </div>
  );
}