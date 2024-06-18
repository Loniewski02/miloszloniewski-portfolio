import { MoonLoader } from "react-spinners";

const override = {
    display: "block",
    margin: "100px auto",
};

const Loading = ({ loading }: { loading: boolean }) => {
    return (
        <MoonLoader
            color="#5FB4A2"
            loading={loading}
            cssOverride={override}
            size={100}
            aria-label="Loading Spinner"
        />
    );
};

export default Loading;
