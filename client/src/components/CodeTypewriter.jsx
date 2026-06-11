import { useEffect, useState } from "react"

const CodeTypewriter = () => {
  const code = `if (code.isClean && app.scales) {\n  deploy();\n}`
  const [text, setText] = useState("")

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setText(code.slice(0, i))
      i++
      if (i > code.length) clearInterval(interval)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <pre className="text-green-400 text-xl font-mono">
      {text}
      <span className="animate-pulse">|</span>
    </pre>
  )
}

export default CodeTypewriter
