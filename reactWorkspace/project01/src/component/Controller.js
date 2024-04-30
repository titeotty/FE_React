const Controller = ({handleSetCount}) => {
    return (
        <div>
            <button onClick={() => handleSetCount(-1)}>-1</button>
        </div>
    )
}