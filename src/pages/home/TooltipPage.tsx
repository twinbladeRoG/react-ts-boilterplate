import ReactTooltip from 'react-tooltip';

const TooltipPage = () => (
  <>
    <h2 className="text-dark dark:text-light text-2xl font-bold mb-5">Tooltip</h2>
    <hr className="mb-5" />

    <p data-tip data-for="happyFace" className="inline-block mb-7 dark:text-light">
      Hover me!
    </p>
    <ReactTooltip id="happyFace" place="bottom" type="dark" effect="solid">
      <span className="w-16">Lorem ipsum, dolor sit</span>
    </ReactTooltip>
  </>
);

export default TooltipPage;
