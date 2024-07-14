'use client';
import ClientOnly from './client'

export function generateStaticParams() {
  return [{ entry: [''] }]
}

export default function Page() {
  return ClientOnly
}