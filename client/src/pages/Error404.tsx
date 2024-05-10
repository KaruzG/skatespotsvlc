import Button from '../components/Button'
import Header from '../components/Header'
import '../css/index.scss'

function Error404() {
    return (
        <div id='error404-wrapper'>
            <Header />
            <div className={"Error404"}>
            <h2>Woops!</h2>
            <h1>404</h1>
            <br />
            <Button color='orange' style='empty' size='l' link={"/"}>HOME</Button>
            </div>

        </div>
    )
}

export default Error404