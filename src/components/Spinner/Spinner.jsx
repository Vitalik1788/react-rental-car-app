import { Dna } from 'react-loader-spinner';

const Spinner = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Dna
        visible={true}
        height="200"
        width="200"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};

export default Spinner;
