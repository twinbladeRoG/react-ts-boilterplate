import React from 'react';

const NavbarContext = React.createContext<[boolean, Function]>([false, () => {}]);

export default NavbarContext;
