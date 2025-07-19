'use client'
 
import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
 
export default function YandexMetrika() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = `${pathname}?${searchParams}`
    // @ts-expect-error подключение метрики
    ym(37548255, 'hit', url);
 
  }, [pathname, searchParams])
 
  return null
}