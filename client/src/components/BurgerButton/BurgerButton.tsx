import './burgerButton.scss'
import bars from '../../svg/3bars.svg'

function BurgerButton() {
    return (
        <>
            <button>
                <img src={bars} alt="" />
            </button>
        </>
    )
}

export default BurgerButton