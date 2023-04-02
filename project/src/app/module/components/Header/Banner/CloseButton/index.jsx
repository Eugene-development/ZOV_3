"use client"
import { XMarkIcon } from '@heroicons/react/20/solid'
import { useBannerStore } from '../../../../store'
const { visibleBanner } = useBannerStore

export default function closeButton() {
    const { changeVisibleBanner } = visibleBanner();

    return(
        <button onClick={changeVisibleBanner} type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
          <span className="sr-only">Dismiss</span>
          <XMarkIcon className="h-5 w-5 text-gray-900" aria-hidden="true" />
        </button>
    )
}