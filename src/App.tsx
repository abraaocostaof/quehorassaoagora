/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Route, Switch } from 'wouter';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HomePage } from '@/pages/HomePage';
import { ConverterPage } from '@/pages/ConverterPage';
import { CalendarPage } from '@/pages/CalendarPage';
import { CityPage } from '@/pages/CityPage';
import { AboutPage } from '@/pages/AboutPage';

export default function App() {
  return (
    <div className="h-screen flex flex-col font-sans text-text-primary bg-root-bg overflow-hidden text-sm">
      <Header />
      
      <main className="flex-1 overflow-y-auto w-full flex flex-col min-h-0">
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/converter" component={ConverterPage} />
          <Route path="/calendar" component={CalendarPage} />
          <Route path="/time/:city" component={CityPage} />
          <Route path="/about" component={AboutPage} />
          
          <Route>
            <div className="container mx-auto px-4 py-20 text-center">
              <h1 className="text-4xl font-bold mb-4">404</h1>
              <p className="text-text-secondary">Página não encontrada</p>
            </div>
          </Route>
        </Switch>
      </main>

      <Footer />
    </div>
  );
}
