import React from 'react';
import ReactDOM from 'react-dom';

const ModalPortal = (props) => {
  const elem = React.useMemo(() => document.createElement('div'), []);

  React.useEffect(() => {
    document.body.appendChild(elem);
    
    return () => {
      document.body.removeChild(elem);
    }
  }, [elem])

  return ReactDOM.createPortal(
    props.children,
    elem
  );
}

export default ModalPortal;