export default function Item(props) {
    console.log(props.img);
    return (
        <div>
            <img className="box" src={props.img} alt='robot' />
        </div>
    )
}