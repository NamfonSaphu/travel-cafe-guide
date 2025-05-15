"use client"
import { Input } from "@/components/ui/input"
import { useSearchParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useDebouncedCallback } from 'use-debounce'

const Search = () => {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const [search, setSearch] = useState(searchParams.get('search') || '')

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams)
    if (value) {
      params.set('search', value)
    } else {
      params.delete('search')
    }
    replace(`/?${params.toString()}`)
  }, 500)

  useEffect(() => {
    if (!searchParams.get('search')) {
      setSearch('')
    }
  }, [searchParams.get('search')])

  return (
    <Input
      type="text"
      placeholder="Search"
      className="max-w-xs"
      defaultValue={search}
      onChange={(e) => {
        setSearch(e.target.value)
        setSearch(e.target.value)
        handleSearch(e.target.value)
      }}
      value={search}
    />
  )
}

export default Search
