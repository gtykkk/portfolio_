import PageLinks from "../Links/pageLinks/pageLinks"

const Header = () => {
    return (
        <div className="flex flex-row bg-gray-800 justify-between p-6">
            <div className="text-xl font-bold">
                <p>김태영</p>
            </div>
            <div className="flex gap-8">
                <PageLinks />
            </div>
        </div>
    )
}

export default Header