import { describe, expect, it } from 'vitest'

import { useSum } from './index'

describe('useSum', () => {
  it('should return the sum of two numbers', () => {
    const result = useSum(3, 5)
    expect(result).toBe(8)
  })

  it('should handle negative numbers', () => {
    const result = useSum(-2, -4)
    expect(result).toBe(-6)
  })

  it('should handle zero values', () => {
    const result = useSum(0, 0)
    expect(result).toBe(0)
  })
})
