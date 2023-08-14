import { useProducts } from './Hooks/products';
import { Product } from './components/Product';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import { Modal } from './components/Modal';

function App() {
  const { loading, error, products} = useProducts();
  return (
    <div className="container mx-auto max-w-2xl pt-50">
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {products.map(product => <Product product={product} key={product.id} />)}
      <Modal />
    </div>
  );
}

export default App;
