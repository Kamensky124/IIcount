type PropsType = {
    name: string
    callBack: ()=>void
    disabled: boolean
}

export const Button = (props: PropsType) => {
    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <button disabled={props.disabled} onClick={onClickHandler}>{props.name}</button>
    )
}