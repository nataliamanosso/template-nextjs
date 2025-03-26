'use client'

import { TrendingDown } from 'lucide-react'
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

import { DashboardPriceChartData } from '@/types'
import { formatCurrency } from '@/lib/utils/format-currency'

const chartConfig = {
  price: {
    label: 'Price',
  },
} satisfies ChartConfig

export function DashboardPriceChart({ data }: DashboardPriceChartData) {
  return (
    <Card className="col-span-1 md:col-span-2 lg:col-span-5">
      <CardHeader>
        <CardTitle>Price Evolution</CardTitle>
        <CardDescription>
          Based on products registered this month
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="w-full h-72 2xl:h-80">
          <AreaChart
            accessibilityLayer
            data={data}
            margin={{
              left: 25,
              right: 18,
            }}
          >
            <defs>
              <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="hsl(var(--chart-1))"
                  stopOpacity={0.2}
                />
                <stop
                  offset="95%"
                  stopColor="hsl(var(--chart-1))"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={15}
              tickFormatter={(value) => value.slice(0, 5)}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              tickFormatter={(value: number) => formatCurrency(value, 'USD')}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" hideLabel />}
            />
            <Area
              type="monotone"
              dataKey="price"
              stroke="hsl(var(--chart-1))"
              strokeWidth={2}
              fill="url(#priceGradient)"
              dot={{ strokeWidth: 2, r: 2, fill: 'hsl(var(--background))' }}
              activeDot={{ r: 4, strokeWidth: 2 }}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              <span>Last week: -0.8%</span>
              <TrendingDown className="icon-size text-destructive" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              01/01 - 07/01
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
