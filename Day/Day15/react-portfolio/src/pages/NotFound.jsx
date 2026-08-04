import { NavLink } from 'react-router-dom';

function NotFound() {
return (
<div style={{ textAlign: 'center', padding: '100px' }}>
{'404 Page Not Found'}
<br />
<NavLink to="/" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>
    Back to Home
</NavLink>
</div>
);
}
export default NotFound;