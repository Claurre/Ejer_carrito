
interface Props {
  type?: string;
  id: string;
  label: string;
  placeholder?: string;
}

function Input({ type="text", id, placeholder, label}: Props){
  
    return (
        <div>
          <input type={type} id={id} placeholder={placeholder}/>
          <label htmlFor={id}>{label}</label>
        </div>
    )
}

export default Input;