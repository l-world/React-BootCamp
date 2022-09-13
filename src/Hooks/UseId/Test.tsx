import useId from './UseId'

export default function Checkbox() {
    const id = useId();
    return (
      <>
        <label htmlFor={id}>Do you like React?</label>
        <input id={id} type="checkbox" name="react"/>
      </>
    );
  };