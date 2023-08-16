import { useProducts } from './Hooks/products';
import { Product } from './components/Product';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import { Modal } from './components/Modal';
import { CreateProduct } from './components/CreateProduct';
import {useState} from "react";
import { Iproduct } from './models';

function App() {
  const { loading, error, products, addProdct } = useProducts();
  const [modal, setModal] = useState(false);
  const createHandler = (product: Iproduct) => {
    setModal(false);
    addProdct(product);
  }
  return (
    <div className="container mx-auto max-w-2xl pt-50">
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {products.map(product => <Product product={product} key={product.id} />)}
      {modal && <Modal title='Create new product' onClose={() => setModal(false)}>
        <CreateProduct onCreate={createHandler} />
      </Modal>}

      <button onClick={() => setModal(true)} className='py-2 fixed bottom-5 rigth-5 rounded-full bg-red-700 text-white text-2xl px-4'>+</button>
    </div>
  );
}

export default App;
