import './styles.scss'
import testImg from "../../img/testImg.jpg"

type eventBubbleProps = {
    name: string,
    date: Date,
    img: string
}

const EventBubble = (eventData:eventBubbleProps) => {

    return (
    <>
        <figure className='EventBubble'>
            <div className='date'>
                <span>13</span>
                <span>May</span>
            </div>
            <img src={eventData.img} alt="" />
            <figcaption>{eventData.name}</figcaption>
        </figure>
    </>
    )
}

export default EventBubble