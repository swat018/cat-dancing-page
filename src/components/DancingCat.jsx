import { useEffect, useState } from 'react'
import catSvg from '../assets/images/cat.svg'
import '../styles/animations.css'

function DancingCat({ isAnimating }) {
  const [catPosition, setCatPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (!isAnimating) return

    const interval = setInterval(() => {
      setCatPosition({
        x: Math.sin(Date.now() * 0.001) * 10,
        y: Math.cos(Date.now() * 0.0015) * 5
      })
    }, 50)

    return () => clearInterval(interval)
  }, [isAnimating])

  return (
    <div className="dancing-cat-container">
      <div
        className={`dancing-cat ${isAnimating ? 'dancing' : ''}`}
        style={{
          transform: `translate(${catPosition.x}px, ${catPosition.y}px)`
        }}
      >
        <img src={catSvg} alt="Dancing Cat" className="cat-image" />

        {isAnimating && (
          <>
            <div className="sparkle sparkle-1">✨</div>
            <div className="sparkle sparkle-2">⭐</div>
            <div className="sparkle sparkle-3">💫</div>
            <div className="sparkle sparkle-4">🌟</div>
          </>
        )}
      </div>

      <div className="dance-stage">
        <div className="stage-light stage-light-1"></div>
        <div className="stage-light stage-light-2"></div>
        <div className="stage-light stage-light-3"></div>
      </div>
    </div>
  )
}

export default DancingCat