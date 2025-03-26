'use client'

import React from 'react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ExampleTimeline } from '@/components/examples/example-timeline'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ExampleBadges } from '@/components/examples/example-badges'
import { ExampleToasts } from '@/components/examples/example-toasts'

import { examplesData } from '@/lib/mocks/examples'
import { TimelineData } from '@/types'

export function ExamplesView() {
  return (
    <section>
      <Tabs defaultValue="timeline">
        <TabsList>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="badges">Badges</TabsTrigger>
          <TabsTrigger value="toasts">Toasts</TabsTrigger>
        </TabsList>
        <TabsContent value="timeline">
          <Card>
            <CardHeader>
              <CardTitle>Timeline</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ExampleTimeline data={examplesData.timeline} />
              <ExampleTimeline data={[]} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="badges">
          <Card>
            <CardHeader>
              <CardTitle>Badge Variants</CardTitle>
            </CardHeader>
            <CardContent>
              <ExampleBadges />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="toasts">
          <Card>
            <CardHeader>
              <CardTitle>Toasts Variants</CardTitle>
            </CardHeader>
            <CardContent>
              <ExampleToasts />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  )
}
