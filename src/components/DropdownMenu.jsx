import { useState } from 'react'
import { useSearchParamUpdater } from '../hooks/useSearchParamUpdater'

import { useSearchParams } from 'react-router-dom'


export const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false)

    const [searchParams] = useSearchParams()

    const selectedRegion = searchParams.get('region')

    const regions = ['All', 'Africa', 'Americas', 'Asia', 'Oceania']

    return (
        <div className="relative w-max">
            <button className='h-full p-2 w-52 bg-element rounded-sm custom-shadow' onClick={() => setIsOpen(prev => !prev)}>Filter by Region</button>
            <div className={`content absolute left-0 right-0 top-16 bg-element rounded-sm ${isOpen? 'block' : 'hidden'} custom-shadow`}>
                {regions.map(region => {
                    return <button className={`option w-full p-2 block ${region === selectedRegion ? 'backdrop-brightness-90' : 'bg-element'}`} key={region} onClick={useSearchParamUpdater('region')} value={region}>{region}</button>
                })}
            </div>
        </div>
    )
}