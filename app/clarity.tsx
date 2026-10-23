'use client'

import { useEffect } from 'react'
import Clarity from '@microsoft/clarity'

const CLARITY_PROJECT_ID = 'z28ehbanp5'

/**
 * Microsoft Clarity session replay and heatmaps.
 *
 * The project ID is hardcoded here. Create a project at https://clarity.microsoft.com
 * and copy the ID from Settings > Overview if you need to change it.
 *
 * Recording only starts in production builds. By default, Clarity masks
 * passwords, credit card numbers and other sensitive inputs.
 */
export default function ClarityAnalytics() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return
    Clarity.init(CLARITY_PROJECT_ID)
  }, [])

  return null
}