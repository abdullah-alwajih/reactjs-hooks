import {useCustom} from "./Custom";

export const Demo = () => {
    const [data] = useCustom('https://jsonplaceholder.typicode.com/posts')
    return (
        <>
            { data?.length ? data?.map(e => (<div>{e.title}</div>)): <h1>null</h1>}
        </>
    )
}
