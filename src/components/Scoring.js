// Define a function to handle scoring based on slicing actions and missed items
const Scoring = {
    calculateScore: (slicedItem) => {
        let score = 0;

        // When an item is sliced, add its carb count to the score
        if (slicedItem) {
            const carbCount = slicedItem.carbCount; // Assuming carbCount property exists in the item object
            score += carbCount; // Base points for slicing an item
            // You might adjust the scoring logic based on the game's design (e.g., adding bonus points)
        }

        return score;
    },

    updateScoreAndMissedItems: (slicedItem, currentScore, missedItems) => {
        let updatedScore = currentScore;
        let updatedMissedItems = missedItems;

        // When an item is sliced, update the score
        if (slicedItem) {
            updatedScore += Scoring.calculateScore(slicedItem);
        } else {
            // When an item is missed, deduct points and increase missedItems count
            updatedScore -= 1; // Deduct points for missing an item
            updatedMissedItems += 1; // Increment missed items count
        }

        return { updatedScore, updatedMissedItems };
    },

    //define a function that determines if the game is over
    isGameOver: (score, missedItems) => {
        // Game over when score is negative or missed items count exceeds 3
        return score < 0 || missedItems > 3;
    },
};

export default Scoring;
