import { getSong } from "../../(backend)/backend";

export default async function Page(props: {
    params: { songId: string };
}) {
    const { params } = props;
    const { songId } = params;
    const song = await getSong(songId);
    if (song === undefined) {
        return <div>{`Song ${songId} not found.`}</div>
    }
    return <h1>{JSON.stringify(song)}</h1>;
}
