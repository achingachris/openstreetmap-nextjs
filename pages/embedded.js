const embedded = () => {
  return (
    <div className='container mt-3'>
      <h1 className='text-center'>OpenStreetMap Embedded</h1>

      <div className='container'>
        <>
          <>
            <iframe
              width={425}
              height={350}
              frameBorder={0}
              scrolling='no'
              marginHeight={0}
              marginWidth={0}
              src='https://www.openstreetmap.org/export/embed.html?bbox=39.65978622436524%2C-4.026432632626822%2C39.72553253173829%2C-3.976686573946468&layer=mapnik'
              style={{ border: '1px solid black' }}
            />
            <br />
            <small>
              <a href='https://www.openstreetmap.org/#map=14/-4.0016/39.6927'>
                View Larger Map
              </a>
            </small>
          </>
        </>
      </div>
    </div>
  )
}

export default embedded
