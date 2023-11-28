import React from "react";

const Loading = ({ loading, error, children }) => {
  const elementType = children?.type?.render?.displayName;

  const renderHandler = () => {
    if (elementType === "Button") {
      const clonedButton = React.cloneElement(children,{disabled:true},"Loading...")
      return (
        <>
          {loading ? (
            clonedButton
          ) : error ? (
            <>
            {children}
            <p><br />{error}</p>
            </>
          ) : (
            children
          )}
        </>
      );
    }
    return (
      <>
        {loading ? <p>loading plz wait</p> : error ? <p>{error}</p> : children}
      </>
    );
  };
  return renderHandler();
};

export default Loading;
