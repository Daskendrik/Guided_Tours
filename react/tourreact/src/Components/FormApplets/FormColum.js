const FormColum = (props) => {
  const { type, velue, readonly } = props;
  switch (type) {
    case 'textarea':
      return <textarea defaultValue={velue} readOnly={readonly}></textarea>;
    case 'tel':
      return (
        <input defaultValue={velue} type="tel" readOnly={readonly}></input>
      );
    case 'email':
      return (
        <input defaultValue={velue} type="email" readOnly={readonly}></input>
      );
    default:
      return <input defaultValue={velue} readOnly={readonly}></input>;
  }
};

export default FormColum;
