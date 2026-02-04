import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import './NotFound.css';
import Button from '../Components/Button';

function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="not-found-code">404</div>
        <h1 className="not-found-title">Page Not Found</h1>
        <p className="not-found-message">
          Oops! It seems like the page you're looking for doesn't exist or has been moved.
        </p>
        <div className="not-found-links">
          <Link to="/" className="not-found-button primary">
            <Home size={20} />
            Back to Home
          </Link>
          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft size={20} />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
