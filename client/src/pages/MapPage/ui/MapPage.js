import React, { useEffect, useRef } from 'react'

const MapPage = () => {
    const mapRef = useRef(null)

    useEffect(() => {
        // eslint-disable-next-line no-undef
        ymaps.ready(() => {
            if (mapRef.current) {
                mapRef.current.destroy()
            }

            // eslint-disable-next-line no-undef
            mapRef.current = new ymaps.Map('map', {
                center: [44.878414, 39.190289],
                zoom: 7
            })

            const coordinates = [
                { lat: 44.878414, lon: 39.190289, name: 'Coin-1' },
                { lat: 44.6098268, lon: 40.1006606, name: 'Coin-2' }
            ]

            coordinates.forEach((coordinate) => {
                // eslint-disable-next-line no-undef
                const placemark = new ymaps.Placemark([coordinate.lat, coordinate.lon], {
                    balloonContent: coordinate.name,
                    iconCaption: coordinate.name
                })
                mapRef.current.geoObjects.add(placemark)
            })
        })

        return () => {
            if (mapRef.current) {
                mapRef.current.destroy()
                mapRef.current = null
            }
        }
    }, [])

    return (
        <div>
            <h2 style={{ marginBottom: '52px', fontSize: '34px', color: '#000' }}>Карта банкоматов</h2>
            <div id='map' style={{ width: '100%', height: '728px' }}></div>
        </div>
    )
}

export default MapPage
