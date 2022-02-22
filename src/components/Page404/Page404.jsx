import React from 'react';
import { Link } from 'react-router-dom';
import { Result, Button } from 'antd';

const Page404 = () => {
  const sub = 'Sorry, the page you visited does not exist.';

  return (
    <Result
      status="404"
      title="404"
      subTitle={sub}
      extra={
        <Button type="primary">
          <Link to="/articles">Back Home</Link>
        </Button>
      }
    />
  );
};

export default Page404;
