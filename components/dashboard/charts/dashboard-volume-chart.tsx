'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from 'recharts'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import { DashboardVolumeChartData } from '@/types'

const chartConfig = {
  volume: {
    label: 'Volume',
    color: 'hsl(var(--chart-5))',
  },
} satisfies ChartConfig

export function DashboardVolumeChart({ data }: DashboardVolumeChartData) {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Metric</CardTitle>
        <CardDescription>Example metric</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center items-center">
        <span>
          <ChartContainer config={chartConfig} className="h-72 2xl:h-96">
            <BarChart
              accessibilityLayer
              data={data}
              margin={{
                top: 25,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="data"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar dataKey="volume" fill="var(--color-volume)" radius={8}>
                <LabelList
                  position="top"
                  offset={12}
                  className="fill-foreground"
                  fontSize={12}
                />
              </Bar>
            </BarChart>
          </ChartContainer>
        </span>
      </CardContent>
    </Card>
  )
}
