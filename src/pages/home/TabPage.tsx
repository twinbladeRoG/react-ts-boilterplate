import Tab from '../../components/common/Tabs/Tab';

const TabPage = () => (
  <>
    <h2 className="text-dark dark:text-light text-2xl font-bold mb-5">Tab</h2>
    <hr className="mb-5" />

    <Tab activeKey="1">
      <div className="flex">
        <Tab.Button eventKey="1">Tab 1</Tab.Button>
        <Tab.Button eventKey="2">Tab 2</Tab.Button>
        <Tab.Button eventKey="3">Tab 3</Tab.Button>
      </div>
      <Tab.Pane eventKey="1" className="dark:text-light">
        TAB 1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam asperiores
        consectetur deleniti, in optio sed accusantium minima fugit corporis ullam!
      </Tab.Pane>
      <Tab.Pane eventKey="2" className="dark:text-light">
        TAB 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, itaque.
      </Tab.Pane>
      <Tab.Pane eventKey="3" className="dark:text-light">
        Tab 3 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus voluptate explicabo
        error iusto doloribus? Totam, modi non? Architecto numquam, amet optio in est sed. Nulla
        labore aliquid voluptates obcaecati temporibus.
      </Tab.Pane>
    </Tab>
  </>
);

export default TabPage;
