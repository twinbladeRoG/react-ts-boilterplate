import Spinner from '../../components/common/Spinner/Spinner';

const SpinnerPage = () => (
  <>
    <h2 className="text-dark dark:text-light text-2xl font-bold mb-5">Spinners</h2>
    <hr className="mb-5" />

    <div className="flex space-x-4 mb-7">
      <Spinner />
      <Spinner variant="accent" />
      <Spinner variant="warning" />
      <Spinner variant="danger" />
      <Spinner variant="success" />
      <Spinner variant="light" />
      <Spinner variant="dark" />
    </div>
    <div className="flex space-x-4 mb-7">
      <Spinner size={32} />
      <Spinner size={32} variant="accent" />
      <Spinner size={32} variant="warning" />
      <Spinner size={32} variant="danger" />
      <Spinner size={32} variant="success" />
      <Spinner size={32} variant="light" />
      <Spinner size={32} variant="dark" />
    </div>
    <div className="flex space-x-4">
      <Spinner size={64} />
      <Spinner size={64} variant="accent" />
      <Spinner size={64} variant="warning" />
      <Spinner size={64} variant="danger" />
      <Spinner size={64} variant="success" />
      <Spinner size={64} variant="light" />
      <Spinner size={64} variant="dark" />
    </div>
  </>
);

export default SpinnerPage;
