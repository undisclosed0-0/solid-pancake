@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
        
:root {
    --primary-color: #ef4444; /* Red */
    --secondary-color: #1f2937; /* Dark Gray */
    --light-color: #f3f4f6; /* Light Gray */
    --accent-color: #3b82f6; /* Blue */
}
body {
    font-family: 'Inter', sans-serif;
    background-color: var(--light-color);
    line-height: 1.6;
}

/* Utility Classes */
.container { max-width: 1200px; margin: 0 auto; padding: 0 1rem; }
.view { display: none; padding-bottom: 4rem; }
.view.active { display: block; }

/* Button Styling */
.btn { padding: 0.75rem 1.5rem; border-radius: 0.5rem; font-weight: 600; transition: background-color 0.2s, transform 0.1s, box-shadow 0.2s; text-align: center; border: none; cursor: pointer; }
.btn-primary { background-color: var(--primary-color); color: white; box-shadow: 0 4px var(--secondary-color); }
.btn-primary:hover { background-color: #dc2626; transform: translateY(-2px); box-shadow: 0 6px var(--secondary-color); }
.btn-secondary { background-color: var(--secondary-color); color: white; box-shadow: 0 4px #4b5563; }
.btn-secondary:hover { background-color: #374151; transform: translateY(-2px); box-shadow: 0 6px #4b5563; }
.btn-scroll { display: inline-block; margin-top: 1.5rem; }

/* --- HEADER & NAVIGATION --- */
.main-header { background-color: var(--secondary-color); color: white; padding: 1rem 0; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); position: sticky; top: 0; z-index: 50; }
.main-header .container { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; }
.main-nav a { color: white; margin-left: 1rem; text-decoration: none; font-weight: 500; transition: color 0.2s; padding: 0.5rem 0; }
.main-nav a:hover { color: var(--primary-color); }

/* --- LANDING VIEW (HERO) --- */
#landing-view {
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}
.hero-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, var(--secondary-color) 0%, var(--primary-color) 100%);
    opacity: 0.95;
    z-index: 1;
}
.hero-content {
    position: relative;
    z-index: 2;
    color: white;
    padding: 1rem;
}
.hero-logo { width: 100px; height: 100px; margin: 0 auto 1.5rem; border-radius: 50%; border: 3px solid white; }
.hero-headline { font-size: 3rem; font-weight: 900; line-height: 1.1; margin-bottom: 1rem; }
.hero-tagline { font-size: 1.25rem; font-weight: 300; max-width: 600px; margin: 0 auto 2rem; }
.hero-cta-buttons { display: flex; justify-content: center; gap: 1.5rem; }
.community-icons { margin-top: 2rem; font-size: 0.9rem; color: rgba(255, 255, 255, 0.7); }

/* --- HOME VIEW (BOOKING) --- */
.hero-community {
    background-color: white;
    padding: 4rem 0;
    text-align: center;
    border-bottom: 1px solid var(--light-color);
}
.hero-community h1 { font-size: 2.5rem; font-weight: 800; line-height: 1.1; color: var(--secondary-color); }
.hero-community .subtitle { margin-top: 0.75rem; color: #6b7280; font-size: 1.125rem; }

.community-values { padding: 3rem 0; background-color: var(--light-color); }
.community-values .container { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; text-align: center; }
.value-item { padding: 1.5rem; background-color: white; border-radius: 0.75rem; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); }
.value-item h3 { font-weight: 700; font-size: 1.25rem; margin: 1rem 0 0.5rem; color: var(--primary-color); }
.value-item .icon { width: 50px; height: 50px; background-color: var(--accent-color); border-radius: 50%; margin: 0 auto; }

/* Booking Form Section */
.booking-section-wrapper { padding: 3rem 0; background-color: white; }
.booking-section-wrapper h2 { font-size: 2rem; font-weight: 700; margin-bottom: 1.5rem; color: var(--secondary-color); text-align: center; }
.booking-section-wrapper .card { padding: 2rem; border-radius: 1rem; max-width: 800px; margin: 0 auto; }
.form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem; }
input[type="text"], input[type="tel"], input[type="number"] {
    padding: 0.75rem;
    border: 2px solid #e5e7eb;
    border-radius: 0.5rem;
    width: 100%;
    transition: border-color 0.2s;
}
input:focus { outline: none; border-color: var(--primary-color); box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.2); }
.checkbox-group label { user-select: none; font-size: 0.95rem; color: #374151; }
.booking-section-wrapper button[type="submit"] { width: 100%; margin-top: 2rem; }

/* How It Works Section */
.how-it-works { padding: 4rem 0; background-color: var(--light-color); text-align: center; }
.how-it-works h2 { font-size: 2rem; font-weight: 700; margin-bottom: 3rem; color: var(--secondary-color); }
.steps-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
.step { position: relative; padding: 2rem 1rem; background-color: white; border-radius: 0.75rem; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05); }
.step-number { 
    position: absolute; top: -15px; left: 50%; transform: translateX(-50%); 
    width: 30px; height: 30px; line-height: 30px; 
    background-color: var(--accent-color); color: white; font-weight: 700; 
    border-radius: 50%; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); 
}
.step h3 { margin-top: 0.5rem; font-weight: 700; color: var(--primary-color); }

/* --- PORTAL / DASHBOARD STYLES --- */
.auth-page .container { max-width: 400px; text-align: center; padding-top: 5rem; background-color: white; border-radius: 1rem; box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1); margin-top: 4rem; }
.admin-container { padding-top: 2rem; }
.card { background-color: white; padding: 1.5rem; border-radius: 0.75rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); margin-bottom: 2rem; }
.card h3 { font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; color: var(--secondary-color); }
.table-wrapper { overflow-x: auto; margin-top: 1rem; }
table { width: 100%; border-collapse: collapse; }
th, td { padding: 0.75rem 1rem; text-align: left; border-bottom: 1px solid #e5e7eb; font-size: 0.9rem; }
th { background-color: var(--light-color); font-weight: 600; text-transform: uppercase; font-size: 0.75rem; color: #4b5563; }

/* Loading Overlay */
#loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}
.spinner {
    border: 8px solid #f3f3f3;
    border-top: 8px solid var(--primary-color);
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: spin 1s linear infinite;
}
@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* Media Queries for Responsiveness */
@media (max-width: 768px) {
    .main-header .container { flex-direction: column; }
    .main-nav { margin-top: 0.5rem; text-align: center; }
    .hero-headline { font-size: 2rem; }
    .hero-cta-buttons { flex-direction: column; gap: 1rem; }
    .community-values .container, .steps-grid { grid-template-columns: 1fr; }
    .form-grid { grid-template-columns: 1fr; }
    .details-grid { grid-template-columns: 1fr !important; }
    .details-grid .full-width { grid-column: 1 / 2 !important; }
}
