export function Card({ title, description, imageUrl }) {
    return (
        <div className="card bg-grey-800 text-black md:w-1/3 font-sans rounded-lg ml-5 text-gray-800">
            <img src={imageUrl} alt={title} className="card-image p-5" />
            <div className="card-content p-5">
                <h1 className="card-title text-2xl font-bold FirstFont">{title}</h1>
                <p className="card-description text-lg FirstFont">{description}</p>
                {/* <button className="mainbutton bg-gray-800 mt-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Ver información	
                </button> */}
            </div>
        </div>
    )
}