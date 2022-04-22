// import Map2 from '../component/Map2'

import dynamic from 'next/dynamic'

// import OpenStreetMap from '../component/OpenStreetMap'
const Map2 = dynamic(() => import('../component/Map2'), {
  ssr: false,
})

const maps = () => {
  return (
    <div>
      <Map2 />
    </div>
  )
}

export default maps
