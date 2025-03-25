"use client"

import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"

import { EnvelopeSimple } from '@phosphor-icons/react'


export default function Newsletter() {
    return (
      <form
        action="/subscribe"
        className="rounded-2xl border p-6 border-muted"
      >
        <h2 className="flex text-sm font-semibold ">
          <EnvelopeSimple size={26} weight="duotone" />
          <span className="ml-3">保持联系</span>
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          订阅获取我的最新动态，随时可以取消订阅。
        </p>
        <div className="mt-6 flex">
          <Input
            type="email"
            placeholder="邮箱地址"
            aria-label="邮箱地址"
            required
            className="min-w-0 flex-auto appearance-none rounded-md focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 sm:text-sm"
          />
          <Button type="submit" className="ml-4 flex-none bg-primary text-primary-foreground dark:bg-primary-foreground dark:text-primary">
            加入
          </Button>
        </div>
      </form>
    )
  }