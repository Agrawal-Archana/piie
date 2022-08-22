import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import TranslationContext from './contexts/translation-context';
import StaticTranslations from '../mock/static-translations';
import AppRoutes from './AppRoutes';

function App() {
  return (
    <div className="app-root">
      <TranslationContext.Provider value={StaticTranslations}>
        <BrowserRouter>
          <Routes>
            {AppRoutes.map(
              ({ id, path, component: Component }) => (
                <Route
                  key={id}
                  path={path}
                  element={(
                    <Suspense>
                      <Component />
                    </Suspense>
                  )}
                />
              ),
            )}
          </Routes>
        </BrowserRouter>
      </TranslationContext.Provider>
    </div>

  );
}

export default App;
