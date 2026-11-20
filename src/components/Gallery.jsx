import { useState } from 'react'
import './Gallery.css'

function Gallery({ images, width = '100%', height = '570px', radius = '4px' }) {
  const [currentImage, setCurrentImage] = useState(0)

  function previousImage() {
    setCurrentImage((current) => Math.max(current - 1, 0))
  }

  function nextImage() {
    setCurrentImage((current) =>
      Math.min(current + 1, images.length - 1)
    )
  }

  return (
    <div className="gallery" style={{ width }}>
      <div className="gallery-main" style={{ height, borderRadius: radius }}>
        <button
          onClick={previousImage}
          disabled={currentImage === 0}
        >
          ‹
        </button>

        <img src={images[currentImage]} alt="Imagem do produto" />

        <button
          onClick={nextImage}
          disabled={currentImage === images.length - 1}
        >
          ›
        </button>
      </div>

      <div className="gallery-thumbnails">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Imagem ${index + 1}`}
            className={currentImage === index ? 'active' : ''}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default Gallery