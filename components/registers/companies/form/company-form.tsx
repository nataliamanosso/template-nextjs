'use client'

import React, { useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import { zodResolver } from '@hookform/resolvers/zod'

import { buttonVariants } from '@/components/ui/button'
import { ContainerForm } from '@/components/ui/containers/container-form'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { SubmitButton } from '@/components/ui/submit-button'
import { Skeleton } from '@/components/ui/skeleton'
import { CardError } from '@/components/layout/cards/card-error'
import { operationTypes } from '@/components/registers/companies/form/select-options'

import { companySchema, CompanyValues } from '@/lib/validations/companies'
import {
  useCompanyById,
  useCreateCompany,
  useUpdateCompany,
} from '@/hooks/use-companies'
import { cn } from '@/lib/utils'

export function CompanyForm({ mode }: { mode: 'create' | 'update' }) {
  const router = useRouter()
  const { id } = useParams()
  const companyId = Number(id) ?? undefined

  const { data: company, isLoading, error } = useCompanyById(companyId)
  const createCompany = useCreateCompany()
  const updateCompany = useUpdateCompany()

  const form = useForm<CompanyValues>({
    resolver: zodResolver(companySchema),
    defaultValues: {
      tradeName: '',
      cnpj: '',
      operationType: undefined,
      address: '',
      contact: '',
    },
  })
  const { isDirty } = form.formState
  useEffect(() => {
    if (company) {
      form.reset({
        tradeName: company.tradeName,
        cnpj: company.cnpj,
        operationType: company.operationType,
        address: company.address,
        contact: company.contact,
      })
    }
  }, [company, form])

  async function onSubmit(data: CompanyValues) {
    // if (mode == 'create') {
    //   createCompany.mutate(data, {
    //     onSuccess: () => {
    //       router.push('/registers/companies')
    //     },
    //   })
    // } else {
    //   updateCompany.mutate({ companyId, data })
    // }
    console.log(data)
  }

  if (isLoading) {
    return <Skeleton className="w-full h-80" />
  }

  if (error) {
    return <CardError title="Error fetching company." />
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <ContainerForm>
          <FormField
            control={form.control}
            name="tradeName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Trade Name</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: Company ABC" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contact"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact</FormLabel>
                <FormControl>
                  <Input placeholder="example@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cnpj"
            render={({ field }) => (
              <FormItem>
                <FormLabel>CNPJ</FormLabel>
                <FormControl>
                  <Input placeholder="00.000.000/0000-00" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="operationType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Operation Type</FormLabel>
                <Select
                  onValueChange={(value) => field.onChange(Number(value))}
                  defaultValue={
                    company?.operationType.toString() ?? field.value?.toString()
                  }
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an operation type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {operationTypes.map((type) => (
                      <SelectItem key={type.id} value={type.id.toString()}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem className="col-span-1 md:col-span-2">
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input placeholder="Example Street, 123" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </ContainerForm>
        <div className="flex gap-4 justify-end">
          <Link
            href="/registers/companies"
            className={cn(buttonVariants({ variant: 'outline' }))}
          >
            Cancel
          </Link>
          <SubmitButton
            btnLabel={mode === 'create' ? 'Add Company' : 'Save changes'}
            isLoading={createCompany.isPending}
            disabled={mode === 'update' && !isDirty}
          />
        </div>
      </form>
    </Form>
  )
}
