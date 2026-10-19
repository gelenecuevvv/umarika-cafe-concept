import { useId, useState } from 'react'
import { ZoomIn, ZoomOut } from 'lucide-react'
import { useDialog } from '../hooks/useDialog.js'
import ExternalLink from './ExternalLink.jsx'

const MIN_ZOOM = 1
const MAX_ZOOM = 2.5

export default function MenuViewer({ image, onClose }) {
  if (!image) return null
  return <MenuViewerDialog key={image.id} image={image} onClose={onClose} />
}

function MenuViewerDialog({ image, onClose }) {
  const titleId = useId()
  const dialogRef = useDialog(true, onClose)
  const [zoom, setZoom] = useState(MIN_ZOOM)

  function changeZoom(direction) {
    setZoom((value) => {
      const next = Number((value + direction).toFixed(1))
      return Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, next))
    })
  }

  return (
    <div className="dialog-backdrop" onMouseDown={onClose}>
      <div
        className="dialog-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        ref={dialogRef}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="dialog-top">
          <button type="button" className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
          <h2 id={titleId}>{image.title}</h2>
        </div>
        <div className="viewer-toolbar">
          <button type="button" className="btn btn-secondary" onClick={() => changeZoom(-0.5)} disabled={zoom <= MIN_ZOOM}>
            <ZoomOut aria-hidden="true" size={18} />
            Zoom out
          </button>
          <button type="button" className="btn btn-secondary" onClick={() => changeZoom(0.5)} disabled={zoom >= MAX_ZOOM}>
            <ZoomIn aria-hidden="true" size={18} />
            Zoom in
          </button>
          <p className="zoom-level" aria-live="polite">
            {Math.round(zoom * 100)}%
          </p>
          <ExternalLink className="btn btn-primary" href={image.src}>
            Open full size
          </ExternalLink>
        </div>
        <div
          className="viewer-stage"
          tabIndex={0}
          aria-label={`${image.title}. Scroll to move around the image when zoomed in.`}
        >
          <img
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            style={{ width: `${zoom * 100}%` }}
          />
        </div>
      </div>
    </div>
  )
}
