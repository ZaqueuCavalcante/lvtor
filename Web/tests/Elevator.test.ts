import { describe, it, expect } from 'vitest'
import { Elevator } from '../src/domain/Elevator'

describe('Elevator', () => {
  it('getCurrentFloor returns the current floor', () => {
    const elevator = new Elevator(3)

    expect(elevator.getCurrentFloor()).toBe(3)
  })
})
