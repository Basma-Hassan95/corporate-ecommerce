import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("React Error Boundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          backgroundColor: '#FAF6F0',
          color: '#3E2522',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.5rem', marginBottom: '1rem', color: '#684A3A' }}>
            Wakeel &amp; Sons Atelier
          </h1>
          <p style={{ fontSize: '1.1rem', marginBottom: '1rem', maxWidth: '600px' }}>
            Rendering error caught:
          </p>
          <pre style={{
            backgroundColor: '#211514',
            color: '#D4AF37',
            padding: '1rem 1.5rem',
            borderRadius: '6px',
            fontSize: '0.88rem',
            maxWidth: '700px',
            overflowX: 'auto',
            marginBottom: '1.5rem',
            textAlign: 'left'
          }}>
            {this.state.error ? this.state.error.toString() : 'Unknown Error'}
          </pre>
          <button 
            onClick={() => {
              this.setState({ hasError: false, error: null });
              window.location.reload();
            }}
            style={{
              backgroundColor: '#684A3A',
              color: '#FFF',
              border: 'none',
              padding: '0.9rem 2rem',
              borderRadius: '4px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            Reload Website
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
