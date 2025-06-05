import { useState } from 'react'
import { useSearchParamUpdater } from '../hooks/useSearchParamUpdater'

import { useSearchParams } from 'react-router-dom'

import { ArrowDownIcon } from './icons/ArrowDownIcon'


export const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false)

    const [searchParams] = useSearchParams()

    const selectedRegion = searchParams.get('region') || 'All'

    const regions = ['All', 'Europe', 'Africa', 'Americas', 'Asia', 'Oceania']

    return (
        <div className="relative w-max">
            <button className='h-full p-2 w-52 bg-element rounded-sm custom-shadow' onClick={() => setIsOpen(prev => !prev)}>
                <span>Filter by Region</span>
                <span className={`size-5 fill-text absolute top-[50%] ${isOpen && 'rotate-[-180deg]'} translate-y-[-50%] right-4`}>
                    <ArrowDownIcon />
                </span>
            </button>
            <div className={`content absolute z-50 left-0 right-0 top-16 bg-element rounded-sm ${isOpen ? 'block' : 'hidden'} custom-shadow`}>
                {regions.map(region => {
                    return <button
                        className={`option w-full p-2 block ${region === selectedRegion ? 'bg-text text-element' : 'bg-element'}`} key={region} onClick={useSearchParamUpdater('region')} value={region}>{region}</button>
                })}
            </div>
        </div>
    )
}