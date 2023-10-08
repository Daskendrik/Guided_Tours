const FormColum = (props) => {
  const { type, velue } = props;
  switch (type) {
    case 'textarea':
      return <textarea defaultValue={velue}></textarea>;
    case 'tel':
      return <input defaultValue={velue} type="tel"></input>;
    case 'email':
      return <input defaultValue={velue} type="email"></input>;
    default:
      return <input defaultValue={velue}></input>;
  }
};

export default FormColum;
