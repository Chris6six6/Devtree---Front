
type ErrorMessagePops = {
  children: React.ReactNode
}

export default function ErrorMessage({children} : ErrorMessagePops) {
  return (
    <p className="bg-red-50 text-red-600 p-3 uppercase text-sm font-bold text-center">{children}</p>
  )
}
