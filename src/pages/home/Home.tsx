import * as React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import ThemeContext from '../../components/common/ThemeContext';
import Sidebar from '../../components/Sidebar';
import UsingHeadless from '../UsingHeadless';
import AccordionPage from './AccordionPage';
import BadgePage from './BadgePage';
import BreadcrumbPage from './BreadcrumbPage';
import ButtonPage from './ButtonPage';
import CardPage from './CardPage';
import CarouselPage from './CarouselPage';
import DropdownPage from './DropdownPage';
import FormPage from './FormPage';
import InputGroupPage from './InputGroupPage';
import ModalPage from './ModalPage';
import NavbarPage from './NavbarPage';
import SpinnerPage from './SpinnerPage';
import TabPage from './TabPage';

const Home = () => {
  const { mode, toggleMode } = React.useContext(ThemeContext);

  return (
    <main className="flex transition-colors bg-light-light dark:bg-dark min-h-screen">
      <Sidebar className="w-80" />
      <div className="container p-5">
        <nav className="bg-primary p-5 rounded-3xl mb-5 shadow-xl flex items-center justify-between">
          <Link to="/" className="font-bold text-xl text-light dark:text-dark-light">
            React + Tailwind Starter Pack
          </Link>

          <button
            type="button"
            className="bg-white px-3 py-2 rounded-2xl transition-colors shadow-xl dark:bg-dark dark:text-white"
            onClick={toggleMode}
          >
            {mode === 'dark' ? 'Dark' : 'Light'}
          </button>
        </nav>

        <Switch>
          <Route exact path="/components/accordion" component={AccordionPage} />
          <Route exact path="/components/badge" component={BadgePage} />
          <Route exact path="/components/breadcrumb" component={BreadcrumbPage} />
          <Route exact path="/components/button" component={ButtonPage} />
          <Route exact path="/components/card" component={CardPage} />
          <Route exact path="/components/carousel" component={CarouselPage} />
          <Route exact path="/components/dropdown" component={DropdownPage} />
          <Route exact path="/components/form" component={FormPage} />
          <Route exact path="/components/inputgroup" component={InputGroupPage} />
          <Route exact path="/components/modal" component={ModalPage} />
          <Route exact path="/components/navbar" component={NavbarPage} />
          <Route exact path="/components/spinner" component={SpinnerPage} />
          <Route exact path="/components/tab" component={TabPage} />
          <Route path="/using-headless" component={UsingHeadless} />
        </Switch>
      </div>
    </main>
  );
};

export default Home;
