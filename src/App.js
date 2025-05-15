import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopNavbar from './components/TopNavbar';

function App() {
    
    return (
        <Router>
            <Routes>
                <Route path="/*" element={
                    <div>
                        <TopNavbar />
                    </div>
                } />
            </Routes>
        </Router>
    );
}

export default App;