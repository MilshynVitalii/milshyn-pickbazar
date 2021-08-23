import React from 'react';
import {useHistory} from 'react-router-dom';

function ScrollToTop({children}) {
  const history = useHistory();

  React.useEffect(() => history.listen(() => window.scrollTo(0, 0)), [history]);

  return <>{children}</>;
}

export default ScrollToTop;