import { useParams } from "react-router-dom";

const withRouter =
  (WrappedComponent: any | null) => (props: { id?: string } | null) => {
    const params = useParams();

    return <WrappedComponent {...props} params={params} />;
  };

export default withRouter;
