export const getXmostVoted = (spots, spotsReturned: number) => {
    const sortedArray = spots.sort((a, b) => b.stars - a.stars)
    return sortedArray.slice(0, spotsReturned)
}