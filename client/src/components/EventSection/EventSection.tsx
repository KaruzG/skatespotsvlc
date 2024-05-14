import EventBubble from '../EventBubble'
import './styles.scss'

const EventSection = () => {
    let testEvent = {
        name: "Test",
        date: new Date,
        img: "https://www.viewhotels.jp/asakusa-annex/wp-content/uploads/sites/6/2020/03/test-img.jpg",
    }

    return (

    <>
        <section className='EventSection'>
            <h3>FEATURED EVENTS</h3>
            <div className='grid'>
                <EventBubble eventData={testEvent}/>
            </div>
        </section>
    </>
    )
}

export default EventSection