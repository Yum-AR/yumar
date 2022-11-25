const GenreBadge: React.FC<{ value: Array<any>, priceRange: string }> = ({ value, priceRange }) => {
    const foodGenres = [];
    for (const genre of value) {
        if (genre[1] === true) {
            foodGenres.push(genre[0]);
        }

    }
    return (
        <>
            {foodGenres.map((food, index) =>
                <div key={index}>
                    <span className="inline-flex items-center
             px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-700">
                        {food}
                    </span>

                </div>)}
            <span className="text-xs mt-[2.5px] inline-flex items-center
        px-2.5 py-0.5 rounded-full font-medium bg-green-100 text-green-700">{priceRange}</span>
        </>

    );
};
export default GenreBadge;