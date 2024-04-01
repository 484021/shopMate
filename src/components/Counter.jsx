export default function Counter({ numberOfItemsPurchased,totalNumberOfItems }) {
  return (
    <p>
      <b>{numberOfItemsPurchased}</b> / {totalNumberOfItems} items purchased
    </p>
  );
}
