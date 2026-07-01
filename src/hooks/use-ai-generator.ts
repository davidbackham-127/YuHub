import { useState, useCallback } from 'react'

export function useAIGenerator<T>(mockResult: T | (() => T), delayMs = 1500) {
  const [isGenerating, setIsGenerating] = useState(false)
  const [result, setResult] = useState<T | null>(null)

  const generate = useCallback(() => {
    setIsGenerating(true)
    setTimeout(() => {
      const finalResult = typeof mockResult === 'function' ? (mockResult as () => T)() : mockResult
      setResult(finalResult)
      setIsGenerating(false)
    }, delayMs)
  }, [mockResult, delayMs])

  return { isGenerating, result, setResult, generate }
}
