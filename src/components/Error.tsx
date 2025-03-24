export default function Error({type = 'the data'}) {
  return (
    <>
      <h3>There was a problem loading this page...</h3>
      <p>are you sure <em>{type}</em> exists?</p>
    </>
  );
}