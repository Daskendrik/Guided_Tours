const FormColum = (props) => {
  const { type, velue } = props;
  switch (type) {
    case 'textarea':
      return <textarea defaultValue={velue}></textarea>;

    default:
      return <input defaultValue={velue}></input>;
  }
};

export default FormColum;
