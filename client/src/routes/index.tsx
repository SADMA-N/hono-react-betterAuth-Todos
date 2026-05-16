import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-[calc(100vh-57px)]"
      style={{ background: '#1a1a2e', color: '#fff' }}
    >
      <img
        src="/logo192.png"
        alt="React logo"
        className="w-32 h-32 mb-6 animate-spin"
        style={{ animationDuration: '10s' }}
      />
      <p className="mb-4 text-lg">
        Edit <code>src/routes/index.tsx</code> and save to reload.
      </p>
      <div className="flex gap-4">
        <a
          href="https://react.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#61dafb] hover:underline"
        >
          Learn React
        </a>
        <a
          href="https://tanstack.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#61dafb] hover:underline"
        >
          Learn TanStack
        </a>
      </div>
    </div>
  )
}
