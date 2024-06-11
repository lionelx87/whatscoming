import Logo from '../../../src/assets/images/logo.png'
import { SunIcon } from '../icons'

export const Header = () => {
    return (
        <div className="flex justify-between container mx-auto px-4 py-4">
            <h1>
                <img src={Logo} alt="Logo" className="w-40" />
            </h1>
            <button>
                <SunIcon />
            </button>
        </div>
    )
}