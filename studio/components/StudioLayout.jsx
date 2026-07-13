// Roze herinneringsbalk bovenin het beheerpaneel.
export function StudioLayout(props) {
  return (
    <div style={{height: '100vh', display: 'flex', flexDirection: 'column'}}>
      <div
        style={{
          flex: '0 0 auto',
          background: '#EC4899',
          color: '#ffffff',
          textAlign: 'center',
          padding: '9px 16px',
          fontSize: '13px',
          fontWeight: 600,
          letterSpacing: '0.01em',
          fontFamily: '-apple-system, system-ui, "Segoe UI", sans-serif',
        }}
      >
        Vergeet niet op “Publish” te klikken — anders komen je wijzigingen niet op de website.
      </div>
      <div style={{flex: '1 1 auto', minHeight: 0, position: 'relative'}}>
        {props.renderDefault(props)}
      </div>
    </div>
  )
}
