export default function Page(props: {
    params: { songId: string };
}) {
    const { params } = props;
    const { songId } = params;
    return <h1>Page for {songId}</h1>;
}
