import { BasicPlan } from '../../src/subscription/basic-plan'
import { PremiumPlan } from '../../src/subscription/premium-plan'

describe('Subscription', () => {
  describe('BasicPlan', () => {
    test('returns plan name', () => {
      const plan = new BasicPlan()
      expect(plan.getPlanName()).toBe('basic')
    })
    // TODO: add getPrice tests to increase coverage
  })

  describe('PremiumPlan', () => {
    test('returns plan name', () => {
      const plan = new PremiumPlan()
      expect(plan.getPlanName()).toBe('premium')
    })
    // TODO: add getPrice tests (including discount for 12+ months) to increase coverage
  })
})
