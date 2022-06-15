import { useParams } from 'react-router-dom';
import { getInvoice } from '../data';

export default function Invoice() {
  let params = useParams();
  let invoice = getInvoice(parseInt(params.invoiceId, 10));

  return (
    <main style={{ padding: '1rem' }}>
      <h2> Invoice: {params.invoiceId} </h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p> Due date: {invoice.due}</p>
    </main>
  );
}