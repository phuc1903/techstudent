
function CalculateStarRating(ratings) {
    if(!ratings || ratings.length === 0 || ratings.length < 0) return 0;

    const totalValue = ratings.reduce((sum, rating) => sum + rating.value ,0)
    return (totalValue / ratings.length).toFixed(1);
}

export default CalculateStarRating;