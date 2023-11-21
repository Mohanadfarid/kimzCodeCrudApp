import React from 'react';

const Loading = ({loading,error,children}) => {
    return (
            <>
            {loading ? (
          <p>loading plz wait</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          children
        )}
        </>
    );
}

export default Loading;