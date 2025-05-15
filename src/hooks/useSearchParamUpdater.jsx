import { useSearchParams } from 'react-router-dom';

export const useSearchParamUpdater = (key) => {
  const [_, setSearchParams] = useSearchParams();

  return (event) => setSearchParams(prev => {
    prev.set(key, event.target.value)
    return prev
  })

};