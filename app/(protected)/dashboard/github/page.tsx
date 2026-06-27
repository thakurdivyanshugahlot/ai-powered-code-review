import { requireAuth } from '@/features/auth/actions'
import { DashboardHeader } from '@/features/dashboard/components/dashboard-header'
import { GithubConnectCard } from '@/features/github/components/github-connect-card'
import { getInstallationStatus } from '@/features/github/server/installation'
import { Metadata } from 'next'
import { title } from 'process'
import React from 'react'
export const metadata: Metadata ={
    title:"Github App  Dashboard"
}
const DashboardGithubPage =async () => {
    const session = await requireAuth();
    const installation = await getInstallationStatus(session.user.id)
  return (
    <>
    <DashboardHeader 
    title = "Github App"
    description ="Install or disconnect the reviewe app on your Github Account"
     />
     <GithubConnectCard userId={session.user.id} installation={installation} />
    </>    
  )
}

export default DashboardGithubPage