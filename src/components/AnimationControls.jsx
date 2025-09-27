function AnimationControls({ isAnimating, onToggle }) {
  return (
    <div className="animation-controls">
      <button
        className={`control-button ${isAnimating ? 'playing' : 'paused'}`}
        onClick={onToggle}
        aria-label={isAnimating ? '애니메이션 정지' : '애니메이션 시작'}
      >
        <span className="button-icon">
          {isAnimating ? '⏸️' : '▶️'}
        </span>
        <span className="button-text">
          {isAnimating ? '정지' : '시작'}
        </span>
      </button>

      <div className="status-indicator">
        <div className={`status-dot ${isAnimating ? 'active' : 'inactive'}`}></div>
        <span className="status-text">
          {isAnimating ? '댄싱 중...' : '대기 중'}
        </span>
      </div>
    </div>
  )
}

export default AnimationControls