import dynamic from 'next/dynamic'

// import OpenStreetMap from '../component/OpenStreetMap'
const OpenStreetMap = dynamic(() => import('../component/OpenStreetMap'), {
  ssr: false,
})

const index = () => {
  return (
    <>
      <h1 className='text-center'>OpenStreetMap</h1>
      <OpenStreetMap />
    </>
  )
}

export default index
